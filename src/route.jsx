// React Components import
import {
  createBrowserRouter,
  RouterProvider,
  StrictMode,
  createRoot,
  Homepage,
  Dashboard,
  Title,
} from './components/barrel_module/Barrel.jsx';

// CSS import (tailwind)
import './index.css'

// React Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Title />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
