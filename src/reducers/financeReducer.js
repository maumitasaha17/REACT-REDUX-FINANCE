import { actionTypes } from "../services/financeActionTypes";

const intialState = {
  finances: [],
};

export const financeReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_FINANCES:
      return { ...state, finances: payload };
    default:
      return state;
  }
};

export const selectedFinanceReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case actionTypes.SELECTED_FINANCE:
      return { ...state, ...payload };
    case actionTypes.REMOVE_SELECTED_FINANCE:
      return {};
    default:
      return state;
  }
};
export default financeReducer;
