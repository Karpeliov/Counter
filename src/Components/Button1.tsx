import React from 'react';

type Button1PropsType = {
    onClick: () => void
    disabled1: boolean
    buttonName: string
}

export function Button1(props: Button1PropsType) {

    return (
        <button onClick={() => props.onClick()} className={"Button1"}
                disabled={props.disabled1}>{props.buttonName} </button>
    )
}