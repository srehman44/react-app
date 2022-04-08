import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const changeOfYear = (event) => {
    props.onYearSelection(event.target.value);
  };

  const listOfYear = props.items.map((item) => item.date.getFullYear());
  const distinctYears = [...new Set(listOfYear)];

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={changeOfYear}>
          <option key="99" value="N">
            All Years
          </option>
          {distinctYears.map((expense) => (
            <option value={expense}>{expense}</option>
          ))}
          {/* <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option> */}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
