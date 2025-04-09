// ENV components exports
const VITE_API_URL = import.meta.env.VITE_API_URL;
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export {
    VITE_API_URL as API,
    VITE_BASE_URL as BASE
}

// React components exports
export { StrictMode } from 'react'
export { createRoot } from 'react-dom/client'
export { 
    createBrowserRouter,
    RouterProvider
} from 'react-router';

// Other components exports
export { default as Homepage } from './Homepage.jsx';
export { default as Dashboard } from './Dashboard.jsx';
export { default as Header } from './Header.jsx';
export { 
    default as logo,
    SearchIcon,
} from './Icons.jsx';