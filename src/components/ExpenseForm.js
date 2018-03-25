import React, { Component } from "react";

export class ExpenseForm extends Component {
  state = {
    description: "",
    note: "",
    amount: ""
  };

  onDescriptionChange = event => {
    const description = event.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = event => {
    const note = event.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = event => {
    const amount = event.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note for your exepnse (optional)"
            onChange={this.onNoteChange}
          />
          <button>Submit Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
