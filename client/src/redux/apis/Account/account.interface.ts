export interface LoginRequest {
  email: string;
  password: string;
}

interface ICart {
  discount: number;
  image: string;
  price: number;
  productID: string;
  stock: number;
  title: string;
}

export interface LoginRegisterResponse {
  success: boolean;
  message: string;
  data: {
    username: string;
    email: string;
    id: string;
    profilePhoto: string;
    cart: ICart[];
  };
  token: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  username: string;
}

export interface DeactivateRequest {
  id: string;
}

export interface GeneralResponse {
  success: string;
  message: string;
}

export interface RefreshResponse {
  isAuth?: boolean;
  token?: string;
  success: boolean;
}

export interface RefreshRequest {
  token: string;
}
