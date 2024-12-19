import { toDataURL } from 'qrcode'
import { Totp } from 'time2fa'

async function main() {
  const key = Totp.generateKey({ issuer: 'R2', user: 'winstxnhdw' })

  const data_url = await toDataURL(key.url, {
    type: 'image/webp',
    errorCorrectionLevel: 'H',
    scale: 100,
    rendererOpts: { quality: 1 },
  })

  const base64 = data_url.split(',')[1]

  if (!base64) {
    throw new Error('Failed to generate QR code!')
  }

  const binary = atob(base64)
  const length = binary.length
  const array = new Uint8Array(length)

  for (let i = 0; i < length; i++) {
    array[i] = binary.charCodeAt(i)
  }

  await Bun.write('totp.webp', array)
}

void main()
