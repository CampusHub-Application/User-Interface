import { 
    DropdownButton,
    Row,
} from "../../../components/barrel_module/Barrel.jsx";

function AdminDashboardMenu() {
    // ! REMOVE THIS LATER, FOR MOCKUP PURPOSES
    const userList = [
        {   
            id: "01", 
            name: "Jane Doe",
            avatarUrl: null,
            email: "jane@example.com",
            password: "Jane_Doe123",
            status: "Admin"
        },
        {   
            id: "02", 
            name: "James Doeker",
            avatarUrl: null,
            email: "james@example.com",
            password: "Jamie122333",
            status: "Non-Admin"
        },
        {   
            id: "03", 
            name: "Walahdalah",
            avatarUrl: null,
            email: "Walahdalah@example.com",
            password: "Walah_LAH_LAH",
            status: "Admin"
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <button className="bg-blue-600/80 text-white font-bold px-4 py-2 rounded-xl items-center flex">
                    <span className="text-xl pe-2">+</span> Tambah Pengguna
                </button>
            </div>
            <div className="flex flex-auto items-center justify-between border border-gray-200 mt-5 rounded-md px-5 py-4">
                <h1 className="text-xl font-medium pe-5">Ringkasan Hari Ini</h1>
                <div className="flex flex-row items-center justify-between">
                    <div className="px-5 border-s-1 border-gray-300">
                        <p className="text-sm text-gray-500">Admin</p>
                        <h1 className="text-3xl font-bold">0</h1>
                    </div>
                    <div className="px-5 border-s-1 border-gray-300">
                        <p className="text-sm text-gray-500">Non-Admin</p>
                        <h1 className="text-3xl font-bold">0</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-auto items-center justify-between mt-5 rounded-md">
                <h2 className="font-medium text-xl">Riwayat Pengguna</h2>
                <DropdownButton
                    label="Status"
                    items={[
                        { label: "What", onClick: () => console.log("?") },
                        { label: "Is", onClick: () => console.log("??") },
                        { label: "This", onClick: () => console.log("???") },
                    ]}
                    />
            </div>
            <table className="table-fixed mt-10 w-full border-collapse overflow-hidden">
                <thead>
                    <tr className="bg-gray-100 border-b border-gray-300">
                        <th className="text-start py-3 ps-5 w-14">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-blue-600"
                            />
                        </th>
                        <th className="text-start">Nama</th>
                        <th className="text-start">Email</th>
                        <th className="text-start overflow-hidden">Password</th>
                        <th className="text-start">Status</th>
                        <th className="text-end pe-5">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user) => (
                        <Row
                        key={user.id}
                        user={user}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminDashboardMenu;