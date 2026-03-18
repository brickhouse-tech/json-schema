# json-schema — Critical Security Patch (CVSS 9.8)

[![npm version](https://badge.fury.io/js/%40brickhouse-tech%2Fjson-schema-lts.svg)](https://www.npmjs.com/package/@brickhouse-tech/json-schema-lts)
[![npm downloads](https://img.shields.io/npm/dm/@brickhouse-tech/json-schema-lts.svg)](https://www.npmjs.com/package/@brickhouse-tech/json-schema-lts)
[![License](https://img.shields.io/badge/license-AFL--2.1%20OR%20BSD--3--Clause-blue.svg)](LICENSE)
[![Security: Patched](https://img.shields.io/badge/security-CVE--2021--3918%20fixed-brightgreen)](https://nvd.nist.gov/vuln/detail/CVE-2021-3918)

---

## The Problem

The original [`json-schema`](https://www.npmjs.com/package/json-schema) package:
- **28.9 million weekly downloads** on npm
- **Abandoned by maintainers** — no release since 2014
- **Critical prototype pollution vulnerability** (CVE-2021-3918, **CVSS 9.8**)
- **Fix merged in 2021** but never published to npm

**Your production apps are pulling vulnerable code right now.**

---

## The Solution

**`@brickhouse-tech/json-schema-lts`** is a drop-in replacement with the critical security fix published and ready to deploy.

✅ **CVE-2021-3918 patched**  
✅ **API-compatible** — zero code changes required  
✅ **Battle-tested** — same codebase, just with the fix shipped  
✅ **LTS maintenance** — security patches published promptly  

---

## Migration Guide

### One-Line Fix

```bash
npm uninstall json-schema
npm install @brickhouse-tech/json-schema-lts
```

That's it. No code changes. No API differences. Just a secure package.

---

## What's Fixed

### CVE-2021-3918: Prototype Pollution (CVSS 9.8)

**Vulnerability:**  
Attackers could inject malicious properties like `__proto__` or `constructor` into schema objects, polluting JavaScript's prototype chain. This allows:
- Arbitrary property injection into all objects
- Authentication bypasses
- Remote code execution in some contexts
- Denial of service

**Example Attack:**
```json
{
  "type": "object",
  "properties": {
    "__proto__": { "isAdmin": true }
  }
}
```

**The Fix:**  
Our fork includes [the upstream patch](https://github.com/kriszyp/json-schema/pull/101) that validates and sanitizes dangerous property names before schema processing. The fix:
- Blocks `__proto__`, `constructor`, and `prototype` in schema keys
- Prevents prototype chain pollution during validation
- Maintains full backward compatibility for legitimate schemas

**Impact:**  
This is rated **Critical (9.8)** because prototype pollution can lead to complete application compromise in many JavaScript environments.

---

## Enterprise Support

Need SLA guarantees, priority patches, or dedicated security support?

### Support Tiers

| Tier | Response Time | Support Channels | Custom Patches |
|------|---------------|------------------|----------------|
| **Community** | Best-effort | GitHub Issues | ❌ |
| **Professional** | 48 hours | Email + Slack | ✅ |
| **Enterprise** | 4 hours | Dedicated channel | ✅ Priority |

👉 **[View pricing and sign up](https://brickhouse-tech.lemonsqueezy.com)**  
_(Coming soon — contact for early access)_

For compliance officers: we provide CVE notifications, SBOM exports, and security attestation on request.

---

## Support Open Source Maintenance

Keeping critical infrastructure secure is a public good. If this package protects your stack, consider supporting continued LTS maintenance:

💖 **[GitHub Sponsors](https://github.com/sponsors/brickhouse-tech)**

Your sponsorship funds:
- Security monitoring and rapid CVE response
- Automated testing and release pipelines
- Dependency updates and compatibility fixes
- Public incident response and disclosure

---

## About This Package

This is a community-maintained LTS fork of the original [`json-schema`](https://github.com/kriszyp/json-schema) package by Kris Zyp. 

The upstream package represents an early, efficient implementation of JSON Schema draft specifications. While the spec has evolved (see [json-schema.org](https://json-schema.org/)), this package remains a foundational dependency for millions of projects.

**Our mission:** Publish critical security fixes that upstream can't or won't ship.

### What We Do

✅ Backport and publish security patches  
✅ Keep CI and tooling current  
✅ Respond to new CVEs within 72 hours  
✅ Maintain API stability  

### What We Don't Do

❌ Add new features  
❌ Implement new JSON Schema drafts  
❌ Break backward compatibility  

This is an LTS (Long-Term Support) fork, not a feature fork. If you need bleeding-edge JSON Schema features, see the [official implementations](https://json-schema.org/implementations).

---

## Installation

```bash
npm install @brickhouse-tech/json-schema-lts
```

Then update your imports (if not using `json-schema` as an alias):

```javascript
// Before:
const validator = require('json-schema');

// After:
const validator = require('@brickhouse-tech/json-schema-lts');
```

Or create an npm alias for zero code changes:

```bash
npm install json-schema@npm:@brickhouse-tech/json-schema-lts
```

---

## Security Disclosure

Found a vulnerability? Please report it responsibly:

📧 **Email:** zbricktarz@gmail.com  
🔒 **PGP:** Available on request  
⏱️ **Response SLA:** 72 hours for critical issues

We follow coordinated disclosure practices and will credit researchers in security advisories.

---

## License

Licensed under **AFL-2.1 OR BSD-3-Clause** (same as upstream).

Original code by Kris Zyp. Security maintenance by [Brickhouse Tech](https://github.com/brickhouse-tech).

---

## Questions?

- **Issues & Bug Reports:** [GitHub Issues](https://github.com/brickhouse-tech/json-schema/issues)
- **Security Concerns:** zbricktarz@gmail.com
- **Enterprise Support:** [Lemon Squeezy](https://brickhouse-tech.lemonsqueezy.com) _(coming soon)_
- **Sponsorship:** [GitHub Sponsors](https://github.com/sponsors/brickhouse-tech)

**Don't wait for a breach.** Upgrade today.
