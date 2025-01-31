import { useState } from "react";

export const LightDarkMode=()=>{
    const[darkMode,setDarkMOde]=useState(false);
    return(
        <div style={{
            backgroundColor:darkMode ? "#333" : "#fff",
            color:darkMode ? "#fff" : "#000",
            height:"100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column"
        }}>
            <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
            <button onClick={()=>setDarkMOde(!darkMode)}>Toggle Mode</button>
            </div>
    );
};