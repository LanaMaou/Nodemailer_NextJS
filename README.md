# Nodemailer + Resend Email Sender (Next.js)

Project Next.js App Router untuk mengirim email menggunakan dua jalur:
- Resend API (serverless email provider)
- Gmail OAuth2 lewat Nodemailer

Dilengkapi template email dari React Email dan UI sederhana untuk testing.

## Fitur
- Kirim email via `/api/send/resend` dan `/api/send/nodemailer`
- Template email reusable di `emails/index.tsx`
- UI form sederhana di `app/page.tsx`
- Tailwind CSS untuk styling

## Tech Stack
- Next.js 14 (App Router), React 18
- Resend, Nodemailer, Google APIs (OAuth2)
- React Email
- Tailwind CSS

## Mulai Cepat

### Prasyarat
- Node.js 18+ dan npm
- Akun Resend (opsional, jika memakai Resend)
- Gmail OAuth2 credentials (jika memakai Nodemailer)

### Instalasi
```bash
npm install
```

### Konfigurasi Environment
Buat file `.env` dan isi minimal seperti berikut:
```bash
RESEND_API_KEY=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=
EMAIL=
VERCEL_URL=
```
Catatan:
- `RESEND_API_KEY` hanya diperlukan untuk endpoint Resend.
- `VERCEL_URL` opsional, dipakai untuk preview/link di template email.

### Jalankan Dev Server
```bash
npm run dev
```
Lalu buka `http://localhost:3000`.

### Preview Template Email
```bash
npm run email
```

## Endpoint API

### POST `/api/send/resend`
Body:
```json
{
  "email": "user@example.com",
  "userFirstname": "Lana"
}
```

Contoh curl:
```bash
curl -X POST http://localhost:3000/api/send/resend \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","userFirstname":"Lana"}'
```

### POST `/api/send/nodemailer`
Body sama dengan endpoint Resend:
```json
{
  "email": "user@example.com",
  "userFirstname": "Lana"
}
```

## Struktur Folder
- `app/page.tsx` - UI form pengiriman email
- `app/api/send/resend/route.ts` - API Resend
- `app/api/send/nodemailer/route.ts` - API Nodemailer
- `app/api/send/nodemailer/nodemailer.ts` - transport Gmail OAuth2
- `emails/index.tsx` - template email

## Script
- `npm run dev` - jalankan dev server
- `npm run build` - build production
- `npm run start` - jalankan build
- `npm run lint` - lint project
- `npm run email` - preview email template

## Kustomisasi
- Ubah template email di `emails/index.tsx`
- Ganti `from`/subject di `app/api/send/resend/route.ts`
- Ganti subject atau transport di `app/api/send/nodemailer/nodemailer.ts`

## Deployment
Pastikan environment variables di-hosting sudah di-set, lalu:
```bash
npm run build
npm run start
```
