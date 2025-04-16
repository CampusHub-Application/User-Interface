import {
    API,
    Loading,
    safeFetch,
    useEffect,
    useState,
    Link,
} from '../../../components/barrel_module/Barrel.jsx'

function SomeonePost({ setActiveMenu, currentOwner = null, setPostID = null }) {
    const [images, setImages] = useState([]);
    const [thisCurrentOwner, setThisCurrentOwner] = useState(currentOwner);

    useEffect(() => {
        if (currentOwner !== null) {
            sessionStorage.setItem("currentOwner", JSON.stringify(currentOwner));
        } else {
            const stored = sessionStorage.getItem("currentOwner");
            if (stored) {
                setThisCurrentOwner(JSON.parse(stored));
            }
        }
    }, []);

    useEffect(() => {
        if (thisCurrentOwner !== null) {
            console.log("This is owner id: " + thisCurrentOwner.id);
            console.log("This is owner id: " + thisCurrentOwner.name);
            console.log("Fetching from: " + "/my-posts?id=" + thisCurrentOwner.id);
            safeFetch(API + "/my-posts?id=" + thisCurrentOwner.id, {
                method: "GET",
            }).then(res => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
            }).then((data) => {
            setImages(data)
            console.log("this is the data: ", data);
            }).catch((error) => {
            console.log("fetch error: ", error);
            })
        }
    }, [])

    const handleClick = (img) => {
        setPostID(img.id);
        setActiveMenu("DetailPhoto");
    };

    if (thisCurrentOwner === null || images === null) return <Loading />;

    return (
        <div className="flex flex-col gap-5 p-4 h-full">
            <div className='flex flex-row items-center'>
                <button
                    onClick={() => setActiveMenu("Dashboard")}
                    className="flex items-center justify-center w-fit h-fit rounded-xl bg-gray-400/50 hover:bg-gray-500 transition text-white font-bold py-2 px-4 shadow-md"
                    >
                    Go Back
                </button>
            </div>
            <div className='flex w-[80%] self-center rounded-md border border-gray-300 px-4 py-2'>
                <div className="flex gap-5 align-center items-center">
                    {
                    thisCurrentOwner.photo ? (
                        <img 
                            src={thisCurrentOwner.photo} 
                            className="object-cover rounded-full h-9 w-9 border border-gray-400" 
                            alt={thisCurrentOwner.name}
                        />
                    ) : (
                        <div 
                            className="flex items-center justify-center min-h-9 min-w-9 aspect-square rounded-full bg-gray-300/30 text-gray-700 font-bold text-sm border border-gray-400">
                            {thisCurrentOwner.name
                                .split(" ")
                                .slice(0, 2)
                                .map(word => word[0])
                                .join("")
                                .toUpperCase()}
                        </div>
                    )
                    }
                    <div>
                        <a 
                            className="font-semibold text-gray-800 hover:text-gray-600 cursor-pointer">{thisCurrentOwner.name}</a>
                        <p className="text-sm text-gray-500">{thisCurrentOwner.email}</p>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img, idx) => (
                <Link onClick={ () => handleClick(img) } key={idx}>
                    <div
                    className="flex flex-col bg-white rounded-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg p-4 space-y-2"
                    >
                    <img
                        src={img.photo}
                        alt={`img-${idx}`}
                        className="rounded-md w-full h-80 object-cover"
                    />
                    <p className="text-sm text-left">{img.title}</p>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    )
}

export default SomeonePost;