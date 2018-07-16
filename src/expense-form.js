import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SingleInput from './single-input';

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.changeExpense = this.changeExpense.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
        this.state = { amt: 0, cat: "", descr: "" };

        console.log(this.state);
    }

    changeExpense(e){
        this.setState({[e.target.id]:e.target.value});
        //e.target.id <-- the element id (which matches our state)
        //e.target.value <-- the element value
        //[e.target.id] <-- is the way to define a dynamic var name
    }

    onBtnClick(){
        this.props.addExpense(this.state);
        this.setState({ amt: 0, cat: '', descr: '' });
    }

    render() {
        return (
            <div>
               <form>
                    <SingleInput id="amt" type="number" placeholder="$" content={this.state.amt} controlFunc={this.changeExpense}/>
                    <SingleInput id="cat" type="text" placeholder="Category" content={this.state.cat} controlFunc={this.changeExpense}/>
                    <SingleInput id="descr" type="text" placeholder="Description" content={this.state.descr} controlFunc={this.changeExpense}/>
                    <button type="button" onClick={this.onBtnClick}>Add Expense</button>
               </form>
            </div>
        );
    }
}

export default ExpenseForm;

// SingleInput.propTypes = {
//     onChange: PropTypes.func.isRequired,
//     title: PropTypes.string,
//     type: PropTypes.string,
//     placeholder: PropTypes.string,
//     value: PropTypes.string,
//     id: PropTypes.number
//   };



//