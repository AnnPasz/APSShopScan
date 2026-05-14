const STORAGE_KEYS = {
  shoppingItems: "aps-shopping-items",
  manualItems: "aps-manual-items",
  manualNextId: "aps-manual-next-id",
  eanHistory: "aps-ean-history",
  eanLookupCache: "aps-ean-lookup-cache",
  language: "aps-language",
  eanSearchApiToken: "aps-ean-search-api-token",
  eanSearchQueriesUsed: "aps-ean-search-queries-used",
  categories: "aps-categories"
};

const TRANSLATIONS = {
  pl: {
    pageTitle: "APS Lista Zakupów",
    brand: "APLIKACJA ZAKUPOWA",
    appTitle: "Zarządzaj domową listą zakupów",
    navShopping: "Lista zakupów",
    navManual: "Produkty bez EAN",
    navHistory: "Historia EAN",
    usbCardTitle: "Skaner USB",
    usbCardText: "Kliknij pole, zeskanuj kod i zatwierdź Enterem.",
    usbFocusButton: "Aktywuj",
    usbCameraButtonLabel: "Otwórz aparat",
    usbPlaceholder: "Zeskanuj lub wpisz kod EAN / NOEAN i naciśnij Enter",
    usbReady: "Pole aktywne. Możesz skanować skanerem USB.",
    usbWaiting: "Czekam na skan z czytnika USB albo wpisanie kodu.",
    usbProcessing: "Przetwarzam zeskanowany kod...",
    exportNoteButton: "Eksportuj do notatki",
    clearListButton: "Wyczyść",
    categoriesButton: "Kategorie",
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
    lookupPaidUnauthorized: "EAN Search odrzucił token (401). Sprawdź token API w ustawieniach.",
    lookupPaidError: "EAN Search jest chwilowo niedostępny. Sprawdź token lub spróbuj ponownie.",
    lookupSuggestedBy: "Sugestia z: {source}",
    lookupNoReliable: "Nie znaleziono wiarygodnego dopasowania online",
    lookupSourceUser: "własne potwierdzenie",
    lookupCachedSuffix: " (z pamięci)",
    manualTitle: "Dodaj produkt bez EAN",
    manualPlaceholder: "np. Banany",
    manualSubmit: "Dodaj produkt bez EAN",
    manualCategoryLabel: "Kategoria dla produktu bez EAN",
    manualDefaultCategory: "Warzywa i owoce",
    manualHelp: "Każdy produkt dostaje ID i kod QR z treścią NOEAN:<id>.",
    manualEdit: "Edytuj",
    manualDelete: "Usuń",
    manualEditPrompt: "Edytuj nazwę produktu bez EAN:",
    manualDeleteConfirm: "Usunąć ten produkt bez EAN?",
    manualNameRequired: "Nazwa produktu nie może być pusta.",
    historyTitle: "Historia EAN",
    historyHelp: "Wybierz wcześniej użyty kod EAN i dodaj produkt ponownie.",
    historySearchPlaceholder: "Szukaj po nazwie produktu",
    historyCategoryAll: "Wszystkie kategorie",
    noHistoryItems: "Brak zapisanych kodów EAN.",
    historyMeta: "EAN: {code} • Użyć: {count}",
    historyShoppingMeta: "Z historii EAN {code}",
    historyDeleteConfirm: "Usunąć wpis historii EAN dla '{name}'?",
    historyDeletedToast: "Usunięto wpis z historii EAN",
    addedToShoppingToast: "Dodano do listy zakupów",
    printAllQr: "Drukuj wszystkie kody QR",
    printAllQrEmpty: "Brak produktów bez EAN do wydruku.",
    printAllTitle: "Drukuj wszystkie kody QR",
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
    languageSwitchLabel: "Przełącz na angielski",
    apiSettingsButton: "Ustawienia API",
    apiSettingsTitle: "Ustawienia API EAN Search",
    apiSettingsClose: "Zamknij",
    apiTokenLabel: "Token API",
    apiTokenPlaceholder: "Wklej token API EAN Search",
    apiTokenSave: "Zapisz token",
    apiTokenClear: "Wyczyść token",
    apiSettingsStatusConnected: "EAN Search aktywny. Użyte zapytania: {used}.",
    apiSettingsStatusMissing: "Brak tokenu. Używane są tylko darmowe źródła.",
    apiTokenSaved: "Token API zapisany.",
    apiTokenCleared: "Token API usunięty.",
    categoriesModalTitle: "Zarządzaj kategoriami",
    categoriesModalClose: "Zamknij",
    confirmCategoryLabel: "Kategoria",
    categoriesSectionTitle: "Kategorie",
    addCategoryPlaceholder: "Nazwa kategorii",
    addCategoryBtn: "Dodaj kategorię",
    categoryAdded: "Kategoria '{name}' została dodana.",
    categoryDeleted: "Kategoria '{name}' została usunięta.",
    categoryColorUpdated: "Kolor kategorii '{name}' został zaktualizowany.",
    categoryMovedUp: "Kategoria '{name}' została przesunięta w górę.",
    categoryMovedDown: "Kategoria '{name}' została przesunięta w dół.",
    editCategory: "Edytuj",
    saveCategory: "Zapisz",
    cancelEdit: "Anuluj",
    showColorPalette: "Pokaż paletę kolorów",
    hideColorPalette: "Ukryj paletę kolorów",
    deleteCategory: "Usuń",
    moveCategoryUp: "Przesuń w górę",
    moveCategoryDown: "Przesuń w dół",
    confirmDeleteCategory: "Usunąć kategorię '{name}'? Produkty będą miały kategorię 'Inne'.",
    categoryOther: "Inne"
  },
  en: {
    pageTitle: "APS Shopping List",
    brand: "SHOPPING APP",
    appTitle: "Manage your home shopping",
    navShopping: "Shopping List",
    navManual: "No-EAN Items",
    navHistory: "EAN History",
    usbCardTitle: "USB Scanner",
    usbCardText: "Click the field, scan the code, then confirm with Enter.",
    usbFocusButton: "Activate",
    usbCameraButtonLabel: "Open camera",
    usbPlaceholder: "Scan or type EAN / NOEAN code and press Enter",
    usbReady: "Field is active. You can scan with a USB barcode scanner.",
    usbWaiting: "Waiting for a USB scanner scan or typed code.",
    usbProcessing: "Processing scanned code...",
    exportNoteButton: "Export to Notes",
    clearListButton: "Clear",
    categoriesButton: "Categories",
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
    lookupPaidUnauthorized: "EAN Search rejected your token (401). Check API token in settings.",
    lookupPaidError: "EAN Search is temporarily unavailable. Check token and try again.",
    lookupSuggestedBy: "Suggested by: {source}",
    lookupNoReliable: "No reliable online match found",
    lookupSourceUser: "manual confirmation",
    lookupCachedSuffix: " (cached)",
    manualTitle: "Add product without EAN",
    manualPlaceholder: "e.g. Bananas",
    manualSubmit: "Add no-EAN item",
    manualCategoryLabel: "No-EAN item category",
    manualDefaultCategory: "Fruit & Veg",
    manualHelp: "Each product gets an ID and QR content NOEAN:<id>.",
    manualEdit: "Edit",
    manualDelete: "Delete",
    manualEditPrompt: "Edit no-EAN product name:",
    manualDeleteConfirm: "Delete this no-EAN product?",
    manualNameRequired: "Product name cannot be empty.",
    historyTitle: "EAN History",
    historyHelp: "Pick a previously used EAN and add the product again.",
    historySearchPlaceholder: "Search by product name",
    historyCategoryAll: "All categories",
    noHistoryItems: "No saved EAN codes yet.",
    historyMeta: "EAN: {code} • Uses: {count}",
    historyShoppingMeta: "From EAN history {code}",
    historyDeleteConfirm: "Delete EAN history entry for '{name}'?",
    historyDeletedToast: "EAN history entry removed",
    addedToShoppingToast: "Added to shopping list",
    printAllQr: "Print all QR codes",
    printAllQrEmpty: "No no-EAN products to print.",
    printAllTitle: "Print all QR codes",
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
    languageSwitchLabel: "Switch to Polish",
    apiSettingsButton: "API settings",
    apiSettingsTitle: "EAN Search API settings",
    apiSettingsClose: "Close",
    apiTokenLabel: "API token",
    apiTokenPlaceholder: "Paste your EAN Search API token",
    apiTokenSave: "Save token",
    apiTokenClear: "Clear token",
    apiSettingsStatusConnected: "EAN Search enabled. Paid queries used: {used}.",
    apiSettingsStatusMissing: "No token set. Only free sources are used.",
    apiTokenSaved: "API token saved.",
    apiTokenCleared: "API token cleared.",
    categoriesModalTitle: "Manage categories",
    categoriesModalClose: "Close",
    confirmCategoryLabel: "Category",
    categoriesSectionTitle: "Categories",
    addCategoryPlaceholder: "Category name",
    addCategoryBtn: "Add category",
    categoryAdded: "Category '{name}' added.",
    categoryDeleted: "Category '{name}' deleted.",
    categoryColorUpdated: "Category '{name}' color updated.",
    categoryMovedUp: "Category '{name}' moved up.",
    categoryMovedDown: "Category '{name}' moved down.",
    editCategory: "Edit",
    saveCategory: "Save",
    cancelEdit: "Cancel",
    showColorPalette: "Show color palette",
    hideColorPalette: "Hide color palette",
    deleteCategory: "Delete",
    moveCategoryUp: "Move up",
    moveCategoryDown: "Move down",
    confirmDeleteCategory: "Delete category '{name}'? Products will be set to 'Other'.",
    categoryOther: "Other"
  }
};

