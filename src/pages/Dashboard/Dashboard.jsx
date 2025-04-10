import { 
    Header,
    Logo,
    Menu,
    reactLogo,
    useState,
    ADMIN_MODE,
} from '../../components/barrel_module/Barrel.jsx'

function Dashboard() {
    return (
        <div className="flex flex-row bg-white h-full">
            <Sidebar />
            <div className="flex flex-col flex-auto h-fit">
                <Header />
            </div>
        </div>
    )
}

function Sidebar() {
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    const menuNames = [];
    
    if(ADMIN_MODE) {
        menuNames.push(
            {key: "AdminDashboard", name: "Dashboard", iconUrl: reactLogo}, 
            {key: "AdminProfile", name: "Profile", iconUrl: reactLogo},
        );
    } else {
        menuNames.push(
            {key: "Dashboard", name: "Dashboard", iconUrl: reactLogo}, 
            {key: "Photo", name: "Upload Foto", iconUrl: reactLogo},
            {key: "Profile", name: "Profile", iconUrl: reactLogo},
        );
    }

    return (
        <>
            <div className="collapse lg:flex lg:flex-col lg:border-e-1 lg:border-gray-300 lg:min-w-[22rem] lg:visible">
                <Logo textsize={"text-4xl"} margin={"mb-5"}/>
                {menuNames.map(menu => (
                    <Menu 
                        key={menu.key}
                        menuName={menu.name} 
                        iconUrl={menu.iconUrl} 
                        isActive={activeMenu === menu.name} 
                        setActive={() => setActiveMenu(menu.name)}/>
                ))}
            </div>

            {/* Smaller Screen Sidebar Drawer */}
            <div className={'visible lg:collapse h-fit border-e-1 border-gray-300 px-10 mt-8 py-2' }>
                <button className='w-10 h-10 rounded-md bg-gray-400/20 flex items-center justify-center hover:bg-gray-400/30 active:bg-gray-400/40 transition-all duration-200 ease-in-out'>    
                    |||
                </button>
            </div>
        </>
    )
}

export default Dashboard