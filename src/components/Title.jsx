import { 
    useLocation, 
    useEffect 
} from './barrel_module/Barrel.jsx';

function Title({ children }) {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Beranda | CampusHub",
      "/dashboard": "Dashboard | CampusHub",
      "/gallery": "Galeri | CampusHub",
    };

    document.title = titles[location.pathname] || "CampusHub";
  }, [location]);

  return <div>{children}</div>;
}

export default Title;
