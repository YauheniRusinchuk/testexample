window.settings = {
  cardRegistrationPage: false, //Если включина тогда это страница для регистрации карты
  handleGlobalKeydownEnter: false, //Если включина тогда можно проходить формы через enter
  noSizeIframe: true, //Игнорируются размеры iframe присланные PGA
  isToggleButtonEnabled: false, //Включает возможность сворачивать и разворачивать содержимое блоков страницы
  openApi: {
    baseUrl: "https://openapi-entry-pga.intervale.ru/api",
    version: "v4",
    portal: "4EEA096E50948B54C32C32455AD6BCAC",
  },
  baseUrl: "", // настройка указывает роутеру location в конфиге nginx
  // redirectTimeout: 10, // Автоматический редирект по backUrl на странице результатов
  localization: {
    defaultLang: "ru",
    allowedLanguages: ["ru", "en"],
  },
  "3ds2": {
    supported: true,
    versions: ["2.1.0", "2.2.0"],
    browserJsDisabled: "2.2.0",
  },
  requestCancellation: [
    {
      timeout: 100000,
      matchUrls: ["/3ds2-prepare/accept"],
    },
  ],
  qrCodeSize: 182, //default 256
  googlePay: {
    // googlePayEnvironment: 'PRODUCTION', // default is 'TEST'
    // googlePayRequestType: 'DIRECT', // default is 'PAYMENT_GATEWAY'. DIRECT используется до версии PGA 4.2.10
    // googlePayAllowedCardNetworks: ['AMEX', 'DISCOVER', 'INTERAC', 'JCB', 'MASTERCARD', 'VISA'],
    // googlePayAllowedCardAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
    gpay: true, //отключает google pay
  },
};
