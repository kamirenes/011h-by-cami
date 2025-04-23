import { renderHook, act } from '@testing-library/react';
import useComponent from './useComponent';
import { useLocation, useNavigate } from 'react-router-dom';

// Mock Data
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

describe('useComponent', () => {
  const mockedNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 720,
    });
  });

  it('should initialize currentPage from location.pathname', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/products' });
    (useNavigate as jest.Mock).mockReturnValue(mockedNavigate);

    const { result } = renderHook(() => useComponent());

    expect(result.current.currentPage).toBe('products');
    expect(result.current.pageHeight).toBe(720);
  });

  it('should set currentPage on menu click', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/home' });
    (useNavigate as jest.Mock).mockReturnValue(mockedNavigate);

    const { result } = renderHook(() => useComponent());

    act(() => {
      result.current.onMenuClick({ key: 'products' } as any);
    });

    expect(result.current.currentPage).toBe('products');
  });

  it('menuItems should call navigate correctly', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/' });
    (useNavigate as jest.Mock).mockReturnValue(mockedNavigate);

    const { result } = renderHook(() => useComponent());

    act(() => {
      const productsItem = result.current.menuItems.find(item => item.key === 'products');
      productsItem?.onClick?.();
    });

    expect(mockedNavigate).toHaveBeenCalledWith('/products');
  });

  it('should update pageHeight on window resize', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/' });
    (useNavigate as jest.Mock).mockReturnValue(mockedNavigate);

    const { result } = renderHook(() => useComponent());

    act(() => {
      (window.innerHeight as number) = 900;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.pageHeight).toBe(900);
  });
});
