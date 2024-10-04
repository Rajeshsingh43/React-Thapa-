
 import { MdDeleteForever , MdCheck } from "react-icons/md"

export const TodoList=({data , onHandleDeleteTodo ,  onHandleCheckedTodo, checked})=>{
    return(
        <li  className='todo-item'>
        <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
        <button className='check-btn' onClick={()=>onHandleCheckedTodo(data)}>
            <MdCheck />
        </button>
        <button className='delete-btn' 
        onClick={()=>
            onHandleDeleteTodo(data)}>
            <MdDeleteForever />
        </button>
    </li>

    )
}