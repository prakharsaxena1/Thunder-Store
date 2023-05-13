import React from 'react';
import { IReview, OneReviewResponse } from '../../redux/apis/Review/review.interface';

export interface IReviewPopup {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  data: IReviewData | null;
}

export interface IReviewData {
  rating: number;
  title: string;
  description: string;
  _id: string;
}

export interface IReviewProps {
  review: IReview;
  setData: React.Dispatch<React.SetStateAction<OneReviewResponse | null>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
