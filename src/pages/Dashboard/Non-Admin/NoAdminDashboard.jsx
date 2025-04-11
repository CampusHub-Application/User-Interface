import { 
  useState, 
  useEffect 
} from "../../../components/barrel_module/Barrel.jsx";

const NoAdminDashboard = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // ! REMOVE THIS LATER, FOR MOCKUP PURPOSES
    setImages([
      { src: '', caption: 'Gambar 1' },
      { src: '', caption: 'Gambar 2' },
      { src: '', caption: 'Gambar 3' },
      { src: '', caption: 'Gambar 4' },
      { src: '', caption: 'Gambar 5' },
      { src: '', caption: 'Gambar 6' },
    ]);
  }, []);

  return (
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white rounded-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg p-4 space-y-2"
          >
            <img
              alt={`img-${idx}`}
              className="rounded-md w-full h-80 object-cover"
            />
            <p className="text-sm text-left">{img.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoAdminDashboard;
