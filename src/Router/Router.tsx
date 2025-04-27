import App from '@/App';
import Layout from '@/components/Layout/layout';
import BlogPage from '@/pages/blogPage/BlogPage';
import BlogId from '@/pages/blogPage/id/BlogId';
import ContactUsPage from '@/pages/ContactUsPage';
import FaqPage from '@/pages/FaqPage';
import privacyPolicyPage from '@/pages/privacyPolicyPage';
import ProductAllPage from '@/pages/ProductAllPage';
import RefundPolicyPage from '@/pages/RefundPolicyPage';
import ShopPureMoringa from '@/pages/ShopPureMoringa';
import TermsAndService from '@/pages/TermsAndService';
import { createBrowserRouter, RouterProvider } from 'react-router';
export default function Router() {
  const routes = createBrowserRouter([
    {
      path: '/',
      Component: Layout,
      children: [
        {
          index: true,
          Component: App,
        },
        {
          path: '/products-all',
          Component: ProductAllPage,
        },
        {
          path: '/terms-and-service',
          Component: TermsAndService,
        },
        {
          path: '/faq',
          Component: FaqPage,
        },
        {
          path: '/refund-policy',
          Component: RefundPolicyPage,
        },
        {
          path: '/blogs',
          Component: BlogPage,
        },
        {
          path: '/blogs/:id',
          Component: BlogId,
        },
        {
          path: '/contact-us',
          Component: ContactUsPage,
        },
        {
          path: '/shop-pure-moringa',
          Component: ShopPureMoringa,
        },
        {
          path: '/privacy-policy',
          Component: privacyPolicyPage,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
