import { 
    SearchIcon,
    API,
    headerPadding
} from "./Barrel.jsx";

function DashboardHeader() {
    return (
        <div className={"flex flex-auto justify-between items-center w-full " + headerPadding}>
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
            <a className="rounded-full" href="/dashboard"> {/* change href later */}
                <img src={null} className="object-cover rounded-full h-9 w-9 border-1 border-gray-400" />
            </a>
        </div>
    );
}

export default DashboardHeader;