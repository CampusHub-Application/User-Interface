import {
    FormInputComponent,
    FormInputPasswordComponent,
    loginFieldMap,
    useNavigate,
    useState,
    useEffect,
    API,
    BasePopModal,
} from '../../components/barrel_module/Barrel.jsx';
import { useAuth } from '../../auth/AuthProvider.jsx';

function Login() {
    const navigate = useNavigate();
    const [errorModalContent, setErrorModalContent] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const { user, setUser } = useAuth();
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    
    const showModal = (jsxContent) => {
        setErrorModalContent(jsxContent);
        setModalOpen(true);
    };

    // Automatic Redirect if logged in
    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user]);

    const LoginHandler = async (e) => {
        e.preventDefault();

        try {
            await fetch(import.meta.env.VITE_SANCTUM_URL, {
                credentials: "include",
            });

            const response = await fetch(API + "/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                const errorMessage = data.message || "Login gagal. Coba lagi.";

                showModal(
                    <div className="flex flex-col gap-5">
                        <h1 className="text-2xl font-bold text-center">Login Gagal</h1>
                        <p className="text-center">{errorMessage}</p>
                    </div>
                );
                return;
            }

            // Get user profile data and store using auth provider
            try {
                const response = await fetch(API + "/users/profile", {
                    credentials: "include",
                });
    
                const data = await response.json();

                if (!response.ok) {
                    const errorMessage = data.message || "User not found. Coba lagi.";

                    showModal(
                        <div className="flex flex-col gap-5">
                            <h1 className="text-2xl font-bold text-center">User Not Found</h1>
                            <p className="text-center">{errorMessage}</p>
                        </div>
                    );
                }
                
                // Store the user profile data in local storage
                setUser(data.profile);
                navigate("/dashboard");

            } catch (error) {
                alert("Terjadi kesalahan jaringan.");
                console.error("Network error:", error);
            }
        } catch (error) {
            alert("Terjadi kesalahan jaringan.");
            console.error("Network error:", error);
        }
    };

    

    return (
        <div className="flex flex-col lg:flex-row w-screen h-screen bg-gray-100">
            <div className="flex flex-col lg:flex-auto order-2 lg:order-1 lg:justify-center lg:w-1/2 lg:h-screen h-3/4 w-screen  bg-white text-blue-950/80">
                <h1 className="flex text-4xl font-extrabold pt-15 mb-8 ps-15">Selamat Datang!</h1>
                <form onSubmit={LoginHandler} className="flex flex-col w-full gap-5 px-15 text-bold">
                    {loginFieldMap.map((field, index) => {
                        const value = formData[field.name] || ""

                        const handleChange = (e) => {
                            setFormData((prev) => ({
                                ...prev,
                                [e.target.name]: e.target.value,
                            }));
                        };

                        if (field.type === "password") {
                            return (
                                <FormInputPasswordComponent
                                    key={index}
                                    field={field}
                                    index={index}
                                    value={value}
                                    onChange={handleChange}
                                />
                            );
                        } else {
                            return (
                                <FormInputComponent
                                    key={index}
                                    field={field}
                                    index={index}
                                    value={value}
                                    onChange={handleChange}
                                />
                            );
                        }
                    })}
                    <button className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white py-3 mt-5 rounded-lg w-full font-bold" type="submit">Masuk</button>
                </form>
            </div>
            <div className="flex flex-auto flex-col lg:flex-row order-1 lg:order-2 lg:w-1/2 lg:h-screen h-1/4 w-screen justify-center items-center bg-blue-950 text-white">
                <h1 className='text-7xl font-bold'> Campus <span className='py-1 px-4 rounded-xl bg-blue-600'>Hub</span></h1>
            </div>
            {errorModalContent && (
                <BasePopModal
                    content={errorModalContent}
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </div>
    );
}

export default Login;