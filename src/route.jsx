// React Components import
import {
  createBrowserRouter,
  RouterProvider,
  createRoot,
  Login,
  Dashboard,
  Title,
  ProtectedRoute,
} from './components/barrel_module/Barrel.jsx';

import { AuthProvider } from './auth/AuthProvider.jsx';

// CSS import (tailwind)
import './index.css'

// React Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Title />,
    children: [
      { 
        path: "/", 
        element: <Login /> 
      },
      { 
        path: "/dashboard", 
        element: 
        <ProtectedRoute>
          <Dashboard /> 
        </ProtectedRoute>
      },
    ],
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
