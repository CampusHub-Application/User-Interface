// ENV components exports
const VITE_API_URL = import.meta.env.VITE_API_URL;
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

// ! REMOVE THIS ON PRODUCTION
const VITE_WEB_AS_ADMIN = import.meta.env.VITE_WEB_AS_ADMIN === "true";
const VITE_ENABLE_LOGIN = import.meta.env.VITE_ENABLE_LOGIN === "true";

export {
    VITE_API_URL as API,
    VITE_BASE_URL as BASE,
    VITE_WEB_AS_ADMIN as ADMIN_MODE,
    VITE_ENABLE_LOGIN as ENABLE_LOGIN,
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
    FaRegPlusSquare,
    FaCheck,
} from 'react-icons/fa'

export { 
    RiDeleteBin5Line, 
    RiUserLine,
    RiUserAddLine,
    RiCheckboxMultipleLine,
} from "react-icons/ri";

export {
    IoMenuOutline,
    IoCloudUploadOutline
} from "react-icons/io5";

export { 
    PiPencilLineThin 
} from "react-icons/pi";

export { 
    AiOutlineHome,
} from "react-icons/ai";

export { 
    BsPostcard 
} from "react-icons/bs";

export { createRoot } from 'react-dom/client'

// Dev-made components exports
export { default as Login } from '../../pages/Login/Login.jsx';
export { default as Dashboard } from '../../pages/Dashboard/Dashboard.jsx';
export { default as Header } from '../Dashboard/Header.jsx';
export { default as Sidebar } from '../Dashboard/Sidebar.jsx';
export { default as AdminDashboardUI } from '../../pages/Dashboard/Admin/AdminDashboardMenu.jsx';
export { default as NoAdminDashboard } from '../../pages/Dashboard/Non-Admin/NoAdminDashboard.jsx';
export { default as MyPost } from '../../pages/Dashboard/Non-Admin/MyPost.jsx'
export { default as UploadFoto } from '../../pages/Dashboard/Non-Admin/UploadFoto.jsx';
export { default as DetailFoto } from '../../pages/Dashboard/Non-Admin/DetailFoto.jsx';
export { default as Profile } from '../../pages/Dashboard/Profile.jsx';
export { default as SomeonePost } from '../../pages/Dashboard/Non-Admin/SomeonePost.jsx';
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
    Loading,
    useDropdownHandler,
    CustomDropdown,
} from '../Particles.jsx';

export { default as Title } from '../Title.jsx';
export { default as useLogoutHandler } from '../../pages/Login/Logout.jsx'
export { default as PopUpCheckOut } from '../PopUpCheckOut.jsx';
export { default as ProtectedRoute } from '../../auth/ProtectedRoute.jsx';
export { 
    default as safeFetch,
    getXsrfToken,
} from '../../auth/CSRFToken.jsx';


// Configuration for multiple components
export {
    dashboardHeaderPadding as headerPadding,
    profileFieldMap,
    adminAddUserMap,
    adminEditUserMap,
    loginFieldMap,
} from '../UIConfig.jsx';

export {
    default as MockData,
    currentUser as currUser,
} from '../../MockData.jsx';

// Export Assets
export { default as reactLogo } from '../../assets/react.svg';

export { FaFileUpload } from "react-icons/fa";