import React, { useState } from 'react'
import styled from 'styled-components'
import Rules from './Rules'
const RollDice = ({ rollDice, currentDice, setScore, setShowRules, showRules }) => {
    const resetScore = () => {
        setScore(0)
    }
    const displayRules = () => {
        setShowRules(true)
        setTimeout(() => {
            setShowRules(false)
        }, 10000)
    }

    return (
        <>
            <Body>
                <div className='dice' onClick={rollDice} >
                    <img src={`./src/assets/dice_${currentDice}.png`} alt="" />
                </div>
                <p>Click on the dice to roll</p>
                <Tail>
                    <button className='reset' onClick={() => { resetScore() }}>Reset Score</button>
                    <button className='rules' onClick={() => displayRules()}>Show Rules</button>

                </Tail>
            </Body>
            <div>
                {showRules && <Rules />}
            </div>
        </>
    )
}
export default RollDice

const Body = styled.div`
    width: 250px;
    height: 450px;
    margin: 0 auto;

    img{
        width :250px ;
        height: 250px;
    }
   
    p{
        font-size: 20px;
        text-align: center;
        font-weight: 700;
    }
    .dice{
        cursor: pointer;
    }
    
`
const Tail = styled.div`
    position:absolute;
    display: flex;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    width: inherit;
    height: 21vh;
    border-radius: 4px;
    button{
        width: 100%;
        height: 44px;
        cursor: pointer;
        border-radius: 4px;
    }
    button:active{
        transform: scale(0.98);
    }
    .reset{
        background-color: white;
        font-size: 16px;
        font-weight: bold;
        color: black;
    }
    .rules{
        background-color: black;
        font-size: 16px;
        font-weight: bold;
        color: white;
    }
    
`



