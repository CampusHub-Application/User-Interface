import { 
    useState,
    useRef, 
    FaFileUpload,
    PopUpCheckOut,
    safeFetch,
    API,
} from '../../../components/barrel_module/Barrel.jsx';

const UploadFoto = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const newPreview = URL.createObjectURL(file);
    setImagePreview(newPreview);
  };

  const handleOpenFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
      fileInputRef.current.click();
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();

      if(!image) {
        alert("Mohon unggah gambar terlebih dahulu.");
        return;
      }

      form.append('title', judul);
      form.append('description', deskripsi);
      form.append('photo', image);

      const response = await safeFetch(API + "/posts", {
        method: "POST",
        body: form,
      })

      if(!response.ok) {
        throw new Error("Upload Failed");
      }

      setShowPopup(true);
      setImage(null);
      setImagePreview(null);
      setJudul('');
      setDeskripsi('');
    } catch (error) {
      alert("Something went wrong", error);
      console.log(error);
    }
  };

  // useEffect(() => {
  //     sessionStorage.setItem("currentMenu", "Photo");
  // }, [])

  return (
    <div className="flex flex-col md:flex-row gap-12">
      {showPopup && <PopUpCheckOut isVisible={true} onClose={() => setShowPopup(false)} />}
      <div className="border-2 border-dashed border-gray-300 flex flex-col justify-center items-center w-full md:w-2/5 h-96 rounded-xl">
        <label htmlFor="fileUpload" className="flex flex-col items-center cursor-pointer text-center">
          {!image && (
            <>
              <div className="text-blue-900 text-6xl mb-12">
                <FaFileUpload />
              </div>
              <span className="text-gray-600 px-5">
                Masukkan gambar Anda disini atau{" "}
                <span className="text-blue-800 font-bold underline">Pilih file</span>
              </span>
            </>
          )}

          <input
            id="fileUpload"
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </label>

        {imagePreview && (
            <div className="p-4 w-full text-center">
                <p className="text-sm text-gray-500">{image.name}</p>
                <img
                src={imagePreview}
                alt="Preview"
                className="mt-4 max-h-40 object-contain rounded mx-auto"
                />
                <button
                type="button"
                className="mt-4 text-blue-600 font-bold underline cursor-pointer"
                onClick={handleOpenFileDialog}
                >
                Pilih File
                </button>
            </div>
            )}

      </div>

      <form onSubmit={handleSubmit} className="w-full md:w-3/5 space-y-4">
        <div>
          <label className="block text-sm font-medium">Judul*</label>
          <input
            type="text"
            placeholder="Isi judul gambar"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-3"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Deskripsi*</label>
          <textarea
            placeholder="Isi deskripsi gambar"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-3"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="flex justify-end gap-6">
          <button
            type="button"
            className="w-32 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Batal
          </button>
          <button
            type="submit"
            className="w-32 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadFoto;
