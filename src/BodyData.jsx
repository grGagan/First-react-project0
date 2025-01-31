/*import React, { useState } from "react";

const BodyData = () => {
    const [count, setCount] = useState(0)
    const onClicked = () => {
        setCount(count+1);
    }
    return (<div onClick={onClicked}>{count}</div>)
}

export default BodyData;*/
import React,{useState} from  "react";
export const Counter=()=>{
    const[count,setCount]=useState(0);
    return(
        <div>
            <h1>Counter machine to increase and Decrease by one</h1>
            <h2>Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <button onClick={()=>setCount(count-1)}>Decrease</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    );
};



export const Counter2=()=>{
    const[count2,setCount2]=useState(0);
    return(
        <idv>
            <h1>Counter machine to increase and Decrease value by 10</h1>
            <h2>Count:{count2}</h2>
            <button onClick={()=>setCount2(count2+10)}>Increase</button>
            <button onClick={()=>setCount2(count2-10)}>Decrease</button>
            <button onClick={()=>setCount2(0)}>Reset</button>
        </idv>
    );
};
// export default Counter2;

export const  UserInfo=()=>{
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    return(
        <div>
            <br>
            </br>
            <br></br>
            <input
             type="text"
             placeholder="Enter Your name"
             value={name}
             onChange={(e)=>setName(e.target.value)}
             />
             <input
              type="number"
              placeholder="Enter Age"
              value={age}
              onChange={(e)=>setAge(e.target.value)}
              />
              <h3>Name:{name}</h3>
              <h3>Age:{age}</h3>
        </div>
    );
};

export const UserProfile=()=>{
    const[user,setUser]=useState({name:"",age:""});
    return (
        <div>
            <input
             type="text"
             placeholder="Enter Name"
             value={user.name}
             onChange={(e)=>setUser({...user,name:e.target.value})}
             />
             <input
             type="number"
             placeholder="Enter Age"
             vale={user.age}
             onChange={(e)=>({...user,age:e.target.value})}
             />
             <h3>Name:{user.name}</h3>
             <h3>Age:{user.age}</h3>
        </div>
    
    )
}

export const TodoList=()=>{
    const[tasks,setTasks]=useState([]);
    const[task,setTask]=useState("");

    const addTask=()=>{
        if(task.trim()){
        setTasks([...tasks,task]);
        setTask("");
        }
    };

    const removeTask=(index)=>{
        setTask(tasks.filter((_, i)=>i !==index));
    };

    return(
        <div>
            <br></br><br></br>
            <h1> Todo List project</h1>
            <input
            type="text"
            placeholder="enter task"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />
            <button onClick={(addTask)}>Add Task</button>
            <ul>
                {tasks.map((t,index)=>(
                    <li key={index}>{t}
                    <button onClick={()=>removeTask(index)}>Remove</button></li>
                ))}
            </ul>
        </div>
    );
};







