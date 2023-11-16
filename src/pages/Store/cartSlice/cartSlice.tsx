// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  price: number;
  id: string;
  quantity: number;
  limit: number;
  item: any;
  img: any;
  title: string;
}

interface CartState {
  [x: string]: any;
  isCartOpen: boolean;
  cartItems: CartItem[];
}

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state, action: PayloadAction<boolean>) {
      state.isCartOpen = action.payload;
    },
    addItem(state, action: PayloadAction<CartItem>) {
      const newItemId = action.payload.id;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItemId,
      );

      if (existingItem) {
        existingItem.quantity = action.payload.quantity + 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },
    incrementItem(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload && item.quantity < item.limit) {
          item.quantity += 1;
        }
        return item;
      });
    },
    decrementItem(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems
        .map((item) => {
          if (item.id === action.payload) {
            item.quantity -= 1;
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
    },
  },
});

export const { toggleCart, addItem, removeItem, incrementItem, decrementItem } =
  cartSlice.actions;

export default cartSlice.reducer;
