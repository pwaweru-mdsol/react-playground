import {
  addExpense,
  editExpense,
  removeExpense
} from "../../src/actions/expenses.js";
import uuid from "uuid/v4";

describe("expense actions", () => {
  it('should call addExpense with "ADD_EXPENSE" and "expense" payload', () => {
    const expenseData = {
      description: "test",
      note: "",
      amount: "44",
      createdAt: "2312213"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        ...expenseData,
        uuid: expect.any(String)
      }
    });
  });

  it('should call addExpense with "ADD_EXPENSE" and "expense" payload with default values', () => {
    const expenseData = { description: "", note: "", amount: 0, createdAt: 0 };
    const action = addExpense();
    expect(action).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        ...expenseData,
        uuid: expect.any(String)
      }
    });
  });

  it('should call editExpense with "EDIT_EXPENSE", "uuid" and "expense" payload', () => {
    const expenseUuid = uuid();
    const expense = {
      uuid: expenseUuid,
      description: "test",
      amount: "44",
      createdAt: "2312213"
    };
    const action = editExpense(expenseUuid, expense);
    expect(action).toEqual({
      type: "EDIT_EXPENSE",
      uuid: expenseUuid,
      expense
    });
  });

  it('should call removeExpense with "REMOVE_EXPENSE" and "uuid" payload', () => {
    const expenseUUID = uuid();
    const action = removeExpense(expenseUUID);
    expect(action).toEqual({
      type: "REMOVE_EXPENSE",
      uuid: expenseUUID
    });
  });
});
