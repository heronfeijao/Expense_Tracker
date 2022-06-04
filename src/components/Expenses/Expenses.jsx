import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
  const { items } = props;

  // Passing the data UP (child -> parent)
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // const itemsList = items
  //   .map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))
  //   .filter((exp) => exp.props.date.getFullYear() === filteredYear);

  const itemsList = items
    .filter((expense) => expense.date.getFullYear() === filteredYear)
    .map((filteredExpense) => (
      <ExpenseItem
        key={filteredExpense.id}
        title={filteredExpense.title}
        amount={filteredExpense.amount}
        date={filteredExpense.date}
      />
    ));

  const expensesContent =
    itemsList.length === 0 ? <p>No expenses found.</p> : itemsList;

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />{" "}
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
