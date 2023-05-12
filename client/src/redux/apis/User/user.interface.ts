interface IAddressReturn {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pin: number;
  _id: string;
}

export interface IAddress {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pin: number;
}

export interface GetAddressesResponse {
  success: true;
  message?: string;
  data?: IAddressReturn[];
}

export interface AddAddressResponse {
  success: boolean;
  data: IAddress[];
}

export interface DeleteAddressResponse {
  addressID: string;
}

export interface AddToCartRequest {
  productId: string;
  operation: string;
}

export interface AddToCartResponse {
  success: boolean;
  data: string[];
}
