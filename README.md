# SYAURA — Handcrafted Luxury Chocolates

A luxury, editorial landing page website for **SYAURA Handcrafted Chocolates** ("Small Bites. Big Emotions. Luxury in Every Bite"), inspired by the visual design and layout of Mimi Cafe & Bistro and themed in SYAURA's luxury olive green rigid gift box.

## Key Features

- **Mimi Cafe & Bistro 1:1 Layout & Aesthetic**: Dark atmospheric luxury aesthetic, ambient green backdrops, gold foil accents, metallic dividers, card hovers, and animated color-changing text (`.shimmer-text`).
- **Luxury Olive Box Theme**: Palette directly sampled from the SYAURA luxury box (`#0b1811`, `#0f2017`, `#183124`, `#244634`), with champagne ivory and warm metallic gold.
- **Hand-Free Authentic Photography**: All authentic chocolate photos have been cropped and enhanced (zero hands or distracting backgrounds), presenting only the delicious artisanal chocolates.
- **Refined Terminology**: Replaced the technical term "cavity" everywhere with **"4 & 6 Piece Gift Boxes"** and **"Bar Boxes"**.
- **Accurate Menu Card Pricing**:
  - **4 & 6 Piece Gift Boxes**: Oreo Ball (₹139 / ₹169), Mix Dry Fruit (₹179 / ₹199), Oreo Classic (₹119 / ₹139), Roasted Almond (₹169 / ₹199), Lotus Biscoff (₹199 / ₹239), Diamond Hearts (₹149 / ₹189).
  - **Bar Boxes**: Bar Box Mix Dry Fruit 11 Pcs (₹210), Bar Box Oreo 11 Pcs (₹169), Bar Box Modak Dry Fruits 21 Pcs (₹249).
- **Direct Order & Inquiry Backend Flow**: Removed the e-commerce bag in favor of an order & custom gifting inquiry form connected to `POST /api/inquiries` with direct Instagram and Email concierge confirmation.
- **Laptop View Optimized**: Scaled typography, generous line-heights, and crisp readability on laptop/desktop displays.

## Running Locally

```powershell
npm start
```

Open `http://localhost:3000` in your web browser.

## Backend Endpoints

- `GET /api/products` — Product catalog with descriptions, pricing, and image paths
- `POST /api/inquiries` — Records customer order/gifting inquiries into `data/inquiries.json` with direct Instagram & Email concierge integration
- `GET /api/inquiries/track` — Status inquiry tracking lookup by reference ID or Email
- `GET /api/health` — Server status and timestamp
