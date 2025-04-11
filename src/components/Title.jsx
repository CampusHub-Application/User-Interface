import { 
    useLocation, 
    useEffect,
    Outlet
} from './barrel_module/Barrel.jsx';

function Title() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Beranda | CampusHub",
      "/dashboard": "Dashboard | CampusHub",
    };

    document.title = titles[location.pathname] || "CampusHub";
  }, [location]);

  return <Outlet />;
}

export default Title;
