import { actionTypes } from "../services/financeActionTypes";

export const setFinances = (finances) => {
  return {
    type: actionTypes.SET_FINANCES,
    payload: finances,
  };
};

export const selectedFinance = (finance) => {
  return {
    type: actionTypes.SELECTED_FINANCE,
    payload: finance,
  };
};
export const removeSelectedFinance = (finance) => {
  return {
    type: actionTypes.REMOVE_SELECTED_FINANCE,
    payload: finance,
  };
};
