import React from 'react';
import { reduxForm } from 'redux-form';
import { login,logout } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Input ,createField} from './../common/FormsControls/FormsControls';
import { required } from '../../utils/validators';
import { Redirect } from 'react-router-dom';
import style from './login.module.css';

const LoginForm = ({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email","email",[required],Input)}
            {createField("Password","password",[required],Input,{type: 'password'})}
            {createField(null,"rememberMe",[],Input,{type: 'checkbox'}, 'rememberMe')}
            {(error && <div className={style.formSummaryError}>
                {error}
            </div>)}
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        let {email,password,rememberMe} = formData;
        props.login(email,password,rememberMe);
    }
    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps,{
    login,
    logout
})(Login)