export const addMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: amount,
    });
  };
};
export const deductMoney = (amount) => {
  return (dipstch) => {
    dipstch({
      type: "deduct",
      payload: amount,
    });
  };
};
