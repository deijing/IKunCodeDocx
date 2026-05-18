# Create Your Own API Key

After signing up and logging in, click to create your own API Key.

## Creation Steps

1. Log in to the IKunCode platform
2. Go to "[Token Management](https://api.ikuncode.cc/console/token)"
3. Click the "Add Token" button
4. Create the token you want to use. Do not select the user group — instead, choose the group that suits you based on the model status on the [Status page](https://status.ikuncode.cc/), the token description, and the group multiplier.
5. Save and copy the Key

::: tip 💡 Tip
Leave the **Model Restriction List** empty — you don't need to configure it unless you fully understand what it does.
:::

## Security Recommendations

::: danger 🔐 Security Reminder
- **Do not** share your Key with others
- **Do not** commit your Key to a code repository
- **Do not** display your Key in public
- When asking whether your configuration is correct, mask the Key
- Store the Key in environment variables or a config file
- Rotate the Key regularly for better security
:::

## Save Your Key

After successful creation, save your Key immediately:

```bash
# Example Key (replace with your actual Key)
sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Next Steps

- [Modify token settings](/guide/modify-token) — Adjust token parameters
- [Configure environment variables](/deploy/claude-code#配置环境变量) — Use the Key in your tools
