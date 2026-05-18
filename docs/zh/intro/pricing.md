---
title: 价格说明
lastUpdated: 2026-05-05
---

# 价格说明

IKunCode 采用**分组倍率**计费，充值倍率固定为1人民币=1美元，模型基础费用统一固定，实际费用根据分组倍率灵活调整（例如分组倍率是0.8，那么表示0.8人民币=1美元额度），倍率越低越省钱。

::: tip 看不懂分组倍率？
可以前往 [模型广场](https://api.ikuncode.cc/pricing) 点开具体的某个模型，里面会展示不同分组下的**最终价格**，更直观地对比各渠道的实际费用。
:::

## 用户等级

IKunCode 实行累计充值会员制度。随着累计充值额度的增加，用户可获得更低的计费倍率。等级**长期保留**。

| 等级 |      升级条件       | 说明           |
|:----:|:---------------:|--------------|
| **C1** | 累计充值满 **¥25** | 暂无优惠         |
| **C2** | 累计充值满 **¥500**  | 自动升级，享受折扣倍率  |
| **C3** | 累计充值满 **¥1000** | 自动升级，享受最优惠倍率 |

::: tip
倍率数字越小代表价格越低。达到充值门槛后**最长5分钟内自动升级**，无需任何申请。
:::

---

## Claude 模型

所有 Claude 分组均支持：PDF 解析 · 图片识别 · 深度思考（Thinking）· 联网搜索

<div style="overflow-x: auto; margin: 1.5rem 0;">
<table class="pricing-table">
  <thead>
    <tr>
      <th>分组</th>
      <th>支持模型</th>
      <th>上下文</th>
      <th>C1</th>
      <th>C2</th>
      <th>C3</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><strong>Claude Code-稳定</strong></td>
      <td><code>claude-haiku-4-5-20251001</code></td>
      <td>—</td>
      <td rowspan="4"><strong>2.3</strong></td>
      <td rowspan="4"><strong>2.25</strong></td>
      <td rowspan="4"><strong>2.2</strong></td>
      <td rowspan="4">Max 号池，<strong>仅限 Claude Code CLI / VS Code 官方插件</strong>使用</td>
    </tr>
    <tr><td><code>claude-sonnet-4-6</code></td><td>200K</td></tr>
    <tr><td><code>claude-opus-4-6</code></td><td>1M</td></tr>
    <tr><td><code>claude-opus-4-7</code></td><td>1M</td></tr>
    <tr>
      <td rowspan="4"><strong>cc逆向</strong></td>
      <td><code>claude-haiku-4-5-20251001</code></td>
      <td>—</td>
      <td rowspan="4"><strong>0.5</strong></td>
      <td rowspan="4"><strong>0.45</strong></td>
      <td rowspan="4"><strong>0.45</strong></td>
      <td rowspan="4">低价 kiro 渠道，可能因号池不够没那么稳定</td>
    </tr>
    <tr><td><code>claude-sonnet-4-6</code></td><td>1M</td></tr>
    <tr><td><code>claude-opus-4-6</code></td><td>—</td></tr>
    <tr><td><code>claude-opus-4-7</code></td><td>—</td></tr>
    <tr>
      <td rowspan="4"><strong>cc逆向2</strong></td>
      <td><code>claude-haiku-4-5-20251001</code></td>
      <td>—</td>
      <td rowspan="4"><strong>1.4</strong></td>
      <td rowspan="4"><strong>1.35</strong></td>
      <td rowspan="4"><strong>1.3</strong></td>
      <td rowspan="4">vertex + bedrock 逆向混合分组，因号池风控可能比较容易 429</td>
    </tr>
    <tr><td><code>claude-sonnet-4-6</code></td><td>1M</td></tr>
    <tr><td><code>claude-opus-4-6</code></td><td>—</td></tr>
    <tr><td><code>claude-opus-4-7</code></td><td>—</td></tr>
    <tr>
      <td rowspan="4"><strong>cc逆向3</strong></td>
      <td><code>claude-haiku-4-5-20251001</code></td>
      <td>—</td>
      <td rowspan="4"><strong>1.35</strong></td>
      <td rowspan="4"><strong>1.3</strong></td>
      <td rowspan="4"><strong>1.25</strong></td>
      <td rowspan="4">优质高智商渠道，供应量较小，可能不稳定</td>
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
      <td rowspan="4">Windsurf 渠道，Haiku 模型路由至 Kiro</td>
    </tr>
    <tr><td><code>claude-sonnet-4-6</code></td><td>1M</td></tr>
    <tr><td><code>claude-opus-4-6</code></td><td>—</td></tr>
    <tr><td><code>claude-opus-4-7</code></td><td>—</td></tr>
    <tr>
      <td rowspan="3"><strong>cc-反重力</strong></td>
      <td><code>claude-haiku-4-5-20251001</code></td>
      <td>—</td>
      <td rowspan="3"><strong>0.7</strong></td>
      <td rowspan="3"><strong>0.65</strong></td>
      <td rowspan="3"><strong>0.6</strong></td>
      <td rowspan="3">谷歌反重力渠道，缓存较低请注意</td>
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
      <td rowspan="4">优质 Kiro 渠道，相对 cc逆向 更加稳定</td>
    </tr>
    <tr><td><code>claude-sonnet-4-6</code></td><td>1M</td></tr>
    <tr><td><code>claude-opus-4-6</code></td><td>—</td></tr>
    <tr><td><code>claude-opus-4-7</code></td><td>—</td></tr>
  </tbody>
</table>
</div>

---

## GPT 模型

所有 GPT 分组均支持：PDF 解析 · 图片识别 · 深度思考 · 联网搜索

<div style="overflow-x: auto; margin: 1.5rem 0;">
<table class="pricing-table">
  <thead>
    <tr>
      <th>分组</th>
      <th>支持模型</th>
      <th>上下文</th>
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

## Gemini 模型

所有 Gemini 分组均支持：PDF 解析 · 图片识别 · 深度思考 · 联网搜索

<div style="overflow-x: auto; margin: 1.5rem 0;">
<table class="pricing-table">
  <thead>
    <tr>
      <th>分组</th>
      <th>支持模型</th>
      <th>上下文</th>
      <th>C1</th>
      <th>C2</th>
      <th>C3</th>
      <th>说明</th>
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
      <td rowspan="3">谷歌反重力渠道，近期因额度大砍不稳定</td>
    </tr>
    <tr><td><code>gemini-3-pro-preview</code></td><td>1M</td></tr>
    <tr><td><code>gemini-3.1-pro-preview</code></td><td>1M</td></tr>
  </tbody>
</table>
</div>

---

::: warning 注意事项
- **Claude Code-稳定** 分组仅支持 Claude Code CLI 及 VS Code 官方插件，不适用于其他客户端。
- **cc逆向** / **cc逆向2** 价格相对较低，但因号池或风控可能不太稳定；对稳定性有要求请选择 **cc-kiro** 或 **cc逆向3**。
- **cc-反重力** 及 **Gemini** 分组均走谷歌反重力渠道，缓存机制较弱，请合理控制请求频率。
- 各分组价格及支持模型可能随时调整，请以平台实时展示为准。
:::
