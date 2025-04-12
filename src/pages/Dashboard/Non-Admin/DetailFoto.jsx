import { useParams } from "../../../components/barrel_module/Barrel.jsx";

const DetailFoto = () => {
  const dummyData = {
    name: "Budi Santoso",
    email: "budi@email.com",
    title: "Mahasiswa Aktif",
    description: "Sedang mencari buku di perpustakaan",
    photo: "https://images.unsplash.com/photo-1531219432768-e0f8e3e3e8f9"
  };

  const { id } = useParams();
  console.log("ID dari URL:", id);

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto h-screen bg-white border-2 border-gray-200 rounded-lg overflow-hidden flex">
        
        <div className="w-1/2">
          <img
            src={dummyData.photo}
            alt="Library"
            className="w-full h-full object-cover p-8"
          />
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-normal space-y-24">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{dummyData.title}</h2>
            <p className="text-gray-600 text-lg">{dummyData.description}</p>
          </div>

          <div className="flex items-center">
            <img
              src={`https://ui-avatars.com/api/?name=${dummyData.name}`}
              alt="User"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-gray-800">{dummyData.name}</p>
              <p className="text-sm text-gray-500">{dummyData.email}</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DetailFoto;
