import { useState } from 'react';
import './Todo.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';
import { parse } from 'postcss';
import {getLocalStorageTodoData , setLocalStorageTodoData} from './TodoLocalStorage'


export const Todo = () => {
  
 
    const [task, setTask] = useState(()=>getLocalStorageTodoData())
   

    const handleFormSubmit = (inputValue) => {
        const {id ,content ,checked} =inputValue;
         //to check if the input field empty  or not
        if (!content) return;

    

        const ifTodoContentMatched= task.find((curTask)=>curTask===content);
        if(ifTodoContentMatched) return ;
        setTask((prevTask) => [...prevTask, {id , content ,checked}]);
    }


    // //todo Add Data to local storage
    setLocalStorageTodoData(task);
 
 

  

   const handleDeleteTodo=(value)=>{
    console.log(task);
    console.log(value);
    const updatedTask= task.filter((curTask)=>curTask.content!==value);
      setTask(updatedTask);
   }

    const handleClearTodoData=()=>{
        setTask([])
    }

    //todo handleCheckedTodo functionality
        

        const handleCheckedTodo =(content)=>{
            const updatedTask =task.map((curTask)=>{
                if(curTask.content===content){
                    return {...curTask ,checked : !curTask.checked};
                }else {
                    return curTask;
                }
            });
            setTask(updatedTask);
        };
       



    return <section className='todo-container'>
        <header>
            <h1>Todo List</h1>
            <TodoDate/>
         
        </header>
           <TodoForm onAddTodo={handleFormSubmit}/>
            <section className='myUnOrderList'>
                <ul>
                    {
                        task.map((curTask) => {
                            return <TodoList key={curTask.id} 
                            data={curTask.content}
                            checked={curTask.checked}
                            onHandleDeleteTodo={handleDeleteTodo}
                            onHandleCheckedTodo= {handleCheckedTodo}
                             />
                               
                        })
                    }
                </ul>

            </section>

            <section>
                <button className='clear-btn' onClick={handleClearTodoData}>Clear All</button>
            </section>


        </section>
}