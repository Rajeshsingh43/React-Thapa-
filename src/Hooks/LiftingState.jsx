import { useState } from "react";

export const LiftingState =()=>{
    const[inputValue, SetinputValue]=useState("");
    return(
        <>
            <InputComponent     inputValue={inputValue} SetinputValue={SetinputValue}/>
            <DisplayComponet inputValue={inputValue}/>
        </>
    )
};

const InputComponent=({inputValue ,SetinputValue})=>{
  
    return(
        <>
            <input type="text"
            placeholder="Enter Your Name"
            value={inputValue}
            onChange={(e)=>SetinputValue(e.target.value)}
            ></input>
        </>
    )
}

const  DisplayComponet=({inputValue})=>{
    return <p>The current input value is : {inputValue}</p>
};