const state = {
  shoppingItems: [],
  manualItems: [],
  eanHistory: [],
  manualNextId: 1000,
  scanning: false,
  scannerInstance: null,
  eanLookupCache: {},
  pendingScannedItem: null,
  language: "pl",
  eanSearchApiToken: null,
  eanSearchQueriesUsed: 0,
  categories: [],
  nextCategoryId: 1,
  historySearch: "",
  historyCategoryFilter: "all"
};

const scannerAutoTrigger = {
  usbTimeout: null,
  minChars: 5,
  triggerDelay: 180
};

let toastTimeout = null;

const CATEGORY_COLOR_PALETTE = [
  "#b9ff35", "#7ed957", "#45d88c", "#35c2ff", "#7f5bff",
  "#9aa3c6", "#ffc857", "#ff9f1c", "#ff8da1", "#ff6f86",
  "#f4a261", "#e76f51", "#d62878", "#8338ec", "#3a86ff",
  "#06d6a0", "#2a9d8f", "#8ac926", "#c0f000", "#f1fa8c",
  "#adb5bd", "#6c757d", "#495057", "#264653", "#1d3557"
];

const categoryUiState = {
  addPaletteOpen: false,
  editingCategoryId: null,
  editNameDraft: "",
  editColorDraft: CATEGORY_COLOR_PALETTE[0],
  editPaletteOpen: false
};

const elements = {
  brandLabel: document.getElementById("brand-label"),
  appTitle: document.getElementById("app-title"),
  languageToggle: document.getElementById("language-toggle"),
  exportNoteBtn: document.getElementById("export-note-btn"),
  clearListBtn: document.getElementById("clear-list-btn"),
  categoriesBtn: document.getElementById("categories-btn"),
  apiSettingsBtn: document.getElementById("api-settings-btn"),
  navShopping: document.getElementById("nav-shopping"),
  navManual: document.getElementById("nav-manual"),
  navHistory: document.getElementById("nav-history"),
  shoppingView: document.getElementById("shopping-view"),
  manualView: document.getElementById("manual-view"),
  historyView: document.getElementById("history-view"),
  usbCardTitle: document.getElementById("usb-card-title"),
  usbCardText: document.getElementById("usb-card-text"),
  usbCameraBtn: document.getElementById("usb-camera-btn"),
  usbFocusBtn: document.getElementById("usb-focus-btn"),
  usbScanInput: document.getElementById("usb-scan-input"),
  usbStatus: document.getElementById("usb-status"),
  shoppingList: document.getElementById("shopping-list"),
  manualTitle: document.getElementById("manual-title"),
  manualForm: document.getElementById("manual-form"),
  manualName: document.getElementById("manual-name"),
  manualCategory: document.getElementById("manual-category"),
  manualSubmitBtn: document.getElementById("manual-submit-btn"),
  manualHelp: document.getElementById("manual-help"),
  manualPrintAllBtn: document.getElementById("manual-print-all-btn"),
  manualItems: document.getElementById("manual-items"),
  historyTitle: document.getElementById("history-title"),
  historyHelp: document.getElementById("history-help"),
  historySearch: document.getElementById("history-search"),
  historyCategoryFilter: document.getElementById("history-category-filter"),
  historyItems: document.getElementById("history-items"),
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
  confirmScanCancelTop: document.getElementById("confirm-scan-cancel-top"),
  apiSettingsModal: document.getElementById("api-settings-modal"),
  apiSettingsTitle: document.getElementById("api-settings-title"),
  apiSettingsStatus: document.getElementById("api-settings-status"),
  apiSettingsCloseTop: document.getElementById("api-settings-close-top"),
  apiTokenLabel: document.getElementById("api-token-label"),
  apiTokenInput: document.getElementById("api-token-input"),
  apiTokenSave: document.getElementById("api-token-save"),
  apiTokenClear: document.getElementById("api-token-clear"),
  categoriesModal: document.getElementById("categories-modal"),
  categoriesModalTitle: document.getElementById("categories-modal-title"),
  categoriesModalClose: document.getElementById("categories-modal-close"),
  confirmCategoryLabel: document.getElementById("confirm-category-label"),
  confirmScanCategory: document.getElementById("confirm-scan-category"),
  categoriesSectionTitle: document.getElementById("categories-section-title"),
  categoriesList: document.getElementById("categories-list"),
  newCategoryName: document.getElementById("new-category-name"),
  newCategoryColor: document.getElementById("new-category-color"),
  newCategoryPalette: document.getElementById("new-category-palette"),
  newCategoryColorToggle: document.getElementById("new-category-color-toggle"),
  newCategoryColorPreview: document.getElementById("new-category-color-preview"),
  addCategoryBtn: document.getElementById("add-category-btn"),
  toast: document.getElementById("toast")
};

init();

function init() {
  loadState();
  bindEvents();
  applyLanguage();
  renderNewCategoryPalette();
  renderAll();
  setLookupStatusDefault();
  setUsbStatus(t("usbWaiting"));
}

function bindEvents() {
  elements.exportNoteBtn.addEventListener("click", exportShoppingListToNotes);
  elements.clearListBtn.addEventListener("click", clearShoppingList);
  bindTopActionButtons();
  elements.navShopping.addEventListener("click", () => showView("shopping"));
  elements.navManual.addEventListener("click", () => showView("manual"));
  elements.navHistory.addEventListener("click", () => showView("history"));
  elements.languageToggle.addEventListener("click", toggleLanguage);
  elements.usbCameraBtn.addEventListener("click", openScanner);
  elements.closeScanBtn.addEventListener("click", closeScanner);
  elements.manualForm.addEventListener("submit", onAddManualItem);
  elements.manualPrintAllBtn.addEventListener("click", printAllManualQrs);
  elements.historySearch.addEventListener("input", onHistorySearchChange);
  elements.historyCategoryFilter.addEventListener("change", onHistoryCategoryFilterChange);
  elements.confirmScanAdd.addEventListener("click", confirmPendingScannedItem);
  elements.confirmScanCancel.addEventListener("click", clearPendingScannedItem);
  elements.confirmScanCancelTop.addEventListener("click", clearPendingScannedItem);
  elements.apiSettingsCloseTop.addEventListener("click", closeApiSettingsModal);
  elements.apiTokenSave.addEventListener("click", saveApiToken);
  elements.apiTokenClear.addEventListener("click", clearApiToken);
  elements.categoriesModalClose.addEventListener("click", closeCategoriesModal);
  elements.usbFocusBtn.addEventListener("click", focusUsbInput);
  elements.usbScanInput.addEventListener("keydown", onUsbInputKeyDown);
  elements.usbScanInput.addEventListener("input", onUsbInputChange);
  elements.newCategoryColorToggle.addEventListener("click", toggleNewCategoryPalette);
  elements.addCategoryBtn.addEventListener("click", onAddCategory);
}

function bindTopActionButtons() {
  elements.categoriesBtn.addEventListener("click", openCategoriesModal);
  elements.apiSettingsBtn.addEventListener("click", openApiSettingsModal);

  elements.categoriesBtn.addEventListener("touchend", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openCategoriesModal();
  }, { passive: false });

  elements.apiSettingsBtn.addEventListener("touchend", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openApiSettingsModal();
  }, { passive: false });
}

