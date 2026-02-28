# AI 模型接口文档

IkunCode API 兼容 OpenAI 接口协议，一个 Key 即可调用 Claude、GPT、Gemini、DeepSeek 等主流模型。

## 接口基础信息

| 项目 | 说明 |
|------|------|
| **Base URL** | `https://api.ikuncode.cc/v1` |
| **认证方式** | Bearer Token |
| **协议兼容** | OpenAI API 格式 |

所有请求均需在 Header 中携带认证信息：

```
Authorization: Bearer sk-你的API Key
Content-Type: application/json
```

## 模型列表

获取当前可用的模型列表。

**请求**

```
GET https://api.ikuncode.cc/v1/models
```

**示例**

```bash
curl https://api.ikuncode.cc/v1/models \
  -H "Authorization: Bearer sk-xxxx"
```

**响应**

```json
{
  "object": "list",
  "data": [
    {
      "id": "claude-sonnet-4-20250514",
      "object": "model",
      "created": 1700000000,
      "owned_by": "anthropic"
    }
  ]
}
```

## 聊天完成

对话补全接口，最常用的 AI 对话接口。

**请求**

```
POST https://api.ikuncode.cc/v1/chat/completions
```

**请求参数**

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| model | string | 是 | - | 模型名称，如 `claude-sonnet-4-20250514` |
| messages | array | 是 | - | 对话消息列表 |
| temperature | number | 否 | 1.0 | 采样温度，0~2，越低越确定 |
| top_p | number | 否 | 1.0 | 核采样参数，0~1 |
| max_tokens | integer | 否 | 4096 | 最大生成 token 数 |
| stream | boolean | 否 | false | 是否启用流式输出 |
| presence_penalty | number | 否 | 0 | 存在惩罚，-2.0~2.0 |
| frequency_penalty | number | 否 | 0 | 频率惩罚，-2.0~2.0 |
| stop | array/string | 否 | null | 停止序列 |
| tools | array | 否 | null | 工具/函数调用定义 |
| tool_choice | string/object | 否 | "auto" | 工具选择策略 |

**messages 结构**

```json
{
  "role": "system" | "user" | "assistant" | "tool",
  "content": "消息内容"
}
```

支持的 role 类型：
- **system**：系统提示，设定 AI 角色和行为
- **user**：用户输入
- **assistant**：模型回复（多轮对话上下文）
- **tool**：工具调用返回结果

**示例请求（cURL）**

```bash
curl -X POST "https://api.ikuncode.cc/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxx" \
  -d '{
    "model": "claude-sonnet-4-20250514",
    "messages": [
      {
        "role": "system",
        "content": "你是一个有帮助的AI助手。"
      },
      {
        "role": "user",
        "content": "你好，请介绍一下自己。"
      }
    ],
    "temperature": 0.7,
    "max_tokens": 1024,
    "stream": false
  }'
```

**示例请求（Python）**

```python
from openai import OpenAI

client = OpenAI(
    api_key="sk-xxxx",
    base_url="https://api.ikuncode.cc/v1"
)

response = client.chat.completions.create(
    model="claude-sonnet-4-20250514",
    messages=[
        {"role": "system", "content": "你是一个有帮助的AI助手。"},
        {"role": "user", "content": "你好，请介绍一下自己。"}
    ],
    temperature=0.7,
    max_tokens=1024
)

print(response.choices[0].message.content)
```

**示例请求（Node.js）**

```javascript
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-xxxx',
  baseURL: 'https://api.ikuncode.cc/v1',
});

const response = await client.chat.completions.create({
  model: 'claude-sonnet-4-20250514',
  messages: [
    { role: 'system', content: '你是一个有帮助的AI助手。' },
    { role: 'user', content: '你好，请介绍一下自己。' },
  ],
  temperature: 0.7,
  max_tokens: 1024,
});

console.log(response.choices[0].message.content);
```

**响应格式（非流式）**

```json
{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "created": 1677858242,
  "model": "claude-sonnet-4-20250514",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "你好！我是一个AI助手，很高兴为你服务。"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 28,
    "completion_tokens": 18,
    "total_tokens": 46
  }
}
```

