import React, { Component } from 'react';
import Expense from './expense';

class ExpenseDisplay extends Component {

    renderExpenses = () => {
        return this.props.expenses.map((expense, index) =>
            <li key={index}>
                <Expense
                    {...expense}
                    index={index}
                    deleteExpense={this.props.deleteExpense.bind(index)}
                    editExpense={this.props.editExpense} />
            </li>);
    }

    render() {
        return (
            <ul>
                {this.renderExpenses()}
            </ul>
        );
    }
}

export default ExpenseDisplay;