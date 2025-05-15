import {
    PiPencilLineThin,
    profileFieldMap,
    FormInputComponent,
    useState,
    BasePopModal,
    FaFileUpload,
    Loading,
    safeFetch,
    API,
    useRef,
    PopUpCheckOut,
} from "../../components/barrel_module/Barrel.jsx";

function Profile( { user, isAdmin } ) {
    const fieldMap = profileFieldMap({ user });
    const fileInputRef = useRef(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [tempImage, setTempImage] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    var newPreview = null;

    const [formData, setFormData] = useState({
        status: (isAdmin ? "Admin" : "Non-Admin"),
        email: user.email,
        name: user.name,
        password: "",
        password_confirmation: "",
        photo: "",
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        newPreview = URL.createObjectURL(file);
        setImagePreview(newPreview);
    };
    
    const handleOpenFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
            fileInputRef.current.click();
        }
    };

    const handleSaveFileDialog = (e) => {        
        setTempImage(imagePreview);
        setModalOpen(false);
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!user.id) {
            alert("User ID is missing.");
            return;
        }

        try {
            setIsLoading(true);

            const form = new FormData();
            form.append("id", user.id); // Required for email uniqueness check
            form.append("is_admin", isAdmin ? 1 : 0);
            form.append("name", formData.name || "");
            form.append("email", formData.email || "");

            if (formData.password) {
                form.append("password", formData.password);
                form.append("password_confirmation", formData.password_confirmation);
            }

            if (image !== null) {
                form.append("photo", image);
            }

            const response = await safeFetch(API + "/users?_method=PATCH", {
                method: "POST", 
                body: form,
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Submit Failed");
                return;
            }

            setShowPopup(true);
            // alert("Submit Successful");

            // Optionally, reload or update UI state with new user info
        } catch(error) {
            alert("Terjadi kesalahan jaringan.");
            console.error("Network error:", error);
        } finally {
            setIsLoading(false);
        }
    };
    
    // useEffect(() => {
    //     sessionStorage.setItem("currentMenu", "Profile");
    // }, [])

    return (
        <div className="relative flex">
            {isLoading && <Loading />}
            {showPopup && <PopUpCheckOut isVisible={true} onClose={() => setShowPopup(false)} message={"Profile berhasil diupdate! Silahkan Muat Ulang Halaman untuk Cek!"} />}
            <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-row justify-center md:justify-start items-center">
                    <h1 className="text-3xl font-bold">Profile</h1>
                </div>
                <div className="flex flex-col md:flex-row gap-10 justify-center">
                    <div className="flex flex-col h-fit w-fit md:w-0 justify-center md:justify-start items-center md:items-start self-center md:self-start gap-3 bg-gray-300/30 py-5 px-5 min-w-[15rem] rounded-xl">
                        <div className="relative flex flex-col items-center justify-center">
                            {
                                tempImage || user.photo ? (
                                    <img 
                                        src={tempImage || user.photo} 
                                        className="object-cover rounded-full w-24 h-24 border border-gray-300" 
                                        alt={user.name}
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-500/20 text-gray-700 font-bold text-xl border border-gray-300">
                                        {user.name
                                            .split(" ")
                                            .slice(0, 2)
                                            .map(word => word[0])
                                            .join("")
                                            .toUpperCase()}
                                    </div>
                                )
                            }
                            <button 
                                type="button"
                                onClick={() => {
                                    setModalOpen(true);
                                }}
                                className="absolute bottom-0 -right-1 w-3/7 h-3/7 bg-white shadow-md text-white text-sm py-2 px-2 rounded-full hover:bg-gray-100/80 flex items-center justify-center">
                                <PiPencilLineThin className="text-black text-2xl"/>
                            </button>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700">
                            {user.name}
                        </h3>
                        <p className="text-gray-500 text-md truncate overflow-hidden text-ellipsis">
                            {user.email} <br />
                            { tempImage ? 
                                <span className="text-sm text-red-950">*Unsaved Changes Available</span> : null}
                        </p>
                    </div>
                    <form 
                        onSubmit={ handleSubmit } 
                        method="POST" 
                        className="flex flex-auto flex-col gap-6"
                        encType="multipart/form-data">
                            
                        {fieldMap.map((field, index) => {
                            const value = formData[field.name] || "";

                            const handleChange = (e) => {
                                setFormData((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                }));
                            };

                            return (<FormInputComponent
                                    key={index}
                                    field={field}
                                    index={index}
                                    value={value}
                                    onChange={handleChange}
                                />
                            )
                        })}
                        <div className="flex flex-row gap-5 mb-5 justify-end">
                            <button type="button" className="text-gray-700 font-medium px-8 py-2 rounded-xl border border-gray-300 hover:bg-gray-100/80">
                                Batal
                            </button>
                            <button type="submit" className="bg-blue-600 text-white font-medium px-8 py-2 rounded-xl">
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {isModalOpen && (
                <BasePopModal
                    content={
                        <div className="flex flex-col items-center justify-center gap-5">
                        <h1 className="text-2xl font-bold text-center">Upload File Here</h1>
                    
                        {/* Always render the input, just keep it hidden */}
                        <input
                            id="fileUpload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    
                        {!imagePreview ? (
                            <label
                                htmlFor="fileUpload"
                                className="border-2 border-dashed border-gray-300 flex flex-col justify-center items-center w-full h-96 rounded-xl cursor-pointer"
                                >
                                <div className="text-blue-900 text-6xl mb-12">
                                    <FaFileUpload />
                                </div>
                                <span className="text-gray-600 px-5 text-center">
                                    Masukkan gambar Anda disini atau{" "}
                                    <span className="text-blue-800 font-bold underline">Pilih file</span>
                                </span>
                            </label>
                        ) : (
                            <div className="flex flex-col justify-center h-full p-4 w-full text-center">
                                <p className="text-sm text-gray-500">{image.name}</p>
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="aspect-square object-cover rounded-full w-40 my-3 self-center border border-gray-300"
                                />
                                <div className="flex flex-row justify-evenly items-center w-full">
                                    <button
                                        type="button"
                                        className="self-center mt-4 text-blue-600 font-bold w-fit px-4 py-2 bg-gray-100 shadow-md hover:bg-gray-100/50"
                                        onClick={handleOpenFileDialog}
                                    >
                                        Pilih File
                                    </button>
                                    <button
                                        type="button"
                                        className="self-center mt-4 text-blue-600 font-bold w-fit px-4 py-2 bg-gray-100 shadow-md hover:bg-gray-100/50"
                                        onClick={handleSaveFileDialog}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        )}
                        </div>
                    }
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </div>
    )
}

export default Profile;