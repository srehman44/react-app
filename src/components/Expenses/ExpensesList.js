import react from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  return (
    <div>
      {props.items
        .filter((expense) =>
          props.YS == null ? expense : expense.date.getFullYear() === props.YS
        )
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
    </div>
  );
};

export default ExpensesList;
