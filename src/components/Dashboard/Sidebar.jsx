import {
    Logo,
    BsPostcard,
    Menu,
    FaRegPlusSquare,
    RiUserLine,
    AiOutlineHome,
    useState,
    SearchIcon,
} from '../barrel_module/Barrel.jsx';

function Sidebar({ activeMenu, setActiveMenu, addClass = "", isAdmin }) {
    const [searchQuery, setSearchQuery] = useState("");

    const searchHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await safeFetch(API + "/search?q=" + searchQuery, {
                method: "GET",
            })

            const data = await response.json();

            if(!response.ok) {
                alert(response.message);
            }

            setFilteredData(data.posts);
            setActiveMenu("Dashboard");
        } catch (error) {
            console.log("Something went wrong", error);
            alert(error);
        }
    }

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
            {/* Search Bar */}
            <form onSubmit={searchHandler} className="sm:hidden flex flex-auto flex-row max-w-sm items-center justify-between border border-gray-300 rounded-md mb-2 mx-5 px-3 py-2">
                <input
                    type="text"
                    placeholder="Search Here"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="active:outline-none focus:outline-none grow min-w-0 w-0 me-4"
                />
                <button type="submit" className="cursor-pointer flex flex-initial items-center h-5 w-5 aspect-square">
                    <SearchIcon />
                </button>
            </form>
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