import { 
    useState,
    Header,
    Sidebar,
    AdminDashboardUI,
    AdminProfileUI,
    Gallery,
    ADMIN_MODE,
    currUser,
} from '../../components/barrel_module/Barrel.jsx'

function Dashboard() {
    const [activeMenu, setActiveMenu] = ADMIN_MODE ? useState("AdminDashboard") : useState("Dashboard");

    return (
        <>
            <div className="flex flex-row bg-white h-full">
                <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} addClass="hidden lg:flex"/>
                <div className="flex flex-col flex-auto h-fit">
                    <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                    <ActiveContent activeMenu={activeMenu}/>
                </div>
            </div>
        </>
    )
}

function ActiveContent({ activeMenu }) {
    var menuComponentMap = {};

    // Prevent access to admin menu if not in admin mode and other way around
    if(ADMIN_MODE) {
        menuComponentMap = {
            AdminDashboard: <AdminDashboardUI />,
            AdminProfile: <AdminProfileUI user={currUser} />,
        };
    } else {
        menuComponentMap = {
            Dashboard: <Gallery />,
            Photo: null,
            Profile: null,
        };
    }

    return (
        <div className="flex flex-col basis-1 flex-auto h-fit px-8 py-10">
            {menuComponentMap[activeMenu] || <p>No content found.</p>}
        </div>
    )
}

export default Dashboard