import react, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [showForm, setShowForm] = useState("hide");

  const formStateShow = () => {
    setShowForm("show");
  };

  const formStateHide = () => {
    setShowForm("hide");
  };

  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHanlder = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHanlder = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHanlder = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHanlder = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData.date);
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <div>
      {showForm == "hide" ? (
        <button onClick={formStateShow}>Add New Expenses</button>
      ) : (
        <form onSubmit={submitHanlder}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                onChange={titleChangeHanlder}
                value={enteredTitle}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHanlder}
                value={enteredAmount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2010-01-01"
                max="2050-12-31"
                onChange={dateChangeHanlder}
                value={enteredDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={formStateHide}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
