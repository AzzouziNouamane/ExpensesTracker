import React from 'react'

export const BalanceTab = () => {
    const incomeValue = 500.00;
    const expenseValue = 431.00;
    return (
        <div className = "balanceContainer">
        <div className = "balanceGrid">
            <div id="incomeGrid">
                <h3>INCOME</h3>
                <p id="income">+${incomeValue}</p>
            </div>
            <div id="verticalLine"> </div>
            

            <div id="expenseGrid">
                <h3>EXPENSE</h3>
                <p id="expense">-${expenseValue}</p>
            </div>
        </div>
        </div>

    )
}
