import { 
    useState,
    useEffect,
    Header,
    Sidebar,
    AdminDashboardUI,
    Gallery,
    ADMIN_MODE,
} from '../../components/barrel_module/Barrel.jsx'

function Dashboard() {
    const [activeMenu, setActiveMenu] = ADMIN_MODE ? useState("AdminDashboard") : useState("Dashboard");

    useEffect(() => {
        document.title = "Dashboard | CampusHub";
      }, []);

    return (
        <>
            <div className="flex flex-row bg-white h-full">
                <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                <div className="flex flex-col flex-auto h-fit">
                    <Header />
                    <ActiveContent activeMenu={activeMenu}/>
                </div>
            </div>
        </>
    )
}

function ActiveContent({ activeMenu }) {
    const menuComponentMap = {
        Dashboard: <Gallery/>,
        Photo: null,
        Profile: null,
        AdminDashboard: <AdminDashboardUI />,
        AdminProfile: null
    };

    return (
        <div className="flex flex-col basis-1 flex-auto h-fit px-8 py-10">
            {menuComponentMap[activeMenu] || <p>No content found.</p>}
        </div>
    )
}

export default Dashboard