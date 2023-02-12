export interface IBook {
  id: string;
  title: string;
  image: string;
  author: string[];
}

export interface IBookSearch {
  id: string;
  title: string;
  image: string;
  author: string[];
  price: number;
  isAvailable: boolean;
  format: string[];
}
