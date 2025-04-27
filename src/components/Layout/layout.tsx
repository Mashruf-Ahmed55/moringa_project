import ScrollToTop from '@/lib/ScrollToTop';
import { Outlet } from 'react-router';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}
