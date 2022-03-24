import { render } from "@testing-library/react";
import React from "react";
import ToDoItemForm from "../toDoItems/ToDoItemForm";

test("render component", async () => {
  const { getByText } = render(
    <ToDoItemForm item={null} onUpsert={() => {}} />
  );

  expect(getByText(/Title/i)).toBeInTheDocument();
});
