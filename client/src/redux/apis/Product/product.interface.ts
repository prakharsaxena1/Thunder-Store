export interface GetProductsRequest {
  searchQuery: string;
}

interface IProductList {
  title: string;
  price: number;
  category: string;
  images: string[];
  rating: {
    rate: number;
    count: number;
  };
  _id: string;
  discount: number;
}

export interface GetProductsResponse {
  success: boolean;
  products: IProductList[];
  total: number;
}

export interface GetProductWithIDResponse {
  success: true;
  product: {
    rating: {
      rate: number;
      count: number;
    };
    _id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    images: string[];
    stock: number;
    discount: number;
  };
}

export interface GetProductWithIDRequest {
  id: string;
}
