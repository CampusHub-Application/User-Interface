// React Components import
import {
  createBrowserRouter,
  RouterProvider,
  StrictMode,
  createRoot,
  Homepage,
  Dashboard,
} from './Barrel.jsx'

// CSS import (tailwind)
import './index.css'

// React Routes
const router = createBrowserRouter([
  {
    // Main Homepage Route
    path: "/",
    Component: Homepage,
  }, 
  {
    // Dashboard Route
    path: "/dashboard",
    Component: Dashboard,
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
