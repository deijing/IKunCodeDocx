# <img src="/images/nano.png" alt="NanoBanana" style="display: inline-block; vertical-align: middle; height: 1.4em; margin-right: 8px;" /> NanoBanana Image Generation Deployment Guide

**Call Gemini's native image generation API through IKunCode**

| Resource | URL |
|------|------|
| IKunCode platform | [api.ikuncode.cc](https://api.ikuncode.cc) |

::: tip 📋 Overview
NanoBanana is the Gemini image generation model family offered by IKunCode. You can call it directly with an IKunCode API Key — no VPN, no Google account required.
:::

## 🎯 Model Overview

IKunCode offers two NanoBanana models:

| Model | Model ID | Features | Use Cases |
|------|---------|------|----------|
| **NanoBananaPro** | `gemini-3-pro-image-preview` | Best quality, supports high-resolution output | High-quality posters, commercial assets, detailed creative work |
| **NanoBanana2** | `gemini-3.1-flash-image-preview` | Fast and affordable | Quick previews, batch generation, everyday use |

::: tip 💡 How to choose
- For the best **image quality**: choose NanoBananaPro (Pro version)
- For **speed and cost-effectiveness**: choose NanoBanana2 (Flash version)
:::

## 📐 Supported Aspect Ratios

Both models support the following **10 aspect ratios**:

| Aspect Ratio | Description | Aspect Ratio | Description |
|--------|------|--------|------|
| **1:1** | Square image | **3:2** | Common camera ratio (landscape) |
| **16:9** | Standard landscape | **2:3** | Common camera ratio (portrait) |
| **9:16** | Standard portrait | **21:9** | Ultrawide |
| **4:3** | Classic landscape | **5:4** | Monitor ratio (landscape) |
| **3:4** | Classic portrait | **4:5** | Monitor ratio (portrait) |

## 📏 Supported Resolutions

Each aspect ratio supports three resolution tiers:

### 1K Resolution (Quick Preview)

| Aspect Ratio | Resolution | Aspect Ratio | Resolution |
|--------|--------|--------|--------|
| 1:1 | 1024×1024 | 3:2 | 1232×816 |
| 16:9 | 1376×768 | 2:3 | 816×1232 |
| 9:16 | 768×1376 | 21:9 | 1584×672 |
| 4:3 | 1200×896 | 5:4 | 1136×896 |
| 3:4 | 896×1200 | 4:5 | 896×1136 |

### 2K Resolution (Recommended)

| Aspect Ratio | Resolution | Aspect Ratio | Resolution |
|--------|--------|--------|--------|
| 1:1 | 2048×2048 | 3:2 | 2464×1632 |
| 16:9 | 2752×1536 | 2:3 | 1632×2464 |
| 9:16 | 1536×2752 | 21:9 | 3168×1344 |
| 4:3 | 2400×1792 | 5:4 | 2272×1792 |
| 3:4 | 1792×2400 | 4:5 | 1792×2272 |

### 4K Resolution (Ultra HD)

| Aspect Ratio | Resolution | Aspect Ratio | Resolution |
|--------|--------|--------|--------|
| 1:1 | 4096×4096 | 3:2 | 4928×3264 |
| 16:9 | 5504×3072 | 2:3 | 3264×4928 |
| 9:16 | 3072×5504 | 21:9 | 6336×2688 |
| 4:3 | 4800×3584 | 5:4 | 4544×3584 |
| 3:4 | 3584×4800 | 4:5 | 3584×4544 |

## 🔧 API Request Format

NanoBanana uses the **Google native format** API, which differs from the OpenAI format.

### Basic Request Structure

```json
{
  "contents": [{
    "parts": [
      { "text": "Your image description" }
    ]
  }],
  "generationConfig": {
    "responseModalities": ["IMAGE"],
    "imageConfig": {
      "aspectRatio": "16:9",
      "image_size": "2K"
    }
  }
}
```

### Parameters

| Parameter | Description | Allowed Values |
|------|------|--------|
| `responseModalities` | Response type, must be image | `["IMAGE"]` |
| `aspectRatio` | Aspect ratio | `1:1`, `16:9`, `9:16`, `4:3`, `3:4`, `3:2`, `2:3`, `21:9`, `5:4`, `4:5` |
| `image_size` | Resolution tier | `1K`, `2K`, `4K` |

### API Endpoint

```
POST https://api.ikuncode.cc/v1beta/models/{ModelID}:generateContent
```

- NanoBananaPro: `gemini-3-pro-image-preview`
- NanoBanana2: `gemini-3.1-flash-image-preview`

## 📝 Sample Code

### cURL Example

```bash
curl -X POST "https://api.ikuncode.cc/v1beta/models/gemini-3-pro-image-preview:generateContent" \
  -H "Authorization: Bearer sk-your-IKunCode-key" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{
      "parts": [
        {"text": "A cute kitten sitting in a garden, oil painting style, HD, rich detail"}
      ]
    }],
    "generationConfig": {
      "responseModalities": ["IMAGE"],
      "imageConfig": {
        "aspectRatio": "16:9",
        "image_size": "2K"
      }
    }
  }'
```

### Python Example

```python
import requests
import base64

API_KEY = "sk-your-IKunCode-key"
API_URL = "https://api.ikuncode.cc/v1beta/models/gemini-3-pro-image-preview:generateContent"

payload = {
    "contents": [{
        "parts": [
            {"text": "A cute kitten sitting in a garden, oil painting style, HD, rich detail"}
        ]
    }],
    "generationConfig": {
        "responseModalities": ["IMAGE"],
        "imageConfig": {
            "aspectRatio": "16:9",
            "image_size": "2K"
        }
    }
}

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

response = requests.post(API_URL, headers=headers, json=payload, timeout=600)

if response.status_code == 200:
    data = response.json()
    image_base64 = data["candidates"][0]["content"]["parts"][0]["inlineData"]["data"]

    # Save the image
    with open("output.png", "wb") as f:
        f.write(base64.b64decode(image_base64))
    print("Image saved to output.png")
else:
    print(f"Request failed: {response.status_code}")
    print(response.text)
```

### Node.js Example

```javascript
const fs = require('fs');

const API_KEY = 'sk-your-IKunCode-key';
const API_URL = 'https://api.ikuncode.cc/v1beta/models/gemini-3-pro-image-preview:generateContent';

async function generateImage() {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [{
        parts: [
          { text: 'A cute kitten sitting in a garden, oil painting style, HD, rich detail' }
        ]
      }],
      generationConfig: {
        responseModalities: ['IMAGE'],
        imageConfig: {
          aspectRatio: '16:9',
          image_size: '2K'
        }
      }
    })
  });

  const data = await response.json();
  const imageBase64 = data.candidates[0].content.parts[0].inlineData.data;

  fs.writeFileSync('output.png', Buffer.from(imageBase64, 'base64'));
  console.log('Image saved to output.png');
}

generateImage().catch(console.error);
```

## 🖼️ Image-to-Image Editing

NanoBananaPro also supports **image-to-image** editing. Upload an image along with an editing instruction to modify it.

```json
{
  "contents": [{
    "parts": [
      {
        "inlineData": {
          "mimeType": "image/png",
          "data": "Base64-encoded string of the image"
        }
      },
      { "text": "Change the background to a starry sky, keep the person unchanged" }
    ]
  }],
  "generationConfig": {
    "responseModalities": ["IMAGE"],
    "imageConfig": {
      "aspectRatio": "16:9",
      "image_size": "2K"
    }
  }
}
```

::: tip 💡 Tips for image-to-image editing
- Make editing instructions **specific and clear** — spell out what to keep and what to change
- Supports background swaps, style changes, adding elements, watermark removal, and more
- Encode the image as Base64 and place it in the `inlineData.data` field
:::

## 🤖 Using It Inside Claude Code

If you have installed the [ikunimage Skill](/skills/ikunimage), you can generate images with natural language directly in a Claude Code conversation — no manual API calls needed.

```
> Use ikun to draw a cyberpunk city nightscape, 16:9 ratio, 2K resolution

> ikun generate an ink-wash landscape painting, portrait 9:16

> Use ikun to edit this image /path/to/image.png and change the background to a sunset by the sea
```

For detailed installation and usage instructions, see: [ikunimage AI Image Generation](/skills/ikunimage)

## ⏱️ Performance Tips

### Recommended Timeouts

Processing time varies significantly across resolutions — set a reasonable timeout:

| Resolution | Recommended Timeout | Use Case |
|--------|----------|----------|
| **1K** | 360 seconds (6 minutes) | Quick previews, testing |
| **2K** | 600 seconds (10 minutes) | Everyday use (recommended) |
| **4K** | 1200 seconds (20 minutes) | Ultra HD output, commercial use |

### Bandwidth Considerations

Image data is transmitted as Base64, which results in large payloads:

- Use a **stable, high-speed network connection**
- The Base64 payload of a 4K image can exceed **10MB**
- Avoid generating 4K images during peak network hours

## ⚠️ Notes

1. **API Key**: create an API Key with image model support on the [IKunCode platform](https://api.ikuncode.cc)
2. **API format**: NanoBanana uses the **Google native format**, not OpenAI-compatible — keep this in mind
3. **Resolution vs. time**: higher resolutions take longer to generate; choose based on your real needs
4. **Text rendering**: rendering Chinese text inside images is supported (e.g. signs, poster copy) — just include it in your prompt
5. **Pricing**: prices vary by model and resolution; see the IKunCode pricing page for details

