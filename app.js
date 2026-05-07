const STORAGE_KEYS = {
  shoppingItems: "aps-shopping-items",
  manualItems: "aps-manual-items",
  manualNextId: "aps-manual-next-id",
  eanLookupEnabled: "aps-ean-lookup-enabled",
  eanLookupCache: "aps-ean-lookup-cache",
  language: "aps-language",
};

const TRANSLATIONS = {
  pl: {
    pageTitle: "APS Lista Zakupów",
    brand: "APLIKACJA ZAKUPOWA",
    appTitle: "Zarządzaj domową listą zakupów",
    navShopping: "Lista zakupów",
    navManual: "Produkty bez EAN",
    cameraCardTitle: "Skanuj i dodaj",
    cameraCardText: "Użyj aparatu, aby skanować kody EAN i QR.",
    cameraButton: "Aparat",
    usbCardTitle: "Skaner USB",
    usbCardText: "Kliknij pole, zeskanuj kod i zatwierdź Enterem.",
    usbFocusButton: "Aktywuj",
    usbPlaceholder: "Zeskanuj lub wpisz kod EAN / NOEAN i naciśnij Enter",
    usbReady: "Pole aktywne. Możesz skanować skanerem USB.",
    usbWaiting: "Czekam na skan z czytnika USB albo wpisanie kodu.",
    usbProcessing: "Przetwarzam zeskanowany kod...",
    lookupToggleLabel: "Próbuj wyszukać nazwę produktu po EAN (opcjonalnie)",
    lookupEnabled: "Wyszukiwanie nazwy po EAN jest włączone.",
    lookupDisabled: "Wyszukiwanie nazwy po EAN jest wyłączone. Zostanie użyty kod EAN jako nazwa.",
    lookupSearching: "Szukam nazwy produktu dla EAN {code}...",
    lookupFound: "Znaleziono nazwę produktu: {name}",
    lookupNotFound: "Nie znaleziono pewnej nazwy dla EAN {code}. Potwierdź nazwę ręcznie.",
    lookupSuggestedBy: "Sugestia z: {source}",
    lookupNoReliable: "Nie znaleziono wiarygodnego dopasowania online",
    lookupDisabledMeta: "Wyszukiwanie wyłączone",
    lookupSourceUser: "własne potwierdzenie",
    lookupCachedSuffix: " (z pamięci)",
    manualTitle: "Dodaj produkt bez EAN",
    manualPlaceholder: "np. Banany",
    manualSubmit: "Dodaj produkt bez EAN",
    manualHelp: "Każdy produkt dostaje ID i kod QR z treścią NOEAN:<id>.",
    scannerTitle: "Skanuj kod kreskowy / QR",
    scannerCancel: "Anuluj",
    scannerDefaultStatus: "Skieruj aparat na kod EAN albo QR NOEAN.",
    scannerRunning: "Skanowanie... ustaw kod w kadrze.",
    confirmTitle: "Potwierdź zeskanowany produkt",
    confirmClose: "Zamknij",
    confirmNameLabel: "Nazwa produktu",
    confirmPlaceholder: "W razie potrzeby popraw nazwę produktu",
    confirmCancel: "Anuluj",
    confirmAdd: "Dodaj do listy",
    confirmCode: "Kod: {code}",
    noItems: "Brak produktów. Kliknij Aparat albo użyj skanera USB, aby dodać pierwszy produkt.",
    noManualItems: "Nie dodano jeszcze produktów bez EAN.",
    statusPending: "Do kupienia",
    statusBought: "Kupiono",
    cancelButton: "Usuń",
    boughtButton: "Kupione",
    eanProductMeta: "Produkt {format}",
    manualItemMeta: "Produkt własny #{id}",
    addToList: "Dodaj do listy",
    printQr: "Drukuj QR",
    invalidEan: "Zeskanowano nieprawidłowy EAN: {code}",
    qrNotRecognized: "QR nierozpoznany. Oczekiwano NOEAN:<id>.",
    unsupportedFormat: "Nieobsługiwany format: {format}",
    cameraRequiresHttps: "Aparat wymaga HTTPS albo localhost.",
    scannerLibraryLoading: "Biblioteka skanera jeszcze się ładuje. Spróbuj ponownie za chwilę.",
    cameraNotAvailable: "API aparatu nie jest dostępne w tej przeglądarce.",
    openCameraFailed: "Nie udało się otworzyć aparatu: {message}",
    printTitle: "Drukuj QR {id}",
    printIdLabel: "ID",
    printPayloadLabel: "Treść",
    languageSwitchLabel: "Przełącz na angielski"
  },
  en: {
    pageTitle: "APS Shopping List",
    brand: "SHOPPING APP",
    appTitle: "Manage your home shopping",
    navShopping: "Shopping List",
    navManual: "No-EAN Items",
    cameraCardTitle: "Scan & Add",
    cameraCardText: "Use your camera to scan EAN and QR codes.",
    cameraButton: "Camera",
    usbCardTitle: "USB Scanner",
    usbCardText: "Click the field, scan the code, then confirm with Enter.",
    usbFocusButton: "Activate",
    usbPlaceholder: "Scan or type EAN / NOEAN code and press Enter",
    usbReady: "Field is active. You can scan with a USB barcode scanner.",
    usbWaiting: "Waiting for a USB scanner scan or typed code.",
    usbProcessing: "Processing scanned code...",
    lookupToggleLabel: "Try product name lookup from EAN (optional)",
    lookupEnabled: "EAN name lookup is enabled.",
    lookupDisabled: "EAN name lookup is disabled. The EAN code will be used as the product name.",
    lookupSearching: "Looking up product name for EAN {code}...",
    lookupFound: "Found product name: {name}",
    lookupNotFound: "No reliable product name found for EAN {code}. Please confirm it manually.",
    lookupSuggestedBy: "Suggested by: {source}",
    lookupNoReliable: "No reliable online match found",
    lookupDisabledMeta: "Lookup disabled",
    lookupSourceUser: "manual confirmation",
    lookupCachedSuffix: " (cached)",
    manualTitle: "Add product without EAN",
    manualPlaceholder: "e.g. Bananas",
    manualSubmit: "Add no-EAN item",
    manualHelp: "Each product gets an ID and QR content NOEAN:<id>.",
    scannerTitle: "Scan barcode / QR",
    scannerCancel: "Cancel",
    scannerDefaultStatus: "Point the camera at an EAN code or a NOEAN QR code.",
    scannerRunning: "Scanning... align the code inside the frame.",
    confirmTitle: "Confirm scanned item",
    confirmClose: "Close",
    confirmNameLabel: "Product name",
    confirmPlaceholder: "Edit the product name if needed",
    confirmCancel: "Cancel",
    confirmAdd: "Add to list",
    confirmCode: "Code: {code}",
    noItems: "No items yet. Tap Camera or use the USB scanner to add the first product.",
    noManualItems: "No manual items added yet.",
    statusPending: "Pending",
    statusBought: "Bought",
    cancelButton: "Remove",
    boughtButton: "Bought",
    eanProductMeta: "{format} product",
    manualItemMeta: "Manual item #{id}",
    addToList: "Add to list",
    printQr: "Print QR",
    invalidEan: "Invalid EAN scanned: {code}",
    qrNotRecognized: "QR not recognized. Expected NOEAN:<id>.",
    unsupportedFormat: "Unsupported format: {format}",
    cameraRequiresHttps: "Camera requires HTTPS or localhost.",
    scannerLibraryLoading: "Scanner library is still loading. Please try again in a moment.",
    cameraNotAvailable: "Camera API is not available in this browser.",
    openCameraFailed: "Could not open camera: {message}",
    printTitle: "Print QR {id}",
    printIdLabel: "ID",
    printPayloadLabel: "Payload",
    languageSwitchLabel: "Switch to Polish"
  }
};

