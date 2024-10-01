import React from 'react'
import styled from "styled-components"
export default function StartGame(props) {
    return (
        <Container>
            <img src="./src/assets/dicesMain.png" alt="" />
            <div className='Containt'>
                <h1>DICE GAME</h1>
                <Button onClick={props.toggle}>Play Now</Button>
            </div>

        </Container>
    )
}

const Container = styled.div`   
    position: relative;
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
        .Containt{
            position: relative;
            max-width: 522px;
            height:auto;
        }
        .Containt h1{
            font-size: 96px;
            white-space: nowrap;
        }
        .Containt Button{
            position: absolute;
            right: 0px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.2s ease-in-out;
            font-weight: bold;
        }
        .Containt Button:hover{
            background-color: white;
            border: 1px solid black;
            color:black;
        }
        .Containt Button:active{
            transform: scale(0.95);
        }
`;

const Button = styled.button`
    background-color: black;
    color: white;
    min-width: 220px;
    height: 35px;
    border-radius: 3px;
`