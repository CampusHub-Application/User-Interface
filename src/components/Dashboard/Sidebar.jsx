import {
    Logo,
    reactLogo,
    Menu,
    Loading,
} from '../barrel_module/Barrel.jsx';

function Sidebar({ activeMenu, setActiveMenu, addClass = "", isAdmin }) {
    const menuNames = isAdmin ? 
        [
            { key: "AdminDashboard", name: "Dashboard", iconUrl: reactLogo },
            { key: "Profile", name: "Profile", iconUrl: reactLogo }
        ]
        : [
            { key: "Dashboard", name: "Dashboard", iconUrl: reactLogo },
            { key: "Photo", name: "Upload Foto", iconUrl: reactLogo },
            { key: "Profile", name: "Profile", iconUrl: reactLogo }
        ];

    return (
        <div className={"flex flex-col border-e-1 border-gray-300 min-w-[22rem] " + addClass}>
            <Logo textsize={"text-4xl"} margin={"mb-8"}/>
            {menuNames.map(menu => (
                <Menu 
                    key={menu.key}
                    menuName={menu.name} 
                    iconUrl={menu.iconUrl} 
                    isActive={activeMenu === menu.key} 
                    setActive={() => setActiveMenu(menu.key)}/>
            ))}
        </div>
    )
}

export default Sidebar;