import {
    headerPadding,
    useState,
    useEffect,
    useRef,
    FaEdit,
    RiDeleteBin5Line,
} from './barrel_module/Barrel.jsx'

function MainLogo({textsize, margin}) {
    return (
        <a 
            className={textsize + " font-bold text-gray-800 flex flex-initial justify-center py-3 " + margin + " " + headerPadding}
            href='/'
            >
            Campus
            <span className="px-2 ms-1 bg-blue-500 text-white rounded-md">Hub</span>
        </a>
    )
}

function SearchIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="gray" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
    )
}

function SidebarMenuBase({menuName, iconUrl, isActive, setActive}) {
    return (
        <button 
            className={"flex flex-row items-center mb-2 mx-5 px-5 py-2 active:bg-blue-300/20 hover:scale-110 hover:bg-blue-300/10 rounded-md transition-all duration-200 ease-in-out " + (isActive ? "bg-blue-300/10" : "hover:scale-110 bg-blue-10") }
            onClick={setActive} 
            >
                
            <img src={iconUrl} className='w-8 h-8'/>
            <p className={'text-xl ps-3 ' + (isActive ? "font-medium" : "font-light")}>{menuName}</p>
        </button>
    )
}

function DropdownButton({ label = "Options", items = [] }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown if clicked outside
    useEffect(() => {
        function handleClickOutside(e) {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setOpen(false);
        }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
        <button
            onClick={() => setOpen(!open)}
            className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-300/20 transition"
        >
            {label}
            <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>

        {open && (
            <div className="absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
            {items.map((item, idx) => (
                <button
                key={idx}
                onClick={() => {
                    setOpen(false);
                    item.onClick();
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                {item.label}
                </button>
            ))}
            </div>
        )}
        </div>
    );
}

function UserTableRow({ user }) {
    const [selected, setSelected] = useState([]);

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
            {/* Checkbox */}
            <td className="px-4 py-3">
            <input
                type="checkbox"
                onChange={(e) => {
                    if (e.target.checked) {
                        setSelected(prev => [...prev, user.id]);
                    } else {
                        setSelected(prev => prev.filter(id => id !== user.id));
                    }
                }}
                className="form-checkbox h-4 w-4 text-blue-600"
            />
            </td>

            {/* Avatar & Name */}
            <td className="py-3 pe-3 text-start">
            <div className="flex items-center gap-3">
                <img
                src={user.avatarUrl}
                // alt={user.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
                />
                <span className="font-medium text-gray-800 truncate">{user.name}</span>
            </div>
            </td>

            {/* Email */}
            <td className="py-3 pe-3 text-gray-700 text-start truncate">{user.email}</td>

            {/* Password */}
            <td className="py-3 pe-3 text-gray-500 font-mono truncate max-w-[150px] text-start">
                {user.password}
            </td>

            {/* Status */}
            <td className="py-3 pe-3 text-start">
            <span
                className={`inline-block px-2 py-1 text-xs rounded-full font-semibold ${
                user.status === "Admin"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-700"
                }`}
            >
                {user.status}
            </span>
            </td>

            {/* Action Buttons */}
            <td className="py-3 text-right space-x-2">
            <button
                onClick={() => null}
                className="text-black hover:text-blue-800 transition px-3 py-3 me-3 border border-gray-300 rounded-md"
            >
                <FaEdit className='text-xl'/>
            </button>
            <button
                onClick={() => null}
                className="text-red-600 hover:text-red-800 transition px-3 py-3 me-3 border border-gray-300 rounded-md"
            >
                <RiDeleteBin5Line className='text-xl' />
            </button>
            </td>
        </tr>
    );
}

export default MainLogo
export { 
    SearchIcon,
    SidebarMenuBase,
    DropdownButton,
    UserTableRow,
}