import { useNavigate } from "react-router-dom"
import "./Header.css"
import React from "react"

export const navElements = [
    {label: "Tesla", route:"", style: {marginRight: "auto"}}, 
    {label: "Model 3", route:"model_3"},
    {label: "Model X", route:"model_x"}, 
    {label: "CyberTruck", route:"cybertruck"},
    {label: "Menu", route:"#" ,style: {marginLeft:'auto'}},
]


export default function Header({setShowSidebar}) {
    const navigate = useNavigate()
  return (
    <>
 
     <nav>
        <ul className="headerList">
            {
                navElements.map(({label,route,style = {}}) =>(
                    <li 
                        style={style}
                        key={label} 
                        onClick={()=>{
                        if (label === "Menu"){
                            setShowSidebar(true)
                        }else{
                            navigate(`/${route}`);
                        }
                    }}
                    >
                        {label}
                    </li>
                ))}
        </ul>
    </nav>
    </>
   
  );
}
