// ENV components exports
const VITE_API_URL = import.meta.env.VITE_API_URL;
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

// ! REMOVE THIS ON PRODUCTION
const VITE_WEB_AS_ADMIN = import.meta.env.VITE_WEB_AS_ADMIN === "true";

export {
    VITE_API_URL as API,
    VITE_BASE_URL as BASE,
    VITE_WEB_AS_ADMIN as ADMIN_MODE,
}

// React components exports
export { 
    StrictMode,
    useState,
} from 'react'
export { createRoot } from 'react-dom/client'
export { 
    createBrowserRouter,
    RouterProvider
} from 'react-router';

// Other components exports
export { default as Homepage } from '../../pages/Homepage/Homepage.jsx';
export { default as Dashboard } from '../../pages/Dashboard/Dashboard.jsx';
export { default as Header } from '../Header.jsx';
export { 
    default as Logo,
    SearchIcon,
    SidebarMenuBase as Menu,
} from '../Particles.jsx';

// Configuration for multiple components
export {
    dashboardHeaderPadding as headerPadding,
} from '../UIConfig.jsx';

// Assets export
export { default as reactLogo } from '../../assets/react.svg';