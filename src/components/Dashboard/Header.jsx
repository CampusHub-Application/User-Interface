import { 
    SearchIcon,
    API,
    headerPadding
} from "../barrel_module/Barrel.jsx";

function DashboardHeader() {
    return (
        <>
            
            <div className={"flex flex-auto justify-start items-center w-full lg:col-span-8 col-span-auto " + headerPadding}>
                {/* Smaller Screen Sidebar Drawer */}
                <div className={'visible lg:hidden h-fit border-e-1 border-gray-300 pe-5 py-2 me-4' }>
                    <button className='w-10 h-10 rounded-md bg-gray-400/20 flex items-center justify-center hover:bg-gray-400/30 active:bg-gray-400/40 transition-all duration-200 ease-in-out'>    
                        |||
                    </button>
                </div>

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

export default DashboardHeader;