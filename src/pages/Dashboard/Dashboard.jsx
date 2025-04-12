import { 
    useState,
    Header,
    Sidebar,
    AdminDashboardUI,
    NoAdminDashboard,
    ADMIN_MODE,
    UploadFoto,
    Profile,
    DetailFoto,
} from '../../components/barrel_module/Barrel.jsx'

import { useAuth } from "../../auth/AuthProvider.jsx";

function Dashboard() {
    const [activeMenu, setActiveMenu] = ADMIN_MODE ? useState("AdminDashboard") : useState("Dashboard");

    return (
        <>
            <div className="flex flex-row bg-white h-full">
                <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} addClass="hidden lg:flex"/>
                <div className="flex flex-col flex-auto h-full">
                    <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                    <ActiveContent activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
                </div>
            </div>
        </>
    )
}

function ActiveContent({ activeMenu, setActiveMenu }) {
    const [image, setImage] = useState(null);
    var menuComponentMap = {};
    const { user } = useAuth();

    // Prevent access to admin menu if not in admin mode and other way around
    if(ADMIN_MODE) {
        menuComponentMap = {
            AdminDashboard: <AdminDashboardUI />,
            AdminProfile: <Profile user={user} />,
        };
    } else {
        menuComponentMap = {
            Dashboard: <NoAdminDashboard setActiveMenu={setActiveMenu} setImage={setImage} />,
            Photo: <UploadFoto/>,
            DetailPhoto: <DetailFoto image={image} />,
            Profile: <Profile user={user}/>,
        };
    }

    return (
        <div className="flex flex-col basis-1 flex-auto h-full px-8 py-10">
            {menuComponentMap[activeMenu] || <p>No content found.</p>}
        </div>
    )
}

export default Dashboard