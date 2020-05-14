import React, { useState } from 'react';
import style from './Calculator.module.css';

const Calculator = (props) => {
     
    let [firstNumber,setFirstNumber] = useState('');
    let [secondNumber,setSecondNumber] = useState('');
    let [operation,setOperation] = useState(null);
    let [result,setResult] = useState(0);
    const handleChangeFirstNum = (e) => {
        const value = e.target.value;
        let updateValue = value === '' || value === '-' ? value : +value;
        setFirstNumber(updateValue)
    }
    const handleChangeSecondNum = (e) => {
        const value = e.target.value;
        let updateValue = value === '' || value === '-' ? value : +value;
        setSecondNumber(updateValue);
    }
    const handleChangeOperation = (operation) => {
        setOperation(operation);
    }
    const deleteNum = () => {
        setFirstNumber(0);
        setSecondNumber(0);
    }
    const setNewResult = () => {
        switch(operation) {
            case '+' : {
                debugger
                let newResult = firstNumber + secondNumber;
                setResult(newResult)
                break;
            }
            case '-' : {
                let newResult = firstNumber - secondNumber;
                setResult(newResult)
                break;
            }
            case '*' : {
                let newResult = firstNumber * secondNumber;
                setResult(newResult)
                break;
            }
            case '/' : {
                let newResult = firstNumber / secondNumber;
                
                setResult(newResult)
                break;
            }
            default: {
               setResult(0)
            }  
        }
    }
    return (
        <div className={style.calculatorWrapper}>
        <div className={style.result}>
            Ответ: {result}
        </div>
            <div className={style.calculator}>
                <div>
                    <input value={firstNumber}  onChange={handleChangeFirstNum}/>
                </div>
                <div>
                    <input value={secondNumber} onChange={handleChangeSecondNum}/>
                </div>
            </div>
            <div  className={style.operation}>
            <input type='button' className={style.btn} value='+' onClick={(e) => handleChangeOperation(e.target.value)}/>
            <input type='button' className={style.btn} value='-' onClick={(e) => handleChangeOperation(e.target.value)}/>
            <input type='button' className={style.btn} value='*' onClick={(e) => handleChangeOperation(e.target.value)}/>
            <input type='button' className={style.btn} value='/' onClick={(e) => handleChangeOperation(e.target.value)}/>
            </div>
            <div><button onClick={setNewResult}>Получить результат</button></div>
            <div><button onClick={deleteNum}>Стереть</button></div>
        </div>
    )
}
export default Calculator;