import { 
    API,
    getXsrfToken,
    safeFetch,
} from '../components/barrel_module/Barrel.jsx';

import { 
    createContext, 
    useContext, 
    useEffect, 
    useState,
} from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Perform an initial check to see if the user is authenticated
        const checkAuth = async () => {
            try {
                const response = await safeFetch(API + '/users/profile', {
                    credentials: 'include',
                    headers: {
                        'X-XSRF-TOKEN': getXsrfToken(),
                        'Accept': 'application/json'
                    }
                });

                if (!response.ok) throw new Error('Not authenticated');

                const data = await response.json();

                setUser(data.profile); // Set user data if authenticated
            } catch (error) {
                setUser(null); // Set null if not authenticated
            } finally {
                setLoading(false); // Done loading
            }
        };

        checkAuth();
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