import React from 'react'
import styled from 'styled-components'
const TotalScore = (props) => {
    
    return (
        <Score>
            <h1>{props.score}</h1>
            <p>Total Score</p>
        </Score>
    )
}

export default TotalScore

const Score = styled.div`
    max-width: 200px;
    text-align: center;
    h1{
        font-size: 100px;
        line-height: 100px;
    }
    p{
        font-size: 24px;
        font-weight: 500;
    }
`