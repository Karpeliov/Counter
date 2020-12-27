import React from 'react';

type DisplayPropsType = {
    number: number
    maxValue: number
    error: boolean
    isSetting: boolean
}

export function Display(props: DisplayPropsType) {
    return (
        <div>

            {(!props.error && !props.isSetting) &&
            < div className={props.number === props.maxValue ? "red" : "Display"}>
                {props.number}
            </div>}

            {(props.error) &&
            <div className={"error"}>"Incorrect value!"</div>}

            {props.isSetting && !props.error &&
            <div className={"error"}>"press 'set' for count"</div>}

        </div>)
}

// !props.error
//
// < div
// className = {props.number === props.maxValue ? "red" : "Display"} >
//     {props.number}
// </div>
//
// props.isSetting ? <div className={"error"}>"press 'set' for count"</div>
//
// <div className={"error"}>"Incorrect value!"</div> }
