import { Typography } from "@material-ui/core";
import { IToDoItem } from "../toDoItems/ToDoItemComponent";

export const TableCellStyle = { border: "2px solid #e5e5e5" };

export const MyNewTitle = ({ text = "Table Title" }) => (
  <Typography style={{ fontWeight: "bold", fontSize: "26px" }}>
    {text}
  </Typography>
);

export const EmptyToDoItem = (): IToDoItem => {
  return {
    id: Date.now(),
    title: "",
    text: "",
    done: false,
  };
};
