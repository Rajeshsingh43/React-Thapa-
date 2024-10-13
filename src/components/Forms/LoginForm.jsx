
import { useState } from 'react'
import './Register.css'

export const LoginForm=()=>{
    const[username ,setUsername]=useState("")
    const[password ,setPassword]=useState("")

    const handleFormSubmit=(e)=>{
        e.preventDefault();

        const loginData={
            username,
            password,
        }
         console.log(loginData);
    }
    return( 
        <>
            <div className='container'>
                <div className='card'>
                    <h1>Login Form</h1>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor='username'>username</label>
                        <input
                         type='text' 
                        name="username" 
                        required 
                        autoComplete='off'
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        >
                        </input>

                        <label htmlFor='password'>password</label>
                        <input type='text' name="password" required autoComplete='off'
                         value={password}
                         onChange={(e)=>setPassword(e.target.value)}>
                         </input>

                        <button type='Submit'>Login</button>
                    </form>
                </div>
            </div>
        </>
    
    )

}