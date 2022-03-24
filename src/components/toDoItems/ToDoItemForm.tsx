import React, { useEffect, useState } from "react";
import { EmptyToDoItem } from "../utils/Helper";
import { IToDoItem } from "./ToDoItemComponent";

interface IToDoItemForm {
  item: IToDoItem | null;
  onUpsert: (item: IToDoItem) => void;
}

const ToDoItemForm = ({ onUpsert, item }: IToDoItemForm) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newItem: IToDoItem = {
      ...(item || EmptyToDoItem()),
      title,
      text,
    };

    onUpsert(newItem);
  };

  useEffect(() => {
    setTitle(item?.title || "");
    setText(item?.text || "");
  }, [item]);

  return (
    <form onSubmit={handleSubmit}>
      <label>Title: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <label>Text: </label>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <br />
      <input type="submit" value="Add" />
    </form>
  );
};

export default ToDoItemForm;
