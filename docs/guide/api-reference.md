# AI Model API Reference

The IkunCode API is compatible with the OpenAI API protocol — a single Key lets you call mainstream models like Claude, GPT, Gemini, DeepSeek, and more.

## API Basics

| Item | Description |
|------|-------------|
| **Base URL** | `https://api.ikuncode.cc/v1` |
| **Authentication** | Bearer Token |
| **Protocol Compatibility** | OpenAI API format |

Every request must include authentication in the headers:

```
Authorization: Bearer sk-your-API-Key
Content-Type: application/json
```

## List Models

Get the list of currently available models.

**Request**

```
GET https://api.ikuncode.cc/v1/models
```

**Example**

```bash
curl https://api.ikuncode.cc/v1/models \
  -H "Authorization: Bearer sk-xxxx"
```

**Response**

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

## Chat Completions

The chat completion endpoint — the most commonly used AI conversation API.

**Request**

```
POST https://api.ikuncode.cc/v1/chat/completions
```

**Request Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| model | string | Yes | - | Model name, e.g. `claude-sonnet-4-20250514` |
| messages | array | Yes | - | List of conversation messages |
| temperature | number | No | 1.0 | Sampling temperature, 0–2; lower is more deterministic |
| top_p | number | No | 1.0 | Nucleus sampling parameter, 0–1 |
| max_tokens | integer | No | 4096 | Maximum number of tokens to generate |
| stream | boolean | No | false | Whether to enable streaming output |
| presence_penalty | number | No | 0 | Presence penalty, -2.0 to 2.0 |
| frequency_penalty | number | No | 0 | Frequency penalty, -2.0 to 2.0 |
| stop | array/string | No | null | Stop sequences |
| tools | array | No | null | Tool / function-call definitions |
| tool_choice | string/object | No | "auto" | Tool selection strategy |

**messages Structure**

```json
{
  "role": "system" | "user" | "assistant" | "tool",
  "content": "message content"
}
```

Supported role types:
- **system**: System prompt — defines the AI's role and behavior
- **user**: User input
- **assistant**: Model reply (used to preserve multi-turn context)
- **tool**: Result returned from a tool call

**Example Request (cURL)**

```bash
curl -X POST "https://api.ikuncode.cc/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxx" \
  -d '{
    "model": "claude-sonnet-4-20250514",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful AI assistant."
      },
      {
        "role": "user",
        "content": "Hello, please introduce yourself."
      }
    ],
    "temperature": 0.7,
    "max_tokens": 1024,
    "stream": false
  }'
```

**Example Request (Python)**

```python
from openai import OpenAI

client = OpenAI(
    api_key="sk-xxxx",
    base_url="https://api.ikuncode.cc/v1"
)

response = client.chat.completions.create(
    model="claude-sonnet-4-20250514",
    messages=[
        {"role": "system", "content": "You are a helpful AI assistant."},
        {"role": "user", "content": "Hello, please introduce yourself."}
    ],
    temperature=0.7,
    max_tokens=1024
)

print(response.choices[0].message.content)
```

**Example Request (Node.js)**

```javascript
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-xxxx',
  baseURL: 'https://api.ikuncode.cc/v1',
});

const response = await client.chat.completions.create({
  model: 'claude-sonnet-4-20250514',
  messages: [
    { role: 'system', content: 'You are a helpful AI assistant.' },
    { role: 'user', content: 'Hello, please introduce yourself.' },
  ],
  temperature: 0.7,
  max_tokens: 1024,
});

console.log(response.choices[0].message.content);
```

**Response Format (non-streaming)**

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
        "content": "Hello! I'm an AI assistant, happy to help."
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

**Streaming Response (stream=true)**

Uses Server-Sent Events (SSE) format. Each line starts with `data: `, and the stream ends with `data: [DONE]`.

```json
data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1690000000,"model":"claude-sonnet-4-20250514","choices":[{"index":0,"delta":{"role":"assistant","content":"He"},"finish_reason":null}]}

data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1690000000,"model":"claude-sonnet-4-20250514","choices":[{"index":0,"delta":{"content":"llo"},"finish_reason":null}]}

data: [DONE]
```

## Text Embeddings

The text embedding endpoint — generates embedding vectors for use cases like semantic search and text similarity.

**Request**

```
POST https://api.ikuncode.cc/v1/embeddings
```

**Request Parameters**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| model | string | Yes | Embedding model name |
| input | string/array | Yes | Text or array of texts to embed |
| encoding_format | string | No | Return format, `float` or `base64` |

**Example**

```bash
curl -X POST "https://api.ikuncode.cc/v1/embeddings" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxx" \
  -d '{
    "model": "text-embedding-3-small",
    "input": "Hello, world"
  }'
```

**Response**

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

## Image Generation

The AI image generation endpoint.

**Request**

```
POST https://api.ikuncode.cc/v1/images/generations
```

**Request Parameters**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| model | string | Yes | Image model name |
| prompt | string | Yes | Image description text |
| n | integer | No | Number of images to generate, default 1 |
| size | string | No | Image size, e.g. `1024x1024` |
| response_format | string | No | Return format, `url` or `b64_json` |

**Example**

```bash
curl -X POST "https://api.ikuncode.cc/v1/images/generations" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxx" \
  -d '{
    "model": "dall-e-3",
    "prompt": "A cute cat sitting on a windowsill watching the snow",
    "n": 1,
    "size": "1024x1024"
  }'
```

**Response**

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

## Audio APIs

### Speech-to-Text (STT)

```
POST https://api.ikuncode.cc/v1/audio/transcriptions
```

### Text-to-Speech (TTS)

```
POST https://api.ikuncode.cc/v1/audio/speech
```

**TTS Example**

```bash
curl -X POST "https://api.ikuncode.cc/v1/audio/speech" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxx" \
  -d '{
    "model": "tts-1",
    "input": "Hello, welcome to IkunCode.",
    "voice": "alloy"
  }' \
  --output speech.mp3
```

## Error Code Reference

| Status | Error Type | Description |
|--------|------------|-------------|
| 400 | invalid_request_error | Invalid request parameters |
| 401 | authentication_error | API Key is invalid or expired |
| 403 | permission_error | No permission to access this model |
| 429 | rate_limit_exceeded | Rate limit exceeded or insufficient balance |
| 500 | internal_server_error | Server-side error, please retry later |
| 502/504 | gateway_error | Gateway timeout |

**Error Response Format**

```json
{
  "error": {
    "message": "Detailed error message",
    "type": "invalid_request_error",
    "code": "invalid_api_key"
  }
}
```

## Usage Tips

::: tip 💡 Best Practices
- Keep **system prompts** concise and clear — avoid overly long ones
- For **multi-turn conversations**, preserve the full context history
- In production, always set reasonable `max_tokens` and `temperature` values
- We recommend using the official SDKs (Python `openai`, Node.js `openai`) to simplify development
- Context length and capabilities vary significantly across models — choose based on your needs
:::

::: warning ⚠️ Note
Replace `sk-xxxx` in the examples with your real API Key. Never commit your Key to a public code repository.
:::
