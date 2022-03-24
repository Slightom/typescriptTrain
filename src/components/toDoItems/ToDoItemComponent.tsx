import React from "react";

export interface IToDoItem {
  id: number;
  title: string;
  text: string;
  done: boolean;
}

interface IToDoItemComponent {
  item: IToDoItem;
}

const ToDoItemComponent = ({ item }: IToDoItemComponent) => {
  const { title, text, id } = item;

  return (
    <>
      <h2>
        {id} {title}
      </h2>
      <p>{text}</p>
    </>
  );
};

export default ToDoItemComponent;
