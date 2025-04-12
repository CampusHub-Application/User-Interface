import { 
    useState, 
    useEffect 
  } from "../../../components/barrel_module/Barrel.jsx";
  

const DetailFoto = () => {
  const dummyData = {
    name: "Budi Santoso",
    email: "budi@email.com",
    title: "Mahasiswa Aktif",
    description: "Sedang mencari buku di perpustakaan",
    photo: "https://images.unsplash.com/photo-1531219432768-e0f8e3e3e8f9"
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 flex items-center space-x-6">
        <img
          src={dummyData.photo}
          alt="Library"
          className="w-48 h-64 object-cover rounded-lg"
        />
        <div>
          <h2 className="text-xl font-semibold">{dummyData.title}</h2>
          <p className="text-gray-500">{dummyData.description}</p>
          <div className="flex items-center mt-4">
            <img
              src={`https://ui-avatars.com/api/?name=${dummyData.name}`}
              alt="User"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="font-medium">{dummyData.name}</p>
              <p className="text-sm text-gray-500">{dummyData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFoto;
