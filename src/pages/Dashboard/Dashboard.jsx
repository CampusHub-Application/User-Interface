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
} from '../../components/barrel_module/Barrel.jsx'

import { useAuth } from "../../auth/AuthProvider.jsx";

function Dashboard() {
    const { user } = ENABLE_LOGIN ? useAuth() : { user: currUser };
    const [activeMenu, setActiveMenu] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);

    useEffect(() => {
        const adminCheck = ENABLE_LOGIN ? user?.is_admin : ADMIN_MODE;
        setIsAdmin(adminCheck);
        setActiveMenu(adminCheck ? "AdminDashboard" : "Dashboard");
    }, [user])

    // Wait until we have evaluated isAdmin
    if (ENABLE_LOGIN && (!user || isAdmin === null)) {
        return <Loading />;
    }

    return (
        <>
            <div className="flex flex-row bg-white h-full">
                <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} addClass="hidden lg:flex gap-5" isAdmin={isAdmin}/>
                <div className="flex flex-col flex-auto h-full">
                    <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} user={user} isAdmin={isAdmin}/>
                    <ActiveContent activeMenu={activeMenu} setActiveMenu={setActiveMenu} user={user} isAdmin={isAdmin} />
                </div>
            </div>
        </>
    )
}

function ActiveContent({ activeMenu, setActiveMenu, user, isAdmin }) {
    if(isAdmin === null) return <Loading />;

    const [image, setImage] = useState(null);
    const [imageOwnerID, setImageOwnerID] = useState(null);

    const menuComponentMap = isAdmin ? {
        AdminDashboard: <AdminDashboardUI />,
        Profile: <Profile user={user} isAdmin={isAdmin} />,
    } : {
        Dashboard: <NoAdminDashboard setActiveMenu={setActiveMenu} setImage={setImage} setImageOwnerID={setImageOwnerID}/>,
        MyPost: <MyPost setActiveMenu={setActiveMenu} setImage={setImage} setImageOwnerID={setImageOwnerID}/>,
        Photo: <UploadFoto />,
        DetailPhoto: <DetailFoto image={image} imageOwnerID={imageOwnerID}/>,
        Profile: <Profile user={user} isAdmin={isAdmin} />,
    };


    return (
        <div className="flex flex-col basis-1 flex-auto h-full px-8 py-10">
            {menuComponentMap[activeMenu] || <p>No content found.</p>}
        </div>
    )
}

export default Dashboard