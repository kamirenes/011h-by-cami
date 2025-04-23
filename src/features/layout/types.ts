import {
  ProductCategory,
  ProductColors,
  ProductMaterial,
  ProductSize,
  ProductType,
} from "../../constants/products";

export type TProduct = {
  id: number;
  name: string;
  size: ProductSize;
  color: ProductColors;
  material: ProductMaterial;
  type: ProductType;
  category: ProductCategory;
  options: {
    outOfStock: boolean;
    waterproof: boolean;
    original: boolean;
  };
};

export type TProductFilters = {
  size: ProductSize[],
  color: ProductColors[],
  material: ProductMaterial[],
  type: ProductType[],
  category: ProductCategory[],
}

export enum ProductFilterEnum {
  SIZE = "size",
  COLOR = "color",
  MATERIAL = "material",
  TYPE = "type",
  CATEGORY = "category",
  OPTIONS = "options",
}

export type FilterIndex = keyof TProductFilters