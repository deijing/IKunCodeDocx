# Troubleshooting Guide

This document collects common issues and fixes for Claude Code, CodeX, Gemini CLI, and other AI coding tools.

## 🔍 Check Service Status

Before troubleshooting, check the service status page first:

**Service group status page**: [https://status.ikuncode.cc/](https://status.ikuncode.cc/)

---

## 1. Claude Code Keeps Prompting for Login

### Symptoms

Launching Claude Code repeatedly pops up the login screen.

### Solutions

#### Option 1: Use the CC-Switch skip feature

Open CC-Switch, go to **Settings → General**, and under **Window Behavior** turn on **Skip initial install confirmation**. This bypasses the repeated login screen.

For step-by-step instructions, see [CC-Switch initial setup](/tools/cc-switch#step-1-initial-setup).

#### Option 2: Edit the config file manually

Reference: [https://www.cnblogs.com/gordonMlxg/articles/19103691](https://www.cnblogs.com/gordonMlxg/articles/19103691)

---

## 4. API Connect Error

### Things to check

1. **Local network issues**
   - Verify your network connection
   - Try loading other sites to confirm connectivity

2. **Unstable proxy / VPN**
   - Check your proxy configuration
   - Try switching to a different proxy node

### Recommendation

👉 **Try a direct connection (no proxy)**

Disable your proxy and see if things go back to normal.

---

## 8. CC Errors Caused by Oversized Context

### Symptoms

Errors appear during conversation, typically caused by an oversized context.

### Solutions

1. **Start a new session**
   - Open a fresh conversation to clear the context

2. **Inspect token distribution**
   ```
   /context
   ```
   Shows the current context's token usage

3. **Disable auto compression**
   - Turn off Auto Compress
   - Manage context size manually

---

## 9. Request Timed Out

### Possible causes

1. Local network issues
2. Unstable proxy or VPN
3. High server-side load

### Solutions

- Check your local network connection
- Check your proxy or VPN status
- Try a direct connection if needed
- Check the [status page](https://status.ikuncode.cc/status/api) to confirm the service is available

---

## 10. API Error 503

### What it means

The current service group is unavailable.

### Solutions

1. Switch to another available service group
2. Confirm group status on the status page

**Service status**: [https://status.ikuncode.cc/status/api](https://status.ikuncode.cc/status/api)

---

## 11. Gemini CLI 400 Error

### What's happening

The current session is in a bad state — usually a session state error.

### Solution

Simply restart the session.

---

## 12. Claude Code 2.0.73 Content Fragmentation

### What's happening

Version 2.0.73 has an issue where conversations / content get fragmented.

### Solution: roll back the version

```bash
npm install -g @anthropic-ai/claude-code@2.0.72
```

Roll back to the stable 2.0.72 release.

---

## 13. Disable Claude Code Auto-update

### What you want

You don't want Claude Code to auto-update to the latest version.

### Solution

Add the following environment variable to `settings.json`:

```json
{
  "env": {
    "DISABLE_AUTOUPDATER": "1"
  }
}
```

Or set it in your system environment:

```bash
# macOS/Linux
export DISABLE_AUTOUPDATER=1

# Windows PowerShell
$Env:DISABLE_AUTOUPDATER = "1"
```

---

## 🔧 Troubleshooting Tips

### Quick diagnostic flow

1. ✅ Check the [status page](https://status.ikuncode.cc/status/api)
2. ✅ Verify your environment variables
3. ✅ Make sure your API Key is valid
4. ✅ Check your network and proxy
5. ✅ Check your token balance
6. ✅ Try restarting the session

### Handy debug commands

#### Claude Code
```bash
/status    # Show current session status
/context   # Show context token usage
/clear     # Clear the current session
```

### Inspect environment variables

#### Windows
```powershell
# List all ANTHROPIC-related variables
Get-ChildItem Env: | Where-Object {$_.Name -like "*ANTHROPIC*"}
```

#### macOS/Linux
```bash
# List all ANTHROPIC-related variables
env | grep ANTHROPIC
```

---

## 📮 Get Help

If none of the above resolves your issue:

- 📧 For help, email us at [support@ikuncode.cc](mailto:support@ikuncode.cc)
- 📞 Visit [pre-sales / after-sales](/support/after-sales) to contact support
- 📖 Check the [FAQ](/support/faq)

---

*This document is continuously updated — please share new issues you encounter...*
