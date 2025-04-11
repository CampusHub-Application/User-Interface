import { 
    useState,
    SearchIcon,
    API,
    headerPadding,
    IoMenuOutline,
    Sidebar,
} from "../barrel_module/Barrel.jsx";

function DashboardHeader({ activeMenu, setActiveMenu }) {
    return (
        <>
            
            <div className={"flex flex-auto justify-start items-center w-full lg:col-span-8 col-span-auto " + headerPadding}>
                <SidebarToggleWrapper activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

                <div className="flex flex-row items-center justify-between w-full">
                    {/* Search Bar */}
                    <form action={API + 'getdata'} method="GET" className="flex flex-auto max-w-sm items-center justify-between border border-gray-300 rounded-md px-4 py-2 me-10">
                        <input
                            type="text"
                            placeholder="Search Here"
                            className="active:outline-none focus:outline-none"
                        />
                        <button type="submit" className="flex items-center h-5 w-5">
                            <SearchIcon />
                        </button>
                    </form>

                    {/* Avatar */}
                    <a className="rounded-full" href="/dashboard"> {/* change href later */}
                        <img src={null} className="object-cover rounded-full h-9 w-9 border-1 border-gray-400" />
                    </a>
                </div>
            </div>
        </>
    );
}

function SidebarToggleWrapper({ activeMenu, setActiveMenu }) {
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
                <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
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

// {/* Toggle Button
//             <button 
//                 onClick={toggleSidebar}
//                 className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md lg:hidden"
//             >
//                 <Menu className="w-6 h-6" />
//             </button> */}

//             {/* Off-canvas Sidebar */}
//             <div
//                 className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out 
//                     ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
//             >
//                 <Sidebar />
//             </div>