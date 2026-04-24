# Thorz Digital

Website marketing untuk **Thorz Digital** yang dibangun dengan **Next.js 16**, **React 19**, dan **Tailwind CSS v4**. Project ini berisi homepage company profile yang responsive, halaman kontak, dan dummy contact flow untuk kebutuhan presentasi atau landing page awal.

## Fitur

- Landing page responsive dengan section hero, layanan, portfolio, proses kerja, testimonial, pricing, CTA, dan footer
- Mobile navigation dengan hamburger menu
- Halaman `/contact` yang konsisten dengan visual homepage
- Dummy form submission ke `POST /api/contact`
- Validasi field wajib dan notifikasi sukses/error
- Branding dan styling berbasis token sederhana di global CSS

## Tech Stack

- Next.js 16.2.4
- React 19.2.4
- Tailwind CSS v4
- ESLint 9

## Menjalankan Project

Install dependency:

```bash
pnpm install
```

Jalankan development server:

```bash
pnpm dev
```

Buka di browser:

```text
http://localhost:3000
```

Build production:

```bash
pnpm build
pnpm start
```

Lint project:

```bash
pnpm lint
```

## Struktur Singkat

```text
src/
  app/
    api/contact/route.js   # Dummy contact endpoint
    contact/page.js        # Halaman contact
    globals.css            # Theme tokens dan global styles
    layout.js              # Root layout + metadata
    page.js                # Homepage
  components/marketing/    # Komponen marketing site
  lib/site-data.js         # Copy dan data section
```

## API Dummy Contact

Endpoint:

```text
POST /api/contact
```

Payload:

```json
{
  "name": "Nama",
  "email": "nama@bisnis.com",
  "businessName": "Opsional",
  "projectNeeds": "Website company profile",
  "message": "Kami butuh landing page baru"
}
```

Contoh response sukses:

```json
{
  "success": true,
  "message": "Permintaan konsultasi kamu sudah kami terima. Tim kami akan menghubungi kamu secepatnya.",
  "leadId": "AR-XXXXXXX",
  "submittedAt": "2026-04-25T00:00:00.000Z"
}
```

Catatan:

- Flow ini masih dummy
- Data belum disimpan ke database
- Belum ada integrasi email, CRM, atau WhatsApp real

## Status Project

Versi saat ini cocok untuk:

- company profile awal
- demo ke client
- base untuk integrasi backend/lead management berikutnya

Yang masih bisa dikembangkan selanjutnya:

- integrasi email atau webhook
- CMS / editable content
- analytics
- SEO metadata yang lebih lengkap
- deployment pipeline

## License

Project ini menggunakan lisensi [MIT](./LICENSE).
