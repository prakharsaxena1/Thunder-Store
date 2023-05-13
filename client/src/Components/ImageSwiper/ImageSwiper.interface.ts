export interface CoverCarouselItemProps {
  image: string;
  text: string;
  imgAlign: 'left' | 'right';
}

export interface CarouselItemProps {
  image: string;
}

export interface ImageSwiperProps {
  items: (string | CoverCarouselItemProps)[];
  swiperType?: 'cover';
}
