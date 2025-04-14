import {
    Logo,
    BsPostcard,
    Menu,
    FaRegPlusSquare,
    RiUserLine,
    AiOutlineHome,
} from '../barrel_module/Barrel.jsx';

function Sidebar({ activeMenu, setActiveMenu, addClass = "", isAdmin }) {
    const menuNames = isAdmin ? 
        [
            { key: "AdminDashboard", name: "Dashboard", IconComponent: AiOutlineHome},
            { key: "Profile", name: "Profile", IconComponent: RiUserLine }
        ]
        : [
            { key: "Dashboard", name: "Dashboard", IconComponent: AiOutlineHome },
            { key: "MyPost", name: "My Post", IconComponent: BsPostcard },
            { key: "Photo", name: "Upload Foto", IconComponent: FaRegPlusSquare },
            { key: "Profile", name: "Profile", IconComponent: RiUserLine }
        ];

    return (
        <div className={"flex flex-col border-e-1 border-gray-300 min-w-[22rem] " + addClass}>
            <Logo textsize={"text-4xl"} margin={"mb-8"}/>
            {menuNames.map(menu => (
                <Menu 
                    key={menu.key}
                    menuName={menu.name} 
                    IconComponent={menu.IconComponent} 
                    isActive={activeMenu === menu.key} 
                    setActive={() => setActiveMenu(menu.key)}/>
            ))}
        </div>
    )
}

export default Sidebar;