# 模型列表

获取当前可用的模型列表。

## 列出模型 <Badge type="tip" text="GET" />

```
GET https://api.ikuncode.cc/v1/models
```

### Authorization

| 参数 | 位置 | 说明 |
|------|------|------|
| Authorization | Header | `Bearer sk-xxxx` |

### 示例请求

::: code-group

```bash [cURL]
curl -X GET "https://api.ikuncode.cc/v1/models" \
  -H "Authorization: Bearer sk-xxxx"
```

```javascript [JavaScript]
const response = await fetch('https://api.ikuncode.cc/v1/models', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer sk-xxxx',
  },
});
const data = await response.json();
console.log(data);
```

```python [Python]
from openai import OpenAI

client = OpenAI(
    api_key="sk-xxxx",
    base_url="https://api.ikuncode.cc/v1"
)

models = client.models.list()
for model in models.data:
    print(model.id)
```

```go [Go]
package main

import (
    "fmt"
    "io"
    "net/http"
)

func main() {
    req, _ := http.NewRequest("GET", "https://api.ikuncode.cc/v1/models", nil)
    req.Header.Set("Authorization", "Bearer sk-xxxx")

    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    body, _ := io.ReadAll(resp.Body)
    fmt.Println(string(body))
}
```

:::

### 响应

::: code-group

```json [200 成功]
{
  "object": "list",
  "data": [
    {
      "id": "claude-sonnet-4-20250514",
      "object": "model",
      "created": 1700000000,
      "owned_by": "anthropic"
    },
    {
      "id": "gpt-4o",
      "object": "model",
      "created": 1700000000,
      "owned_by": "openai"
    }
  ]
}
```

```json [401 未授权]
{
  "error": {
    "message": "Invalid API key",
    "type": "authentication_error",
    "code": "invalid_api_key"
  }
}
```

:::
