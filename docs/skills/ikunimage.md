# ikunimage - AI Image Generator

**Claude Code Skill — Call Gemini image models via the ikun API, supporting text-to-image and image-to-image**

::: tip 📋 Introduction
ikunimage is a Claude Code Skill plugin that calls the **NanoBananaPro (Gemini 3 Pro Image Preview)** model through the [ikun API](https://api.ikuncode.cc) to generate high-quality images directly inside Claude Code conversations. It supports text-to-image, image-to-image editing, concurrent batch generation, and more.
:::

## 🔗 Related Links

| Resource | URL |
|------|------|
| GitHub repository | [deijing/ikunimage](https://github.com/deijing/ikunimage) |
| ikun API | [api.ikuncode.cc](https://api.ikuncode.cc) |

## ✨ Features

- ✅ **Text-to-image**: Describe a scene in natural language and the AI generates the matching image
- ✅ **Image-to-image**: Upload a local image plus an edit prompt, and the AI produces a modified version
- ✅ **10 aspect ratios**: 1:1 / 16:9 / 9:16 / 4:3 / 3:4 / 3:2 / 2:3 / 21:9 / 5:4 / 4:5
- ✅ **3 resolution tiers**: 1K (fast preview) / 2K (recommended) / 4K (ultra HD)
- ✅ **Text rendering**: Render Chinese characters inside images (signs, posters, slogans, etc.)
- ✅ **Concurrent batch generation**: Generate multiple images in parallel to dramatically cut total time
- ✅ **Config file management**: API Key stored in a local config file — secure and convenient

## 📋 Prerequisites

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) CLI installed
- Python 3.10+
- An ikun API Key (get one from [api.ikuncode.cc](https://api.ikuncode.cc))

## 🛠️ Installation

### Step 1: Download the Skill

```bash
# Create the directory if it doesn't exist
mkdir -p ~/.claude/skills

# Clone ikunimage into the skills directory
cd ~/.claude/skills
git clone https://github.com/deijing/ikunimage.git
```

The directory layout after installation:

```
~/.claude/skills/ikunimage/
├── SKILL.md                        # Skill definition file
├── scripts/
│   ├── generate_ikun.py            # Text-to-image script
│   └── generate_ikun_edit.py       # Image-to-image script
└── references/
    └── api-reference.md            # API reference docs
```

### Step 2: Install dependencies

```bash
pip install httpx
```

### Step 3: Configure your API Key

Pick any one of the three methods below.

**Option A: Interactive configuration (recommended)**

```bash
python ~/.claude/skills/ikunimage/scripts/generate_ikun.py --setup
```

Follow the prompts to enter your API Key — the configuration will be saved to `~/.ikunimage/config.json`.

**Option B: Create the config file manually**

```bash
mkdir -p ~/.ikunimage
echo '{"api_key": "sk-your-key"}' > ~/.ikunimage/config.json
```

**Option C: Environment variable**

```bash
export IKUN_API_KEY="sk-your-key"
```

::: info 💡 API Key loading priority
`--api-key` CLI argument > `IKUN_API_KEY` environment variable > `~/.ikunimage/config.json` config file
:::

## 📖 Usage

### Using inside Claude Code

After installing and configuring, type the following inside a Claude Code conversation:

```
/ikunimage
```

Then describe the image you want. For example:

- "Paint a Jiangnan water town landscape"
- "Generate a 4K ultra-wide image of the Forbidden City in the snow"
- "Batch generate 5 ancient-style portraits in different styles"

Image-to-image editing:

- "Edit /path/to/photo.jpg and change the background to a bamboo forest"

### Standalone CLI usage

You can also call the scripts directly from the command line, without Claude Code.

**Text-to-image**:

```bash
python ~/.claude/skills/ikunimage/scripts/generate_ikun.py \
  -p "A Chinese woman in hanfu, standing in a bamboo grove with morning mist" \
  -ar 3:4 \
  -s 2K \
  -o ./output.png
```

**Image-to-image**:

```bash
python ~/.claude/skills/ikunimage/scripts/generate_ikun_edit.py \
  -i ./photo.jpg \
  -p "Change the background to a snowy scene, keep the subject unchanged" \
  -ar 3:4 \
  -o ./edited.png
```

**Batch generation**:

```bash
# Prepare a task file: tasks.json
cat > tasks.json << 'EOF'
[
  {"prompt": "Description 1", "aspect_ratio": "3:4", "size": "2K", "output": "./out1.png"},
  {"prompt": "Description 2", "aspect_ratio": "16:9", "size": "1K", "output": "./out2.png"}
]
EOF

# Run the batch
python ~/.claude/skills/ikunimage/scripts/generate_ikun.py \
  --batch tasks.json \
  --workers 2
```

## 📐 Parameter Reference

### Text-to-image (generate_ikun.py)

| Parameter | Short | Description | Default |
|------|------|------|--------|
| `--setup` | | Interactive API Key setup | |
| `--api-key` | | Specify the API Key | Loaded from config |
| `--prompt` | `-p` | Image description (required) | |
| `--aspect-ratio` | `-ar` | Aspect ratio | `1:1` |
| `--size` | `-s` | Resolution (1K/2K/4K) | `2K` |
| `--output` | `-o` | Output path | `output.png` |
| `--batch` | `-b` | Batch task JSON file | |
| `--workers` | `-w` | Concurrency | Auto (default 2) |
| `--retry` | `-r` | Retry count (0-10) | `3` |

### Image-to-image (generate_ikun_edit.py)

| Parameter | Short | Description | Default |
|------|------|------|--------|
| `--setup` | | Interactive API Key setup | |
| `--api-key` | | Specify the API Key | Loaded from config |
| `--input` | `-i` | Input image path (required) | |
| `--prompt` | `-p` | Edit description (required) | |
| `--aspect-ratio` | `-ar` | Output aspect ratio | `1:1` |
| `--output` | `-o` | Output path | `output.png` |
| `--batch` | `-b` | Batch task JSON file | |
| `--workers` | `-w` | Concurrency | Auto (default 2) |
| `--retry` | `-r` | Retry count (0-10) | `3` |

::: warning ⚠️ Mutually exclusive arguments
`--prompt` and `--batch` are mutually exclusive — you must choose either single-image mode or batch mode.
:::

## 📊 Resolution Reference

### 1K (fast preview)

| Aspect ratio | Resolution |
|--------|--------|
| 1:1 | 1024×1024 |
| 16:9 | 1376×768 |
| 9:16 | 768×1376 |
| 4:3 | 1200×896 |
| 3:4 | 896×1200 |

### 2K (recommended)

| Aspect ratio | Resolution |
|--------|--------|
| 1:1 | 2048×2048 |
| 16:9 | 2752×1536 |
| 9:16 | 1536×2752 |
| 4:3 | 2400×1792 |
| 3:4 | 1792×2400 |

### 4K (ultra HD)

| Aspect ratio | Resolution |
|--------|--------|
| 1:1 | 4096×4096 |
| 16:9 | 5504×3072 |
| 9:16 | 3072×5504 |
| 4:3 | 4800×3584 |
| 3:4 | 3584×4800 |

## 🖼️ Supported Image-to-image Formats

| Format | Supported | Notes |
|------|------|------|
| JPG / JPEG | ✅ | Recommended |
| PNG | ✅ | Recommended |
| WebP | ✅ | |
| GIF | ✅ | Only the first frame is used |

::: tip 💡 Tip
We recommend keeping image size below 4MB — larger files may upload slowly or time out.
:::

## FAQ

### "API Key not found" message?

Run the interactive setup command:

```bash
python ~/.claude/skills/ikunimage/scripts/generate_ikun.py --setup
```

### Request timing out?

4K image generation is slower, and the script already sets a generous timeout. If you still hit timeouts, drop the resolution to 2K or 1K.

### Receiving 429 errors?

You've hit the API rate limit. The script automatically retries with exponential backoff (3 attempts by default). Use `--retry 5` to increase the retry count.

### More questions?

See the [FAQ](/support/faq) or contact [after-sales support](/support/after-sales).
