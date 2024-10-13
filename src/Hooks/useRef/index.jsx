 import { useRef } from "react"

 import './index.css'
 
 export const UseRef=()=>{

    // const username=document.getElementById('username')
    // const password=document.getElementById('password')

   
        const username= useRef(null)
        const password =useRef(null)
      
    const handleFormSubmit=(e)=>{
           e.preventDefault();
           console.log(username.current.value ,password.current.value)
    }



    return(
            <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="username" ref={username} /> 
            <br/>
            <input type="text" placeholder="password"  ref={password}/> 
            <br/>
            <button>Submit</button>
            </form>
            
    
    )

}