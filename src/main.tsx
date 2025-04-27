import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SmoothScroll } from './components/SmoothScroll.tsx';
import './index.css';
import Router from './Router/Router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmoothScroll>
      <Router />
    </SmoothScroll>
  </StrictMode>
);
