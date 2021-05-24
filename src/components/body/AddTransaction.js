import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const submit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: new Date().toLocaleString(),
      text,
      amount: Number(amount),
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };
  return (
    <div>
      <h3>AddTransaction</h3>
      <form onSubmit={submit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text ..."
            type="text"
          />
        </div>
        <div>
          <label></label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter text ..."
            type="number"
          />
        </div>

        <button className="btn">Add</button>
      </form>
    </div>
  );
};

export default AddTransaction;
