export type ProductType = {
  id: number;
  productName: string;
  slug: string;
  description: string;
  active: boolean;
  isFeatured: boolean;
  price: number;
  color: string;
  size: {
    data: {
      size: string;
      enabled: boolean;
    }[];
  };
  stock: number;
  gender: string;
  images: [
    {
      id: number;
      url: string;
    }
  ];
  category: {
    slug: string;
    categoryName: string;
  };
  brand: {
    slug: string;
    nameBrand: string;
  };
  selectedSize: string | null;
};