const state = {
  shoppingItems: [],
  manualItems: [],
  manualNextId: 1000,
  scanning: false,
  scannerInstance: null,
  eanLookupEnabled: true,
  eanLookupCache: {},
  pendingScannedItem: null,
  language: "pl"
};

const elements = {
  brandLabel: document.getElementById("brand-label"),
  appTitle: document.getElementById("app-title"),
  languageToggle: document.getElementById("language-toggle"),
  navShopping: document.getElementById("nav-shopping"),
  navManual: document.getElementById("nav-manual"),
  shoppingView: document.getElementById("shopping-view"),
  manualView: document.getElementById("manual-view"),
  cameraCardTitle: document.getElementById("camera-card-title"),
  cameraCardText: document.getElementById("camera-card-text"),
  addScanBtn: document.getElementById("add-scan-btn"),
  usbCardTitle: document.getElementById("usb-card-title"),
  usbCardText: document.getElementById("usb-card-text"),
  usbFocusBtn: document.getElementById("usb-focus-btn"),
  usbScanInput: document.getElementById("usb-scan-input"),
  usbStatus: document.getElementById("usb-status"),
  shoppingList: document.getElementById("shopping-list"),
  manualTitle: document.getElementById("manual-title"),
  manualForm: document.getElementById("manual-form"),
  manualName: document.getElementById("manual-name"),
  manualSubmitBtn: document.getElementById("manual-submit-btn"),
  manualHelp: document.getElementById("manual-help"),
  manualItems: document.getElementById("manual-items"),
  lookupToggleLabel: document.getElementById("lookup-toggle-label"),
  eanLookupEnabled: document.getElementById("ean-lookup-enabled"),
  lookupStatus: document.getElementById("lookup-status"),
  scannerModal: document.getElementById("scanner-modal"),
  scannerTitle: document.getElementById("scanner-title"),
  closeScanBtn: document.getElementById("close-scan-btn"),
  scannerReader: document.getElementById("scanner-reader"),
  scanStatus: document.getElementById("scan-status"),
  confirmScanModal: document.getElementById("confirm-scan-modal"),
  confirmTitle: document.getElementById("confirm-title"),
  confirmScanCode: document.getElementById("confirm-scan-code"),
  confirmNameLabel: document.getElementById("confirm-name-label"),
  confirmScanName: document.getElementById("confirm-scan-name"),
  confirmScanSource: document.getElementById("confirm-scan-source"),
  confirmScanAdd: document.getElementById("confirm-scan-add"),
  confirmScanCancel: document.getElementById("confirm-scan-cancel"),
  confirmScanCancelTop: document.getElementById("confirm-scan-cancel-top")
};

