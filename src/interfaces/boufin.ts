export const BankCode = {
  BCI: '016',
  BICE: '028',
  BTG_PACTUAL: '059',
  CHILE: '001',
  CONSORCIO: '055',
  COOPEUCH: '672',
  DO_BRASIL: '017',
  ESTADO: '012',
  FALABELLA: '051',
  HSBC: '031',
  INTERNACIONAL: '009',
  ITAU: '039',
  LOS_HEROES: '729',
  RIPLEY: '053',
  SANTANDER: '037',
  SCOTIABANK: '014',
  SCOTIABANK_AZUL: '504',
  SECURITY: '049',
  TENPO: '730',
  TAPP: '732',
  MERCADO_PAGO: '875'
};

export const EntityId = {
  BCI: 'banco-bci',
  CHILE: 'banco-chile',
  ESTADO: 'banco-estado',
  FALABELLA: 'banco-falabella',
  ITAU: 'banco-itau',
  SANTANDER: 'banco-santander',
  SCOTIABANK: 'banco-scotiabank',
  RIPLEY: 'banco-ripley',
  SECURITY: 'banco-security',
  CONSORCIO: 'banco-consorcio',
  BCI_EMPRESA: 'banco-bci-empresa',
  CHILE_EMPRESA: 'banco-chile-empresa',
  ESTADO_EMPRESA: 'banco-estado-empresa',
  SERVIPAG: 'servipag',
  SII: 'sii',
  CMF: 'cmf',
  AFC: 'afc'
};

export const Action = {
  TEF: 'tef',
  BILL: 'bill',
  MOVEMENT: 'movement',
  TAX_FOLDER: 'tax-folder',
  TAX_FOLDER_CLAVE_UNICA: 'tax-folder-clave-unica',
  TAX_SITUATION: 'tax-situation',
  IDENTITY_VALIDATION: 'identity-validation',
  IDENTITY_VALIDATION_CLAVE_UNICA: 'identity-validation-clave-unica',
  TRANSFER: 'transfer',
  PAT: 'pat',
  FINANCIAL_REPORT: 'financial-report',
  INCOME_REPORT: 'income-report',
  DEBT: 'debt',
  CONSUMER_LOAN: 'consumer-loan',
  BALANCES: 'balances',
  CONTRIBUTION: 'contribution',
  JOB: 'job',
  PERSONAL_INFORMATION: 'personal-information',
  ALL: 'all',
  CONSOLIDATE: 'consolidate',
  INVESTMENT_REPORT: 'investment-report'
};

export type BankCode = (typeof BankCode)[keyof typeof BankCode];
export type EntityId = (typeof EntityId)[keyof typeof EntityId];
export type Action = (typeof Action)[keyof typeof Action];
