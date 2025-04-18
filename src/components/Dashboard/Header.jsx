import { 
    useState,
    SearchIcon,
    API,
    headerPadding,
    IoMenuOutline,
    Sidebar,
    CustomDropdown,
    useLogoutHandler,
    safeFetch,
    Loading,
} from "../barrel_module/Barrel.jsx";

function DashboardHeader({ activeMenu, setActiveMenu, user, isAdmin, setFilteredData }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const searchHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);

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
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className={"flex flex-initial justify-start items-center w-full lg:col-span-8 col-span-auto " + headerPadding}>
                {isLoading && <Loading />}
                <SidebarToggleWrapper activeMenu={activeMenu} setActiveMenu={setActiveMenu} isAdmin={isAdmin} setFilteredData={setFilteredData} />

                <div className={"flex flex-row items-center justify-end w-full " + (isAdmin ? "" : "sm:justify-between")}>
                    {/* Search Bar, only if not admin */}
                    {!isAdmin && (
                        <form onSubmit={searchHandler} className="hidden sm:flex flex-auto flex-row max-w-sm items-center justify-between border border-gray-300 rounded-md px-4 py-2 me-10">
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
                    )}

                    {/* Avatar */}
                    <CustomDropdown
                        className="rounded-full min-h-5 min-w-5 aspect-square"
                        items={[
                            { label: "Profile", onClick: () => setActiveMenu("Profile") },
                            { label: "Logout", onClick: useLogoutHandler() },
                        ]}
                        label={
                            user.photo ? (
                                <img 
                                    src={user.photo} 
                                    className="object-cover rounded-full h-9 w-9 border border-gray-400" 
                                    alt={user.name}
                                />
                            ) : (
                                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-300/30 text-gray-700 font-bold text-sm border border-gray-400">
                                    {user.name
                                        .split(" ")
                                        .slice(0, 2)
                                        .map(word => word[0])
                                        .join("")
                                        .toUpperCase()}
                                </div>
                            )
                        }
                    />
                </div>
            </div>
        </>
    );
}

function SidebarToggleWrapper({ activeMenu, setActiveMenu, isAdmin, setFilteredData }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Smaller Screen Sidebar Drawer */}
            <div className={'visible lg:hidden h-fit border-e-1 border-gray-300 pe-5 py-2 me-4' }>
                <button 
                    onClick={toggleSidebar}
                    className='w-10 h-10 rounded-md bg-gray-400/20 flex items-center justify-center hover:bg-gray-400/30 active:bg-gray-400/40 transition-all duration-200 ease-in-out'>    
                    <IoMenuOutline className='text-gray-600' />
                </button>
            </div>

            {/* Off-canvas Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 w-[22rem] transform bg-white border-e border-gray-300 transition-transform duration-300 ease-in-out z-50 lg:hidden ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} isAdmin={isAdmin} setFilteredData={setFilteredData} />
            </div>

            {/* Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-30 bg-black/20 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
}

export default DashboardHeader;