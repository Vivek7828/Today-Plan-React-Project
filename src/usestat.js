import React,{ useState } from 'react';

export default function Hell() {
    const [name, setName] = useState("Vivek")
    const [roll, setRoll] = useState(105)
    const handleClick = () => {
        setName("Jyoti")
        setRoll(151)
    }
    return (
        <>
            <h1> Hello: {name} </h1>
            <h1> roll: {roll} </h1>
            <button type="button" onClick={handleClick}> Click Me</button>
                
        </>
    )
}