init();

function init() {
  loadState();
  bindEvents();
  applyLanguage();
  renderAll();
  setLookupStatusDefault();
  setUsbStatus(t("usbWaiting"));
}

function bindEvents() {
  elements.navShopping.addEventListener("click", () => showView("shopping"));
  elements.navManual.addEventListener("click", () => showView("manual"));
  elements.languageToggle.addEventListener("click", toggleLanguage);
  elements.addScanBtn.addEventListener("click", openScanner);
  elements.closeScanBtn.addEventListener("click", closeScanner);
  elements.manualForm.addEventListener("submit", onAddManualItem);
  elements.eanLookupEnabled.addEventListener("change", onLookupToggleChanged);
  elements.confirmScanAdd.addEventListener("click", confirmPendingScannedItem);
  elements.confirmScanCancel.addEventListener("click", clearPendingScannedItem);
  elements.confirmScanCancelTop.addEventListener("click", clearPendingScannedItem);
  elements.usbFocusBtn.addEventListener("click", focusUsbInput);
  elements.usbScanInput.addEventListener("keydown", onUsbInputKeyDown);
}

function loadState() {
  state.shoppingItems = readJson(STORAGE_KEYS.shoppingItems, []);
  state.manualItems = readJson(STORAGE_KEYS.manualItems, []);
  state.eanLookupCache = readJson(STORAGE_KEYS.eanLookupCache, {});

  const nextId = Number(localStorage.getItem(STORAGE_KEYS.manualNextId));
  if (!Number.isNaN(nextId) && nextId > 0) {
    state.manualNextId = nextId;
  }

  const lookupRaw = localStorage.getItem(STORAGE_KEYS.eanLookupEnabled);
  if (lookupRaw === "false") {
    state.eanLookupEnabled = false;
  }

  const language = localStorage.getItem(STORAGE_KEYS.language);
  if (language && TRANSLATIONS[language]) {
    state.language = language;
  }

  elements.eanLookupEnabled.checked = state.eanLookupEnabled;
}

function persistState() {
  localStorage.setItem(STORAGE_KEYS.shoppingItems, JSON.stringify(state.shoppingItems));
  localStorage.setItem(STORAGE_KEYS.manualItems, JSON.stringify(state.manualItems));
  localStorage.setItem(STORAGE_KEYS.manualNextId, String(state.manualNextId));
  localStorage.setItem(STORAGE_KEYS.eanLookupEnabled, String(state.eanLookupEnabled));
  localStorage.setItem(STORAGE_KEYS.eanLookupCache, JSON.stringify(state.eanLookupCache));
  localStorage.setItem(STORAGE_KEYS.language, state.language);
}

