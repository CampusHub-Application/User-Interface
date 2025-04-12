import { 
    Navigate,
    Loading,
    ENABLE_LOGIN,
} from '../components/barrel_module/Barrel.jsx';

import { useAuth } from './AuthProvider.jsx';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if(!ENABLE_LOGIN) {
        return children;
    }

    if (loading) return <Loading />;

    return user ? children 
        : <Navigate to="/" replace />;
};

export default ProtectedRoute;