export interface BaseBook {
  name: string;
  author: string;
  price: number;
  pages: number;
  readPages: number;
  lastReadingDate: Date;
  startReadingDate: Date;
  description: string;
  image: string;
}

export interface Book extends BaseBook {
  id: number;
}

