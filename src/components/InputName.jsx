import React, { useState } from 'react'

export default function InputName() {
    const [value , setValue] = useState("")
    return (
        <div>
            Enter Your Name
            <input type="text" onChange={(event)=>setValue(event.target.value)}/>
            <div>
                {value}
            </div>
            <div>
                {value == "mitanshu" ? <div>Hello Boss!</div> : <div>N Not Found</div>}
            </div>
        </div>
    )
}
