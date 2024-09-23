export interface IProduct {
  id: string;
  image: string;
  title: string;
  price: number;
  weight: number;
  desc: string;
  sku: string;
  compound: string[];
  calories: number;
  categoryId: string;
  cardinate?: string;
}

export interface ICategory {
  id: string;
  icon: string;
  title: string;
}

export interface IUser {
  id: string;
  email: string;
  password: string;
}

export interface IBasketProduct {
  id: number;
  userId: number;
  products: [
    {
      productId: number;
      quantity: number;
    }
  ];
}
