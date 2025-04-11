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
    useEffect,
    useRef,
} from 'react'

export { 
    createBrowserRouter,
    RouterProvider,
    useLocation,
} from 'react-router';

export {
    FaEdit,
} from 'react-icons/fa'

export { 
    RiDeleteBin5Line, 
} from "react-icons/ri";

export { createRoot } from 'react-dom/client'

// Other components exports
export { default as Homepage } from '../../pages/Homepage/Homepage.jsx';
export { default as Dashboard } from '../../pages/Dashboard/Dashboard.jsx';
export { default as Header } from '../Dashboard/Header.jsx';
export { default as Sidebar } from '../Dashboard/Sidebar.jsx';
export { default as AdminDashboardUI } from '../../pages/Dashboard/Admin/AdminDashboardMenu.jsx'
export { default as Gallery } from '../../pages/Dashboard/Non-Admin/Gallery.jsx'
export { 
    default as Logo,
    SearchIcon,
    SidebarMenuBase as Menu,
    DropdownButton,
    UserTableRow as Row,
} from '../Particles.jsx';

export { default as Title } from '../Title.jsx';


// Configuration for multiple components
export {
    dashboardHeaderPadding as headerPadding,
} from '../UIConfig.jsx';

// Assets export
export { default as reactLogo } from '../../assets/react.svg';