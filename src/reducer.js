import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from "./actions";

export default function reducer(state, action) {
  console.log({ state, action });
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case DECREASE:
      return { ...state };
    case INCREASE:
      return { ...state };
    case REMOVE:
      const removedItemRes = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(action.payload);
      return { ...state, cart: removedItemRes };
    default:
      return state;
  }
}