function t(key, vars = {}) {
  const dictionary = TRANSLATIONS[state.language] || TRANSLATIONS.pl;
  const template = dictionary[key] || key;
  return Object.entries(vars).reduce((result, [name, value]) => {
    return result.replaceAll(`{${name}}`, String(value));
  }, template);
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.title = t("pageTitle");
  elements.brandLabel.textContent = t("brand");
  elements.appTitle.textContent = t("appTitle");
  elements.navShopping.textContent = t("navShopping");
  elements.navManual.textContent = t("navManual");
  elements.cameraCardTitle.textContent = t("cameraCardTitle");
  elements.cameraCardText.textContent = t("cameraCardText");
  elements.addScanBtn.textContent = t("cameraButton");
  elements.usbCardTitle.textContent = t("usbCardTitle");
  elements.usbCardText.textContent = t("usbCardText");
  elements.usbFocusBtn.textContent = t("usbFocusButton");
  elements.usbScanInput.placeholder = t("usbPlaceholder");
  elements.lookupToggleLabel.textContent = t("lookupToggleLabel");
  elements.manualTitle.textContent = t("manualTitle");
  elements.manualName.placeholder = t("manualPlaceholder");
  elements.manualSubmitBtn.textContent = t("manualSubmit");
  elements.manualHelp.textContent = t("manualHelp");
  elements.scannerTitle.textContent = t("scannerTitle");
  elements.closeScanBtn.textContent = t("scannerCancel");
  elements.scanStatus.textContent = state.scanning ? t("scannerRunning") : t("scannerDefaultStatus");
  elements.confirmTitle.textContent = t("confirmTitle");
  elements.confirmScanCancelTop.textContent = t("confirmClose");
  elements.confirmNameLabel.textContent = t("confirmNameLabel");
  elements.confirmScanName.placeholder = t("confirmPlaceholder");
  elements.confirmScanCancel.textContent = t("confirmCancel");
  elements.confirmScanAdd.textContent = t("confirmAdd");
  elements.languageToggle.textContent = state.language === "pl" ? "🇬🇧" : "🇵🇱";
  elements.languageToggle.setAttribute("aria-label", t("languageSwitchLabel"));
  elements.languageToggle.title = t("languageSwitchLabel");
  if (state.pendingScannedItem && elements.confirmScanModal.open) {
    fillConfirmScanModal();
  }
}

function toggleLanguage() {
  state.language = state.language === "pl" ? "en" : "pl";
  persistState();
  applyLanguage();
  renderAll();
  setLookupStatusDefault();
  setUsbStatus(t("usbWaiting"));
}

function showView(view) {
  const isShopping = view === "shopping";
  elements.shoppingView.classList.toggle("hidden", !isShopping);
  elements.manualView.classList.toggle("hidden", isShopping);
  elements.navShopping.classList.toggle("active", isShopping);
  elements.navManual.classList.toggle("active", !isShopping);
}

function onLookupToggleChanged(event) {
  state.eanLookupEnabled = event.currentTarget.checked;
  persistState();
  setLookupStatusDefault();
}

function setLookupStatusDefault() {
  elements.lookupStatus.textContent = state.eanLookupEnabled ? t("lookupEnabled") : t("lookupDisabled");
}

function focusUsbInput() {
  elements.usbScanInput.focus();
  elements.usbScanInput.select();
  setUsbStatus(t("usbReady"));
}

async function onUsbInputKeyDown(event) {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();
  const code = elements.usbScanInput.value.trim();
  if (!code) {
    return;
  }

  setUsbStatus(t("usbProcessing"));
  const format = inferInputFormat(code);
  const success = await handleScanResult(code, format, "usb");
  elements.usbScanInput.value = "";

  if (success && state.pendingScannedItem) {
    openConfirmScanModal();
  }

  if (!success) {
    focusUsbInput();
  } else {
    setUsbStatus(t("usbReady"));
  }
}

