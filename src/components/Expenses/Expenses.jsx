import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
  const { items } = props;

  // Passing the data UP (child -> parent)
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const itemsList = items.filter(
    (expense) => expense.date.getFullYear() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={itemsList} />
      </Card>
    </div>
  );
};

export default Expenses;
