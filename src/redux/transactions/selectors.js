export const selectSummary = state => state.transactions.summary;
export const selectCategories = state => state.transactions.categories;
export const selectGetTransactions = state => state.transactions.transactions;
export const selectTransactionsErrorStatus = state => state.transactions.error;
export const selectSuccessfulAddition = state =>
  state.transactions.isSuccessfulAddition;
