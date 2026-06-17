import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { PortalProvider } from './context/PortalContext.tsx'

// Direct URL path helper for HashRouter
const path = window.location.pathname;
if (path && path !== '/') {
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  const knownRoutes = ['roadmap', 'portal', 'admin', 'tracker', 'about', 'consulting', 'projects', 'contact', 'case-studies', 'how-i-work'];
  if (knownRoutes.includes(cleanPath) || cleanPath.startsWith('workflows/')) {
    window.location.replace(`/#/${cleanPath}`);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <PortalProvider>
        <App />
      </PortalProvider>
    </HashRouter>
  </StrictMode>,
)
