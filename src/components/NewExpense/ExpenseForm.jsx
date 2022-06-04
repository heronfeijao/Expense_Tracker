import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // *---*---* ALTERNATIVE APPROACH *---*---*
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  // const titleChangeHandler = (e) => {
  //   setUserInput((prev) => ({ ...prev, enteredTitle: e.target.value }));
  // };

  // const amountChangeHandler = (e) => {
  //   setUserInput((prev) => ({ ...prev, enteredAmount: e.target.value }));
  // };
  // const dateChangeHandler = (e) => {
  //   setUserInput((prev) => ({ ...prev, enteredDate: e.target.value }));
  // };

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(`${enteredDate}`),
    };
    //Passing the data UP to NewExpense component
    props.onSaveExpenseData(expenseData);

    // Clearing out forms
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
