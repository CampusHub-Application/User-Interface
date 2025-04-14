import { safeFetch, useEffect, useState, API } from "../../../components/barrel_module/Barrel.jsx";

const DetailFoto = ({ image, imageOwnerID = null }) => {
  const [imageOwner, setImageOwner] = useState([]);
  if (!image) return <p className="text-center text-gray-500">Tidak ada gambar dipilih.</p>;

  useEffect(() => {
    if(imageOwnerID) {
      safeFetch(API + "/users?id=" + imageOwnerID, {
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
        setImageOwner(data.user);
      }).catch((error) => {
        console.log("fetch error: ", error);
      })
    }
  }, [])

  // const dummyData = {
  //   name: "Budi Santoso",
  //   email: "budi@email.com",
  //   title: "Mahasiswa Aktif",
  //   description: "Sedang mencari buku di perpustakaan",
  // };

  return (
    <div className="p-8 h-full">
      <div className="max-w-5xl mx-auto bg-white border-2 border-gray-200 rounded-lg overflow-hidden flex">
        
        <div className="w-1/2 p-8">
          <img
            src={image.photo}
            alt={image.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-between space-y-24">
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
};

export default DetailFoto;
