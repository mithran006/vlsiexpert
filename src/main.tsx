import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Intercept unhandled Vite websocket disconnects in sandbox preview
if (typeof window !== 'undefined') {
  const isViteWsNotice = (str: any) => {
    const s = String(str || '');
    return s.includes('WebSocket') || s.includes('vite') || s.includes('ws') || s.includes('closed without opened');
  };

  window.addEventListener('unhandledrejection', (event) => {
    if (isViteWsNotice(event.reason?.message) || isViteWsNotice(event.reason)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);

  window.addEventListener('error', (event) => {
    if (isViteWsNotice(event.message) || isViteWsNotice(event.error?.message)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
