import React, { Component } from 'react';

class Expense extends Component {
    render() {
        return (
            <div>
                ${this.props.amt}, {this.props.cat}, {this.props.descr}
                <button type="button" className="btn btn-danger" onClick={this.props.deleteExpense}>Remove</button>
            </div>
        );
    }
}

export default Expense;
