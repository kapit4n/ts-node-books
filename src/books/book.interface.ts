export interface BaseBook {
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface Book extends BaseBook {
  id: number;
}

