## What Does Each Components Hold / Do?

---

-   [route.jsx](/src/route.jsx)
    -   Route to Login Page from "/"
    -   Route to Dashboard from "/dashboard"
-   [MockData.jsx](/src/MockData.jsx)
    -   Mock Data for Multiple Users
    -   Mock Data for Current Session User
    -   Used only for Development, Change to Database later
-   [index.css](/src/index.css)
    -   Tailwind Import
-   [Barrel.jsx](/src/components/barrel_module/Barrel.jsx)
    -   Unified Export for all Component Imports
-   [UIConfig.jsx](/src/components/UIConfig.jsx)
    -   Configuration for Certain Components including:
    -   Dashboard Heading's Padding
    -   Form Field Mapping for Profile Menu in Dashboard
-   [Particles.jsx](/src/components/Particles.jsx)
    -   Re-usable Small Components including:
    -   Main CampusHub Logo
    -   Custom Search Icon
    -   Sidebar Menu Component
    -   Customizable Dropdown Button
    -   Table Rows
-   [Dashboard.jsx](/src/pages/Dashboard/Dashboard.jsx)
    -   Base Dashboard View
    -   Use to contain Sidebar and Active Content View
-   [AdminDashboardMenu.jsx](/src/pages/Dashboard/Admin/AdminDashboardMenu.jsx)
    -   First Menu "Dashboard" for Admin
-   [AdminProfileMenu.jsx](/src/pages/Dashboard/Admin/AdminProfileMenu.jsx)
    -   Menu "Profile" for Admin
