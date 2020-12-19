import React from 'react';

type DisplayPropsType = {
    number: number
    // red: boolean
    maxValue: number

}

export function Display(props: DisplayPropsType) {
    return (
        <div className={props.number === props.maxValue ? "red" : "Display"}>{props.number}</div>)
}