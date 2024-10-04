import { useState } from "react";
// import { EventProps } from './../../components/EventProps';

export const TodoForm = ({ onAddTodo }) => {
  

    const [inputValue, setInputValue] = useState({});

    const handleInputChange = (value) => {
        setInputValue({id:value ,content:value ,checked :false});
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({id: "", content:"" ,checked :false});

    }
    return (

       
       <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type='text'
                        value={inputValue.content}
                        className='todo-input'
                        autoComplete='off'
                        onChange={(event) => handleInputChange(event.target.value)}
                    ></input>
                </div>
                <div>
                    <button type='submit' className='todo-btn'>ADD TASK</button>
                </div>
            </form>
        </section>

    );
}