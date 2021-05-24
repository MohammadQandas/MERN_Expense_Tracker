import React,{ useContext }  from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
const {transactions} =useContext(GlobalContext)
const amount=transactions.map((transaction)=>transaction.amount)
const balance=amount.reduce((acc,item) => (acc+=item),0).toFixed(2)
    return (
        <>
            <h4>Your Balance</h4>
            <h3>${balance}</h3>
        </>
    )
}

export default Balance
