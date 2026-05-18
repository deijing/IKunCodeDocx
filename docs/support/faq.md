# Frequently Asked Questions (FAQ)

## Account & API Key

### 1. My Key is invalid / authentication failed — what now?

- Check for stray whitespace in the copied value
- Check whether the Key is expired or disabled
- Make sure your request uses the correct headers / parameters
- Confirm you're using the dedicated token group for the right tool

### 2. How do I check my balance and spending history?

Sign in to the console to view:
- Current balance
- Top-up history
- Spending details
- Billing statements

## Site Access

### Why does the site show a blank page?

This is almost always caused by an ad-blocking extension — please whitelist our domain manually.

Common ad blockers:
- AdBlock
- uBlock Origin
- AdGuard

How to fix:
1. Open the extension's settings
2. Add `api.ikuncode.cc` to the whitelist
3. Refresh the page
4. Try a hard refresh (Windows: `Ctrl + Shift + R`, macOS: `Cmd + Shift + R`)

## Environment & Installation

### npm install is slow or failing?

Try a mainland-China mirror:

```bash
# Set the Taobao mirror
npm config set registry https://registry.npmmirror.com

# Verify the setting
npm config get registry
```

### My Node.js version is too old — what should I do?

Claude Code, CodeX, and Gemini CLI all require Node.js 18+.

How to upgrade:
- Windows: download and reinstall the latest version
- macOS: `brew upgrade node`
- Linux: use nvm or the NodeSource repo

### My environment variables aren't taking effect?

- Windows: restart the terminal window or reboot the computer
- macOS/Linux: run `source ~/.bashrc` or `source ~/.zshrc`

## Tools Usage

### CC-Switch won't start?

1. Check for permission issues
2. Try running as administrator
3. See if antivirus software is blocking it
4. Re-download and install the latest version

### Claude Code reports a connection failure?

Things to verify:
- Network connectivity
- API Key correctness
- Environment variables
- Available balance

### CodeX and Claude Code API Keys aren't interchangeable?

Correct — different tools need different token groups:
- Claude Code: use the Claude Code token group
- CodeX: use the "codex test" token group
- Gemini CLI: use the Gemini token group

Create the matching dedicated token on the IkunCode platform.

## Billing

### How is billing calculated?

- Billed by actual usage
- Different models have different prices
- See the console for the detailed billing rules

### What happens when my balance runs out?

- Service is paused
- Top up promptly to keep using it
- Service resumes immediately after top-up

### Are refunds supported?

- Unused balance can be refunded
- Used portions are non-refundable
- Contact support for the full policy

## Technical Questions

### Is my code stored?

No. We don't store your code — we only forward requests and responses.

### Do you support enterprise use?

Yes. Enterprise users can:
- Contact support for an enterprise plan
- Make large top-ups
- Potentially receive discounted pricing

### How do I get technical support?

See the [pre-sales / after-sales](/support/after-sales) page for contact options.

## More Questions

### Hit a technical issue?

For startup failures, errors, timeouts and other technical issues, see:

👉 **[Troubleshooting Guide](/support/troubleshooting)** — detailed error diagnostics and fixes

### Still stuck?

If the above doesn't answer your question:
- For help, email us at [support@ikuncode.cc](mailto:support@ikuncode.cc)
- Visit [pre-sales / after-sales](/support/after-sales) to contact support
