import { 
  useState, 
  useEffect,
  Link,
  safeFetch,
  API, 
} from "../../../components/barrel_module/Barrel.jsx";

const NoAdminDashboard = ({ setActiveMenu, setPostID, filteredData = null }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if(filteredData !== null) {
      console.log(filteredData);
      setImages(filteredData);
    } else {
      safeFetch(API + "/posts", {
        method: "GET",
        headers: {
          accept: "application/json",
        }
      }).then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      }).then((data) => {
        setImages(data.posts)
      }).catch((error) => {
        console.log("fetch error: ", error);
      })
    }
  }, [filteredData]);

  const handleClick = (img) => {
    setPostID(img.id);
    setActiveMenu("DetailPhoto");
  };

  // useEffect(() => {
  //   sessionStorage.setItem("currentMenu", "Dashboard");
  // }, [])  

  return (
    <div className="p-4 flex justify-center">
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
  );
};

export default NoAdminDashboard;
