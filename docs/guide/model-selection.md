---
title: Model Selection
lastUpdated: 2026-05-05
---

# 🎯 Model Selection

Different groups offer different lists of available models (**except for the C1, C2, and C3 user groups**). Before using a model, please confirm which models are available under your current group.

## How to Check Available Models

Go directly to the **[Model Marketplace](https://api.ikuncode.cc/pricing)** and filter by your group to see the available models.

::: tip 💡 Steps
1. Open the [Model Marketplace](https://api.ikuncode.cc/pricing)
2. In the filters, select the group your token belongs to
3. Review the full list of models available under that group
4. When configuring your tool, use a model name that appears in the list
:::

## Important Notes

::: warning ⚠️ Things to Watch
- **Do not invent or customize new model names.** Concatenating or modifying model names yourself will cause requests to fail.
- **Do not select models outside the available list** — they cannot be called normally.
- C1, C2, and C3 are user-tier groups, not model groups. Do not select them when creating a token.
:::

## FAQ

If you encounter errors such as **"model does not exist"** or **"no permission to access this model"**, please:

1. Go to the [Model Marketplace](https://api.ikuncode.cc/pricing) and verify the models available under your group;
2. Double-check that the model name configured in your tool is spelled correctly;
3. Confirm that the group your token belongs to supports the model.

## Next Steps

- [Start deployment](/deploy/claude-code) — Configure AI coding tools
