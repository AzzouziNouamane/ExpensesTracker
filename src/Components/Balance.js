import React from 'react'

export const Balance = () => {
    const balanceValue = 260.00;
    return (
        <div className = "balance">
            <h4>Your balance : </h4>
            <h1> ${balanceValue} </h1>
        </div>
    )
}
