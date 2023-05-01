// Request urls
export const urls = {
  home: '/app',
  search: '/search',
  product: '/product',
  orders: '/orders',
  socials: {
    linkedin: 'https://www.linkedin.com/in/prakharsaxena-/',
    github: 'https://github.com/prakharsaxena1',
    twitter: 'https://twitter.com/_thunder_cs',
    instagram: 'https://www.instagram.com/_thunder_cs/',
  },
};

export const colors = {
  primary: 'rgb(241 241 241 / 34%)',
};

export const apiUrls = {
  account: {
    login: '/user/login',
    register: '/user/register',
    logout: '/user/logout',
    deleteAccount: '/user/delete-account',
    refreshToken: '/user/refresh-token',
  },
  orders: {
    addOrder: '/order',
    getOrdersByUser: '/order/user',
    getOrderById: '/order',
  },
  products: {
    product: '/product',
    productByCategory: '/product/category/',
  },
  reviews: {
    productReview: '/review/product',
    review: '/review',
  },
  user: {
    address: '/user/address',
  },
};

export const uiUrls = {
  home: '/app',
  search: '/search',
  product: '/product',
  orders: '/orders',
};