function loadState() {
  state.shoppingItems = readJson(STORAGE_KEYS.shoppingItems, []);
  state.manualItems = readJson(STORAGE_KEYS.manualItems, []);
  state.eanHistory = readJson(STORAGE_KEYS.eanHistory, []);
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

  const token = localStorage.getItem(STORAGE_KEYS.eanSearchApiToken);
  if (token && token.trim()) {
    state.eanSearchApiToken = token.trim();
  }

  const paidQueriesUsed = Number(localStorage.getItem(STORAGE_KEYS.eanSearchQueriesUsed));
  if (!Number.isNaN(paidQueriesUsed) && paidQueriesUsed >= 0) {
    state.eanSearchQueriesUsed = paidQueriesUsed;
  }

  state.categories = readJson(STORAGE_KEYS.categories, []);
  if (!state.categories.length) {
    initializeDefaultCategories();
  }

  // Calculate nextCategoryId
  state.nextCategoryId = state.categories.length ? Math.max(...state.categories.map(c => c.id)) + 1 : 1;
  ensureManualDefaultCategory();
  normalizeManualItemsCategories();
  normalizeEanHistoryCategories();
  seedEanHistoryFromShoppingItems();

  hydrateEanSearchTokenFromUrl();
}

function persistState() {
  localStorage.setItem(STORAGE_KEYS.shoppingItems, JSON.stringify(state.shoppingItems));
  localStorage.setItem(STORAGE_KEYS.manualItems, JSON.stringify(state.manualItems));
  localStorage.setItem(STORAGE_KEYS.eanHistory, JSON.stringify(state.eanHistory));
  localStorage.setItem(STORAGE_KEYS.manualNextId, String(state.manualNextId));
  localStorage.setItem(STORAGE_KEYS.eanLookupCache, JSON.stringify(state.eanLookupCache));
  localStorage.setItem(STORAGE_KEYS.language, state.language);
  localStorage.setItem(STORAGE_KEYS.eanSearchQueriesUsed, String(state.eanSearchQueriesUsed));
  localStorage.setItem(STORAGE_KEYS.categories, JSON.stringify(state.categories));

  if (state.eanSearchApiToken) {
    localStorage.setItem(STORAGE_KEYS.eanSearchApiToken, state.eanSearchApiToken);
  } else {
    localStorage.removeItem(STORAGE_KEYS.eanSearchApiToken);
  }
}

function hydrateEanSearchTokenFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search);
    const tokenFromUrl = params.get("eanToken");
    if (!tokenFromUrl || !tokenFromUrl.trim()) {
      return;
    }

    state.eanSearchApiToken = tokenFromUrl.trim();
    localStorage.setItem(STORAGE_KEYS.eanSearchApiToken, state.eanSearchApiToken);

    params.delete("eanToken");
    const nextQuery = params.toString();
    const nextUrl = `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", nextUrl);
  } catch (error) {
    console.debug("Could not parse URL token", error);
  }
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
  elements.exportNoteBtn.setAttribute("aria-label", t("exportNoteButton"));
  elements.exportNoteBtn.title = t("exportNoteButton");
  elements.clearListBtn.setAttribute("aria-label", t("clearListButton"));
  elements.clearListBtn.title = t("clearListButton");
  elements.categoriesBtn.setAttribute("aria-label", t("categoriesButton"));
  elements.categoriesBtn.title = t("categoriesButton");
  elements.apiSettingsBtn.setAttribute("aria-label", t("apiSettingsButton"));
  elements.apiSettingsBtn.title = t("apiSettingsButton");
  elements.navShopping.textContent = t("navShopping");
  elements.navManual.textContent = t("navManual");
  elements.navHistory.textContent = t("navHistory");
  elements.usbCardTitle.textContent = t("usbCardTitle");
  elements.usbCardText.textContent = t("usbCardText");
  elements.usbFocusBtn.textContent = t("usbFocusButton");
  elements.usbCameraBtn.setAttribute("aria-label", t("usbCameraButtonLabel"));
  elements.usbCameraBtn.title = t("usbCameraButtonLabel");
  elements.usbScanInput.placeholder = t("usbPlaceholder");
  elements.manualTitle.textContent = t("manualTitle");
  elements.manualName.placeholder = t("manualPlaceholder");
  elements.manualCategory.setAttribute("aria-label", t("manualCategoryLabel"));
  elements.manualCategory.title = t("manualCategoryLabel");
  elements.manualSubmitBtn.textContent = t("manualSubmit");
  elements.manualHelp.textContent = t("manualHelp");
  elements.manualPrintAllBtn.textContent = t("printAllQr");
  elements.historyTitle.textContent = t("historyTitle");
  elements.historyHelp.textContent = t("historyHelp");
  elements.historySearch.placeholder = t("historySearchPlaceholder");
  elements.scannerTitle.textContent = t("scannerTitle");
  elements.closeScanBtn.textContent = t("scannerCancel");
  elements.scanStatus.textContent = state.scanning ? t("scannerRunning") : t("scannerDefaultStatus");
  elements.confirmTitle.textContent = t("confirmTitle");
  elements.confirmScanCancelTop.textContent = t("confirmClose");
  elements.confirmNameLabel.textContent = t("confirmNameLabel");
  elements.confirmScanName.placeholder = t("confirmPlaceholder");
  elements.confirmScanCancel.textContent = t("confirmCancel");
  elements.confirmScanAdd.textContent = t("confirmAdd");
  elements.apiSettingsTitle.textContent = t("apiSettingsTitle");
  elements.apiSettingsCloseTop.textContent = t("apiSettingsClose");
  elements.apiTokenLabel.textContent = t("apiTokenLabel");
  elements.apiTokenInput.placeholder = t("apiTokenPlaceholder");
  elements.apiTokenSave.textContent = t("apiTokenSave");
  elements.apiTokenClear.textContent = t("apiTokenClear");
  elements.categoriesModalTitle.textContent = t("categoriesModalTitle");
  elements.categoriesModalClose.textContent = t("categoriesModalClose");
  elements.confirmCategoryLabel.textContent = t("confirmCategoryLabel");
  elements.categoriesSectionTitle.textContent = t("categoriesSectionTitle");
  elements.newCategoryName.placeholder = t("addCategoryPlaceholder");
  elements.newCategoryColorToggle.setAttribute("aria-label", categoryUiState.addPaletteOpen ? t("hideColorPalette") : t("showColorPalette"));
  elements.newCategoryColorToggle.title = categoryUiState.addPaletteOpen ? t("hideColorPalette") : t("showColorPalette");
  elements.addCategoryBtn.textContent = t("addCategoryBtn");
  updateApiSettingsStatus();
  elements.languageToggle.textContent = state.language === "pl" ? "🇬🇧" : "🇵🇱";
  elements.languageToggle.setAttribute("aria-label", t("languageSwitchLabel"));
  elements.languageToggle.title = t("languageSwitchLabel");
  if (state.pendingScannedItem && elements.confirmScanModal.open) {
    fillConfirmScanModal();
  }
  renderCategoriesInUI();
  renderCategorySelect();
  renderManualCategorySelect();
  renderHistoryCategoryFilter();
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
  const isManual = view === "manual";
  const isHistory = view === "history";
  elements.shoppingView.classList.toggle("hidden", !isShopping);
  elements.manualView.classList.toggle("hidden", !isManual);
  elements.historyView.classList.toggle("hidden", !isHistory);
  elements.navShopping.classList.toggle("active", isShopping);
  elements.navManual.classList.toggle("active", isManual);
  elements.navHistory.classList.toggle("active", isHistory);
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
  const lines = [t("exportNoteTitle"), ""];
  const groupedItems = getGroupedShoppingItems();

  groupedItems.forEach((group, index) => {
    lines.push(group.category.name);
    group.items.forEach((item) => {
      lines.push(`- ${item.name} x${item.qty}`);
    });

    if (index < groupedItems.length - 1) {
      lines.push("");
    }
  });

  return lines.join("\n");
}

function focusUsbInput() {
  elements.usbScanInput.focus();
  elements.usbScanInput.select();
  setUsbStatus(t("usbReady"));
}

function onUsbInputChange(event) {
  clearTimeout(scannerAutoTrigger.usbTimeout);
  const value = elements.usbScanInput.value.trim();

  if (value.length < scannerAutoTrigger.minChars) {
    return;
  }

  if (!isValidEan(value) && !value.toUpperCase().startsWith("NOEAN:")) {
    return;
  }

  scannerAutoTrigger.usbTimeout = setTimeout(async () => {
    if (elements.usbScanInput.value.trim().length >= scannerAutoTrigger.minChars) {
      simulateUsbEnter();
    }
  }, scannerAutoTrigger.triggerDelay);
}

async function simulateUsbEnter() {
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
  renderHistoryCategoryFilter();
  renderEanHistoryItems();
}

function onHistorySearchChange(event) {
  state.historySearch = String(event.currentTarget.value || "").trim();
  renderEanHistoryItems();
}

function onHistoryCategoryFilterChange(event) {
  state.historyCategoryFilter = event.currentTarget.value || "all";
  renderEanHistoryItems();
}

function normalizeEanHistoryCategories() {
  const fallbackCategoryId = getOtherCategory()?.id || 1;
  let hasChanges = false;

  state.eanHistory = state.eanHistory
    .filter((entry) => entry && entry.code && entry.name)
    .map((entry) => {
      const parsedCategoryId = Number(entry.categoryId);
      const resolvedCategoryId = getCategoryById(parsedCategoryId) ? parsedCategoryId : fallbackCategoryId;
      const parsedCount = Number(entry.count);
      const parsedLastUsedAt = Number(entry.lastUsedAt);
      const normalized = {
        code: String(entry.code),
        name: String(entry.name),
        categoryId: resolvedCategoryId,
        count: Number.isFinite(parsedCount) && parsedCount > 0 ? parsedCount : 1,
        lastUsedAt: Number.isFinite(parsedLastUsedAt) && parsedLastUsedAt > 0 ? parsedLastUsedAt : Date.now()
      };

      if (
        normalized.categoryId !== entry.categoryId
        || normalized.count !== entry.count
        || normalized.lastUsedAt !== entry.lastUsedAt
      ) {
        hasChanges = true;
      }

      return normalized;
    });

  if (hasChanges) {
    persistState();
  }
}

function rememberEanHistoryItem({ code, name, categoryId }) {
  const normalizedCode = String(code || "").trim();
  const normalizedName = String(name || "").trim();
  if (!normalizedCode || !normalizedName) {
    return;
  }

  const resolvedCategoryId = getCategoryById(Number(categoryId))?.id || getOtherCategory()?.id || 1;
  const now = Date.now();
  const existingIndex = state.eanHistory.findIndex((entry) => entry.code === normalizedCode);

  if (existingIndex >= 0) {
    const existing = state.eanHistory[existingIndex];
    state.eanHistory[existingIndex] = {
      ...existing,
      name: normalizedName,
      categoryId: resolvedCategoryId,
      count: (Number(existing.count) || 0) + 1,
      lastUsedAt: now
    };
  } else {
    state.eanHistory.push({
      code: normalizedCode,
      name: normalizedName,
      categoryId: resolvedCategoryId,
      count: 1,
      lastUsedAt: now
    });
  }
}

function renderHistoryCategoryFilter() {
  if (!elements.historyCategoryFilter) {
    return;
  }

  const allowedValues = new Set(["all", ...getSortedCategories().map((category) => String(category.id))]);
  if (!allowedValues.has(String(state.historyCategoryFilter))) {
    state.historyCategoryFilter = "all";
  }

  const options = [
    `<option value="all">${escapeHtml(t("historyCategoryAll"))}</option>`,
    ...getSortedCategories().map((category) => {
      const isSelected = String(category.id) === String(state.historyCategoryFilter);
      return `<option value="${category.id}" ${isSelected ? "selected" : ""}>${escapeHtml(category.name)}</option>`;
    })
  ];

  elements.historyCategoryFilter.innerHTML = options.join("");
}

function getFilteredEanHistory() {
  const searchQuery = state.historySearch.trim().toLowerCase();
  const categoryFilter = String(state.historyCategoryFilter || "all");

  return state.eanHistory
    .slice()
    .sort((leftItem, rightItem) => (rightItem.lastUsedAt || 0) - (leftItem.lastUsedAt || 0))
    .filter((entry) => {
      const matchesSearch = !searchQuery || String(entry.name).toLowerCase().includes(searchQuery);
      const matchesCategory = categoryFilter === "all" || String(entry.categoryId) === categoryFilter;
      return matchesSearch && matchesCategory;
    });
}

function renderEanHistoryItems() {
  if (!elements.historyItems) {
    return;
  }

  const filteredItems = getFilteredEanHistory();
  if (!filteredItems.length) {
    elements.historyItems.innerHTML = `<li class="item-card">${escapeHtml(t("noHistoryItems"))}</li>`;
    return;
  }

  elements.historyItems.innerHTML = filteredItems
    .map((entry) => {
      const category = getCategoryById(entry.categoryId) || getOtherCategory();
      const categoryColor = category ? category.color : "#9aa3c6";
      const categoryName = category ? category.name : t("categoryOther");

      return `
        <li class="item-card">
          <div class="item-top">
            <div>
              <div class="item-name">${escapeHtml(entry.name)}</div>
              <div class="item-meta">${escapeHtml(t("historyMeta", { code: entry.code, count: entry.count }))}</div>
              <div class="item-category-badge" style="background-color: ${escapeHtml(categoryColor)}20; border: 1px solid ${escapeHtml(categoryColor)}; color: ${escapeHtml(categoryColor)};">
                <span class="category-dot" style="background-color: ${escapeHtml(categoryColor)}"></span>
                ${escapeHtml(categoryName)}
              </div>
            </div>
          </div>
          <div class="item-controls">
            <select class="small-btn category-select" data-history-category="${escapeHtml(entry.code)}">
              ${getSortedCategories()
                .map((historyCategory) => `<option value="${historyCategory.id}" ${historyCategory.id === entry.categoryId ? "selected" : ""}>${escapeHtml(historyCategory.name)}</option>`)
                .join("")}
            </select>
            <button class="small-btn" data-history-add="${escapeHtml(entry.code)}">${escapeHtml(t("addToList"))}</button>
            <button class="small-btn danger" data-history-delete="${escapeHtml(entry.code)}">${escapeHtml(t("manualDelete"))}</button>
          </div>
        </li>
      `;
    })
    .join("");

  elements.historyItems.querySelectorAll("[data-history-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const code = String(button.dataset.historyAdd || "");
      const entry = state.eanHistory.find((item) => item.code === code);
      if (!entry) {
        return;
      }

      addShoppingItem({
        name: entry.name,
        meta: t("historyShoppingMeta", { code: entry.code }),
        source: "ean-history",
        sourceCode: entry.code,
        categoryId: entry.categoryId
      });

      rememberEanHistoryItem({
        code: entry.code,
        name: entry.name,
        categoryId: entry.categoryId
      });

      persistState();
      renderEanHistoryItems();
    });
  });

  elements.historyItems.querySelectorAll("[data-history-category]").forEach((select) => {
    select.addEventListener("change", () => {
      const code = String(select.dataset.historyCategory || "");
      const categoryId = Number(select.value);
      updateEanHistoryItemCategory(code, categoryId);
    });
  });

  elements.historyItems.querySelectorAll("[data-history-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const code = String(button.dataset.historyDelete || "");
      deleteEanHistoryItem(code);
    });
  });
}

function updateEanHistoryItemCategory(code, categoryId) {
  const entry = state.eanHistory.find((item) => item.code === code);
  if (!entry) {
    return;
  }

  const resolvedCategoryId = getCategoryById(categoryId)?.id || getOtherCategory()?.id || 1;
  if (entry.categoryId === resolvedCategoryId) {
    return;
  }

  entry.categoryId = resolvedCategoryId;
  persistState();
  renderEanHistoryItems();
}

function deleteEanHistoryItem(code) {
  const entry = state.eanHistory.find((item) => item.code === code);
  if (!entry) {
    return;
  }

  if (!window.confirm(t("historyDeleteConfirm", { name: entry.name }))) {
    return;
  }

  state.eanHistory = state.eanHistory.filter((item) => item.code !== code);
  persistState();
  renderEanHistoryItems();
  showToast(t("historyDeletedToast"));
}

function getSortedCategories() {
  return state.categories.slice().sort((a, b) => a.order - b.order);
}

function getCategorySortOrder(categoryId) {
  const category = getCategoryById(categoryId) || getOtherCategory();
  return category?.order ?? Number.MAX_SAFE_INTEGER;
}

function getSortedShoppingItems() {
  return state.shoppingItems
    .slice()
    .sort((leftItem, rightItem) => {
      const categoryOrderDiff = getCategorySortOrder(leftItem.categoryId) - getCategorySortOrder(rightItem.categoryId);
      if (categoryOrderDiff !== 0) {
        return categoryOrderDiff;
      }

      const leftStatusOrder = leftItem.status === "bought" ? 1 : 0;
      const rightStatusOrder = rightItem.status === "bought" ? 1 : 0;
      if (leftStatusOrder !== rightStatusOrder) {
        return leftStatusOrder - rightStatusOrder;
      }

      return (leftItem.createdAt || 0) - (rightItem.createdAt || 0);
    });
}

function getGroupedShoppingItems() {
  const groups = new Map();

  getSortedShoppingItems().forEach((item) => {
    const category = getCategoryById(item.categoryId) || getOtherCategory();
    const key = category?.id ?? 1;

    if (!groups.has(key)) {
      groups.set(key, {
        category,
        items: []
      });
    }

    groups.get(key).items.push(item);
  });

  return getSortedCategories()
    .map((category) => groups.get(category.id))
    .filter(Boolean);
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
      const category = getCategoryById(item.categoryId) || getOtherCategory();
      const categoryColor = category ? category.color : "#9aa3c6";
      const categoryName = category ? category.name : t("categoryOther");
      
      return `
        <li class="item-card">
          <div class="item-top">
            <div>
              <div class="item-name">${escapeHtml(item.name)}</div>
              <div class="item-meta">${escapeHtml(item.meta || "")}</div>
              <div class="item-category-badge" style="background-color: ${escapeHtml(categoryColor)}20; border: 1px solid ${escapeHtml(categoryColor)}; color: ${escapeHtml(categoryColor)};">
                <span class="category-dot" style="background-color: ${escapeHtml(categoryColor)}"></span>
                ${escapeHtml(categoryName)}
              </div>
            </div>
            <span class="status-pill ${isBought ? "bought" : "pending"}">${isBought ? escapeHtml(t("statusBought")) : escapeHtml(t("statusPending"))}</span>
          </div>

          <div class="item-controls">
            <div class="qty-box">
              <button class="small-btn" data-action="dec-qty" data-id="${item.id}">−</button>
              <strong>${item.qty}</strong>
              <button class="small-btn" data-action="inc-qty" data-id="${item.id}">+</button>
            </div>

            <select class="small-btn category-select" data-action="set-category" data-id="${item.id}">
              ${getSortedCategories()
                .map(cat => `<option value="${cat.id}" ${cat.id === item.categoryId ? "selected" : ""}>${escapeHtml(cat.name)}</option>`)
                .join("")}
            </select>

            <button class="small-btn danger" data-action="cancel" data-id="${item.id}">${escapeHtml(t("cancelButton"))}</button>
            <button class="small-btn ok" data-action="bought" data-id="${item.id}" ${isBought ? "disabled" : ""}>${escapeHtml(t("boughtButton"))}</button>
          </div>
        </li>
      `;
    })
    .join("");

  elements.shoppingList.querySelectorAll("button[data-action]").forEach((button) => {
    button.addEventListener("click", onShoppingAction);
  });

  elements.shoppingList.querySelectorAll(".category-select").forEach((select) => {
    select.addEventListener("change", onShoppingAction);
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

  if (action === "set-category") {
    const newCategoryId = parseInt(event.currentTarget.value);
    state.shoppingItems[index].categoryId = newCategoryId;
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

  try {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
      dialog.classList.remove("dialog-fallback-open");
      return;
    }
  } catch (error) {
    console.debug("showModal failed, using fallback", error);
  }

  try {
    if (typeof dialog.show === "function") {
      dialog.show();
      dialog.classList.remove("dialog-fallback-open");
      return;
    }
  } catch (error) {
    console.debug("show failed, using fallback", error);
  }

  dialog.classList.add("dialog-fallback-open");
  dialog.setAttribute("open", "open");
}

function closeDialog(dialog) {
  if (!dialog) {
    return;
  }

  if (dialog.open && typeof dialog.close === "function") {
    dialog.close();
    dialog.classList.remove("dialog-fallback-open");
    return;
  }

  dialog.classList.remove("dialog-fallback-open");
  dialog.removeAttribute("open");
}

function updateApiSettingsStatus() {
  if (!elements.apiSettingsStatus) {
    return;
  }

  if (state.eanSearchApiToken) {
    elements.apiSettingsStatus.textContent = t("apiSettingsStatusConnected", { used: state.eanSearchQueriesUsed });
    return;
  }

  elements.apiSettingsStatus.textContent = t("apiSettingsStatusMissing");
}

function openApiSettingsModal() {
  elements.apiTokenInput.value = state.eanSearchApiToken || "";
  updateApiSettingsStatus();
  openDialog(elements.apiSettingsModal);
  elements.apiTokenInput.focus();
  elements.apiTokenInput.select();
}

function closeApiSettingsModal() {
  closeDialog(elements.apiSettingsModal);
}

function openCategoriesModal() {
  renderCategoriesInUI();
  openDialog(elements.categoriesModal);
}

function closeCategoriesModal() {
  closeDialog(elements.categoriesModal);
}

function saveApiToken() {
  const token = elements.apiTokenInput.value.trim();
  state.eanSearchApiToken = token || null;
  persistState();
  updateApiSettingsStatus();
  setUsbStatus(t("apiTokenSaved"));
}

function clearApiToken() {
  state.eanSearchApiToken = null;
  elements.apiTokenInput.value = "";
  persistState();
  updateApiSettingsStatus();
  setUsbStatus(t("apiTokenCleared"));
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
      // Fallback: Use "Unknown Product" instead of "Not Found"
      productName = `Unknown Product (${code})`;
      if (lookup.errorCode === "paidUnauthorized") {
        lookupMeta = t("lookupPaidUnauthorized");
        elements.lookupStatus.textContent = t("lookupPaidUnauthorized");
      } else if (lookup.errorCode === "paidFailed") {
        lookupMeta = t("lookupPaidError");
        elements.lookupStatus.textContent = t("lookupPaidError");
      } else {
        lookupMeta = t("lookupNotFound", { code });
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
      sourceCode: String(mapped.id),
      categoryId: mapped.categoryId
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

  // FREE TIER (browser-safe CORS sources only)
  const freeSources = [
    // Tier 1: Open Facts databases (CORS-friendly in browser)
    { type: "openFacts", label: "Open Food Facts", endpoint: `https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(eanCode)}.json` },
    { type: "openFacts", label: "Open Beauty Facts", endpoint: `https://world.openbeautyfacts.org/api/v2/product/${encodeURIComponent(eanCode)}.json` },
    { type: "openFacts", label: "Open Pet Food Facts", endpoint: `https://world.openpetfoodfacts.org/api/v2/product/${encodeURIComponent(eanCode)}.json` }
  ];

  // Try free sources first
  for (const source of freeSources) {
    try {
      const lookup = await fetchLookupCandidate(source);
      if (lookup.name) {
        state.eanLookupCache[eanCode] = { name: lookup.name, source: source.label };
        persistState();
        return { name: lookup.name, sourceLabel: source.label };
      }
    } catch (error) {
      console.debug(`Lookup failed for ${source.label}:`, error);
    }
  }

  // Paid fallback (only if token exists)
  if (state.eanSearchApiToken) {
    const paidSource = {
      type: "eanSearch",
      label: "EAN Search",
      endpoint: `https://api.ean-search.org/api?token=${encodeURIComponent(state.eanSearchApiToken)}&op=barcode-lookup&format=json&ean=${encodeURIComponent(eanCode)}`,
      isPaid: true
    };

    const paidLookup = await fetchLookupCandidate(paidSource);
    if (paidLookup.name) {
      state.eanLookupCache[eanCode] = { name: paidLookup.name, source: paidSource.label };
      persistState();
      return { name: paidLookup.name, sourceLabel: paidSource.label };
    }

    if (paidLookup.errorCode === "paidUnauthorized") {
      return { name: null, sourceLabel: "EAN Search", errorCode: "paidUnauthorized" };
    }

    return { name: null, sourceLabel: "EAN Search", errorCode: "paidFailed" };
  }

  return { name: null, sourceLabel: null };
}

