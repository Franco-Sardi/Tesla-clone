import { useNavigate } from "react-router-dom"
import "./Header.css"
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const navElements = [
    { id: "tesla", label: "Tesla", route: "", style: { marginRight: "auto" } }, 
    { id: "model3", label: "Model 3", route: "model_3" },
    { id: "modelx", label: "Model X", route: "model_x" }, 
    { id: "cybertruck", label: "CyberTruck", route: "cybertruck" },
    { id: "shop", icon: <LocalGroceryStoreOutlinedIcon />, route: "Shop" }, // Use the ShoppingCartIcon component directly as an icon property
    { id: "menu", label: "Menu", route: "#", style: { marginLeft: 'auto' } },
  ];
  
  export default function Header({ setShowSidebar }) {
    const navigate = useNavigate();
  
    return (
      <>
        <nav>
          <ul className="headerList">
            {navElements.map(({ id, label, icon, route, style = {} }) => (
              <li
                key={id} // Add a unique key prop for each li element
                style={style}
                onClick={() => {
                  if (label === "Menu") {
                    setShowSidebar(true);
                  } else {
                    navigate(`/${route}`);
                  }
                }}
              >
                {/* Render the label if it's a string, otherwise render the icon */}
                {typeof label === "string" ? label : icon}
              </li>
            ))}
          </ul>
        </nav>
      </>
    );
  }
