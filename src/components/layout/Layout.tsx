import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@src/components/layout/Header';
import Footer from '@src/components/layout/Footer';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="main-intro-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
