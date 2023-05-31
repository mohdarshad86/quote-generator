import React, { useState } from 'react'


const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

const GenerateQuote = () => {
    const [quote, setQuote] = useState('')

    const randomQuote = () => {
        const index = Math.floor(Math.random() * quotes.length)
        const quote = quotes[index]
        setQuote(quote);
    }

    return (
        <div className='container'>
            <h1> Random Quotes</h1>
            <button className='btn' onClick={randomQuote}>Generate Quote</button>
            <p>{quote}</p>
        </div>
    )
}

export default GenerateQuote