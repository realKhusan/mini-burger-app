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

export interface Category {
  id: string;
  icon: string;
  title: string;
}
