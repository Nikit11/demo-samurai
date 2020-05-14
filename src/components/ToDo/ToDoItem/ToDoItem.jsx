import React  from 'react';
import style from './ToDoItem.module.css';
const ToDoItem = ({deleteToDo,toggleTaskStatus,toDoList}) => {
    const deleteTaskCallback = (itemId) => {
        deleteToDo(itemId);
    }
    const toggleTaskStatusCallback = (task) => {
        toggleTaskStatus(task);
    }
    return(
        <div>
            {toDoList.map((item,index) => {
                return <div className={style.toDo} key={index}>
                    <input type='checkbox' onClick={() => {
                        toggleTaskStatusCallback(item);
                    }} checked={item.isDone}  className={style.checking} />
                    <span className={item.isDone ? style.done : ''}>{item.title}</span>
                    <span className={style.delete} onClick={()=> deleteTaskCallback(item.id)}>X</span>
                </div>
            })}
        </div>
    )
}

export default ToDoItem;