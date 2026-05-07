const STORAGE_KEYS = {
  shoppingItems: "aps-shopping-items",
  manualItems: "aps-manual-items",
  manualNextId: "aps-manual-next-id",
  eanLookupEnabled: "aps-ean-lookup-enabled",
};

const state = {
  shoppingItems: [],
  manualItems: [],
  manualNextId: 1000,
  scanning: false,
  scannerInstance: null,
  eanLookupEnabled: true,
};

const elements = {
  navShopping: document.getElementById("nav-shopping"),
  navManual: document.getElementById("nav-manual"),
  shoppingView: document.getElementById("shopping-view"),
  manualView: document.getElementById("manual-view"),
  addScanBtn: document.getElementById("add-scan-btn"),
  shoppingList: document.getElementById("shopping-list"),
  manualForm: document.getElementById("manual-form"),
  manualName: document.getElementById("manual-name"),
  manualItems: document.getElementById("manual-items"),
  scannerModal: document.getElementById("scanner-modal"),
  closeScanBtn: document.getElementById("close-scan-btn"),
  scannerReader: document.getElementById("scanner-reader"),
  scanStatus: document.getElementById("scan-status"),
  eanLookupEnabled: document.getElementById("ean-lookup-enabled"),
  lookupStatus: document.getElementById("lookup-status"),
};

init();

function init() {
  loadState();
  bindEvents();
  elements.lookupStatus.textContent = state.eanLookupEnabled
    ? "EAN lookup is enabled."
    : "EAN lookup is disabled. Scans will use EAN code as name.";
  renderAll();
}

function bindEvents() {
  elements.navShopping.addEventListener("click", () => showView("shopping"));
  elements.navManual.addEventListener("click", () => showView("manual"));
  elements.addScanBtn.addEventListener("click", openScanner);
  elements.closeScanBtn.addEventListener("click", closeScanner);
  elements.manualForm.addEventListener("submit", onAddManualItem);
  elements.eanLookupEnabled.addEventListener("change", onLookupToggleChanged);
}

function showView(view) {
  const isShopping = view === "shopping";
  elements.shoppingView.classList.toggle("hidden", !isShopping);
  elements.manualView.classList.toggle("hidden", isShopping);
  elements.navShopping.classList.toggle("active", isShopping);
  elements.navManual.classList.toggle("active", !isShopping);
}

function loadState() {
  state.shoppingItems = readJson(STORAGE_KEYS.shoppingItems, []);
  state.manualItems = readJson(STORAGE_KEYS.manualItems, []);
  const nextId = Number(localStorage.getItem(STORAGE_KEYS.manualNextId));
  if (!Number.isNaN(nextId) && nextId > 0) {
    state.manualNextId = nextId;
  }

  const lookupRaw = localStorage.getItem(STORAGE_KEYS.eanLookupEnabled);
  if (lookupRaw === "false") {
    state.eanLookupEnabled = false;
  }

  elements.eanLookupEnabled.checked = state.eanLookupEnabled;
}

function persistState() {
  localStorage.setItem(STORAGE_KEYS.shoppingItems, JSON.stringify(state.shoppingItems));
  localStorage.setItem(STORAGE_KEYS.manualItems, JSON.stringify(state.manualItems));
  localStorage.setItem(STORAGE_KEYS.manualNextId, String(state.manualNextId));
  localStorage.setItem(STORAGE_KEYS.eanLookupEnabled, String(state.eanLookupEnabled));
}

function onLookupToggleChanged(event) {
  state.eanLookupEnabled = event.currentTarget.checked;
  persistState();
  elements.lookupStatus.textContent = state.eanLookupEnabled
    ? "EAN lookup is enabled."
    : "EAN lookup is disabled. Scans will use EAN code as name.";
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      return fallback;
    }
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function renderAll() {
  renderShoppingList();
  renderManualItems();
}

function getSortedShoppingItems() {
  const pending = state.shoppingItems.filter((item) => item.status !== "bought");
  const bought = state.shoppingItems.filter((item) => item.status === "bought");
  return [...pending, ...bought];
}

function renderShoppingList() {
  const sorted = getSortedShoppingItems();
  if (!sorted.length) {
    elements.shoppingList.innerHTML = `<li class="item-card">No items yet. Click <strong>Add (Scan Camera)</strong> to start.</li>`;
    return;
  }

  elements.shoppingList.innerHTML = sorted
    .map((item) => {
      const isBought = item.status === "bought";
      return `
        <li class="item-card">
          <div class="item-top">
            <div>
              <div class="item-name">${escapeHtml(item.name)}</div>
              <div class="item-meta">${escapeHtml(item.meta || "")}</div>
            </div>
            <span class="status-pill ${isBought ? "bought" : "pending"}">${isBought ? "Bought" : "Pending"}</span>
          </div>

          <div class="item-controls">
            <div class="qty-box">
              <button class="small-btn" data-action="dec-qty" data-id="${item.id}">−</button>
              <strong>${item.qty}</strong>
              <button class="small-btn" data-action="inc-qty" data-id="${item.id}">+</button>
            </div>

            <button class="small-btn danger" data-action="cancel" data-id="${item.id}">Cancel</button>
            <button class="small-btn ok" data-action="bought" data-id="${item.id}" ${isBought ? "disabled" : ""}>Bought</button>
          </div>
        </li>
      `;
    })
    .join("");

  elements.shoppingList.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", onShoppingAction);
  });
}

