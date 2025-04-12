import { API } from '../components/barrel_module/Barrel.jsx';
import { 
    createContext, 
    useContext, 
    useEffect, 
    useState 
} from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Only run this on non-login pages
        fetch(import.meta.env.VITE_SANCTUM_URL, {
            credentials: 'include',
        }).then(() => {
            fetch(API + '/users/profile', {
            credentials: 'include',
            headers: { 'Accept': 'application/json' },
            })
            .then(res => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then(data => setUser(data))
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export {
    AuthProvider,
    useAuth,
}