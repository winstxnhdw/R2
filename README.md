# R2

My personal time-based blob store with Cloudflare Workers R2.

## Generate TOTP

You can generate the TOTP QR code for your authenticator app with the following.

```bash
bun totp
```

## Development

Install all dependencies.

```bash
bun install
```

## Testing

Run your tests with hot reloading.

```bash
bun run test
```

Run your tests without hot reloading. For testing in a CI pipeline.

```bash
bun test
```
