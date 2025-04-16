import { 
    useState,
    useEffect,
    Header,
    Sidebar,
    AdminDashboardUI,
    NoAdminDashboard,
    ADMIN_MODE,
    UploadFoto,
    Profile,
    DetailFoto,
    ENABLE_LOGIN,
    currUser,
    Loading,
    MyPost,
    SomeonePost,
} from '../../components/barrel_module/Barrel.jsx'

import { useAuth } from "../../auth/AuthProvider.jsx";

function Dashboard() {
    const { user } = ENABLE_LOGIN ? useAuth() : { user: currUser };
    const [activeMenu, setActiveMenu] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        const adminCheck = ENABLE_LOGIN ? user?.is_admin : ADMIN_MODE;
        setIsAdmin(adminCheck);
        setActiveMenu(adminCheck ? "AdminDashboard" : "Dashboard");
    }, [user])

    useEffect(() => {
        const session = sessionStorage.getItem("currentMenu");

        if(session !== null) {
            if((session == "AdminDashboard" 
                || session == "Profile") && isAdmin) {
                setActiveMenu(session);
            } else if ((session == "Dashboard" 
                || session == "MyPost" 
                || session == "Photo" 
                || session == "DetailPhoto" 
                || session == "Profile"
                || session == "SomeonePost") && !isAdmin) {
                setActiveMenu(session);
            }
        }
    }, []);

    useEffect(() => {
        if (activeMenu) {
            sessionStorage.setItem("currentMenu", activeMenu);
        }
    }, [activeMenu]);

    // Wait until we have evaluated isAdmin
    if (ENABLE_LOGIN && (!user || isAdmin === null)) {
        return <Loading />;
    }

    return (
        <>
            <div className="flex flex-row bg-white h-full w-full">
                <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} addClass="hidden lg:flex gap-5" isAdmin={isAdmin} setFilteredData={setFilteredData}/>
                <div className="flex flex-col flex-auto h-full w-full">
                    <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} user={user} isAdmin={isAdmin} setFilteredData={setFilteredData}/>
                    <ActiveContent activeMenu={activeMenu} setActiveMenu={setActiveMenu} user={user} isAdmin={isAdmin} filteredData={filteredData} />
                </div>
            </div>
        </>
    )
}

function ActiveContent({ activeMenu, setActiveMenu, user, isAdmin, filteredData }) {
    if(isAdmin === null) return <Loading />;

    const [postID, setPostID] = useState(null);
    const [currentOwner, setCurrentOwner] = useState(null);

    const menuComponentMap = isAdmin ? {
        AdminDashboard: <AdminDashboardUI />,
        Profile: <Profile user={user} isAdmin={isAdmin} />,
    } : {
        Dashboard: <NoAdminDashboard setActiveMenu={setActiveMenu} setPostID={setPostID} filteredData={filteredData}/>,
        MyPost: <MyPost setActiveMenu={setActiveMenu} setPostID={setPostID}/>,
        Photo: <UploadFoto />,
        DetailPhoto: <DetailFoto postID={postID} setActiveMenu={setActiveMenu} setCurrentOwner={setCurrentOwner}/>,
        Profile: <Profile user={user} isAdmin={isAdmin} />,
        SomeonePost: <SomeonePost setActiveMenu={setActiveMenu} currentOwner={currentOwner} setPostID={setPostID} />,
    };


    return (
        <div className="flex flex-col basis-1 flex-auto h-full px-8 py-10">
            {menuComponentMap[activeMenu] || <p>No content found.</p>}
        </div>
    )
}

export default Dashboard