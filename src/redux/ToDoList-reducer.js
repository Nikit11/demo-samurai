const CREATE_NEW_TODO = 'CREATE_NEW_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TASK_STATUS = 'TOGGLE_TASK_STATUS';
const CHANGE_FILTER = 'CHANGE_FILTER';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
let initialState = {
    toDoList: [
        {title: 'it-kamasutra',isDone: false,id: 1},
        {title: 'it-incubator',isDone: false,id: 2}
    ],
    filter: 'all'
}
const ToDoListReducer = (state=initialState,action) => {
    switch(action.type) {
        case CREATE_NEW_TODO: {
            const id = state.toDoList.length + 1;
            return {
                ...state,
                toDoList: [...state.toDoList,{title:action.newText,isDone: false,id: id,activeToDo: false}]
            }
        }
        case DELETE_TODO: {
            return {
                ...state,
                toDoList: state.toDoList.filter(t => t.id !== action.toDoId)
            }
        }
        case TOGGLE_TASK_STATUS: {
            return {
                ...state,
                toDoList: [...state.toDoList.map(t => {
                    if(t === action.task) {
                        return {...t,isDone: !t.isDone}
                    }
                    return t
                })]
            }
        }
        case CHANGE_FILTER: {
            return {
                ...state,
                filter: action.filterValue
            }
        }
        case CLEAR_COMPLETED: {
            return {
                ...state,
                toDoList: state.toDoList.filter(t => !t.isDone) 
            }
        }
      
        default: return state
    }
}
export const createNewTodo = (newText) => ({type: CREATE_NEW_TODO,newText});
export const toggleTaskStatus = (task) => ({type: TOGGLE_TASK_STATUS,task});
export const deleteToDo = (toDoId) => ({type: DELETE_TODO,toDoId});
export const changeFilter = (filterValue) => ({type: CHANGE_FILTER,filterValue});
export const clearCompleted = () => ({type: CLEAR_COMPLETED});

export default ToDoListReducer;