# APS Home Shopping Manager

Mobile-first browser app for managing home shopping, with camera scan and manual no-EAN products.

## Features

- Shopping list flow:
  - default quantity is `1`
  - quantity can be increased/decreased later
  - `Cancel` removes item from list
  - `Bought` changes status and keeps bought items at bottom
- Camera scan (`Add` button):
  - opens device camera
  - scans `EAN-8`, `EAN-13`, and `QR`
  - validates EAN checksum before adding
- Optional EAN product name lookup:
  - toggle in UI: `Try product name lookup from EAN`
  - uses Open Food Facts API
  - if not found or offline, falls back to `EAN <code>`
- No-EAN subpage:
  - manually add products (fruit/vegetables etc.)
  - each gets numeric ID
  - QR payload format is `NOEAN:<id>`
  - QR can be printed and scanned later

## Run locally

Camera APIs require `https` or `localhost`.

```bash
cd /Users/aps/APSShopScan
python3 -m http.server 8080
```

Open:

- `http://localhost:8080`

## Publish on GitHub Pages

This repository includes workflow: `.github/workflows/deploy-pages.yml`.

1. Push all files to `main` in `https://github.com/AnnPasz/APSShopScan`.
2. In GitHub repo settings, open **Pages**.
3. Set **Source** to **GitHub Actions**.
4. After workflow finishes, app is published at:

- `https://annpasz.github.io/APSShopScan/`

## Notes

- Data is stored in browser `localStorage`.
- Barcode scanning uses `BarcodeDetector` (best in Chromium-based browsers).
- If scanning is unsupported, use a supported mobile/desktop browser (Chrome/Edge).
