import { useState } from "react";

// const User=[
//     {name:"Alice" ,   age:25 },
//     { name:"Bob" ,     age:27 },
//     { name:"Charlie" ,   age:28 },
//     { name:"Angels" ,   age:29 }
// ];



export const DerivedState = () => {
    const [User, setUser] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 27 },
        { name: "Charlie", age: 28 },
        { name: "Angels", age: 29 },
        { name: "prince", age: 60 },
    
    ]);

    //UserCount
     console.log(User)
    const UserCount=User.length


    const Avgage= User.reduce((accum, curElem)=> accum + curElem.age , 0)/UserCount

    return (
        <div className="">

            <h1>User List</h1>
            <ul>
                {
                    User.map((User, index) => {
                        return (
                            <li key={index}>
                                {User.name} -{User.age} year old

                            </li>
                        )

                    })

                }

            </ul>
            
            <p>Total Users:{ UserCount}</p>
            <p>Average Age:{ Avgage}</p>

        </div>
    )
}