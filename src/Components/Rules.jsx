import React from 'react'
import styled from 'styled-components'
const Rules = () => {
    return (
        <Rule>
            <h1>How to Play the game </h1>
            <ul>
            <li>Select a numer</li>
            <li>Click on the dice image</li>
            <li>If the selected number is same as dice number you will get same point as dice</li>
            <li>If the guess is wrong then 2 points is deducted</li>
            </ul>
            
        </Rule>
    )
}

export default Rules

const Rule = styled.div`

position: absolute;
width: 650px;
height: 250px;
border: 1px solid #656565;
right: 0px;
border-radius: 5px;
background-color: #FBF1F1;
margin: 10px;
bottom: 0;
h1{
    text-align: center;
}
ul{
    position: absolute;
    right: 0;
}
ul li{
   margin-bottom: 20px;
}

`
