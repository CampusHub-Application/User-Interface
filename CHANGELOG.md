## 1.2.5 Added Non-Admin Dashboard

-   Refactored File Names
-   Change Title using React Router Provider
-   Change How Route is Structured
-   Added Imports

## 1.2.4 Dashboard Functionality Tweaks

-   Added Off-Canvas / Drawer for small screen sizes
-   Added functional filtering based on data
-   Fixed rendering of sidebar to be compatible with off-canvas
-   Added [STRUCTURE.md](/STRUCTURE.md) to describe each components
-   Added Profile menu for Admin
-   Re-factored Project for Better Configuration (Less readability tho lol)

## 1.2.3 Finished First Dashboard Menu for Admin

-   Added [React-Icons](https://www.npmjs.com/package/react-icons) package
-   Added GPT-generated Dropdown Button & Table Rows lol
-   Tested for Responsivity
-   No Functionality tho :v

## 1.2.2 Torture by making flexbox responsive

-   See title

## 1.2.1 Project Refactor

-   Changed how project is structured
-   That's basically it

## 1.1.6 Dashboard Tweaks (Again)

-   Component Logo 'CampusHub' now route to homepage
-   Added Toggle to see Admin POV from [.env](.env.example) (ONLY USE IN DEV, WILL BE REMOVED LATER)

## 1.1.5 Base Dashboard Page Tweaks

-   Added small tweaks for logo component size customization
-   Added Button in sidebar w/ useState & animation
-   Renamed File 'Icons.jsx' into 'Particles.jsx'
-   Added [UIConfig](src/UIConfig.jsx) to configure multiple components settings
-   Updated [README.md](README.md) w/ better message

## 1.1.4 Dashboard Header Finishing

-   Added icons component for reuse
-   Finished slicing header for Dashboard

## 1.1.3 Added 1/4 Base Dashboard Page

-   Base dashboard UI made based on [Natha's Design](https://www.figma.com/design/LzB6oKLbkXXDNERQ0fJzJE/TBC?node-id=0-1&t=7BErKKXjAwJn26PZ-1)
-   Implemented barrel module for react components
-   Added Search Bar and Avatar for Dashboard Header

## 1.1.2 Added Unified Changelog documentation (on top of git, cause why not)

-   Added [CHANGELOG.md](CHANGELOG.md)
-   Added react-router package (react-router-dom now just repack react-router in npm anyway)
-   Using react-router data mode (see react router documentation for more info @ https://reactrouter.com/start/data/installation)
-   Index now point to routing file
-   Added [barrel module](src/Barrel.jsx) for re-exporting (Reduce clutter from multiple imports)

## 1.1.1 Changes made from initial template

-   Added tailwindcss & tailwindcss/vite npm package
-   Removed custom css in index.css, replaced w/ tailwindcss for global css import
-   Added vite environment
