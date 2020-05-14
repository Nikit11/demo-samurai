import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import settingsReducer from "./settings-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";
import ToDoListReducer from "./ToDoList-reducer";
let reducers = combineReducers({
        dialogsPage: dialogsReducer,
        profilePage:  profileReducer,  
        sidebar:  sidebarReducer,
        settings: settingsReducer,
        usersPage: userReducer,
        auth: authReducer,
        app: appReducer,
        form: formReducer,
        toDoList: ToDoListReducer
               
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))
window.store = store;

export default store;