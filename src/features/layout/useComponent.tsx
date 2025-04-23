import { MenuProps } from "antd";
import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

const useComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getInitialPage = (pathname: string) => {
    if (pathname.startsWith('/products')) return 'products';
    if (pathname.startsWith('/dashboard')) return 'dashboard';
    return 'dashboard';
  };

  const [pageHeight, setPageHeight] = useState(window.innerHeight);
  const [currentPage, setCurrentPage] = useState(getInitialPage(location.pathname))

  useEffect(() => {
    const handleResize = () => {
      console.info("Resized!", window.innerHeight);
      setPageHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      onClick: () => navigate('/'),
    },
    {
      key: 'products',
      label: 'Products',
      onClick: () => navigate('/products'),
    },
    {
      key: 'logout',
      label: 'Log-out',
      onClick: () => console.log('Log-out'),
    },
  ];

  
  const onMenuClick: MenuProps['onClick'] = (e) => {
    setCurrentPage(e.key);
  };

  return {
    currentPage,
    menuItems,
    pageHeight,
    onMenuClick,
  };
};


export default useComponent;