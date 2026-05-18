---
title: Pricing
lastUpdated: 2026-05-05
---

# Pricing

IKunCode bills using a **per-group multiplier**. The top-up rate is fixed at 1 CNY = 1 USD of credit. Each model has a unified base cost, and the actual price is flexibly adjusted by the group multiplier (for example, a group multiplier of 0.8 means 0.8 CNY = 1 USD of credit). The lower the multiplier, the more you save.

::: tip Confused by group multipliers?
Head over to the [Model Marketplace](https://api.ikuncode.cc/pricing) and open any model — it shows the **final price** under each group, so you can compare actual costs across channels at a glance.
:::

## User Tiers

IKunCode runs a cumulative top-up membership program. As your lifetime spending grows, you unlock lower billing multipliers. Tier status is **permanent**.

| Tier | Requirement | Notes |
|:----:|:-----------:|------|
| **C1** | Lifetime top-up ≥ **¥25** | No discount |
| **C2** | Lifetime top-up ≥ **¥500** | Auto-upgrade, discounted multiplier |
| **C3** | Lifetime top-up ≥ **¥1000** | Auto-upgrade, best-available multiplier |

::: tip
A smaller multiplier means a lower price. Once you cross the threshold, your tier is **upgraded automatically within 5 minutes** — no application required.
:::

---

## Claude Models

All Claude groups support: PDF parsing · image recognition · deep thinking (Thinking) · web search

<div style="overflow-x: auto; margin: 1.5rem 0;">
<table class="pricing-table">
  <thead>
    <tr>
      <th>Group</th>
      <th>Supported Models</th>
      <th>Context</th>
      <th>C1</th>
      <th>C2</th>
      <th>C3</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><strong>Claude Code-Stable</strong></td>
      <td><code>claude-haiku-4-5-20251001</code></td>
      <td>—</td>
      <td rowspan="4"><strong>2.3</strong></td>
      <td rowspan="4"><strong>2.25</strong></td>
      <td rowspan="4"><strong>2.2</strong></td>
      <td rowspan="4">Max account pool. <strong>Claude Code CLI / official VS Code extension only.</strong></td>
    </tr>
    <tr><td><code>claude-sonnet-4-6</code></td><td>200K</td></tr>
    <tr><td><code>claude-opus-4-6</code></td><td>1M</td></tr>
    <tr><td><code>claude-opus-4-7</code></td><td>1M</td></tr>
    <tr>
      <td rowspan="4"><strong>cc-reverse</strong></td>
      <td><code>claude-haiku-4-5-20251001</code></td>
      <td>—</td>
      <td rowspan="4"><strong>0.5</strong></td>
      <td rowspan="4"><strong>0.45</strong></td>
      <td rowspan="4"><strong>0.45</strong></td>
      <td rowspan="4">Low-cost Kiro channel; may be less stable when account capacity is tight</td>
    </tr>
    <tr><td><code>claude-sonnet-4-6</code></td><td>1M</td></tr>
    <tr><td><code>claude-opus-4-6</code></td><td>—</td></tr>
    <tr><td><code>claude-opus-4-7</code></td><td>—</td></tr>
    <tr>
      <td rowspan="4"><strong>cc-reverse2</strong></td>
      <td><code>claude-haiku-4-5-20251001</code></td>
      <td>—</td>
      <td rowspan="4"><strong>1.4</strong></td>
      <td rowspan="4"><strong>1.35</strong></td>
      <td rowspan="4"><strong>1.3</strong></td>
      <td rowspan="4">Mixed Vertex + Bedrock reverse channel; risk controls may produce 429s</td>
    </tr>
    <tr><td><code>claude-sonnet-4-6</code></td><td>1M</td></tr>
    <tr><td><code>claude-opus-4-6</code></td><td>—</td></tr>
    <tr><td><code>claude-opus-4-7</code></td><td>—</td></tr>
    <tr>
      <td rowspan="4"><strong>cc-reverse3</strong></td>
      <td><code>claude-haiku-4-5-20251001</code></td>
      <td>—</td>
      <td rowspan="4"><strong>1.35</strong></td>
      <td rowspan="4"><strong>1.3</strong></td>
      <td rowspan="4"><strong>1.25</strong></td>
      <td rowspan="4">Premium high-intelligence channel; limited supply, may be unstable</td>
    </tr>
    <tr><td><code>claude-sonnet-4-6</code></td><td>1M</td></tr>
    <tr><td><code>claude-opus-4-6</code></td><td>—</td></tr>
    <tr><td><code>claude-opus-4-7</code></td><td>—</td></tr>
    <tr>
      <td rowspan="4"><strong>cc-wf</strong></td>
      <td><code>claude-haiku-4-5-20251001</code></td>
      <td>—</td>
      <td rowspan="4"><strong>0.7</strong></td>
      <td rowspan="4"><strong>0.65</strong></td>
      <td rowspan="4"><strong>0.6</strong></td>
      <td rowspan="4">Windsurf channel; Haiku model routed to Kiro</td>
    </tr>
    <tr><td><code>claude-sonnet-4-6</code></td><td>1M</td></tr>
    <tr><td><code>claude-opus-4-6</code></td><td>—</td></tr>
    <tr><td><code>claude-opus-4-7</code></td><td>—</td></tr>
    <tr>
      <td rowspan="3"><strong>cc-antigravity</strong></td>
      <td><code>claude-haiku-4-5-20251001</code></td>
      <td>—</td>
      <td rowspan="3"><strong>0.7</strong></td>
      <td rowspan="3"><strong>0.65</strong></td>
      <td rowspan="3"><strong>0.6</strong></td>
      <td rowspan="3">Google Antigravity channel; weak cache, plan requests accordingly</td>
    </tr>
    <tr><td><code>claude-sonnet-4-6</code></td><td>1M</td></tr>
    <tr><td><code>claude-opus-4-6</code></td><td>—</td></tr>
    <tr>
      <td rowspan="4"><strong>cc-kiro</strong></td>
      <td><code>claude-haiku-4-5-20251001</code></td>
      <td>—</td>
      <td rowspan="4"><strong>0.8</strong></td>
      <td rowspan="4"><strong>0.75</strong></td>
      <td rowspan="4"><strong>0.7</strong></td>
      <td rowspan="4">Premium Kiro channel; more stable than cc-reverse</td>
    </tr>
    <tr><td><code>claude-sonnet-4-6</code></td><td>1M</td></tr>
    <tr><td><code>claude-opus-4-6</code></td><td>—</td></tr>
    <tr><td><code>claude-opus-4-7</code></td><td>—</td></tr>
  </tbody>
</table>
</div>

---

## GPT Models

All GPT groups support: PDF parsing · image recognition · deep thinking · web search

<div style="overflow-x: auto; margin: 1.5rem 0;">
<table class="pricing-table">
  <thead>
    <tr>
      <th>Group</th>
      <th>Supported Models</th>
      <th>Context</th>
      <th>C1</th>
      <th>C2</th>
      <th>C3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="5"><strong>Codex</strong></td>
      <td><code>gpt-5.2</code></td>
      <td>400K</td>
      <td rowspan="5"><strong>0.2</strong></td>
      <td rowspan="5"><strong>0.2</strong></td>
      <td rowspan="5"><strong>0.2</strong></td>
    </tr>
    <tr><td><code>gpt-5.3-codex</code></td><td>400K</td></tr>
    <tr><td><code>gpt-5.4</code></td><td>1M</td></tr>
    <tr><td><code>gpt-5.4-mini</code></td><td>400K</td></tr>
    <tr><td><code>gpt-5.5</code></td><td>400K</td></tr>
  </tbody>
</table>
</div>

---

## Gemini Models

All Gemini groups support: PDF parsing · image recognition · deep thinking · web search

<div style="overflow-x: auto; margin: 1.5rem 0;">
<table class="pricing-table">
  <thead>
    <tr>
      <th>Group</th>
      <th>Supported Models</th>
      <th>Context</th>
      <th>C1</th>
      <th>C2</th>
      <th>C3</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3"><strong>Gemini</strong></td>
      <td><code>gemini-3-flash-preview</code></td>
      <td>1M</td>
      <td rowspan="3"><strong>0.7</strong></td>
      <td rowspan="3"><strong>0.7</strong></td>
      <td rowspan="3"><strong>0.7</strong></td>
      <td rowspan="3">Google Antigravity channel; recently unstable due to quota cuts</td>
    </tr>
    <tr><td><code>gemini-3-pro-preview</code></td><td>1M</td></tr>
    <tr><td><code>gemini-3.1-pro-preview</code></td><td>1M</td></tr>
  </tbody>
</table>
</div>

---

::: warning Important
- The **Claude Code-Stable** group only supports the Claude Code CLI and the official VS Code extension — not other clients.
- **cc-reverse** / **cc-reverse2** are cheaper, but may be less stable due to account capacity or risk controls. If you need higher stability, pick **cc-kiro** or **cc-reverse3**.
- The **cc-antigravity** and **Gemini** groups both go through the Google Antigravity channel, which has weak caching — pace your requests sensibly.
- Group prices and supported models may change at any time; the live values on the platform are authoritative.
:::
