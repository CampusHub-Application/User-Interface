import {
    Logo,
    Menu,
    reactLogo,
    useState,
    ADMIN_MODE,
} from '../barrel_module/Barrel.jsx';

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
        <div className="hidden lg:flex lg:flex-col lg:border-e-1 lg:border-gray-300 lg:min-w-[22rem] lg:visible">
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
    )
}

export default Sidebar;