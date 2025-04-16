import { safeFetch, useEffect, useState, API, Loading } from "../../../components/barrel_module/Barrel.jsx";

const DetailFoto = ({ postID = null, setActiveMenu, setCurrentOwner }) => {
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

  const redirectHandler = () => {
    setCurrentOwner(imageOwner);
    setActiveMenu("SomeonePost");
  }

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
          <div className="flex flex-col h-full justify-between">  
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{image.title}</h2>
              <p className="text-gray-600 text-lg pb-7">{image.description}</p>
            </div>
            <div>
              <div className="flex gap-5 align-center items-center">
                {
                  imageOwner.photo ? (
                      <img 
                          src={imageOwner.photo} 
                          className="object-cover rounded-full h-9 w-9 border border-gray-400 cursor-pointer" 
                          alt={imageOwner.name}
                          onClick={redirectHandler}
                      />
                  ) : (
                      <div 
                        onClick={redirectHandler}
                        className="flex items-center justify-center min-h-9 min-w-9 aspect-square rounded-full bg-gray-300/30 text-gray-700 font-bold text-sm border border-gray-400 cursor-pointer">
                          {imageOwner.name
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
                    onClick={redirectHandler} 
                    className="font-semibold text-gray-800 hover:text-gray-600 cursor-pointer">{imageOwner.name}</a>
                  <p className="text-sm text-gray-500">{imageOwner.email}</p>
                </div>
              </div>
              <div className="flex items-center pt-5">
                <button 
                  onClick={redirectHandler}
                  className="flex flex-initial items-center justify-center text-sm font-bold bg-blue-500 hover:bg-blue-600 transition-all rounded-md text-white py-2 px-4">
                    Check {imageOwner.name.split(" ").slice(0, 1)}'s other post
                </button>
              </div>
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
