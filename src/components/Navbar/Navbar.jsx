import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} activeClassName={s.activeLink} >Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/users'} activeClassName={s.activeLink}>User</NavLink>
            </div> 
            <div className={s.item}>
                <NavLink to={'/calculator'} activeClassName={s.activeLink}>Calculator</NavLink>
            </div> 
            <div className={s.item}>
                <NavLink to={'/toDoList'} activeClassName={s.activeLink}>ToDoList</NavLink>
            </div> 
            
        </nav>
    )
}

export default Navbar;