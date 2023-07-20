import "./Sidebar.css";
import { navElements } from "../Header";
import {useNavigate} from "react-router-dom"
export default function Sidebar({ setShowSidebar}){
    const navigate = useNavigate()
    return(
        <nav className="sidebar">
            <div className="button-div">
                <button onClick={()=> setShowSidebar(false)} >  X  </button>
            </div>
            <ul>
                    {
                        navElements.map(({label, route})=>{
                            if (label==="Menu") return null;
                            return(
                                <li
                                onClick={()=>{
                                    navigate(`/${route}`);
                                }} 
                                key={label}>{label}
                                
                                </li>
                            )
                        })
                    }
            </ul>
        </nav>
    )
}