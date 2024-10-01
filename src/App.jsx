import { useState } from 'react'
import './App.css'
import styled from "styled-components"
import StartGame from './Components/StartGame'
import GamePlay from './Components/GamePlay';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev)
  }
  return (
    <>
      {
        isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />
      }

    </>
  )
}

export default App

const Button = styled.button`
background-color: red;
color: white;
width: 100px;
cursor: pointer;
height: 30px;
`