import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from './Button';
import {restoreState, saveState} from "../LocalStorage/LocalStorage";

type SettingsPropsType = {
    setValue: (max: number) => void
    set: (max: number, start: number) => void
    setError: (error: boolean) => void
    error: boolean
    setIsSetting: (error: boolean) => void
}

export function Settings(props: SettingsPropsType) {

    let [maxValue, setMaxValue] = useState<number>(5)
    let [startValue, setStartValue] = useState<number>(0)
    let [disabledSet, setDisabledSet] = useState<boolean>(true)
    let [restoredStart, setRestoredStart] = useState<boolean>(false)
    let [restoredMax, setRestoredMax] = useState<boolean>(false)


    const saveValue = (key: string, value: number) => {
        saveState<number>(key, value);
    };
    const restoreStartValue = () => {
        let savedValue = restoreState<number>("Start-Value", startValue)
        setStartValue(savedValue);
        setRestoredStart(true);
    };

    const restoreMaxValue = () => {
        let savedValue = restoreState<number>("Max-Value", maxValue)
        setMaxValue(savedValue);
        setRestoredMax(true);
    };

    !restoredStart && restoreStartValue()

    !restoredMax && restoreMaxValue()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let numberValue = parseInt(e.target.value)
        setMaxValue(numberValue)
        setDisabledSet(false)
        props.setIsSetting(true)
    }

    const onChangeHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
        let numberValue = parseInt(e.target.value)
        setStartValue(numberValue)
        setDisabledSet(false)
        props.setIsSetting(true)
    }

    const onSetClick = () => {
        props.set(maxValue, startValue)
        setDisabledSet(true)
        props.setIsSetting(false)
        saveValue("Start-Value", startValue)
        saveValue("Max-Value", maxValue)

    }

    if (maxValue < 0 || startValue < 0 || maxValue <= startValue) {
        disabledSet = true
        props.setError(true)

    } else {

        props.setError(false)
    }


    return (
        <div>

            Max value: <input type={"number"}
                              value={maxValue}
                              onChange={onChangeHandler}
                              className={props.error ? "red_input" : ""}
        />

            Start value: <input type={"number"}
                                value={startValue}
                                onChange={onChangeHandler1}
                                className={props.error ? "red_input" : ""}
        />
            <div className={"ButtonsContainer"}>
                <Button onClick={onSetClick} disabled={disabledSet} buttonName={"set"}/>
                {/*<Button onClick={restoreStartValue} disabled={false} buttonName={"load"}/>*/}
                {/*<Button onClick={restoreMaxValue} disabled={false} buttonName={"load"}/>*/}

            </div>


        </div>


    )

}