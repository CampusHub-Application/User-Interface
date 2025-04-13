import { 
    DropdownButton,
    Row,
    useState,
    Loading,
    ModalForm,
    adminAddUserMap,
    useEffect,
    safeFetch,
    API,
} from "../../../components/barrel_module/Barrel.jsx";

function AdminDashboardMenu() {
    const [userList, setUserList] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [adminCount, setAdminCount] = useState(null);
    const [nonAdminCount, setNonAdminCount] = useState(null);
    const [shouldFetch, setShouldFetch] = useState(true);

    // For filtering
    const [statusFilter, setStatusFilter] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await safeFetch(API + "/users", {
                    method: "GET",
                });

                const data = await response.json();

                // Assuming the response structure is like { users: [...], admin: number, non_admin: number }
                if (data) {
                    setUserList(data.users);
                    setAdminCount(data.admin);
                    setNonAdminCount(data.non_admin);
                }

            } catch (error) {
                console.log(error);
                alert("Error Fetching Users", error);
            } finally {
                setIsLoading(false);
                setShouldFetch(false);
            }
        };

    // Fetch data only if userList is empty
    if (shouldFetch) {
        fetchData();
        setShouldFetch(false);
    }
    }, [shouldFetch]);

    const filteredUserList = userList && statusFilter ? 
        userList.filter(user => user.is_admin === statusFilter) : userList;

    if (userList === null || adminCount === null || nonAdminCount === null) return <Loading />

    const handleUpdateUserList = () => {
        setShouldFetch(true); // Trigger refetching of data
    };

    // ! For Manual Count
    // const adminCount = userList.filter(user => user.status === "Admin").length;
    // const nonAdminCount = userList.filter(user => user.status !== "Admin").length;

    return (
        <div>
            {isLoading && <Loading />}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <ModalForm 
                    title=  {
                                <>
                                    <span className='text-xl pe-2'>+</span> Tambah Pengguna
                                </>
                            } 
                    fieldConfig={adminAddUserMap}
                    event={handleUpdateUserList}
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
                        { label: "Admin", onClick: () => setStatusFilter(1) },
                        { label: "Non-Admin", onClick: () => setStatusFilter(0) },
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
                        {/* <th className="text-start overflow-hidden">Password</th> */}
                        <th className="text-start">Status</th>
                        <th className="text-end pe-5">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUserList && filteredUserList.map(user => (
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