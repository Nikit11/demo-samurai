import React from 'react';
import s from './FormControls.module.css';
import { Field } from 'redux-form';
const FormControl = ({input,meta,...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
                {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const TextArea = (props) => {
    const {input,meta,...restProps} = props;
   return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}
export const Input = (props) => {
    const {input,meta,...restProps} = props;

    return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}
export const createField = (placeholder,name,validators,component,props={},text='') => {
    return <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/> {text}
    </div>
}
