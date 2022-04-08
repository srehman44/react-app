import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../Year/ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  // let year_list = props.items.map((item) => item.date.getFullYear());

  const [YS, newYS] = useState();

  // const [YS, newYS] = useState(
  //   props.items.map((item) => item.date.getFullYear())
  // );
  // console.log(YS);
  const yearSelection = (selectedYear) => {
    if (selectedYear == "N") {
      newYS();
    } else {
      newYS(parseInt(selectedYear, 10));
      console.log(YS);
    }
  };

  return (
    <Card className="expenses">
      <ExpensesFilter items={props.items} onYearSelection={yearSelection} />
      {/* {props.items
        .filter((expense) =>
          YS == null ? expense : expense.date.getFullYear() === YS
        )
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))} */}
      <ExpensesList YS={YS} items={props.items} />
    </Card>
  );
};

export default Expenses;
