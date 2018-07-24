import React, { Component } from 'react';
import ExpenseForm from './expense-form';

class Expense extends Component {
    constructor(props) {
        super(props);
        this.displayEditExpense = this.displayEditExpense.bind(this);
        // this.onBtnClick = this.onBtnClick.bind(this);
        this.state = { displayEdit: false };

        console.log(this.state);
    }

    displayEditExpense = () => {
        this.setState({ displayEdit: true });
    }

    editExpense = (expense) => {
        this.setState({ displayEdit: false });
        this.props.editExpense(expense);
    }

    render() {
        return (
            <div>
                ${this.props.amt}, {this.props.cat}, {this.props.descr}
                <button type="button" className="btn btn-danger" onClick={this.props.deleteExpense}>Remove</button>
                <button type="button" className="btn" onClick={this.displayEditExpense}>Edit</button>
                { this.state.displayEdit &&
                    <ExpenseForm
                        index={this.props.index}
                        amtVal={this.props.amt}
                        catVal={this.props.cat}
                        descrVal={this.props.descr}
                        buttonText="Change"
                        onBtnClick={this.props.editExpense}
                    />
                }
            </div>
        );
    }
}

export default Expense;