function formatLookupSourceLabel(source, isCached = false) {
  const base = source === "User" ? t("lookupSourceUser") : source;
  return isCached ? `${base}${t("lookupCachedSuffix")}` : base;
}

async function fetchLookupCandidate(source) {
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), 3000); // 3 second timeout per API

  try {
    const response = await fetch(source.endpoint, {
      method: "GET",
      signal: timeoutController.signal,
      headers: {
        "Accept": "application/json",
        "User-Agent": "APSShopScan/1.0 (https://github.com/AnnPasz/APSShopScan)",
        "Accept-Language": "en-US,en;q=0.9,pl;q=0.8"
      }
    });

    if (!response.ok) {
      if (source.isPaid && response.status === 401) {
        return { name: null, errorCode: "paidUnauthorized" };
      }
      return { name: null, errorCode: source.isPaid ? "paidFailed" : "freeFailed" };
    }

    if (source.isPaid) {
      state.eanSearchQueriesUsed += 1;
      persistState();
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
    } else if (source.type === "icecat") {
      name = extractIcecatName(data);
    } else if (source.type === "wikidata") {
      name = extractWikidataName(data);
    }

    if (!name) {
      return { name: null, errorCode: source.isPaid ? "paidFailed" : "freeFailed" };
    }

    return { name: cleanLookupName(name), errorCode: null };
  } catch (error) {
    console.debug(`Fetch error for ${source.label}:`, error.message);
    return { name: null, errorCode: source.isPaid ? "paidFailed" : "freeFailed" };
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

function extractIcecatName(data) {
  // Icecat returns array or object with product data
  if (Array.isArray(data) && data.length > 0) {
    return data[0].title || data[0].name || data[0].brand || null;
  }
  if (data?.title) {
    return data.title;
  }
  if (data?.name) {
    return data.name;
  }
  return null;
}

function extractWikidataName(data) {
  // Wikidata returns: { search: [{ title: "...", label: "..." }, ...] }
  if (!data?.search || !Array.isArray(data.search) || data.search.length === 0) {
    return null;
  }
  const result = data.search[0];
  return result.label || result.title || result.description || null;
}

function extractUpcDatabaseName(data) {
  // UPC Database API returns: { code: "...", title: "...", description: "..." }
  if (!data) return null;
  return data.title || data.description || data.name || null;
}

function extractUpcResolverName(data) {
  // UPC Resolver returns HTML, but we can try JSON fallback
  if (!data) return null;
  // If it's JSON response with product info
  if (data.title) {
    return data.title;
  }
  if (data.description) {
    return data.description;
  }
  if (data.name) {
    return data.name;
  }
  if (data.product) {
    return data.product.title || data.product.name || null;
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
  renderCategorySelect();
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
  const categoryId = parseInt(elements.confirmScanCategory.value) || getOtherCategory()?.id;
  
  if (state.pendingScannedItem.source === "ean") {
    state.eanLookupCache[state.pendingScannedItem.sourceCode] = {
      name: confirmedName,
      source: "User"
    };
  }

  addShoppingItem({
    ...state.pendingScannedItem,
    name: confirmedName,
    meta: `${state.pendingScannedItem.meta} • ${state.pendingScannedItem.lookupMeta}`,
    categoryId
  });

  if (state.pendingScannedItem.source === "ean") {
    rememberEanHistoryItem({
      code: state.pendingScannedItem.sourceCode,
      name: confirmedName,
      categoryId
    });
  }

  persistState();
  renderEanHistoryItems();
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

function addShoppingItem(data, options = {}) {
  const categoryId = data.categoryId || getOtherCategory()?.id || 1;
  const shouldShowToast = options.showToast !== false;
  
  state.shoppingItems.push({
    id: crypto.randomUUID(),
    name: data.name,
    meta: data.meta,
    source: data.source,
    sourceCode: data.sourceCode,
    categoryId,
    qty: 1,
    status: "pending",
    createdAt: Date.now()
  });

  persistState();
  renderShoppingList();
  if (shouldShowToast) {
    showToast(t("addedToShoppingToast"));
  }
}

function onAddManualItem(event) {
  event.preventDefault();
  const name = elements.manualName.value.trim();
  const selectedCategoryId = parseInt(elements.manualCategory.value, 10);
  const categoryId = getCategoryById(selectedCategoryId)?.id || getManualDefaultCategoryId();
  if (!name) {
    return;
  }

  const item = {
    id: state.manualNextId,
    name,
    categoryId,
    createdAt: Date.now()
  };

  state.manualItems.push(item);
  state.manualNextId += 1;
  elements.manualName.value = "";
  renderManualCategorySelect(getManualDefaultCategoryId());

  persistState();
  renderManualItems();
}

function renderManualItems() {
  elements.manualPrintAllBtn.disabled = !state.manualItems.length;

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
      const category = getCategoryById(item.categoryId) || getCategoryById(getManualDefaultCategoryId()) || getOtherCategory();
      const categoryColor = category ? category.color : "#9aa3c6";
      const categoryName = category ? category.name : t("categoryOther");

      return `
        <li class="item-card">
          <div class="item-top">
            <div>
              <div class="item-name">${escapeHtml(item.name)}</div>
              <div class="item-meta">${escapeHtml(t("manualItemMeta", { id: item.id }))}</div>
              <div class="item-category-badge" style="background-color: ${escapeHtml(categoryColor)}20; border: 1px solid ${escapeHtml(categoryColor)}; color: ${escapeHtml(categoryColor)};">
                <span class="category-dot" style="background-color: ${escapeHtml(categoryColor)}"></span>
                ${escapeHtml(categoryName)}
              </div>
            </div>
          </div>
          <img class="manual-qr" alt="QR for ${escapeHtml(item.name)}" src="${qrUrl}" />
          <div class="item-controls">
            <select class="small-btn category-select manual-item-category-select" data-manual-category="${item.id}">
              ${getSortedCategories()
                .map(cat => `<option value="${cat.id}" ${cat.id === category?.id ? "selected" : ""}>${escapeHtml(cat.name)}</option>`)
                .join("")}
            </select>
            <button class="small-btn" data-manual-add="${item.id}">${escapeHtml(t("addToList"))}</button>
            <button class="small-btn" data-manual-print="${item.id}">${escapeHtml(t("printQr"))}</button>
            <button class="small-btn" data-manual-edit="${item.id}">${escapeHtml(t("manualEdit"))}</button>
            <button class="small-btn danger" data-manual-delete="${item.id}">${escapeHtml(t("manualDelete"))}</button>
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
        sourceCode: String(item.id),
        categoryId: item.categoryId
      });
    });
  });

  elements.manualItems.querySelectorAll("[data-manual-category]").forEach((select) => {
    select.addEventListener("change", () => {
      const id = Number(select.dataset.manualCategory);
      const categoryId = Number(select.value);
      updateManualItemCategory(id, categoryId);
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

  elements.manualItems.querySelectorAll("[data-manual-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.manualEdit);
      editManualItem(id);
    });
  });

  elements.manualItems.querySelectorAll("[data-manual-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.manualDelete);
      deleteManualItem(id);
    });
  });
}

function editManualItem(id) {
  const item = state.manualItems.find((entry) => entry.id === id);
  if (!item) {
    return;
  }

  const updatedName = window.prompt(t("manualEditPrompt"), item.name);
  if (updatedName === null) {
    return;
  }

  const trimmedName = updatedName.trim();
  if (!trimmedName) {
    alert(t("manualNameRequired"));
    return;
  }

  item.name = trimmedName;
  persistState();
  renderManualItems();
}

function updateManualItemCategory(id, categoryId) {
  const item = state.manualItems.find((entry) => entry.id === id);
  if (!item) {
    return;
  }

  item.categoryId = getCategoryById(categoryId)?.id || getManualDefaultCategoryId();
  persistState();
  renderManualItems();
}

function deleteManualItem(id) {
  const index = state.manualItems.findIndex((entry) => entry.id === id);
  if (index === -1) {
    return;
  }

  if (!window.confirm(t("manualDeleteConfirm"))) {
    return;
  }

  state.manualItems.splice(index, 1);
  persistState();
  renderManualItems();
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

function printAllManualQrs() {
  if (!state.manualItems.length) {
    alert(t("printAllQrEmpty"));
    return;
  }

  const sortedItems = state.manualItems.slice().sort((a, b) => b.id - a.id);
  const printWindow = window.open("", "_blank", "width=900,height=760");
  if (!printWindow) {
    return;
  }

  const blocks = sortedItems
    .map((item) => {
      const payload = `NOEAN:${item.id}`;
      const qrUrl = buildQrUrl(payload);
      return `
        <article class="qr-card">
          <h2>${escapeHtml(item.name)}</h2>
          <p>${escapeHtml(t("printIdLabel"))}: ${item.id}</p>
          <p>${escapeHtml(t("printPayloadLabel"))}: ${escapeHtml(payload)}</p>
          <img src="${qrUrl}" alt="QR ${item.id}" />
        </article>
      `;
    })
    .join("");

  printWindow.document.write(`
    <html lang="${state.language}">
      <head>
        <title>${escapeHtml(t("printAllTitle"))}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
          h1 { margin: 0 0 16px; font-size: 24px; }
          .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
          .qr-card { border: 1px solid #d7deea; border-radius: 12px; padding: 12px; break-inside: avoid; }
          .qr-card h2 { margin: 0 0 8px; font-size: 18px; }
          .qr-card p { margin: 4px 0; font-size: 13px; }
          .qr-card img { width: 220px; height: 220px; object-fit: contain; display: block; margin-top: 8px; }
          @media print { body { padding: 10px; } }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(t("printAllTitle"))}</h1>
        <section class="grid">${blocks}</section>
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

function showToast(message) {
  if (!elements.toast) {
    return;
  }

  if (toastTimeout) {
    clearTimeout(toastTimeout);
    toastTimeout = null;
  }

  elements.toast.textContent = message;
  elements.toast.classList.remove("hidden");
  elements.toast.classList.add("visible");

  toastTimeout = setTimeout(() => {
    elements.toast.classList.remove("visible");
    elements.toast.classList.add("hidden");
  }, 2200);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// ============= CATEGORIES MANAGEMENT =============

function initializeDefaultCategories() {
  const otherCategoryName = TRANSLATIONS[state.language]?.categoryOther || TRANSLATIONS.pl.categoryOther || "Inne";
  const defaultCategories = [
    { id: 1, name: otherCategoryName, color: "#9aa3c6", order: 0 }
  ];
  state.categories = defaultCategories;
  persistState();
}

function getCategoryById(categoryId) {
  return state.categories.find(c => c.id === categoryId) || null;
}

function getOtherCategory() {
  return state.categories.find(c => c.id === 1) || state.categories[0];
}

function getManualDefaultCategoryNames() {
  return [TRANSLATIONS.pl.manualDefaultCategory, TRANSLATIONS.en.manualDefaultCategory]
    .filter(Boolean)
    .map((name) => name.trim().toLowerCase());
}

function ensureManualDefaultCategory() {
  const defaultCategoryNames = getManualDefaultCategoryNames();
  const existingCategory = state.categories.find((category) => defaultCategoryNames.includes(String(category.name || "").trim().toLowerCase()));

  if (existingCategory) {
    return existingCategory;
  }

  const category = {
    id: state.nextCategoryId,
    name: TRANSLATIONS.pl.manualDefaultCategory,
    color: "#69c16f",
    order: state.categories.length
  };

  state.categories.push(category);
  state.nextCategoryId += 1;
  persistState();
  return category;
}

function getManualDefaultCategoryId() {
  return ensureManualDefaultCategory()?.id || getOtherCategory()?.id || 1;
}

function normalizeManualItemsCategories() {
  const defaultCategoryId = getManualDefaultCategoryId();
  let hasChanges = false;

  state.manualItems = state.manualItems.map((item) => {
    if (getCategoryById(item.categoryId)) {
      return item;
    }

    hasChanges = true;
    return {
      ...item,
      categoryId: defaultCategoryId
    };
  });

  if (hasChanges) {
    persistState();
  }
}

function seedEanHistoryFromShoppingItems() {
  const knownCodes = new Set(state.eanHistory.map((entry) => String(entry.code)));
  let hasChanges = false;

  state.shoppingItems.forEach((item) => {
    if (item?.source !== "ean") {
      return;
    }

    const code = String(item.sourceCode || "").trim();
    const name = String(item.name || "").trim();
    if (!code || !name || knownCodes.has(code)) {
      return;
    }

    state.eanHistory.push({
      code,
      name,
      categoryId: getCategoryById(Number(item.categoryId))?.id || getOtherCategory()?.id || 1,
      count: 1,
      lastUsedAt: Number(item.createdAt) || Date.now()
    });

    knownCodes.add(code);
    hasChanges = true;
  });

  if (hasChanges) {
    persistState();
  }
}

function onAddCategory() {
  const name = elements.newCategoryName.value.trim();
  const color = elements.newCategoryColor.value || CATEGORY_COLOR_PALETTE[0];

  if (!name) {
    return;
  }

  const newCategory = {
    id: state.nextCategoryId,
    name,
    color,
    order: state.categories.length
  };

  state.categories.push(newCategory);
  state.nextCategoryId += 1;
  persistState();

  elements.newCategoryName.value = "";
  elements.newCategoryColor.value = CATEGORY_COLOR_PALETTE[0];
  categoryUiState.addPaletteOpen = false;

  renderNewCategoryPalette();
  renderManualItems();
  renderCategoriesInUI();
  renderCategorySelect();
  renderManualCategorySelect();
  renderHistoryCategoryFilter();
  renderEanHistoryItems();
  setUsbStatus(t("categoryAdded", { name }));
}

function toggleNewCategoryPalette() {
  categoryUiState.addPaletteOpen = !categoryUiState.addPaletteOpen;
  renderNewCategoryPalette();
  applyLanguage();
}

function deleteCategory(categoryId) {
  const category = getCategoryById(categoryId);
  if (!category) return;

  const confirmMsg = t("confirmDeleteCategory", { name: category.name });
  if (!confirm(confirmMsg)) {
    return;
  }

  // Move products with this category to "Other"
  const otherCategory = getOtherCategory();
  if (otherCategory && otherCategory.id !== categoryId) {
    state.shoppingItems.forEach(item => {
      if (item.categoryId === categoryId) {
        item.categoryId = otherCategory.id;
      }
    });

    state.manualItems.forEach(item => {
      if (item.categoryId === categoryId) {
        item.categoryId = otherCategory.id;
      }
    });

    state.eanHistory.forEach((item) => {
      if (item.categoryId === categoryId) {
        item.categoryId = otherCategory.id;
      }
    });
  }

  state.categories = state.categories.filter(c => c.id !== categoryId);
  persistState();

  renderShoppingList();
  renderManualItems();
  renderCategoriesInUI();
  renderCategorySelect();
  renderManualCategorySelect();
  renderHistoryCategoryFilter();
  renderEanHistoryItems();
  setUsbStatus(t("categoryDeleted", { name: category.name }));
}

function updateCategoryColor(categoryId, newColor) {
  const category = getCategoryById(categoryId);
  if (!category) return;

  category.color = newColor;
  persistState();

  renderShoppingList();
  renderManualItems();
  renderEanHistoryItems();
  renderCategoriesInUI();
  setUsbStatus(t("categoryColorUpdated", { name: category.name }));
}

function startCategoryEdit(categoryId) {
  const category = getCategoryById(categoryId);
  if (!category) {
    return;
  }

  categoryUiState.editingCategoryId = categoryId;
  categoryUiState.editNameDraft = category.name;
  categoryUiState.editColorDraft = category.color;
  categoryUiState.editPaletteOpen = false;
  renderCategoriesInUI();
}

function cancelCategoryEdit() {
  categoryUiState.editingCategoryId = null;
  categoryUiState.editNameDraft = "";
  categoryUiState.editColorDraft = CATEGORY_COLOR_PALETTE[0];
  categoryUiState.editPaletteOpen = false;
  renderCategoriesInUI();
}

function saveCategoryEdit(categoryId) {
  const category = getCategoryById(categoryId);
  if (!category) {
    return;
  }

  const nextName = categoryUiState.editNameDraft.trim();
  if (!nextName) {
    return;
  }

  category.name = nextName;
  category.color = categoryUiState.editColorDraft || category.color;
  persistState();
  cancelCategoryEdit();
  renderShoppingList();
  renderManualItems();
  renderEanHistoryItems();
  renderCategorySelect();
  renderManualCategorySelect();
  renderHistoryCategoryFilter();
}

function toggleEditCategoryPalette() {
  categoryUiState.editPaletteOpen = !categoryUiState.editPaletteOpen;
  renderCategoriesInUI();
}

function moveCategory(categoryId, direction) {
  const sortedCategories = getSortedCategories();
  const currentIndex = sortedCategories.findIndex((category) => category.id === categoryId);

  if (currentIndex === -1) {
    return;
  }

  const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
  if (targetIndex < 0 || targetIndex >= sortedCategories.length) {
    return;
  }

  [sortedCategories[currentIndex], sortedCategories[targetIndex]] = [sortedCategories[targetIndex], sortedCategories[currentIndex]];

  sortedCategories.forEach((category, index) => {
    const stateCategory = getCategoryById(category.id);
    if (stateCategory) {
      stateCategory.order = index;
    }
  });

  persistState();
  renderShoppingList();
  renderManualItems();
  renderEanHistoryItems();
  renderCategoriesInUI();
  renderCategorySelect();
  renderManualCategorySelect();
  renderHistoryCategoryFilter();

  const movedCategory = getCategoryById(categoryId);
  if (movedCategory) {
    setUsbStatus(t(direction === "up" ? "categoryMovedUp" : "categoryMovedDown", { name: movedCategory.name }));
  }
}

function renderCategoriesInUI() {
  if (!elements.categoriesList) return;

  if (!state.categories.length) {
    elements.categoriesList.innerHTML = "";
    return;
  }

  const sortedCategories = getSortedCategories();

  elements.categoriesList.innerHTML = sortedCategories
    .map((category, index) => {
      const isOther = category.id === 1;
      const isFirst = index === 0;
      const isLast = index === sortedCategories.length - 1;
      const isEditing = categoryUiState.editingCategoryId === category.id;
      return `
        <div class="category-item" data-category-id="${category.id}">
          ${isEditing ? buildCategoryEditCard(category, isFirst, isLast, isOther) : buildCategoryDisplayCard(category, isFirst, isLast, isOther)}
        </div>
      `;
    })
    .join("");

  elements.categoriesList.querySelectorAll(".category-edit-name-input").forEach((input) => {
    input.addEventListener("input", (event) => {
      categoryUiState.editNameDraft = event.currentTarget.value;
    });
  });

  elements.categoriesList.querySelectorAll(".category-edit-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      startCategoryEdit(parseInt(event.currentTarget.dataset.categoryId));
    });
  });

  elements.categoriesList.querySelectorAll(".category-edit-save-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      saveCategoryEdit(parseInt(event.currentTarget.dataset.categoryId));
    });
  });

  elements.categoriesList.querySelectorAll(".category-edit-cancel-btn").forEach((button) => {
    button.addEventListener("click", () => {
      cancelCategoryEdit();
    });
  });

  elements.categoriesList.querySelectorAll(".category-edit-palette-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      toggleEditCategoryPalette();
    });
  });

  elements.categoriesList.querySelectorAll(".category-palette-swatch").forEach(button => {
    button.addEventListener("click", (event) => {
      const color = event.currentTarget.dataset.color;
      const categoryId = parseInt(event.currentTarget.dataset.categoryId);

      if (categoryUiState.editingCategoryId === categoryId) {
        categoryUiState.editColorDraft = color;
        renderCategoriesInUI();
        return;
      }

      updateCategoryColor(categoryId, color);
    });
  });

  elements.categoriesList.querySelectorAll(".category-delete-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      deleteCategory(parseInt(e.target.dataset.categoryId));
    });
  });

  elements.categoriesList.querySelectorAll(".category-move-btn").forEach(btn => {
    btn.addEventListener("click", (event) => {
      const categoryId = parseInt(event.currentTarget.dataset.categoryId);
      const direction = event.currentTarget.dataset.action === "move-up" ? "up" : "down";
      moveCategory(categoryId, direction);
    });
  });
}

