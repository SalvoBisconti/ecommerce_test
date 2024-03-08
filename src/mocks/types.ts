export interface productType {
  sys: {
    id: number;
  };
  fields: {
    title: string;
    price: number;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

export interface cartProductType {
  id: number;
  name: string;
  price: number;
  image: string;
}
