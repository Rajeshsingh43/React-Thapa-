export const EventProps=()=>{

   const  HandleWelcomeUser=(User)=>{
       alert(`hey ,${User}`);

   }
   const handleHover =()=>{
    alert(`hey thank you for hover me`)

   }

    return(
        <>
            <WelcomeUser
               onClick={()=>HandleWelcomeUser("vinod")}
               onMouseEnter={handleHover}

            />
        </>
    )
};

const WelcomeUser=(props)=>{
    const {onClick ,onMouseEnter}=props;
    const handleGreeting=()=>{
        console.log(`hey user , Welcome`);
        props.onClick();
    }
    return(
        <>
            <button onClick={onClick}>click</button>
            <button onMouseEnter={onMouseEnter}> Hover me</button>
            <button onClick={handleGreeting}>Greeting </button>
        </>
    )

}