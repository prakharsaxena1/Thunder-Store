interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  rating: IRating;
  _id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  stock: number;
  discount: number;
}
export interface GetProductsRequest {
  searchQuery: string;
}

export interface IProductList {
  _id: string;
  title: string;
  price: number;
  category: string;
  images: string[];
  rating: IRating;
  discount: number;
}

export interface GetProductsResponse {
  success: boolean;
  products: IProductList[];
  total: number;
}

export interface GetProductWithIDResponse {
  success: true;
  product: IProduct;
}

export interface GetProductWithIDRequest {
  id: string;
}
