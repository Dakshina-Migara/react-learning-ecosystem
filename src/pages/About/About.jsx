
import React, { useEffect, useState } from 'react';
import './About.css';
import Button from '../../common/component/Button/Button';

export default function About() {

    // useState eka
    const [count, setCount] = useState(0);

    // useEffect eka
    useEffect(() => {
        console.log(count);
    }, [count]);


    return (
        <div>
            <h1>About</h1>

            <Button btnName={"Button 1"} color={"red"} onClick={() => setCount(count + 1)} />

            <h1>{count}</h1>

            <Button btnName={"Button 2"} color={"green"} onClick={() => setCount(count - 1)} />

        </div>
    )
}
