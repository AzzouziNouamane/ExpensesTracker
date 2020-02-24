import React from 'react'
import {Transaction} from './Transaction'

export const History = () => {
    return (
        <div>
            <h4>Your History : </h4>
            <ul className = "historyContainer">
                <li className = "transactionElement">
                    Cash <span>+4000$</span> <button className = "deleteBtn">x</button>
                </li>

                <li className = "transactionElement">
                    Resto'U <span>+3.3$</span> <button className = "deleteBtn">x</button>
                </li>
            </ul>
            </div>
    )
}
