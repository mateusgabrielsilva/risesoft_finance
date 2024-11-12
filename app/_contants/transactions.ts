import {
  TransactionCategory,
  PaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [PaymentMethod.CREDIT_CARD]: "credit-card.svg",
  [PaymentMethod.DEBIT_CARD]: "debit-card.svg",
  [PaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
  [PaymentMethod.BANK_SLIP]: "bank-slip.svg",
  [PaymentMethod.CASH]: "money.svg",
  [PaymentMethod.PIX]: "pix.svg",
  [PaymentMethod.OTHER]: "other.svg",
};

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  OTHER: "Outros",
  PIX: "Pix",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: PaymentMethod.BANK_TRANSFER,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[PaymentMethod.BANK_TRANSFER],
  },
  {
    value: PaymentMethod.BANK_SLIP,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[PaymentMethod.BANK_SLIP],
  },
  {
    value: PaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[PaymentMethod.CASH],
  },
  {
    value: PaymentMethod.CREDIT_CARD,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[PaymentMethod.CREDIT_CARD],
  },
  {
    value: PaymentMethod.DEBIT_CARD,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[PaymentMethod.DEBIT_CARD],
  },
  {
    value: PaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[PaymentMethod.OTHER],
  },
  {
    value: PaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[PaymentMethod.PIX],
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.EDUCATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.FOOD,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.HOUSING,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.OTHER,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.OTHER],
  },
  {
    value: TransactionCategory.SALARY,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.UTILITY,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.UTILITY],
  },
];
