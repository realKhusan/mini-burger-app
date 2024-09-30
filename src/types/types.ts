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
}

export interface ICategory {
  id: string;
  icon: string;
  title: string;
  slug: string;
}

export interface IUser {
  id: string;
  userName: string;
  phoneNumber: string;
  password: string;
  adress: string;
  location: [number, number];
}
interface baksetProduct {
  productId: number;
  quantity: number;
}
export interface IBasket {
  id: number;
  userId: number;
  products: baksetProduct[];
}
