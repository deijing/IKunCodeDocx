# 图像

AI 图像生成与编辑接口。

## 生成图像 <Badge type="warning" text="POST" />

```
POST https://api.ikuncode.cc/v1/images/generations
```

### 请求参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|:----:|--------|------|
| model | string | ✅ | - | 图像模型名称 |
| prompt | string | ✅ | - | 图像描述文本 |
| n | integer | | 1 | 生成图片数量 |
| size | string | | 1024x1024 | 图片尺寸 |
| response_format | string | | url | `url` 或 `b64_json` |
| quality | string | | standard | `standard` 或 `hd` |

### 示例请求

::: code-group

```bash [cURL]
curl -X POST "https://api.ikuncode.cc/v1/images/generations" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxx" \
  -d '{
    "model": "dall-e-3",
    "prompt": "一只可爱的猫咪坐在窗台上看雪景，水彩画风格",
    "n": 1,
    "size": "1024x1024"
  }'
```

```python [Python]
from openai import OpenAI

client = OpenAI(
    api_key="sk-xxxx",
    base_url="https://api.ikuncode.cc/v1"
)

response = client.images.generate(
    model="dall-e-3",
    prompt="一只可爱的猫咪坐在窗台上看雪景，水彩画风格",
    n=1,
    size="1024x1024"
)

print(response.data[0].url)
```

```javascript [JavaScript]
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-xxxx',
  baseURL: 'https://api.ikuncode.cc/v1',
});

const response = await client.images.generate({
  model: 'dall-e-3',
  prompt: '一只可爱的猫咪坐在窗台上看雪景，水彩画风格',
  n: 1,
  size: '1024x1024',
});

console.log(response.data[0].url);
```

:::

### 响应

```json
{
  "created": 1700000000,
  "data": [
    {
      "url": "https://...",
      "revised_prompt": "A cute cat sitting on a windowsill watching snowfall..."
    }
  ]
}
```

## 编辑图像 <Badge type="warning" text="POST" />

```
POST https://api.ikuncode.cc/v1/images/edits
```

### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|:----:|------|
| image | file | ✅ | 原始图片文件 |
| prompt | string | ✅ | 编辑描述 |
| model | string | | 模型名称 |
| n | integer | | 生成数量 |
| size | string | | 图片尺寸 |
