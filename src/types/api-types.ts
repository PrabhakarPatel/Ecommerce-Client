import {
  Bar,
  CartItem,
  Line,
  Order,
  Pie,
  Product,
  User,
  shippingInfo,
  stats,
} from "./type";
export type CustomError = {
  status: number;
  data: {
    message: string;
    success: boolean;
  };
};

export type MessageResponse = {
  success: boolean;
  message: string;
};
//user response request api types
export type UserResponse = {
  success: boolean;
  user: User;
};
export type AllUserResponse = {
  success: boolean;
  users: User[];
};
export type DeleteUserRequest = {
  userId: string;
  adminUserId: string;
};
export type allProductsResponse = {
  success: boolean;
  products: Product[];
};
export type CategoriesResponse = {
  success: boolean;
  categories: string[];
};

export type searchProductsResponse = {
  success: boolean;
  products: Product[];
  totalpage: number;
};
export type searchProductsRequest = {
  price: number;
  page: number;
  category: string;
  search: string;
  sort: string;
};
//product response request api types
export type ProductDetailsResponse = {
  success: boolean;
  product: Product;
};
export type NewProductRequest = {
  id: string;
  formData: FormData;
};
export type UpdateProductRequest = {
  productId: string;
  userId: string;
  formData: FormData;
};
export type DeleteProductRequest = {
  productId: string;
  userId: string;
};
//order response request api types
export type NewOrderRequest = {
  shippingInfo: shippingInfo;
  orderItems: CartItem[];
  subtotal: number;
  tax: number;
  discount: number;
  shippingCharges: number;
  total: number;
  user: string;
};
export type UpdateOrderRequest = {
  orderId: string;
  userId: string;
};
export type allOrdersResponse = {
  success: boolean;
  orders: Order[];
};
export type OrderDetailsResponse = {
  success: boolean;
  order: Order;
};

//dashbord response request api types

export type StatsResponse = {
  success: boolean;
  stats: stats;
};

export type PieResponse = {
  success: boolean;
  charts: Pie;
};

export type BarResponse = {
  success: boolean;
  charts: Bar;
};

export type LineResponse = {
  success: boolean;
  charts: Line;
};
