# Deployment

How `origins.droocked.com` is built, released, and published.

- **Production URL:** <https://origins.droocked.com>
- **Hosting:** GitHub Pages, one site only, built and deployed from `main`
- **Repository:** <https://github.com/Brotholomew/drooked-website> (public)
- **DNS:** Cloudflare

---

## 1. Branch model

| Branch | Role | What runs |
| --- | --- | --- |
| `develop` | Integration trunk, default branch | `CI` on every push and on every pull request |
| `main` | Production | `CI` on pull requests, `Deploy to GitHub Pages` on push |

Rules:

- All work lands on `develop` first, through a pull request when a change is non-trivial.
- Production is only updated by merging `develop` into `main` through a pull request.
- Never push directly to `main`; never force-push either branch.
- Both branches are protected: pull request required, the `build` status check must pass,
  force pushes and deletions are blocked. A solo maintainer does not need an approving
  review — the CI check is the gate. `main` additionally requires the branch to be
  up to date and allows the maintainer to merge with admin rights when GitHub insists on
  a review that cannot exist on a one-person repository.

## 2. Release flow

```bash
# 1. Land work on develop
git switch develop
git pull --ff-only origin develop
npm run validate && npm run check && npm run build
git push origin develop            # triggers CI

# 2. Open the release PR
gh pr create --base main --head develop \
  --title "release: <summary>" --body "<notes>"

# 3. Wait for the required check
gh pr checks --watch

# 4. Merge (admin only if branch protection asks for a review)
gh pr merge --merge --delete-branch=false
# or, only when required:
gh pr merge --merge --admin

# 5. Watch the deployment
gh run list --workflow "Deploy to GitHub Pages" --limit 3
gh run watch <run-id>
```

A push to `main` starts `.github/workflows/deploy.yml`:

1. `npm ci`
2. `npm run validate`
3. `npm run check`
4. `npm run build` with `PUBLIC_GA_ID` from the repository variable
5. `actions/configure-pages@v5`
6. `actions/upload-pages-artifact@v3` (uploads `dist`)
7. `actions/deploy-pages@v4` in the `github-pages` environment

Concurrency is `pages` with `cancel-in-progress: false`, so deployments queue instead of
interrupting each other.

## 3. CI

`.github/workflows/ci.yml` runs on pull requests targeting `develop` or `main` and on
pushes to `develop`:

| Step | Command |
| --- | --- |
| Install | `npm ci` |
| Content validation | `npm run validate` |
| Astro + TypeScript | `npm run check` |
| Static build | `npm run build` (no `PUBLIC_GA_ID`, so analytics is omitted) |

The job is named `build`; that is the status check branch protection requires.

## 4. GitHub Pages settings

Repository → **Settings → Pages**:

| Setting | Value |
| --- | --- |
| Source / Build type | **GitHub Actions** (`build_type=workflow`) |
| Custom domain | `origins.droocked.com` |
| Enforce HTTPS | **on** (after the certificate is issued) |

Check the current state:

```bash
gh api repos/Brotholomew/drooked-website/pages \
  --jq '{build_type, cname, https_enforced, status, certificate: .https_certificate.state}'
```

Expected:

```json
{
  "build_type": "workflow",
  "cname": "origins.droocked.com",
  "https_enforced": true,
  "status": "built",
  "certificate": "approved"
}
```

`status` is `errored` until the first successful workflow deployment has run; a failed
legacy `pages-build-deployment` run does not block the workflow-based deploy.

## 5. Repository variable

`PUBLIC_GA_ID` is a repository **variable**, not a secret (the measurement ID is public
and is embedded in the HTML anyway).

```bash
gh variable set PUBLIC_GA_ID --body "G-SZ67XVNMM4"
gh variable list
```

Without it, `Analytics.astro` renders nothing and no `gtag` is defined — the site still
builds and works, it is simply not measured.

## 6. Cloudflare DNS records

Domain: `droocked.com`, managed in Cloudflare.

### Records to create

| Type | Name | Content | Proxy status | TTL |
| --- | --- | --- | --- | --- |
| `CNAME` | `origins` | `brotholomew.github.io` | **DNS only** (grey cloud) | Auto |

That is the only record required for the site itself. In Cloudflare the **Name** field is
`origins` (Cloudflare appends `.droocked.com`), and the target must be
`brotholomew.github.io` — no trailing dot, no path.

GitHub may also ask for a domain-verification record:

| Type | Name | Content | Proxy status | TTL |
| --- | --- | --- | --- | --- |
| `TXT` | `_github-pages-challenge-brotholomew.origins` | the token shown in GitHub Pages settings | DNS only | Auto |

The token is displayed at
**Settings → Pages → Custom domain** (“Add a TXT record with the name and value below”).
Copy it exactly; it is repository-specific. This TXT record is only needed the first time
the domain is verified for the account (or after the domain is removed and re-added). It
does not affect traffic, and it can stay in place permanently.

