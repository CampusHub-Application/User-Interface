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
    createContext, 
    useContext,
} from 'react'

export { 
    createBrowserRouter,
    RouterProvider,
    useLocation,
    Outlet,
    useNavigate,
    Link,
    useParams,
    Navigate,
} from 'react-router';

export {
    FaEdit,
    FaRegEye,
    FaRegEyeSlash,
} from 'react-icons/fa'

export { 
    RiDeleteBin5Line, 
} from "react-icons/ri";

export {
    IoMenuOutline,
    IoCloudUploadOutline
} from "react-icons/io5";

export { 
    PiPencilLineThin 
} from "react-icons/pi";

export { createRoot } from 'react-dom/client'

// Dev-made components exports
export { default as Login } from '../../pages/Login/Login.jsx';
export { default as Dashboard } from '../../pages/Dashboard/Dashboard.jsx';
export { default as Header } from '../Dashboard/Header.jsx';
export { default as Sidebar } from '../Dashboard/Sidebar.jsx';
export { default as AdminDashboardUI } from '../../pages/Dashboard/Admin/AdminDashboardMenu.jsx';
export { default as NoAdminDashboard } from '../../pages/Dashboard/Non-Admin/NoAdminDashboard.jsx';
export { default as UploadFoto } from '../../pages/Dashboard/Non-Admin/UploadFoto.jsx';
export { default as DetailFoto } from '../../pages/Dashboard/Non-Admin/DetailFoto.jsx';
export { default as Profile } from '../../pages/Dashboard/Profile.jsx';
export { 
    default as Logo,
    SearchIcon,
    SidebarMenuBase as Menu,
    DropdownButton,
    UserTableRow as Row,
    ModalForm,
    FormInputComponent,
    FormInputPasswordComponent,
    basePopModal as BasePopModal,
} from '../Particles.jsx';

export { default as Title } from '../Title.jsx';
export { default as PopUpCheckOut } from '../PopUpCheckOut.jsx';
export { default as ProtectedRoute } from '../../auth/ProtectedRoute.jsx';


// Configuration for multiple components
export {
    dashboardHeaderPadding as headerPadding,
    profileFieldMap,
    adminAddUserMap,
    loginFieldMap,
} from '../UIConfig.jsx';

export {
    default as MockData,
    currentUser as currUser,
} from '../../MockData.jsx';

// Export Assets
export { default as reactLogo } from '../../assets/react.svg';

export { FaFileUpload } from "react-icons/fa";