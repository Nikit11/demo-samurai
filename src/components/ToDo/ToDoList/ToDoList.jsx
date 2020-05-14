import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTodoList, getStatusFilter } from '../../../redux/toDo-selects';
import style from './ToDoList.module.css';
import { createNewTodo, deleteToDo, toggleTaskStatus,changeFilter,clearCompleted} from '../../../redux/ToDoList-reducer';
import ToDoItem from '../ToDoItem/ToDoItem';
import ToDoListFooter from '../ToDoListFooter/ToDoListFooter';
const ToDoList = (props) => {
    const [newTextTodo,setNewTextTodo] = useState('');
    const createNewTask = (e) => {
        if (e.key === "Enter") {
            if (newTextTodo != '') {
                props.createNewTodo(newTextTodo);
                setNewTextTodo('');
            }
            
        }
    }

    const handleChangeTextTodo = (e) => {
        setNewTextTodo(e.target.value);
    }
    let filteredTasks = [];
    if(props.filter == 'all') filteredTasks = props.toDoList;
    if(props.filter == 'active') filteredTasks = props.toDoList.filter(t => !t.isDone);
    if(props.filter == 'completed') filteredTasks = props.toDoList.filter(t => t.isDone);
    return(
        <div className={style.toDoWrapper}>
            <div className={style.input}><input onKeyPress={createNewTask} value={newTextTodo} onChange={handleChangeTextTodo}/></div>
            <ToDoItem toDoList={filteredTasks} toggleTaskStatus={props.toggleTaskStatus} deleteToDo={props.deleteToDo}/>
            <ToDoListFooter toDoList={props.toDoList} selectAll={props.selectAll} filter={props.filter} changeFilter={props.changeFilter} clearCompleted={props.clearCompleted}/>
        </div>
    )
}
let mapStateToProps = (state) => ({
    toDoList: getTodoList(state),
    filter: getStatusFilter(state)
})
export default connect(mapStateToProps,{createNewTodo,deleteToDo,toggleTaskStatus,changeFilter,clearCompleted})(ToDoList);