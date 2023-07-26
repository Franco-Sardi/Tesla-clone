import { useNavigate } from "react-router-dom"
import "./Header.css"
import React from "react"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useRecoilValue } from "recoil";
import { cartState } from "../../Global-State/cartItems";


export const navElements = [
    { id: "tesla", label: "Tesla", route: "", style: { marginRight: "auto" } }, 
    { id: "model3", label: "Model 3", route: "model_3" },
    { id: "modelx", label: "Model X", route: "model_x" }, 
    { id: "cybertruck", label: "CyberTruck", route: "cybertruck" },
    { id: "shop", label: "Shop", route: "shop" },
    { id: "menu", label: "Menu", route: "#",style: { marginLeft: 'auto' } },
    // { id: "shop-cart", icon: <ShoppingCartOutlinedIcon />, route: "Shop" , style: { marginLeft: 'auto' }}, // Use the ShoppingCartIcon component directly as an icon property
  ];
  
  export default function Header({ setShowSidebar }) {
    const navigate = useNavigate();
    const cartItems = useRecoilValue(cartState)
   
  
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
            {/* Add the cart count next to the cart icon */}
            <li>
              <span className="class-items-count">{cartItems.length}</span>
              <ShoppingCartOutlinedIcon />
            </li>
          </ul>
        </nav>
      </>
    );
  }