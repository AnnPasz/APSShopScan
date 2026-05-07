const STORAGE_KEYS = {
  shoppingItems: "aps-shopping-items",
  manualItems: "aps-manual-items",
  manualNextId: "aps-manual-next-id",
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
    exportNoteButton: "Eksportuj do notatki",
    clearListButton: "Wyczyść",
    clearListConfirm: "Usunąć wszystkie pozycje z listy zakupów?",
    exportEmptyList: "Lista zakupów jest pusta.",
    exportNoteTitle: "Lista zakupów",
    exportShareTitle: "Eksportuj listę zakupów",
    exportCopied: "Lista zakupów została skopiowana. Wklej ją do Notatek iOS.",
    exportUnsupported: "Nie udało się wyeksportować listy. Skopiuj ją ręcznie później.",
    lookupEnabled: "Wyszukiwanie nazwy po EAN jest zawsze włączone.",
    lookupSearching: "Szukam nazwy produktu dla EAN {code}...",
    lookupFound: "Znaleziono nazwę produktu: {name}",
    lookupNotFound: "Nie znaleziono pewnej nazwy dla EAN {code}. Potwierdź nazwę ręcznie.",
    lookupSuggestedBy: "Sugestia z: {source}",
    lookupNoReliable: "Nie znaleziono wiarygodnego dopasowania online",
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
    exportNoteButton: "Export to Notes",
    clearListButton: "Clear",
    clearListConfirm: "Remove all items from the shopping list?",
    exportEmptyList: "The shopping list is empty.",
    exportNoteTitle: "Shopping List",
    exportShareTitle: "Export shopping list",
    exportCopied: "Shopping list copied. Paste it into iOS Notes.",
    exportUnsupported: "Could not export the list. Please copy it manually later.",
    lookupEnabled: "EAN name lookup is always enabled.",
    lookupSearching: "Looking up product name for EAN {code}...",
    lookupFound: "Found product name: {name}",
    lookupNotFound: "No reliable product name found for EAN {code}. Please confirm it manually.",
    lookupSuggestedBy: "Suggested by: {source}",
    lookupNoReliable: "No reliable online match found",
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
  eanLookupCache: {},
  pendingScannedItem: null,
  language: "pl"
};

const elements = {
  brandLabel: document.getElementById("brand-label"),
  appTitle: document.getElementById("app-title"),
  languageToggle: document.getElementById("language-toggle"),
  exportNoteBtn: document.getElementById("export-note-btn"),
  clearListBtn: document.getElementById("clear-list-btn"),
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
  elements.exportNoteBtn.addEventListener("click", exportShoppingListToNotes);
  elements.clearListBtn.addEventListener("click", clearShoppingList);
  elements.navShopping.addEventListener("click", () => showView("shopping"));
  elements.navManual.addEventListener("click", () => showView("manual"));
  elements.languageToggle.addEventListener("click", toggleLanguage);
  elements.addScanBtn.addEventListener("click", openScanner);
  elements.closeScanBtn.addEventListener("click", closeScanner);
  elements.manualForm.addEventListener("submit", onAddManualItem);
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

  localStorage.removeItem("aps-ean-lookup-enabled");

  const language = localStorage.getItem(STORAGE_KEYS.language);
  if (language && TRANSLATIONS[language]) {
    state.language = language;
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEYS.shoppingItems, JSON.stringify(state.shoppingItems));
  localStorage.setItem(STORAGE_KEYS.manualItems, JSON.stringify(state.manualItems));
  localStorage.setItem(STORAGE_KEYS.manualNextId, String(state.manualNextId));
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
  elements.exportNoteBtn.textContent = t("exportNoteButton");
  elements.clearListBtn.textContent = t("clearListButton");
  elements.navShopping.textContent = t("navShopping");
  elements.navManual.textContent = t("navManual");
  elements.cameraCardTitle.textContent = t("cameraCardTitle");
  elements.cameraCardText.textContent = t("cameraCardText");
  elements.addScanBtn.textContent = t("cameraButton");
  elements.usbCardTitle.textContent = t("usbCardTitle");
  elements.usbCardText.textContent = t("usbCardText");
  elements.usbFocusBtn.textContent = t("usbFocusButton");
  elements.usbScanInput.placeholder = t("usbPlaceholder");
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

function setLookupStatusDefault() {
  elements.lookupStatus.textContent = t("lookupEnabled");
}

async function exportShoppingListToNotes() {
  if (!state.shoppingItems.length) {
    alert(t("exportEmptyList"));
    return;
  }

  const noteText = buildShoppingNoteText();

  if (navigator.share) {
    try {
      await navigator.share({
        title: t("exportShareTitle"),
        text: noteText
      });
      return;
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.debug("Share export failed:", error);
      }
    }
  }

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(noteText);
      alert(t("exportCopied"));
      return;
    } catch (error) {
      console.debug("Clipboard export failed:", error);
    }
  }

  alert(`${t("exportUnsupported")}\n\n${noteText}`);
}

