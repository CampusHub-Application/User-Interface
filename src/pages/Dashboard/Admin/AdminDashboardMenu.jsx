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
    BasePopModal,
    RiDeleteBin5Line,
    useRef,
} from "../../../components/barrel_module/Barrel.jsx";

function AdminDashboardMenu() {
    const [userList, setUserList] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [adminCount, setAdminCount] = useState(null);
    const [nonAdminCount, setNonAdminCount] = useState(null);
    const [shouldFetch, setShouldFetch] = useState(true);
    const [selected, setSelected] = useState([]);
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const selectedRef = useRef(selected);

    // For filtering
    const [statusFilter, setStatusFilter] = useState(null);

    const showModal = (jsxContent) => {
        setModalContent(jsxContent);
        setModalOpen(true);
    };

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

    useEffect(() => {
        selectedRef.current = selected;
    }, [selected]);  

    const filteredUserList = userList && statusFilter ? 
        userList.filter(user => user.is_admin === statusFilter) : userList;

    if (userList === null || adminCount === null || nonAdminCount === null) return <Loading />

    const handleUpdateUserList = () => {
        setShouldFetch(true); // Trigger refetching of data
    };

    const confirmDelete = () => {
        const currentSelected = selectedRef.current;

        showModal(
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-bold text-center">Delete Confirmation</h1>
                <p className="text-center">Are you sure you want to delete this entry?</p>
                <p className='text-center text-lg'>Chosen Entry: <br />
                    {currentSelected.map((user, index) => {
                        const isLast = index === currentSelected.length - 1;
                        const needComma = currentSelected.length > 1 && !isLast;
                        const needBreak = (index + 1)%3 === 0 && !isLast;

                        return (
                            <span key={user.id} className='font-bold text-red-700'>
                                {user.name}
                                {needComma && ", "}
                                {needBreak && <br />}
                            </span>
                        )
                    })}
                </p>
            </div>
        )
    }

    const selectAllHandler = (e) => {
        const checked = e.target.checked;

        if (checked) {
            // Add all filtered users to selected
            const allSelected = filteredUserList.map(user => ({
                id: user.id,
                name: user.name
            }));
            setSelected(allSelected);
        } else {
            // Deselect all
            setSelected([]);
        }
    }

    return (
        <div>
            {isLoading && <Loading />}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <div className="flex flex-row gap-5">
                    <ModalForm 
                        title=  {
                                    <>
                                        <span className='text-xl pe-2'>+</span> Tambah Pengguna
                                    </>
                                } 
                        fieldConfig={adminAddUserMap}
                        event={handleUpdateUserList}
                    />
                    <button
                        onClick={confirmDelete}
                        className="flex flex-row items-center gap-3 bg-red-600 hover:bg-red-700 text-white transition px-3 py-3 me-3 border border-gray-300 rounded-xl"
                    >
                        <RiDeleteBin5Line className="text-xl" />
                        Multi-Delete
                    </button>
                </div>
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
                                onChange={selectAllHandler}
                                checked={
                                    filteredUserList?.length > 0 && selected.length === filteredUserList.length
                                }
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
                            setSelected={setSelected}
                            showModal={showModal}
                            setModalOpen={setModalOpen}
                            isSelected={selected.some(item => item.id === user.id)}
                            onUserDeleted={(deletedId) => {
                                setUserList(prev => prev.filter(u => u.id !== deletedId));
                                setSelected(prev => prev.filter(item => item.id !== deletedId)); // optional
                            }}
                            />
                    ))}
                </tbody>
            </table>
            {modalContent && (
                <BasePopModal
                    content={modalContent}
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </div>
    )
}

export default AdminDashboardMenu;