function renderNewCategoryPalette() {
  if (!elements.newCategoryPalette || !elements.newCategoryColor) {
    return;
  }

  const selectedColor = elements.newCategoryColor.value || CATEGORY_COLOR_PALETTE[0];
  elements.newCategoryPalette.classList.toggle("hidden", !categoryUiState.addPaletteOpen);
  elements.newCategoryColorPreview.style.backgroundColor = selectedColor;
  elements.newCategoryColorToggle.setAttribute("aria-label", categoryUiState.addPaletteOpen ? t("hideColorPalette") : t("showColorPalette"));
  elements.newCategoryColorToggle.title = categoryUiState.addPaletteOpen ? t("hideColorPalette") : t("showColorPalette");
  elements.newCategoryPalette.innerHTML = buildColorPalette(selectedColor, "new");

  elements.newCategoryPalette.querySelectorAll(".new-category-palette-swatch").forEach(button => {
    button.addEventListener("click", (event) => {
      const color = event.currentTarget.dataset.color;
      elements.newCategoryColor.value = color;
      renderNewCategoryPalette();
    });
  });
}

function buildColorPalette(selectedColor, paletteType, categoryId = null, disabled = false) {
  return CATEGORY_COLOR_PALETTE.map((color) => {
    const isSelected = color.toLowerCase() === String(selectedColor || "").toLowerCase();
    const className = paletteType === "new" ? "new-category-palette-swatch" : "category-palette-swatch";
    return `
      <button
        type="button"
        class="palette-swatch ${className} ${isSelected ? "selected" : ""}"
        style="background-color: ${escapeHtml(color)}"
        data-color="${escapeHtml(color)}"
        ${categoryId ? `data-category-id="${categoryId}"` : ""}
        aria-label="${escapeHtml(color)}"
        title="${escapeHtml(color)}"
        ${disabled ? "disabled" : ""}
      ></button>
    `;
  }).join("");
}

