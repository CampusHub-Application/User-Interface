import { 
    SearchIcon,
    API
} from "./Barrel.jsx";

function DashboardHeader() {
    return (
        <div className="flex flex-auto justify-between items-center w-full py-3 px-4">
            <form action={API + 'getdata'} method="GET" className="flex items-center border border-gray-300 rounded-md px-4 py-2">
                <input
                    type="text"
                    placeholder="Search Here"
                />
                <button type="submit" className="flex items-center justify-center h-5 w-5">
                    <SearchIcon />
                </button>
            </form>
            <img src={null} className="object-cover rounded-full h-8 w-8 border-1" />
        </div>
    );
}

export default DashboardHeader;