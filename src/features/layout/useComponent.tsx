import { useEffect, useMemo, useState } from "react";
import {
  ProductCategory,
  ProductColors,
  productList,
  ProductMaterial,
  ProductSize,
  ProductType,
} from "../../constants/products";
import { FilterIndex, ProductFilterEnum, TProduct, TProductFilters } from "./types";

export default () => {
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  const defaultFilters = {
    size: [],
    color: [],
    material: [],
    type: [],
    category: [],
    options: {
      outOfStock: false,
      waterproof: false,
      original: false,
    },
  };
  const [filters, setFilters] = useState<TProductFilters>(defaultFilters);

  useEffect(() => {
    const handleResize = () => {
      console.info("Resized!", window.innerHeight);
      setPageHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const optionsOptions = Object.values(ProductCategory).map((size) => ({
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
    return (productList as TProduct[]).filter((product) => {
      const {
        size,
        color,
        material,
        type,
        category,
        options: filterOptions,
      } = filters;
  
      if (size.length > 0 && !size.includes(product.size)) return false;
      if (color.length > 0 && !color.includes(product.color)) return false;
      if (material.length > 0 && !material.includes(product.material)) return false;
      if (type.length > 0 && !type.includes(product.type)) return false;
      if (category.length > 0 && !category.includes(product.category)) return false;
  
      if (filterOptions.outOfStock && !product.options.outOfStock) return false;
      if (filterOptions.waterproof && !product.options.waterproof) return false;
      if (filterOptions.original && !product.options.original) return false;
  
      return true;
    });
  }, [filters]);
  

  return {
    categoryOptions,
    colorOptions,
    materialOptions,
    optionsOptions,
    pageHeight,
    productListFiltered,
    sizeOptions,
    typeOptions,
    onFilterChange,
  };
};
