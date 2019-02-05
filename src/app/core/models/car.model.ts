export interface Car {
  id: string;
  images: {
    small: string;
    big: string;
  };
  model: string;
  year: number;
  brand: string;
  price: number;
  features: {
    headline: string;
    text: string;
  }[];
}
