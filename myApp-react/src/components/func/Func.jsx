import React, { useState } from 'react'
import { Button, message } from 'antd'

export default function Funcc() {
    const [state, setstate] = useState(0)
    // this.add = () => {
    //     let count = setstate(state + 1)
    //     message.info('+', count)
    // }
    // this.reduce = () => {
    //     let count = setstate(state - 1);
    //     message.info('-', count)
    // }
    return (
        <div>
            <p>{state}</p>
            <Button onClick={() => setstate(state + 1)}>点击+1</Button>
            <Button onClick={() => setstate(state - 1)}>点击-1</Button>
        </div>
    )
}
