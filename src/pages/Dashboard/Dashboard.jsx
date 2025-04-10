import { 
    Header,
    Sidebar
} from '../../components/barrel_module/Barrel.jsx'

function Dashboard() {
    return (
        <>
            <div className="flex flex-row bg-white h-full">
                <Sidebar />
                <div className="flex flex-col flex-auto h-fit">
                    <Header />
                    <ActiveContent />
                </div>
            </div>
        </>
    )
}

function ActiveContent() {
    return (
        <div className="flex flex-col basis-1 flex-auto h-fit px-5 py-5">
            <p>TEST</p>
            <p>TEST</p>
            <p>TEST</p>
        </div>
    )
}

export default Dashboard