import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ExpenseForm from './expense-form';
import ExpenseDisplay from './expense-display';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { expenses: [] };
    this.addExpense = this.addExpense.bind(this);

    console.log(this.state);
  }

  addExpense(expense) {
    this.setState({ expenses: this.state.expenses.concat(expense) }, () => {
      console.log('App: ', this.state.expenses)
    });
}
  render() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
    return (
      <div className="App">
          <ExpenseForm addExpense={this.addExpense} />
          <ExpenseDisplay expenses={this.state.expenses} />
      </div>
    );
  }
}

export default App;