function buildCategoryDisplayCard(category, isFirst, isLast, isOther) {
  return `
    <div class="category-card-main">
      <div class="category-info">
        <div class="category-color-preview" style="background-color: ${escapeHtml(category.color)}"></div>
        <span class="category-name">${escapeHtml(category.name)}</span>
      </div>
      <div class="category-controls">
        <div class="category-order-controls">
          <button class="small-btn category-move-btn" data-action="move-up" data-category-id="${category.id}" ${isFirst ? "disabled" : ""} title="${escapeHtml(t("moveCategoryUp"))}">↑</button>
          <button class="small-btn category-move-btn" data-action="move-down" data-category-id="${category.id}" ${isLast ? "disabled" : ""} title="${escapeHtml(t("moveCategoryDown"))}">↓</button>
        </div>
        <div class="category-action-row">
          <button class="small-btn category-edit-btn" data-category-id="${category.id}">${escapeHtml(t("editCategory"))}</button>
          <button class="small-btn danger category-delete-btn" data-category-id="${category.id}" ${isOther ? "disabled" : ""}>${escapeHtml(t("deleteCategory"))}</button>
        </div>
      </div>
    </div>
  `;
}

function buildCategoryEditCard(category, isFirst, isLast, isOther) {
  return `
    <div class="category-card-main editing">
      <div class="category-edit-header">
        <div class="category-order-controls">
          <button class="small-btn category-move-btn" data-action="move-up" data-category-id="${category.id}" ${isFirst ? "disabled" : ""} title="${escapeHtml(t("moveCategoryUp"))}">↑</button>
          <button class="small-btn category-move-btn" data-action="move-down" data-category-id="${category.id}" ${isLast ? "disabled" : ""} title="${escapeHtml(t("moveCategoryDown"))}">↓</button>
        </div>
        <button class="small-btn danger category-delete-btn" data-category-id="${category.id}" ${isOther ? "disabled" : ""}>${escapeHtml(t("deleteCategory"))}</button>
      </div>
      <div class="category-edit-row">
        <span class="category-color-preview" style="background-color: ${escapeHtml(categoryUiState.editColorDraft)}"></span>
        <input class="confirm-input category-edit-name-input" type="text" value="${escapeHtml(categoryUiState.editNameDraft)}" />
        <button class="ghost-btn palette-toggle-btn category-edit-palette-toggle" type="button" title="${escapeHtml(categoryUiState.editPaletteOpen ? t("hideColorPalette") : t("showColorPalette"))}">🌈</button>
      </div>
      <div class="color-palette category-palette ${categoryUiState.editPaletteOpen ? "" : "hidden"}" data-category-id="${category.id}">
        ${buildColorPalette(categoryUiState.editColorDraft, "category", category.id, false)}
      </div>
      <div class="category-action-row">
        <button class="small-btn category-edit-cancel-btn" type="button">${escapeHtml(t("cancelEdit"))}</button>
        <button class="primary-btn category-edit-save-btn" type="button" data-category-id="${category.id}">${escapeHtml(t("saveCategory"))}</button>
      </div>
    </div>
  `;
}

function renderCategorySelect() {
  if (!elements.confirmScanCategory) return;

  const otherCategory = getOtherCategory();
  const selectedId = elements.confirmScanCategory.value ? parseInt(elements.confirmScanCategory.value) : otherCategory?.id;

  elements.confirmScanCategory.innerHTML = getSortedCategories()
    .map(category => {
      const isSelected = category.id === selectedId;
      return `<option value="${category.id}" ${isSelected ? "selected" : ""}>${escapeHtml(category.name)}</option>`;
    })
    .join("");
}

function renderManualCategorySelect(selectedCategoryId = null) {
  if (!elements.manualCategory) {
    return;
  }

  const defaultCategoryId = getManualDefaultCategoryId();
  const currentCategoryId = selectedCategoryId ?? parseInt(elements.manualCategory.value, 10);
  const resolvedCategoryId = getCategoryById(currentCategoryId) ? currentCategoryId : defaultCategoryId;

  elements.manualCategory.innerHTML = getSortedCategories()
    .map((category) => `<option value="${category.id}" ${category.id === resolvedCategoryId ? "selected" : ""}>${escapeHtml(category.name)}</option>`)
    .join("");
}