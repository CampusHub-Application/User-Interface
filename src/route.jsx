// React Components import
import {
  createBrowserRouter,
  RouterProvider,
  StrictMode,
  createRoot,
  Login,
  Dashboard,
  Title,
  DetailFoto,
} from './components/barrel_module/Barrel.jsx';

// CSS import (tailwind)
import './index.css'

// React Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Title />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/detail/:id", element: <DetailFoto /> },
    ],
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
