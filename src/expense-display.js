import React, { Component } from 'react';
import Expense from './expense';

class ExpenseDisplay extends Component {

    constructor(props) {
        super(props);
        this.renderExpenses = this.renderExpenses.bind(this);
    }

    renderExpenses() {
        return this.props.expenses.map((expense, index) =>
            <li key={index}>
                <Expense {...expense} deleteExpense={this.props.deleteExpense.bind(index)} />
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