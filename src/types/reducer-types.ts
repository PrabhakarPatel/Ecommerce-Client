import { CartItem, User, shippingInfo } from "./type";

export interface UserReducerIntialState {
  user: User | null;
  loading: boolean;
}

export interface CartReducerIntialState {
  loading: boolean;
  cartItems: CartItem[];
  subtotal: number;
  tax: number;
  discount: number;
  shippingCharges: number;
  total: number;
  shippingInfo: shippingInfo;
}
