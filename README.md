# APS Home Shopping Manager

Mobile-first browser app for managing home shopping, with camera scan, USB barcode scanner support, and manual no-EAN products.

## Features

- Polish is the default language
- English can be enabled from the flag button in the header
- Shopping list flow:
  - default quantity is `1`
  - quantity can be increased/decreased later
  - `Remove` deletes item from list
  - `Bought` changes status and keeps bought items at bottom
- Camera scan:
  - opens device camera
  - scans `EAN-8`, `EAN-13`, and `QR`
  - validates EAN checksum before adding
- USB barcode scanner support:
  - works with keyboard-style USB scanners
  - click the USB input, scan code, and confirm with `Enter`
  - supports EAN and `NOEAN:<id>` values
- Optional EAN product name lookup:
  - can be turned on/off in UI
  - tries multiple Open Facts sources
  - opens a confirmation step so the name can be corrected before adding
  - confirmed names are cached in browser storage for future scans
- No-EAN subpage:
  - manually add products (fruit, vegetables, bakery etc.)
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
- Camera scanning uses `html5-qrcode` for better mobile browser support.
- USB scanners are handled as keyboard input in the browser.
