# Defender Relayer API (Vercel)

This is a simple Vercel serverless function that sends transactions using OpenZeppelin Defender Relayer.

### 🛠 Usage

POST to `/api/relay` with:

```json
{
  "to": "0x...",
  "data": "0x...",
  "value": "0x0"  // optional
}
```
