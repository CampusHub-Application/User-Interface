import { Navigate } from '../components/barrel_module/Barrel.jsx';
import { useAuth } from './AuthProvider.jsx';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <div>Loading...</div>;

    return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;