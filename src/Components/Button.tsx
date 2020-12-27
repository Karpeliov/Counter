import React from 'react';

type ButtonPropsType = {
    onClick: () => void
    disabled: boolean
    buttonName: string
}

export function Button(props: ButtonPropsType) {

    return (
        <button onClick={() => props.onClick()} className={"Button"}
                disabled={props.disabled}>{props.buttonName} </button>
    )
}