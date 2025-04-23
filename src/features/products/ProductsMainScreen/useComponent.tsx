import { useMemo, useState } from "react";
import {
  ProductCategory,
  ProductColors,
  productList,
  ProductMaterial,
  ProductSize,
  ProductType,
} from "../../../constants/products";
import { TProduct, TProductFilters } from "../../layout/types";

const useComponent = () => {
  const defaultFilters = {
    size: [],
    color: [],
    material: [],
    type: [],
    category: [],
  };
  const [filters, setFilters] = useState<TProductFilters>(defaultFilters);
  const [sortOrderAsc, setSortOrderAsc] = useState(true);

  const sizeOptions = Object.values(ProductSize).map((size) => ({
    label: size,
    value: size,
  }));

  const colorOptions = Object.values(ProductColors).map((size) => ({
    label: size,
    value: size,
  }));

  const materialOptions = Object.values(ProductMaterial).map((size) => ({
    label: size,
    value: size,
  }));

  const typeOptions = Object.values(ProductType).map((size) => ({
    label: size,
    value: size,
  }));

  const categoryOptions = Object.values(ProductCategory).map((size) => ({
    label: size,
    value: size,
  }));

  const onFilterChange = <FilterKey extends keyof TProductFilters>(
    filterField: FilterKey,
    value: TProductFilters[FilterKey]
  ) => {
    setFilters({ ...filters, [filterField]: value });
  };

  const productListFiltered = useMemo(() => {
    const filtered = (productList as TProduct[]).filter((product) => {
      const { size, color, material, type, category } = filters;

      if (size.length > 0 && !size.includes(product.size)) return false;
      if (color.length > 0 && !color.includes(product.color)) return false;
      if (material.length > 0 && !material.includes(product.material))
        return false;
      if (type.length > 0 && !type.includes(product.type)) return false;
      if (category.length > 0 && !category.includes(product.category))
        return false;

      return true;
    });

    const sizeOrder: Record<ProductSize, number> = {
      XS: 0,
      S: 1,
      M: 2,
      L: 3,
      XL: 4,
    };

    const sorted = [...filtered].sort((a, b) => {
      const order = sizeOrder[a.size] - sizeOrder[b.size];
      return sortOrderAsc ? order : -order;
    });
    return sorted;
  }, [filters, sortOrderAsc]);

  const onOrderChange = (value: boolean) => {
    setSortOrderAsc(value);
  };

  const orderOptions = [
    { label: "ASC", value: true },
    { label: "DESC", value: false },
  ];

  return {
    categoryOptions,
    colorOptions,
    materialOptions,
    productListFiltered,
    sizeOptions,
    typeOptions,
    orderOptions,
    onFilterChange,
    onOrderChange,
  };
};

export default useComponent;