function inferInputFormat(code) {
  const trimmed = String(code).trim();
  if (/^NOEAN:\d+$/i.test(trimmed)) {
    return "qr_code";
  }

  if (/^\d+$/.test(trimmed)) {
    if (trimmed.length === 13) {
      return "ean_13";
    }
    if (trimmed.length === 8) {
      return "ean_8";
    }
    if (state.manualItems.some((item) => String(item.id) === trimmed)) {
      return "qr_code";
    }
  }

  return "unknown";
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
    elements.shoppingList.innerHTML = `<li class="item-card">${escapeHtml(t("noItems"))}</li>`;
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
            <span class="status-pill ${isBought ? "bought" : "pending"}">${isBought ? escapeHtml(t("statusBought")) : escapeHtml(t("statusPending"))}</span>
          </div>

          <div class="item-controls">
            <div class="qty-box">
              <button class="small-btn" data-action="dec-qty" data-id="${item.id}">−</button>
              <strong>${item.qty}</strong>
              <button class="small-btn" data-action="inc-qty" data-id="${item.id}">+</button>
            </div>

            <button class="small-btn danger" data-action="cancel" data-id="${item.id}">${escapeHtml(t("cancelButton"))}</button>
            <button class="small-btn ok" data-action="bought" data-id="${item.id}" ${isBought ? "disabled" : ""}>${escapeHtml(t("boughtButton"))}</button>
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
    alert(t("cameraRequiresHttps"));
    return;
  }

  if (!("Html5Qrcode" in window)) {
    alert(t("scannerLibraryLoading"));
    return;
  }

  if (!("mediaDevices" in navigator) || !("getUserMedia" in navigator.mediaDevices)) {
    alert(t("cameraNotAvailable"));
    return;
  }

  try {
    elements.scannerModal.showModal();
    state.scanning = true;
    elements.scanStatus.textContent = t("scannerRunning");
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
          Html5QrcodeSupportedFormats.QR_CODE
        ]
      },
      async (decodedText, decodedResult) => {
        if (!state.scanning) {
          return;
        }

        const format = mapHtml5Format(decodedResult?.result?.format?.formatName);
        if (await handleScanResult(decodedText || "", format)) {
          await closeScanner();
          if (state.pendingScannedItem) {
            openConfirmScanModal();
          }
        }
      },
      () => {}
    );
  } catch (error) {
    alert(t("openCameraFailed", { message: error.message }));
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

  elements.scanStatus.textContent = t("scannerDefaultStatus");
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

  const effectiveFormat = format && format !== "unknown" ? format : inferInputFormat(code);

  if (effectiveFormat === "ean_13" || effectiveFormat === "ean_8") {
    if (!isValidEan(code)) {
      const message = t("invalidEan", { code });
      elements.scanStatus.textContent = message;
      setUsbStatus(message);
      return false;
    }

    let productName = `EAN ${code}`;
    let lookupMeta = t("lookupDisabledMeta");
    if (state.eanLookupEnabled) {
      elements.lookupStatus.textContent = t("lookupSearching", { code });
      const lookup = await lookupProductNameByEan(code);
      if (lookup.name) {
        productName = lookup.name;
        lookupMeta = t("lookupSuggestedBy", { source: lookup.sourceLabel });
        elements.lookupStatus.textContent = t("lookupFound", { name: lookup.name });
      } else {
        lookupMeta = t("lookupNoReliable");
        elements.lookupStatus.textContent = t("lookupNotFound", { code });
      }
    }

    state.pendingScannedItem = {
      name: productName,
      meta: t("eanProductMeta", { format: effectiveFormat.toUpperCase() }),
      source: "ean",
      sourceCode: code,
      lookupMeta
    };

    return true;
  }

  if (effectiveFormat === "qr_code") {
    const mapped = mapQrToManualItem(code);
    if (!mapped) {
      const message = t("qrNotRecognized");
      elements.scanStatus.textContent = message;
      setUsbStatus(message);
      return false;
    }

    addShoppingItem({
      name: mapped.name,
      meta: t("manualItemMeta", { id: mapped.id }),
      source: "manual",
      sourceCode: String(mapped.id)
    });

    return true;
  }

  const message = t("unsupportedFormat", { format: effectiveFormat });
  elements.scanStatus.textContent = message;
  setUsbStatus(message);
  return false;
}

async function lookupProductNameByEan(eanCode) {
  const cached = state.eanLookupCache[eanCode];
  if (cached?.name) {
    return {
      name: cached.name,
      sourceLabel: formatLookupSourceLabel(cached.source, true)
    };
  }

  const sources = [
    { label: "Open Food Facts", endpoint: `https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(eanCode)}.json` },
    { label: "Open Beauty Facts", endpoint: `https://world.openbeautyfacts.org/api/v2/product/${encodeURIComponent(eanCode)}.json` },
    { label: "Open Pet Food Facts", endpoint: `https://world.openpetfoodfacts.org/api/v2/product/${encodeURIComponent(eanCode)}.json` }
  ];

  for (const source of sources) {
    const lookup = await fetchLookupCandidate(source.endpoint);
    if (lookup.name) {
      state.eanLookupCache[eanCode] = { name: lookup.name, source: source.label };
      persistState();
      return { name: lookup.name, sourceLabel: source.label };
    }
  }

  return { name: null, sourceLabel: null };
}

