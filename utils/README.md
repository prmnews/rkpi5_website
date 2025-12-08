# Utils Directory

Utility scripts and testing harnesses for the RKPi5 Marketing project.

## Available Tools

### Email Testing

#### `test-resend.js`
Standalone Node.js script to test Resend email configuration.

**Setup:**
```bash
# 1. Install dependencies (if not already installed)
pnpm add -D dotenv

# 2. Ensure .env.local contains RESEND_API_KEY
# (Located at project root)
```

**Usage:**
```bash
node utils/test-resend.js
```

**Documentation:** See `test_harness_resend.md` for complete testing procedures.

---

## Security Notes

- All test scripts read API keys from `.env.local` (never hardcoded)
- `.env.local` is in `.gitignore` and should never be committed
- BCC monitoring address included in all test emails
- No sensitive data logged to console (only key prefixes)

## Adding New Utils

When adding new utility scripts:

1. Place in `/utils` directory
2. Use `.env.local` for secrets (via dotenv)
3. Include try/catch error handling
4. Document in this README
5. Add detailed docs in separate `.md` file if complex
6. Make scripts executable with proper shebang
7. Add to package.json scripts if frequently used

