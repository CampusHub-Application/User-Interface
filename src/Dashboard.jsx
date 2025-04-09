import { Header } from './Barrel.jsx'

function Dashboard() {
    return (
        <div className="flex flex-row bg-white">
            <div className="collapse md:visible md:basis-1/3">01</div>
            <div className="flex flex-auto md:basis-2/3">
                <Header />
            </div>
        </div>
    )
}

export default Dashboard