function onShoppingAction(event) {
  const action = event.currentTarget.dataset.action;
  const itemId = event.currentTarget.dataset.id;
  const index = state.shoppingItems.findIndex((item) => item.id === itemId);

  if (index === -1) {
    return;
  }

  if (action === "inc-qty") {
    state.shoppingItems[index].qty += 1;
  }

  if (action === "dec-qty") {
    state.shoppingItems[index].qty = Math.max(1, state.shoppingItems[index].qty - 1);
  }

  if (action === "cancel") {
    state.shoppingItems.splice(index, 1);
  }

  if (action === "bought") {
    state.shoppingItems[index].status = "bought";
    state.shoppingItems[index].boughtAt = Date.now();
  }

  persistState();
  renderShoppingList();
}

async function openScanner() {
  if (!window.isSecureContext && location.hostname !== "localhost") {
    alert("Camera requires HTTPS or localhost.");
    return;
  }

  if (!("Html5Qrcode" in window)) {
    alert("Scanner library is not loaded yet. Please wait a moment and try again.");
    return;
  }

  if (!("mediaDevices" in navigator) || !("getUserMedia" in navigator.mediaDevices)) {
    alert("Camera API not available in this browser.");
    return;
  }

  try {
    elements.scannerModal.showModal();
    state.scanning = true;
    elements.scanStatus.textContent = "Scanning... align barcode/QR inside frame.";
    elements.scannerReader.innerHTML = "";

    state.scannerInstance = new Html5Qrcode("scanner-reader");
    await state.scannerInstance.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: { width: 240, height: 160 },
        aspectRatio: 1.777778,
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
        formatsToSupport: [
          Html5QrcodeSupportedFormats.EAN_13,
          Html5QrcodeSupportedFormats.EAN_8,
          Html5QrcodeSupportedFormats.QR_CODE,
        ],
      },
      async (decodedText, decodedResult) => {
        if (!state.scanning) {
          return;
        }

        const format = mapHtml5Format(decodedResult?.result?.format?.formatName);
        if (await handleScanResult(decodedText || "", format)) {
          await closeScanner();
        }
      },
      () => {}
    );
  } catch (error) {
    alert(`Could not open camera: ${error.message}`);
    await closeScanner();
  }
}

async function closeScanner() {
  state.scanning = false;

  if (state.scannerInstance) {
    try {
      if (state.scannerInstance.isScanning) {
        await state.scannerInstance.stop();
      }
      await state.scannerInstance.clear();
    } catch {
      elements.scannerReader.innerHTML = "";
    }
    state.scannerInstance = null;
  }

  if (elements.scannerModal.open) {
    elements.scannerModal.close();
  }
}

function mapHtml5Format(formatName) {
  const normalized = String(formatName || "").toUpperCase();
  if (normalized === "EAN_13") {
    return "ean_13";
  }
  if (normalized === "EAN_8") {
    return "ean_8";
  }
  if (normalized === "QR_CODE") {
    return "qr_code";
  }
  return normalized.toLowerCase();
}

async function handleScanResult(rawValue, format) {
  const code = String(rawValue || "").trim();
  if (!code) {
    return false;
  }

  if (format === "ean_13" || format === "ean_8") {
    if (!isValidEan(code)) {
      elements.scanStatus.textContent = `Invalid EAN scanned: ${code}`;
      return false;
    }

    let productName = `EAN ${code}`;
    if (state.eanLookupEnabled) {
      elements.lookupStatus.textContent = `Looking up product name for EAN ${code}...`;
      const lookup = await lookupProductNameByEan(code);
      if (lookup.name) {
        productName = lookup.name;
        elements.lookupStatus.textContent = `Found product name: ${lookup.name}`;
      } else {
        elements.lookupStatus.textContent = `Lookup not found for EAN ${code}. Added with fallback name.`;
      }
    }

    addShoppingItem({
      name: productName,
      meta: `${format.toUpperCase()} product`,
      source: "ean",
      sourceCode: code,
    });

    return true;
  }

  if (format === "qr_code") {
    const mapped = mapQrToManualItem(code);
    if (!mapped) {
      elements.scanStatus.textContent = "QR not recognized. Expected NOEAN:<id>.";
      return false;
    }

    addShoppingItem({
      name: mapped.name,
      meta: `Manual item #${mapped.id}`,
      source: "manual",
      sourceCode: String(mapped.id),
    });

    return true;
  }

  elements.scanStatus.textContent = `Unsupported format: ${format}`;
  return false;
}

