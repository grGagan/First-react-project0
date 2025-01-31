import React, { useState } from "react";

export const Stopwatch= () =>{
    const[time,setTime]=useState(0);
    const[running,setRunning]=useState(false);

    useEffect(()=>{
        let interval;
        if(running){
            interval=setInterval(() => {
                setTime((prevTime)=>prevTime+1);
            }, 100);
        }else{
            clearInterval(interval);
        }
        return()=>clearInterval(interval);
    },[running]);

    return(
        <div>
        <h1>Stopwatch:{time}sec</h1>
        <button onClick={()=> setRunning(true)}>Start</button>
        <button onClick={()=> setRunning(false)}>Stop</button>
        <button onClick={()=> {setTime(0);setRunning(false);}}>Reset</button>
         </div>
    );

};

