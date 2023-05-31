import React, { useState } from 'react'

const Increment = () => {
    const [count, setCount] = useState(0)

    const handleUpButton = () => {
        setCount(prev => prev + 1)
    }
    const handleDownButton = () => {
        setCount(prev => prev - 1)
    }
    const handleRightButton = () => {
        setCount(prev => prev + 10)
    }
    const handleLeftButton = () => {
        setCount(prev => prev - 10)
    }

    return (
        <div className='container'>
            <h1>count: {count}</h1>
            <button className='button-up' onClick={handleUpButton}>➡️</button>
            <div>
                <button className='button-left' onClick={handleLeftButton}>➡️</button>
                <button className='button-right' onClick={handleRightButton}>➡️</button>
            </div>
            <button className='button-down' onClick={handleDownButton}>➡️</button>
        </div>
    )
}

export default Increment