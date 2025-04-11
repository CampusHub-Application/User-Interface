import { 
    DropdownButton,
    Row,
    useState,
    MockData,
    ModalForm,
    adminAddUserMap,
} from "../../../components/barrel_module/Barrel.jsx";

function AdminDashboardMenu() {
    // ! REMOVE THIS LATER, FOR MOCKUP PURPOSES
    // ! Should update onClick user for newest data!
    const [userList, setUserList] = useState(MockData);

    const adminCount = userList.filter(user => user.status === "Admin").length;
    const nonAdminCount = userList.filter(user => user.status !== "Admin").length;

    // For filtering
    const [statusFilter, setStatusFilter] = useState(null);
    const filteredUserList = statusFilter ? 
        userList.filter(user => user.status === statusFilter) : userList;


    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <ModalForm 
                    title=  {
                                <>
                                    <span className='text-xl pe-2'>+</span> Tambah Pengguna
                                </>
                            } 
                    fieldConfig={adminAddUserMap}
                />
            </div>
            <div className="flex flex-auto items-center justify-between border border-gray-200 mt-5 rounded-md px-5 py-4">
                <h1 className="text-xl font-medium pe-5">Ringkasan Hari Ini</h1>
                <div className="flex flex-row items-center justify-between">
                    <div className="px-5 border-s-1 border-gray-300">
                        <p className="text-sm text-gray-500">Admin</p>
                        <h1 className="text-3xl font-bold">{adminCount}</h1>
                    </div>
                    <div className="px-5 border-s-1 border-gray-300">
                        <p className="text-sm text-gray-500">Non-Admin</p>
                        <h1 className="text-3xl font-bold">{nonAdminCount}</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-auto items-center justify-between mt-5 rounded-md">
                <h2 className="font-medium text-xl">Riwayat Pengguna</h2>
                <DropdownButton
                    label="Status"
                    items={[
                        { label: "Semua", onClick: () => setStatusFilter(null) },
                        { label: "Admin", onClick: () => setStatusFilter("Admin") },
                        { label: "Non-Admin", onClick: () => setStatusFilter("Non-Admin") },
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
                    {filteredUserList.map(user => (
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