import { Children, useState } from "react"
import '../components/Ev.css';

export const State =()=>{

    const[Count ,setCount]=useState(0);
    console.log("parent component rendered");

    const handleButtonClick=()=>{
       
        setCount(()=>Count+1);
    };

    
    return(
        <>
        <section className="Btn">
        <h1>{Count}</h1>
        <button 
        className="Btn1"
        onClick={handleButtonClick}>click me</button>
        </section>
        
        <ChildComponent Count ={Count}/>
        </>
    )
}

 function ChildComponent({Count}){
    console.log("child component rendered");
    return ( <div className="Btn2">Child component -{Count}</div>
    )
    
 };

