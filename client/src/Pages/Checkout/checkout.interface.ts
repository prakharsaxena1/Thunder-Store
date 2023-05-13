import { IAddress } from '../../redux/apis/User/user.interface';
import { CartI } from '../../redux/slices/cart/cartSlice';

export interface IAddressForm {
  addressHandler: (address: IAddress) => void;
  handleNext: (id?: string) => void;
}

export interface IPaymentForm {
  paymentHandler: (payment: IPayment) => void;
  handleBack: () => void;
  handleNext: (id?: string) => void;
}

export interface IReviewForm {
  data: IReviewFormData;
  handleBack: () => void;
  handleNext: (id?: string) => void;
}

export interface ISecondaryInfo {
  cartId: Record<string, number>;
  product: CartI;
}

export interface IPayment {
  name: string;
  number: string;
  expiry: string;
  cvv: string;
}

export interface IReviewFormData {
  address: IAddress;
  payment: IPayment;
}
