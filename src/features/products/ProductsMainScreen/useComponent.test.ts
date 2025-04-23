import { renderHook, act } from '@testing-library/react';
import useComponent from './useComponent';
import { ProductColors, ProductMaterial, ProductSize } from '../../../constants/products';

// Mock Data
jest.mock('../../../constants/products', () => {
  const originalModule = jest.requireActual('../../../constants/products');
  return {
    ...originalModule,
    productList: [
      {
        id: 1,
        name: 'Shirt A',
        size: 'M',
        color: 'Blue',
        material: 'Cotton',
        type: 'Shirt',
        category: 'Topwear',
        options: {
          outOfStock: false,
          waterproof: false,
          original: true,
        },
      },
      {
        id: 2,
        name: 'Pants B',
        size: 'L',
        color: 'Black',
        material: 'Wool',
        type: 'Pants',
        category: 'Bottomwear',
        options: {
          outOfStock: false,
          waterproof: true,
          original: false,
        },
      },
    ],
  };
});

describe('useComponent', () => {
  it('should return productListFiltered with all products by default', () => {
    const { result } = renderHook(() => useComponent());
    expect(result.current.productListFiltered.length).toBe(2);
  });

  it('should filter products by size', () => {
    const { result } = renderHook(() => useComponent());

    act(() => {
      result.current.onFilterChange('size', [ProductSize.M]);
    });

    expect(result.current.productListFiltered.length).toBe(1);
    expect(result.current.productListFiltered[0].size).toBe(ProductSize.M);
  });

  it('should filter by multiple criteria', () => {
    const { result } = renderHook(() => useComponent());

    act(() => {
      result.current.onFilterChange('material', [ProductMaterial.Wool]);
      result.current.onFilterChange('color', [ProductColors.Black]);
    });

    expect(result.current.productListFiltered.length).toBe(1);
    expect(result.current.productListFiltered[0].name).toBe('Pants B');
  });

  it('should return results in ascending order by default', () => {
    const { result } = renderHook(() => useComponent());
    const sizes = result.current.productListFiltered.map((p) => p.size);
    expect(sizes).toEqual([ProductSize.M, ProductSize.L]);
  });

  it('should sort results in descending order when onOrderChange is called', () => {
    const { result } = renderHook(() => useComponent());

    act(() => {
      result.current.onOrderChange(false);
    });

    const sizes = result.current.productListFiltered.map((p) => p.size);
    expect(sizes).toEqual([ProductSize.L, ProductSize.M]);
  });
});
