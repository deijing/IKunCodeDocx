# Installing Node.js on Windows

**The runtime required by all three AI coding tools**

::: tip 💡 Important
Claude Code, CodeX, and Gemini CLI all require Node.js 18+ to run.
If you already have Node.js 18 or higher installed, you can skip this section.
Verify with: `node -v`
:::

## Option 1: Official installer (recommended)

1. Visit the Node.js website: [https://nodejs.org/en/download](https://nodejs.org/en/download)
2. Download the LTS (Long-Term Support) Windows Installer (.msi)
3. Run the installer and complete the installation with the default settings
4. The installer automatically configures the system PATH environment variable

![Node.js download page](/images/tu4.png)

## Option 2: Package managers

### Using Winget

For Windows 11 or the latest Windows 10:

```powershell
winget install OpenJS.NodeJS.LTS
```

### Using Chocolatey

Install Chocolatey first, then:

```powershell
choco install nodejs-lts
```

### Using Scoop

```powershell
scoop install nodejs-lts
```

## Verify the installation

Open Command Prompt or PowerShell and run:

```powershell
node --version
npm --version
```

If a version number appears (e.g. v18.x.x or higher), the installation was successful.

## Troubleshooting

### "Not recognized as an internal or external command"
- Reopen the terminal window
- Check that the PATH environment variable includes the Node.js directory
- Restart your computer and try again

### Installation fails
- Run the installer as administrator
- Disable antivirus software and try again
- Make sure there is enough free space on the system drive

## Next steps

::: tip ✅ Environment ready!
You're now set to install Claude Code, CodeX, or Gemini CLI.
:::

- [Back to environment setup overview](/node/windows)
- [Install Claude Code](/deploy/claude-code)
- [Use the CC-Switch tool](/tools/cc-switch)