function clearShoppingList() {
  if (!state.shoppingItems.length) {
    return;
  }

  if (!window.confirm(t("clearListConfirm"))) {
    return;
  }

  state.shoppingItems = [];
  persistState();
  renderShoppingList();
  setLookupStatusDefault();
}

function buildShoppingNoteText() {
  const items = getSortedShoppingItems().map((item) => `- ${item.name} x${item.qty}`);
  return [t("exportNoteTitle"), "", ...items].join("\n");
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

  if (typeof window.Html5Qrcode !== "function") {
    alert(t("scannerLibraryLoading"));
    return;
  }

  if (!("mediaDevices" in navigator) || !("getUserMedia" in navigator.mediaDevices)) {
    alert(t("cameraNotAvailable"));
    return;
  }

  try {
    openDialog(elements.scannerModal);
    state.scanning = true;
    elements.scanStatus.textContent = t("scannerRunning");
    elements.scannerReader.innerHTML = "";

    state.scannerInstance = new window.Html5Qrcode("scanner-reader");
    await state.scannerInstance.start(
      { facingMode: "environment" },
      buildScannerConfig(),
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

function buildScannerConfig() {
  const config = {
        fps: 10,
        qrbox: { width: 240, height: 160 },
        aspectRatio: 1.777778
  };

  const scanTypes = window.Html5QrcodeScanType;
  if (scanTypes?.SCAN_TYPE_CAMERA) {
    config.supportedScanTypes = [scanTypes.SCAN_TYPE_CAMERA];
  }

  const formats = window.Html5QrcodeSupportedFormats;
  if (formats) {
    config.formatsToSupport = [
      formats.EAN_13,
      formats.EAN_8,
      formats.UPC_A,
      formats.UPC_E,
      formats.QR_CODE
    ].filter(Boolean);
  }

  return config;
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

  closeDialog(elements.scannerModal);

  elements.scanStatus.textContent = t("scannerDefaultStatus");
}

function openDialog(dialog) {
  if (!dialog) {
    return;
  }

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    return;
  }

  if (typeof dialog.show === "function") {
    dialog.show();
    return;
  }

  dialog.setAttribute("open", "open");
}

function closeDialog(dialog) {
  if (!dialog) {
    return;
  }

  if (dialog.open && typeof dialog.close === "function") {
    dialog.close();
    return;
  }

  dialog.removeAttribute("open");
}

function mapHtml5Format(formatName) {
  const normalized = String(formatName || "").toUpperCase();
  if (normalized === "EAN_13") {
    return "ean_13";
  }
  if (normalized === "EAN_8") {
    return "ean_8";
  }
  if (normalized === "UPC_A") {
    return "ean_13";
  }
  if (normalized === "UPC_E") {
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
    let lookupMeta = t("lookupNoReliable");
    elements.lookupStatus.textContent = t("lookupSearching", { code });
    const lookup = await lookupProductNameByEan(code);
    if (lookup.name) {
      productName = lookup.name;
      lookupMeta = t("lookupSuggestedBy", { source: lookup.sourceLabel });
      elements.lookupStatus.textContent = t("lookupFound", { name: lookup.name });
    } else {
      elements.lookupStatus.textContent = t("lookupNotFound", { code });
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

  // Define multiple lookup sources in priority order
  const sources = [
    // Tier 1: Open Facts databases (most reliable, community-driven)
    { type: "openFacts", label: "Open Food Facts", endpoint: `https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(eanCode)}.json` },
    { type: "openFacts", label: "Open Beauty Facts", endpoint: `https://world.openbeautyfacts.org/api/v2/product/${encodeURIComponent(eanCode)}.json` },
    { type: "openFacts", label: "Open Pet Food Facts", endpoint: `https://world.openpetfoodfacts.org/api/v2/product/${encodeURIComponent(eanCode)}.json` },
    // Tier 2: Barcode Lookup (UPC database, good for consumer products)
    { type: "barcodeLookup", label: "Barcode Lookup", endpoint: `https://api.barcodelookup.com/v3/products?barcode=${encodeURIComponent(eanCode)}&key=free` },
    // Tier 3: EAN Search (alternative UPC/EAN database)
    { type: "eanSearch", label: "EAN Search", endpoint: `https://www.ean-search.org/?q=${encodeURIComponent(eanCode)}&format=json` }
  ];

  for (const source of sources) {
    try {
      const lookup = await fetchLookupCandidate(source);
      if (lookup.name) {
        state.eanLookupCache[eanCode] = { name: lookup.name, source: source.label };
        persistState();
        return { name: lookup.name, sourceLabel: source.label };
      }
    } catch (error) {
      // Continue to next source if this one fails
      console.debug(`Lookup failed for ${source.label}:`, error);
    }
  }

  return { name: null, sourceLabel: null };
}

function formatLookupSourceLabel(source, isCached = false) {
  const base = source === "User" ? t("lookupSourceUser") : source;
  return isCached ? `${base}${t("lookupCachedSuffix")}` : base;
}

async function fetchLookupCandidate(source) {
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), 5000); // Increased timeout to 5 seconds

  try {
    const response = await fetch(source.endpoint, {
      method: "GET",
      signal: timeoutController.signal,
      headers: {
        "Accept": "application/json",
        "User-Agent": "APSShopScan/1.0 (https://github.com/AnnPasz/APSShopScan)"
      }
    });

    if (!response.ok) {
      return { name: null };
    }

    const data = await response.json();
    let name = null;

    // Extract name based on API type
    if (source.type === "openFacts") {
      name = extractOpenFactsName(data);
    } else if (source.type === "barcodeLookup") {
      name = extractBarcodeLookupName(data);
    } else if (source.type === "eanSearch") {
      name = extractEanSearchName(data);
    }

    if (!name) {
      return { name: null };
    }

    return { name: cleanLookupName(name) };
  } catch (error) {
    console.debug(`Fetch error for ${source.label}:`, error.message);
    return { name: null };
  } finally {
    clearTimeout(timeoutId);
  }
}

function extractOpenFactsName(data) {
  if (!data?.product) return null;
  const product = data.product;
  const candidates = [
    product.product_name,
    product.product_name_pl,
    product.product_name_en,
    product.generic_name,
    product.generic_name_pl,
    product.generic_name_en,
    product.abbreviated_product_name,
    product.brands
  ];
  return candidates.find((value) => value && String(value).trim());
}

function extractBarcodeLookupName(data) {
  // Barcode Lookup API returns: { products: [{ title: "...", description: "..." }, ...] }
  if (!data?.products || !Array.isArray(data.products) || data.products.length === 0) {
    return null;
  }
  const product = data.products[0];
  return product.title || product.description || null;
}

function extractEanSearchName(data) {
  // EAN Search API returns: { ok: true, product: { name: "..." } } or array format
  if (Array.isArray(data) && data.length > 0) {
    return data[0].name || data[0].title || null;
  }
  if (data?.product?.name) {
    return data.product.name;
  }
  if (data?.name) {
    return data.name;
  }
  return null;
}

function cleanLookupName(value) {
  if (!value) return null;
  return String(value)
    .replace(/\s+/g, " ")
    .replace(/^[\-–—\s]+|[\-–—\s]+$/g, "")
    .trim() || null;
}

function openConfirmScanModal() {
  if (!state.pendingScannedItem) {
    return;
  }

  fillConfirmScanModal();
  openDialog(elements.confirmScanModal);
  elements.confirmScanName.focus();
  elements.confirmScanName.select();
}

function fillConfirmScanModal() {
  if (!state.pendingScannedItem) {
    return;
  }

  elements.confirmScanCode.textContent = t("confirmCode", { code: state.pendingScannedItem.sourceCode });
  elements.confirmScanName.value = state.pendingScannedItem.name;
}

function clearPendingScannedItem() {
  state.pendingScannedItem = null;
  closeDialog(elements.confirmScanModal);
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
