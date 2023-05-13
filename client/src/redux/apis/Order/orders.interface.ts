import { IProductList } from '../Product/product.interface';

interface IProducts {
  product: string;
  pricePaid: number;
  qty: number;
}

interface IPaymentInfo {
  cardName: string;
  cardNumber: string;
}

interface IOrderProductsList {
  product: string | IProductList;
  pricePaid: number;
  qty: number;
  _id: string;
}

export interface AddOrderRequest {
  shipTo: string;
  products: IProducts[];
  payment: IPaymentInfo;
  totalAmount: number;
}

export interface IOrder {
  user: string;
  shipTo: string;
  products: IOrderProductsList[];
  payment: IPaymentInfo;
  totalAmount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
  __v: number;
}

// for file export
export interface IErrorProductResponse {
  _id: string;
  title: string;
  price: number;
  images: string[];
  stock: number;
  discount: number;
  rating: {
    rate: number;
    count: number;
  };
}

export interface AddOrderResponse {
  success: boolean;
  data?: IErrorProductResponse[];
  order?: IOrder;
}

export interface GetOrderResponse {
  success: true;
  orders: IOrder[];
}
