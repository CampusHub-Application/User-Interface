// Created to be reused for multiple buttons as custom hook

import {
    useNavigate,
    API,
    safeFetch,
    ENABLE_LOGIN,
} from '../../components/barrel_module/Barrel.jsx';

import { useAuth } from '../../auth/AuthProvider.jsx';

function useLogoutHandler() {
    const navigate = useNavigate();
    const { user, setUser } = useAuth();

    return async () => {
        try {
            if (!ENABLE_LOGIN) {
                setUser(null); // Just clear the user and act as if logged out
                navigate('/'); // Redirect to login or home page
                return;
            }

            const res = await safeFetch(API + '/auth/logout', { method: 'POST' });
    
            if (!res.ok) {
                throw new Error('Failed to logout');
            }
    
            setUser(null); // Clear your auth 
            navigate('/'); // Redirect or show login screen
        } catch (error) {
            console.error('Logout error:', error);
        }
    }
}

export default useLogoutHandler;