import React, { useState, useEffect } from 'react'
import './dicestyles.css'

export const DiceRoll = () => {
    const [dice, setDice] = useState(0);
    const [diceLog, setDicelog] = useState([]);
    let maxNumber = 6;
    let minNumber = 0;
    const diceArray = ['./dice1.png', './dice2.png', './dice3.png', './dice4.png', './dice5.png', './dice6.png']
    
    const rollDice = () => { setDice(Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)) }
    useEffect(() => { setDicelog(diceLog => diceLog.concat('You rolled a ' + (dice + 1))); }, [dice]);
    const removefirstLog = () => { diceLog.shift() }
    const clearLog = () => { setDicelog([]) }
    if (diceLog.length === 8) { removefirstLog(); }
    let currentDice = diceArray[dice]

    return (
        <div>
            <img class="dice" src={currentDice} alt={currentDice} />
            {diceLog.map((item) =>{
                return <li>{item}</li>
            })}
            <button onClick={rollDice}>Roll dice</button>
            <button onClick={clearLog}>Clear log</button>
        </div>
    )  
}