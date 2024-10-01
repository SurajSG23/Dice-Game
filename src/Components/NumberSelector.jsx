import React, { useState } from 'react'
import styled from "styled-components"
const NumberSelector = (props) => {

    const array = [1, 2, 3, 4, 5, 6];
    const numberSelector=(value)=>{
        props.setSelectedNumber(value)
    }

    return (
        <Main>
             <p>{props.error}</p>
            <Container>
                {
                    array.map((value, i) => <Box isSelected={value === props.selectedNumber} key={i} onClick={() => numberSelector(value)}>{value}</Box>)
                }
            </Container>
            <h2>Select Number</h2>
        </Main>
    )
}

export default NumberSelector

const Main = styled.div`
    max-width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    h2{
        position: absolute;
        bottom: 0;
        right: 0;
    }
    p{
        position: absolute;
        color: red;
        right: 0;
    }
`

const Container = styled.div`
    display: flex;
    gap: 24px;
    height: 150px;
    align-items: center;

`
const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 2px solid black;
    text-align: center;
    align-content: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 4px;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};
    &:hover{
        transform: scale(1.03);
    }
`