async function lookupProductNameByEan(eanCode) {
  const endpoint = `https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(eanCode)}.json`;
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), 4500);

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      signal: timeoutController.signal,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return { name: null };
    }

    const data = await response.json();
    const name =
      data?.product?.product_name ||
      data?.product?.generic_name ||
      data?.product?.abbreviated_product_name ||
      null;

    if (!name || !String(name).trim()) {
      return { name: null };
    }

    return { name: String(name).trim() };
  } catch {
    return { name: null };
  } finally {
    clearTimeout(timeoutId);
  }
}

function isValidEan(code) {
  const digitsOnly = /^\d+$/;
  if (!digitsOnly.test(code)) {
    return false;
  }

  if (code.length !== 8 && code.length !== 13) {
    return false;
  }

  const checkDigit = Number(code.at(-1));
  const payload = code.slice(0, -1);
  let sum = 0;

  for (let i = payload.length - 1, position = 1; i >= 0; i -= 1, position += 1) {
    const digit = Number(payload[i]);
    const weight = position % 2 === 1 ? 3 : 1;
    sum += digit * weight;
  }

  const computed = (10 - (sum % 10)) % 10;
  return computed === checkDigit;
}

function mapQrToManualItem(payload) {
  const trimmed = payload.trim();
  let id = null;

  if (trimmed.startsWith("NOEAN:")) {
    id = Number(trimmed.slice("NOEAN:".length));
  } else if (/^\d+$/.test(trimmed)) {
    id = Number(trimmed);
  }

  if (!id) {
    return null;
  }

  return state.manualItems.find((item) => item.id === id) || null;
}

function addShoppingItem(data) {
  state.shoppingItems.push({
    id: crypto.randomUUID(),
    name: data.name,
    meta: data.meta,
    source: data.source,
    sourceCode: data.sourceCode,
    qty: 1,
    status: "pending",
    createdAt: Date.now(),
  });

  persistState();
  renderShoppingList();
}

function onAddManualItem(event) {
  event.preventDefault();
  const name = elements.manualName.value.trim();
  if (!name) {
    return;
  }

  const item = {
    id: state.manualNextId,
    name,
    createdAt: Date.now(),
  };

  state.manualItems.push(item);
  state.manualNextId += 1;
  elements.manualName.value = "";

  persistState();
  renderManualItems();
}

function renderManualItems() {
  if (!state.manualItems.length) {
    elements.manualItems.innerHTML = `<li class="item-card">No manual items added yet.</li>`;
    return;
  }

  elements.manualItems.innerHTML = state.manualItems
    .slice()
    .sort((a, b) => b.id - a.id)
    .map((item) => {
      const payload = `NOEAN:${item.id}`;
      const qrUrl = buildQrUrl(payload);

      return `
        <li class="item-card">
          <div class="item-top">
            <div>
              <div class="item-name">${escapeHtml(item.name)}</div>
              <div class="item-meta">ID #${item.id}</div>
            </div>
          </div>
          <img class="manual-qr" alt="QR for ${escapeHtml(item.name)}" src="${qrUrl}" />
          <div class="item-controls">
            <button class="small-btn" data-manual-add="${item.id}">Add to shopping list</button>
            <button class="small-btn" data-manual-print="${item.id}">Print QR</button>
          </div>
        </li>
      `;
    })
    .join("");

  elements.manualItems.querySelectorAll("[data-manual-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.manualAdd);
      const item = state.manualItems.find((entry) => entry.id === id);
      if (!item) {
        return;
      }

      addShoppingItem({
        name: item.name,
        meta: `Manual item #${item.id}`,
        source: "manual",
        sourceCode: String(item.id),
      });
      showView("shopping");
    });
  });

  elements.manualItems.querySelectorAll("[data-manual-print]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.manualPrint);
      const item = state.manualItems.find((entry) => entry.id === id);
      if (!item) {
        return;
      }

      printQr(item);
    });
  });
}

function buildQrUrl(data) {
  const encoded = encodeURIComponent(data);
  return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encoded}`;
}

function printQr(item) {
  const payload = `NOEAN:${item.id}`;
  const qrUrl = buildQrUrl(payload);
  const printWindow = window.open("", "_blank", "width=420,height=520");
  if (!printWindow) {
    return;
  }

  printWindow.document.write(`
    <html>
      <head>
        <title>Print QR ${item.id}</title>
        <style>
          body { font-family: Arial, sans-serif; display: grid; place-items: center; padding: 24px; }
          h1 { font-size: 20px; margin: 0 0 10px; }
          p { margin: 6px 0; }
          img { width: 280px; height: 280px; }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(item.name)}</h1>
        <p>ID: ${item.id}</p>
        <p>Payload: ${payload}</p>
        <img src="${qrUrl}" alt="QR ${item.id}" />
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
