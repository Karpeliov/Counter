import React from 'react';

type ResetButtonPropsType = {
    reset: () => void
    disabledReset: boolean
}

export function ResetButton(props: ResetButtonPropsType) {
    return (
        <button onClick={() => props.reset()} disabled={props.disabledReset} className={"Button1"}>reset</button>
    )
}