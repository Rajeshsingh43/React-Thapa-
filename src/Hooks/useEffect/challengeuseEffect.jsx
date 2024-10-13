import { useState } from 'react'
import './index.css'
import { useEffect } from 'react';

export const Challenge=()=>{
    const[count , setCount]=useState(0)
    const [name, setName] = useState();

    useEffect(()=>{
        document.title=`count:${count}`
    },[count]);

    useEffect(()=>{
        console.log(name)

    },[name])
    return(
        <>
           <div className='container'>
            <h1>useEffect challenge</h1>

            <p>
                count: <span>{count}</span>
            </p>
            <p>
                <button onClick={()=>setCount(count+1)}>Increment</button>
            </p>
            <input
           type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
      />
           </div> 
        </>
    )

}