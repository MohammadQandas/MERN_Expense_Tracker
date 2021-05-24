import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeEpenses = () => {
    const {transactions}=useContext(GlobalContext)
    const money=transactions.map((transaction) => (transaction.amount))
    const income=money.filter((transaction)=>transaction >0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const expense=(money.filter((transaction)=>transaction <0).reduce((acc,item)=>(acc+=item),0*-1).toFixed(2))

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p  className="money plus">${income}</p>

            </div>
            <div>
                <h4>Expense</h4>
                <p  className="money minus">${expense}</p>

            </div>
        </div>
    )
}

export default IncomeEpenses
