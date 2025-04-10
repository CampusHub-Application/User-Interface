import { 
    Header,
    Logo,
    Menu,
    reactLogo,
    useState,
} from './Barrel.jsx'

function Dashboard() {
    return (
        <div className="flex flex-row bg-white h-full">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="flex flex-col flex-auto h-fit">
                <Header />
            </div>
        </div>
    )
}

function Sidebar() {
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    
    const menuNames = [
        {name: "Dashboard", iconUrl: reactLogo}, 
        {name: "Profile", iconUrl: reactLogo},
    ];

    return (
        <div className="collapse lg:flex lg:flex-col lg:border-e-1 lg:border-gray-300 lg:min-w-[18rem] lg:visible">
            <Logo textsize={"text-3xl"} margin={"mb-5"}/>
            {menuNames.map(menu => (
                <Menu 
                    key={menu.name}
                    menuName={menu.name} 
                    iconUrl={menu.iconUrl} 
                    isActive={activeMenu === menu.name} 
                    setActive={() => setActiveMenu(menu.name)}/>
            ))}
        </div>
    )
}

export default Dashboard