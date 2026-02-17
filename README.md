# json-schema (LTS Security Fork)

> **⚠️ This is a community-maintained LTS fork of [`json-schema`](https://github.com/kriszyp/json-schema) with critical security patches.**

The upstream package has 28M+ weekly downloads but has not published a release since the critical prototype pollution vulnerability (CVE-2021-3918, CVSS 9.8) was fixed in source. This fork exists to provide those fixes in a publishable package.

## Security Fixes

| CVE | Severity | Description | Status |
|-----|----------|-------------|--------|
| [CVE-2021-3918](https://nvd.nist.gov/vuln/detail/CVE-2021-3918) | **Critical (9.8)** | Prototype pollution via `__proto__` and `constructor` in schema validation | ✅ Fixed |

## Installation

```bash
npm install @brickhouse-tech/json-schema
```

## About

This is a historical repository for the early development of the JSON Schema specification and implementation. This package is considered "finished": it holds the earlier draft specification and a simple, efficient, lightweight implementation of the original core elements of JSON Schema. This repository does not house the latest specifications nor does it implement the latest versions of JSON Schema. This package seeks to maintain the stability (in behavior and size) of this original implementation for the sake of the numerous packages that rely on it. For the latest JSON Schema specifications and implementations, please visit the [JSON Schema site](https://json-schema.org/) (or the [repository](https://github.com/json-schema-org/json-schema-spec)).

## LTS Maintenance

This fork is maintained by [Brickhouse Tech](https://github.com/brickhouse-tech) for the purpose of shipping security patches to the millions of projects that depend on this package.

**We do not add features.** We only:
- Backport and publish security fixes
- Keep CI and tooling current
- Respond to new CVEs

If this package saves your team from a compliance headache, consider supporting continued maintenance:

💖 [**GitHub Sponsors**](https://github.com/sponsors/brickhouse-tech)

## License

Code is licensed under the AFL or BSD 3-Clause license.
