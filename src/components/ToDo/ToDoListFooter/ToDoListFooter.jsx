import React from 'react';
import style from './ToDoListFooter.module.css';
const ToDoListFooter = ({toDoList,filter,changeFilter,clearCompleted}) => {
  const handleFilterChanged = (filterValue) => {
    changeFilter(filterValue);
  }
    return(
      <div className={style.toDoListFooter}>
          <div>
            <span>{toDoList.filter(t => !t.isDone).length} items left</span>
          </div>
          <div className={style.btn}>
            <button data-value={'all'} className={filter === 'all' ? style.active : ''} onClick={(e) => {
              handleFilterChanged(e.currentTarget.dataset.value);
            }}>All</button>
            <button data-value={'active'} className={filter === 'active' ? style.active : ''} onClick={(e) => {
              handleFilterChanged(e.currentTarget.dataset.value);
            }}>Active</button>
            <button data-value={'completed'}  className={filter === 'completed' ? style.active : ''} onClick={(e) => {
              handleFilterChanged(e.currentTarget.dataset.value);
            }}>Completed</button>
          </div>
          <div className={style.btn}>
            <button onClick={clearCompleted}>Clear Completed</button>
          </div>
      </div>  
    )
}

export default ToDoListFooter;