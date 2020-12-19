import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from "./Components/Display";
import {Button1} from "./Components/Button1";
import {ResetButton} from './Components/ResetButton';


function App() {
    let disabled1 = false
    let disabledReset = true
    // let red = false
    let maxValue = 5

    let [number, setNumber] = useState<number>(0)

    function increment() {
        if (number < maxValue) {
            return setNumber(number + 1)
        }
    }

    (number === maxValue) && (disabled1 = true);
    (number > 0) && (disabledReset = false)

    function reset() {
        return setNumber(0)
    }


    return (
        <div className="App">
            <div className={"App-main"}>
                <div className={"Container"}>
                    <Display maxValue={maxValue} number={number} />
                    <div className={"ButtonsContainer"}>
                        <Button1 onClick={increment} disabled1={disabled1} buttonName={"inc"}/>
                        <Button1 onClick={reset} disabled1={disabledReset} buttonName={"reset"}/>
                        {/*<ResetButton reset={reset} disabledReset={disabledReset}/>*/}
                    </div>
                </div>
            </div>


        </div>
    );
}

export default App;
