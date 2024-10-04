export const EventHandling=()=>{

    // function handlebuttonclick(){
    //     alert('Hey i am onclick Event')

    // }

const handlebuttonclick=(event)=>{
    console.log(event)
};
return(
    <>
        <button onClick={handlebuttonclick}>click me</button>
    </>
)
}