import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  let todos;
  let toggleTodoMock;
  let deleteTodoMock;

  beforeEach(() => {
    todos = [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Build a Todo App", completed: false },
    ];
    toggleTodoMock = jest.fn();
    deleteTodoMock = jest.fn();
  });

  test("renders initial todos", () => {
    render(<TodoList todos={todos} toggleTodo={toggleTodoMock} deleteTodo={deleteTodoMock} />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList todos={todos} toggleTodo={toggleTodoMock} deleteTodo={deleteTodoMock} />);
    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);
    expect(toggleTodoMock).toHaveBeenCalledWith(1);
  });

  test("deletes a todo", () => {
    render(<TodoList todos={todos} toggleTodo={toggleTodoMock} deleteTodo={deleteTodoMock} />);
    const deleteButton = screen.getAllByText("Delete")[0];

    fireEvent.click(deleteButton);
    expect(deleteTodoMock).toHaveBeenCalledWith(1);
  });
});
