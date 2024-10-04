
import { useState } from 'react'
import './Toggle.css'
// import { IoIosSwitch } from "react-icons/io";
// import { PiUserSwitchFill } from "react-icons/pi";


export const ToggleSwitch =()=>{

    const[IsOn ,setIsOn]=useState(false)

    const handleToggleSwitch=()=>{
        setIsOn(!IsOn);
    };

    const CheckIsOn=IsOn ? "on" : "OFF";
    const toggleBg ={background : IsOn ? "#4caf50" : ""}

    return ( 
        <>  
       {/* <h1 style={{ color: "#000", textAlign: "center" }}>
        Toggle Switch{" "}
        <IoIosSwitch style={{ color: "red", textAlign: "center" }} />
        <PiUserSwitchFill />
      </h1> */}
    
    <div className='toggle-switch '
                 style={toggleBg}
                 onClick={handleToggleSwitch}
                 >
            <div className={`switch ${CheckIsOn}`}>
                <span className='switch-state'>{CheckIsOn}</span>
            </div>
    </div>
    </>
    );


}