function formatLookupSourceLabel(source, isCached = false) {
  const base = source === "User" ? t("lookupSourceUser") : source;
  return isCached ? `${base}${t("lookupCachedSuffix")}` : base;
}

async function fetchLookupCandidate(endpoint) {
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), 3500);

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      signal: timeoutController.signal,
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      return { name: null };
    }

    const data = await response.json();
    const candidates = [
      data?.product?.product_name,
      data?.product?.product_name_pl,
      data?.product?.product_name_en,
      data?.product?.generic_name,
      data?.product?.generic_name_pl,
      data?.product?.generic_name_en,
      data?.product?.abbreviated_product_name,
      data?.product?.brands
    ];

    const name = candidates.find((value) => value && String(value).trim());
    if (!name) {
      return { name: null };
    }

    return { name: cleanLookupName(String(name)) };
  } catch {
    return { name: null };
  } finally {
    clearTimeout(timeoutId);
  }
}

function cleanLookupName(value) {
  return String(value)
    .replace(/\s+/g, " ")
    .replace(/^[\-–—\s]+|[\-–—\s]+$/g, "")
    .trim();
}

function openConfirmScanModal() {
  if (!state.pendingScannedItem) {
    return;
  }

  fillConfirmScanModal();
  elements.confirmScanModal.showModal();
  elements.confirmScanName.focus();
  elements.confirmScanName.select();
}

function fillConfirmScanModal() {
  if (!state.pendingScannedItem) {
    return;
  }

  elements.confirmScanCode.textContent = t("confirmCode", { code: state.pendingScannedItem.sourceCode });
  elements.confirmScanName.value = state.pendingScannedItem.name;
  elements.confirmScanSource.textContent = state.pendingScannedItem.lookupMeta;
}

function clearPendingScannedItem() {
  state.pendingScannedItem = null;
  if (elements.confirmScanModal.open) {
    elements.confirmScanModal.close();
  }
}

function confirmPendingScannedItem() {
  if (!state.pendingScannedItem) {
    return;
  }

  const confirmedName = elements.confirmScanName.value.trim() || `EAN ${state.pendingScannedItem.sourceCode}`;
  if (state.pendingScannedItem.source === "ean") {
    state.eanLookupCache[state.pendingScannedItem.sourceCode] = {
      name: confirmedName,
      source: "User"
    };
  }

  addShoppingItem({
    ...state.pendingScannedItem,
    name: confirmedName,
    meta: `${state.pendingScannedItem.meta} • ${state.pendingScannedItem.lookupMeta}`
  });

  persistState();
  clearPendingScannedItem();
  setUsbStatus(t("usbReady"));
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

  if (trimmed.toUpperCase().startsWith("NOEAN:")) {
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
    createdAt: Date.now()
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
    createdAt: Date.now()
  };

  state.manualItems.push(item);
  state.manualNextId += 1;
  elements.manualName.value = "";

  persistState();
  renderManualItems();
}

function renderManualItems() {
  if (!state.manualItems.length) {
    elements.manualItems.innerHTML = `<li class="item-card">${escapeHtml(t("noManualItems"))}</li>`;
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
              <div class="item-meta">${escapeHtml(t("manualItemMeta", { id: item.id }))}</div>
            </div>
          </div>
          <img class="manual-qr" alt="QR for ${escapeHtml(item.name)}" src="${qrUrl}" />
          <div class="item-controls">
            <button class="small-btn" data-manual-add="${item.id}">${escapeHtml(t("addToList"))}</button>
            <button class="small-btn" data-manual-print="${item.id}">${escapeHtml(t("printQr"))}</button>
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
        meta: t("manualItemMeta", { id: item.id }),
        source: "manual",
        sourceCode: String(item.id)
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
    <html lang="${state.language}">
      <head>
        <title>${escapeHtml(t("printTitle", { id: item.id }))}</title>
        <style>
          body { font-family: Arial, sans-serif; display: grid; place-items: center; padding: 24px; }
          h1 { font-size: 20px; margin: 0 0 10px; }
          p { margin: 6px 0; }
          img { width: 280px; height: 280px; }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(item.name)}</h1>
        <p>${escapeHtml(t("printIdLabel"))}: ${item.id}</p>
        <p>${escapeHtml(t("printPayloadLabel"))}: ${payload}</p>
        <img src="${qrUrl}" alt="QR ${item.id}" />
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function setUsbStatus(message) {
  elements.usbStatus.textContent = message;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
