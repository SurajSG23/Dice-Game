import React, { useState } from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("")
    const [showRules,setShowRules]=useState(false)

    const randomNumber = () => {
        return Math.floor(Math.random() * 6 + 1)
    }
    const rollDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number")
            return
        }
        setError("")
        const randNumber = randomNumber();
        setCurrentDice(randNumber);
        if (selectedNumber == randNumber) {
            setScore(prev => prev + randNumber)
        }
        else if(score-2<=0){
            setScore(0)
        }
        else {
            setScore(prev => prev - 2);

        }
        setSelectedNumber(undefined)
    }
    return (
        <>
            <Main>
                <TotalScore score={score}/>
                <NumberSelector error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
            </Main>
            <Body>
                <RollDice currentDice={currentDice} rollDice={rollDice} setScore={setScore} setShowRules={setShowRules} showRules={showRules}/>
            </Body>
        </>
    )
}
export default GamePlay

const Main = styled.div`
    padding-top:20px ;
    max-width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content:space-between;
`
const Body = styled.div`
display: flex;
justify-content:center;
align-items: center;
height: 77vh;
max-width: 100%;
`