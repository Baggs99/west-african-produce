# West African Produce

Storefront for [westafricanproduce.baglini.co](https://westafricanproduce.baglini.co): retail palm oil checkout, Resend receipts, and a staff purchase-order queue at `/admin`.

## Local

```bash
cp .env.example .env
npm install
npm run dev
```

Shop: http://localhost:5173  
Orders: http://localhost:5173/admin

Stripe test card: `4242 4242 4242 4242`.

## Render

This app is a **Node web service**, not a static site. Checkout, webhooks, and receipts need a running process.

- Build: `npm install --include=dev && npm run build`
- Start: `node wap-server/production.js`
- Domain: `westafricanproduce.baglini.co`
- Env: copy from `.env.example`, including `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`
- Stripe webhook: `https://westafricanproduce.baglini.co/api/wap/stripe-webhook` for `checkout.session.completed` and `checkout.session.expired`