**流式响应（stream=true）**

采用 Server-Sent Events (SSE) 格式，每行以 `data: ` 开头，最后以 `data: [DONE]` 结束。

```json
data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1690000000,"model":"claude-sonnet-4-20250514","choices":[{"index":0,"delta":{"role":"assistant","content":"你"},"finish_reason":null}]}

data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1690000000,"model":"claude-sonnet-4-20250514","choices":[{"index":0,"delta":{"content":"好"},"finish_reason":null}]}

data: [DONE]
```

## 文本嵌入

文本嵌入向量生成接口，用于语义搜索、文本相似度计算等场景。

**请求**

```
POST https://api.ikuncode.cc/v1/embeddings
```

**请求参数**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| model | string | 是 | 嵌入模型名称 |
| input | string/array | 是 | 待嵌入的文本或文本数组 |
| encoding_format | string | 否 | 返回格式，`float` 或 `base64` |

**示例**

```bash
curl -X POST "https://api.ikuncode.cc/v1/embeddings" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxx" \
  -d '{
    "model": "text-embedding-3-small",
    "input": "你好世界"
  }'
```

**响应**

```json
{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "index": 0,
      "embedding": [0.0023, -0.0094, 0.0156, ...]
    }
  ],
  "model": "text-embedding-3-small",
  "usage": {
    "prompt_tokens": 4,
    "total_tokens": 4
  }
}
```

## 图像生成

AI 图像生成接口。

**请求**

```
POST https://api.ikuncode.cc/v1/images/generations
```

**请求参数**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| model | string | 是 | 图像模型名称 |
| prompt | string | 是 | 图像描述文本 |
| n | integer | 否 | 生成图片数量，默认 1 |
| size | string | 否 | 图片尺寸，如 `1024x1024` |
| response_format | string | 否 | 返回格式，`url` 或 `b64_json` |

**示例**

```bash
curl -X POST "https://api.ikuncode.cc/v1/images/generations" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxx" \
  -d '{
    "model": "dall-e-3",
    "prompt": "一只可爱的猫咪坐在窗台上看雪景",
    "n": 1,
    "size": "1024x1024"
  }'
```

**响应**

```json
{
  "created": 1700000000,
  "data": [
    {
      "url": "https://...",
      "revised_prompt": "..."
    }
  ]
}
```

## 语音接口

### 语音转文字 (STT)

```
POST https://api.ikuncode.cc/v1/audio/transcriptions
```

### 文字转语音 (TTS)

```
POST https://api.ikuncode.cc/v1/audio/speech
```

**TTS 示例**

```bash
curl -X POST "https://api.ikuncode.cc/v1/audio/speech" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxx" \
  -d '{
    "model": "tts-1",
    "input": "你好，欢迎使用 IkunCode。",
    "voice": "alloy"
  }' \
  --output speech.mp3
```

## 错误码参考

| 状态码 | 错误类型 | 说明 |
|--------|----------|------|
| 400 | invalid_request_error | 请求参数错误 |
| 401 | authentication_error | API Key 无效或过期 |
| 403 | permission_error | 无权访问该模型 |
| 429 | rate_limit_exceeded | 超过速率限制或余额不足 |
| 500 | internal_server_error | 服务端异常，请稍后重试 |
| 502/504 | gateway_error | 网关超时 |

**错误响应格式**

```json
{
  "error": {
    "message": "错误详细信息",
    "type": "invalid_request_error",
    "code": "invalid_api_key"
  }
}
```

## 使用建议

::: tip 💡 最佳实践
- **system 提示**尽量精简明确，避免过长
- **多轮对话**时完整保留上下文历史
- 生产环境始终设置合理的 `max_tokens` 和 `temperature`
- 推荐使用官方 SDK（Python `openai`、Node.js `openai`）简化开发
- 不同模型的上下文长度和能力差异较大，请根据需求选择
:::

::: warning ⚠️ 注意
请将示例中的 `sk-xxxx` 替换为你的真实 API Key。请勿将 Key 提交到公开代码仓库。
:::
