import { safeFetch, useEffect, useState, API, Loading } from "../../../components/barrel_module/Barrel.jsx";

const DetailFoto = ({ postID = null, setActiveMenu }) => {
  const [imageOwner, setImageOwner] = useState([]);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   sessionStorage.setItem("currentMenu", "DetailPhoto");
  // }, [])

  useEffect(() => {
    setIsLoading(true);

    if(postID === null && sessionStorage.getItem("PostID") !== null) {
      postID = sessionStorage.getItem("PostID");
    }

    if(postID) {
      safeFetch(API + "/posts/" + postID, {
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
        sessionStorage.setItem("PostID", postID);
        setImage(data.post);
        setImageOwner(data.post.user);
      }).catch((error) => {
        alert("fetch error: ", error);
      })
    }

    setIsLoading(false);
  }, [])

  if (isLoading) return <Loading />;

  if(image !== null) return (
    <div className="flex flex-col gap-5 p-4 h-full">
      <button
        onClick={() => setActiveMenu("Dashboard")}
        className="flex w-fit rounded-xl bg-gray-400/50 hover:bg-gray-500 transition text-white font-bold py-2 px-4 shadow-md"
        >
        Go Back
      </button>
      <div className="flex flex-initial flex-col sm:flex-row bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
        
        <div className="flex sm:w-1/2 p-4">
          <img
            src={image.photo}
            alt={image.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="sm:w-1/2 p-8 flex flex-col justify-between space-y-24">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{image.title}</h2>
            <p className="text-gray-600 text-lg">{image.description}</p>
          </div>

          <div className="flex gap-5 align-center items-center">
            {/* <img
              src={`https://ui-avatars.com/api/?name=${image.name}`}
              alt="User"
              className="w-12 h-12 rounded-full mr-4"
            /> */}

            {
              imageOwner.photo ? (
                  <img 
                      src={imageOwner.photo} 
                      className="object-cover rounded-full h-9 w-9 border border-gray-400" 
                      alt={imageOwner.name}
                  />
              ) : (
                  <div className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-300/30 text-gray-700 font-bold text-sm border border-gray-400">
                      {image.title
                          .split(" ")
                          .slice(0, 2)
                          .map(word => word[0])
                          .join("")
                          .toUpperCase()}
                  </div>
              )
            }
            <div>
              <p className="font-semibold text-gray-800">{imageOwner.name}</p>
              <p className="text-sm text-gray-500">{imageOwner.email}</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );

  if (!isLoading && image === null) 
    return (
      <div className="flex flex-col gap-5 py-2 justify-center items-center">
        <p className="text-center text-gray-500">Tidak ada gambar dipilih.</p>
        <button 
          onClick={() => setActiveMenu("Dashboard")} 
          className="flex w-fit rounded-xl bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-2 px-4 shadow-md">
            Go Back
        </button>
      </div>
    )
};

export default DetailFoto;
