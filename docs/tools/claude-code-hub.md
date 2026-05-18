# Claude Code Hub (CCH)

**Team-grade multi-provider AI coding agent dispatch platform**

## 🔗 Related links

| Resource | URL |
|------|------|
| Website | [claude-code-hub.app](https://claude-code-hub.app/) |
| Official docs | [claude-code-hub.app/docs](https://claude-code-hub.app/docs) |
| GitHub | [ding113/claude-code-hub](https://github.com/ding113/claude-code-hub) |

## 🎯 About the tool

Claude Code Hub (CCH) is a server-deployed, multi-tenant dispatch platform for AI coding tools. It helps teams centrally manage providers like Claude, Codex, and Gemini, with intelligent load balancing and automatic failover.

::: tip 💡 Use cases
- **Agile development teams**: shared AI tools across the team with unified management and usage tracking
- **AI-driven development teams**: heavy AI coding usage that needs high availability and automatic failover
- **Startups**: tight budgets that require fine-grained cost control and multi-dimensional rate limiting
- **Small-to-medium software companies**: compliance auditing, access control, and complete logs
:::

## ✨ Key features

- **Intelligent load balancing**: weight + priority + group scheduling, with built-in circuit breakers and up to 3 automatic failover attempts
- **Multi-provider management**: connect Claude, Codex, Gemini, OpenAI-compatible, and other providers at the same time
- **Rate limiting and concurrency control**: supports RPM (requests per minute), spend caps (5-hour/weekly/monthly), and concurrent session control
- **Real-time monitoring and stats**: dashboard for call volume, cost, active sessions, and provider health
- **Session management**: 5-minute context cache routes the same session to the same provider, boosting cache hit rates
- **OpenAI compatibility layer**: supports the `/v1/chat/completions` endpoint for seamless integration with existing toolchains

## 🛠️ Quick deployment

### One-click script

```bash
# Use the official deploy script — finishes in 5 minutes
curl -fsSL https://claude-code-hub.app/install.sh | bash
```

For the full deployment guide, see: [Script deployment guide](https://claude-code-hub.app/docs/deployment/script)

### Connecting clients

Once deployed, point the API endpoint of tools like Claude Code or Codex at the CCH proxy and you're good to go.

For the full client setup guide, see: [Client setup guide](https://claude-code-hub.app/docs/deployment/client-setup)

## FAQ

### What's the difference between CCH and CCS?

CCH is better suited for team use, while CCS is better for individual users.

### What's the difference between CCH and calling the API directly?

CCH adds team-grade features such as automatic provider failover, load balancing, usage statistics, and session stickiness. For solo use, calling the API directly is fine; for team collaboration, CCH is recommended.
