# 音频

语音识别（STT）和语音合成（TTS）接口。

## 语音合成 <Badge type="warning" text="POST" />

将文本转换为语音。

```
POST https://api.ikuncode.cc/v1/audio/speech
```

### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|:----:|------|
| model | string | ✅ | TTS 模型，如 `tts-1`、`tts-1-hd` |
| input | string | ✅ | 要转换的文本 |
| voice | string | ✅ | 声音类型：`alloy`/`echo`/`fable`/`onyx`/`nova`/`shimmer` |
| response_format | string | | 输出格式：`mp3`/`opus`/`aac`/`flac`，默认 `mp3` |
| speed | number | | 语速，0.25~4.0，默认 1.0 |

### 示例请求

::: code-group

```bash [cURL]
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

```python [Python]
from openai import OpenAI

client = OpenAI(
    api_key="sk-xxxx",
    base_url="https://api.ikuncode.cc/v1"
)

response = client.audio.speech.create(
    model="tts-1",
    voice="alloy",
    input="你好，欢迎使用 IkunCode。"
)

response.stream_to_file("speech.mp3")
```

```javascript [JavaScript]
import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
  apiKey: 'sk-xxxx',
  baseURL: 'https://api.ikuncode.cc/v1',
});

const response = await client.audio.speech.create({
  model: 'tts-1',
  voice: 'alloy',
  input: '你好，欢迎使用 IkunCode。',
});

const buffer = Buffer.from(await response.arrayBuffer());
fs.writeFileSync('speech.mp3', buffer);
```

:::

## 语音识别 <Badge type="warning" text="POST" />

将音频文件转换为文本。

```
POST https://api.ikuncode.cc/v1/audio/transcriptions
```

### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|:----:|------|
| file | file | ✅ | 音频文件（mp3/mp4/wav/webm 等） |
| model | string | ✅ | 识别模型，如 `whisper-1` |
| language | string | | 语言代码，如 `zh` |
| response_format | string | | 输出格式：`json`/`text`/`srt`/`vtt` |

### 示例请求

::: code-group

```bash [cURL]
curl -X POST "https://api.ikuncode.cc/v1/audio/transcriptions" \
  -H "Authorization: Bearer sk-xxxx" \
  -F file="@audio.mp3" \
  -F model="whisper-1" \
  -F language="zh"
```

```python [Python]
from openai import OpenAI

client = OpenAI(
    api_key="sk-xxxx",
    base_url="https://api.ikuncode.cc/v1"
)

with open("audio.mp3", "rb") as f:
    response = client.audio.transcriptions.create(
        model="whisper-1",
        file=f,
        language="zh"
    )

print(response.text)
```

:::

### 响应

```json
{
  "text": "你好，欢迎使用 IkunCode。"
}
```
