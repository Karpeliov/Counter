import React, {useEffect, useState} from 'react';
import './App.css';
import {Display} from "./Components/Display";
import {Button} from "./Components/Button";
import {Settings} from './Components/Settings';
import {restoreState} from "./LocalStorage/LocalStorage";


function App() {
    let disabled = false
    let disabledReset = true

    let [maxValue, setMaxValue] = useState<number>(6)
    let [startValue, setStartValue] = useState<number>(0)
    let [number, setNumber] = useState<number>(startValue)
    let [error, setError] = useState<boolean>(false)
    let [isSetting, setIsSetting] = useState<boolean>(false)



    function set(max: number, start: number) {
        setMaxValue(max)
        setStartValue(start)
        setNumber(start)
    }

    function increment() {
        if (number < maxValue) {
            return setNumber(number + 1)
        }
    }

    (number === maxValue) && (disabled = true);
    (number > 0) && (disabledReset = false)

    function reset() {
        return setNumber(startValue)
    }

    return (
        <div className="App">
            <div className={"App-main"}>
                <span className={"Container"}>
                    <div className={"settings_inputs"}>
                    <Settings set={set}
                              setValue={setMaxValue}
                              setError={setError} error={error}
                              setIsSetting={setIsSetting}/>
                    </div>
                </span>

                <span className={"Container"}>
                    <Display maxValue={maxValue} number={number} error={error} isSetting={isSetting}/>
                    <div className={"ButtonsContainer"}>
                        <Button onClick={increment} disabled={disabled} buttonName={"inc"}/>
                        <Button onClick={reset} disabled={disabledReset} buttonName={"reset"}/>
                    </div>
                </span>
            </div>



        </div>
    );
}

export default App;
