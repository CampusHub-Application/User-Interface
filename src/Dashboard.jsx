import { 
    Header,
    Logo
} from './Barrel.jsx'

function Dashboard() {
    return (
        <div className="flex flex-row bg-white h-full">
            {/* Sidebar 
                # TODO: Add Drawer / Collapsible menu
            */}
            <div className="collapse lg:flex lg:flex-col lg:border-e-1 lg:border-gray-300 lg:min-w-[18rem] lg:visible">
                <Logo />
                
            </div>

            {/* Main content */}
            <div className="flex flex-col flex-auto h-fit">
                <Header />
            </div>
        </div>
    )
}

export default Dashboard