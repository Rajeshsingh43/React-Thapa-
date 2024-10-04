// import { useState } from 'react'
// import NetflixSeries from './components/NetflixSeries'
// import './components/Netflix.css'
// import './components/Netflix.module.css'
// import { EventHandling } from './components/EventHandling'
// // import { EventProps } from './components/EventProps';
// import { State } from './Hooks/State';
// import { DerivedState } from "./Hooks/DerivedState";
// import { LiftingState } from "./Hooks/LiftingState";
// import { ToggleSwitch } from "./Projects/Toggle/ToggleSwitch";
import { Todo } from "./Projects/TODO/Todo";

function App() {
 // const [count, setCount] = useState(0)

  return (
   <>
       {/* <h1 className='card-head'> List Of Best Netflix Series</h1>
       <NetflixSeries/> */}
       {/* <EventHandling/> */}
       {/* <EventProps/> */}
       {/* <State/> */}
       {/* <Sibling/> */}
       {/* <DerivedState/> */}
        {/* <LiftingState/> */}
         {/* <ToggleSwitch/> */}
        
          <section>
          <Todo/>
          </section>
        
    </>
   
 
  )
  
}
// export function Sibling(){
//   console.log("sibling Component rendered");
//   return (
//   <>
//      <div>sibling component</div>
//   </>
//   )
 
// }

export default App;