### Explicitly not used

- **No `A` records** for `origins`. The CNAME is the only routing record; adding
  `A`/`AAAA` records alongside it creates conflicting answers.
- **No `AAAA` records.**
- **No `develop` record.** There is exactly one Pages site; previews are built locally.
- **No `www` record.** `www.origins.droocked.com` is not configured and is not a canonical
  host.
- **No proxying through Cloudflare for the launch.** Keep the record **DNS only** until
  GitHub has issued the certificate for the custom domain.

### Verify DNS

```bash
dig +short origins.droocked.com
# expect brotholomew.github.io. followed by 185.199.108-111.153

dig +short TXT _github-pages-challenge-brotholomew.origins
# expect the verification token when the TXT record is present
```

## 7. Cloudflare SSL/TLS

1. **During launch:** CNAME stays **DNS only** (grey cloud). GitHub Pages terminates TLS
   and issues the Let's Encrypt certificate for `origins.droocked.com` once DNS resolves
   to it. Certificate issuance usually takes minutes and can take up to 24 hours.
2. **After the certificate is approved:** in GitHub, **Settings → Pages → Enforce HTTPS**
   switches on automatically when possible; enable it manually if not.
3. **If you later proxy through Cloudflare (orange cloud):** set
   **SSL/TLS → Overview → Full (strict)**. Never use Flexible — it causes redirect loops
   with GitHub Pages and leaves the origin hop unencrypted.
4. **SSL/TLS → Edge Certificates → Always Use HTTPS: on.**
5. Leave **Automatic HTTPS Rewrites** on.
6. Do not enable HSTS until the domain is stable on a single host.

## 8. Re-running a failed deployment

```bash
# list recent runs
gh run list --workflow "Deploy to GitHub Pages" --limit 5

# re-run the failed jobs of a run
gh run rerun <run-id> --failed

# or start a fresh deployment from main without a new commit
gh workflow run "Deploy to GitHub Pages" --ref main
gh run watch <run-id>
```

A re-run reuses the commit that failed. If the failure was a content or build error, fix it
on `develop`, merge to `main`, and let the push deploy normally. Re-running an old run can
republish an older commit, so prefer a new merge unless the failure was infrastructure
(network, runner, Pages service).

Deployment state:

```bash
gh api repos/Brotholomew/drooked-website/deployments \
  --jq '.[0] | {environment, created_at, sha: .sha[0:7]}'
gh api repos/Brotholomew/drooked-website/deployments/<id>/statuses \
  --jq '.[0] | {state, environment_url}'
```

## 9. Known external blocker (GitHub Actions billing lock)

On 2026-11-14 GitHub refused every workflow before it reached a runner. The jobs
were shown as `failure` with a skipped `deploy` job and no step logs, and the
account-level message was:

> The job was not started because your account is locked due to a billing issue.

This was a GitHub Actions billing lock, not a repository, Pages, DNS, or workflow
configuration problem. Nothing in the deployment architecture needed to change.
A manual `workflow_dispatch` of `Deploy to GitHub Pages` on `main` at
**15:26 UTC** completed both the `build` and `deploy` jobs successfully, and
<https://origins.droocked.com> returned HTTP 200 afterwards. The lock is
therefore cleared for this repository as of that run.

If the message ever returns, the exact external action is to clear the billing
issue in **GitHub → Settings → Billing and plans → Actions**, then run the
one-command deploy:

```bash
gh workflow run "Deploy to GitHub Pages" --ref main
```

That reuses the current `main` commit and the existing Pages configuration; no
new commit, DNS change, or settings change is required.

Already configured and verified — do not recreate them:

- **Pages source:** GitHub Actions (`build_type=workflow`)
- **Custom domain:** `origins.droocked.com`
- **Certificate:** `approved`; **Enforce HTTPS:** on
- **Cloudflare DNS:** `CNAME origins → brotholomew.github.io`, DNS only
- **Repository variable:** `PUBLIC_GA_ID=G-SZ67XVNMM4`

## 10. Secrets

`.env` (which holds `GH_TOKEN`) and `origin-prompt.md` are gitignored and never committed.
The GitHub token is used only for local `gh` calls. The deploy workflow needs no secrets:
it authenticates to Pages with the short-lived `GITHUB_TOKEN` and the `id-token: write`
permission.

Before pushing, sanity-check for accidental secret material:

```bash
git status --short
git grep -nIE 'gh[pousr]_[A-Za-z0-9]{20,}|github_(pat|token)_' -- . ':!docs/deployment.md'
```

Both must come back empty. (The check reads tracked files only; `.env` is ignored and
untracked, which is exactly why it never reaches the repository.)

## 11. Node version

Astro 7 requires **Node.js 22+**. Both workflows pin `node-version: 22` with npm caching.
If the local shell runs a newer Node, that is fine for local work, but CI stays on 22 to
match the documented runtime.
