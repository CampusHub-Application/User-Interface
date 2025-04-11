import { 
    useState, 
    useEffect 
} from "../../../components/barrel_module/Barrel.jsx";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // ! REMOVE THIS LATER, FOR MOCKUP PURPOSES
    setImages([
      { src: '', caption: 'Gambar 1' },
      { src: '', caption: 'Gambar 2' },
      { src: '', caption: 'Gambar 3' },
      { src: '', caption: 'Gambar 4' },
    ]);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((img, idx) => (
        <div key={idx}>
          <img
            src={img.src}
            alt={`img-${idx}`}
            className="rounded-md w-full h-64 object-cover"
          />
          <p className="mt-2 text-sm">{img.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
