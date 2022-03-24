import { Button, Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { IToDoItem } from "./ToDoItemComponent";
import ToDoItemForm from "./ToDoItemForm";
import ToDoItemsList from "./ToDoItemsList";

const initialItems: Array<IToDoItem> = [
  {
    id: 0,
    title: "make initial app",
    text: "make basic app with contexts, materialUi, tests to train this approaches",
    done: false,
  },
  {
    id: 1,
    title: "read typescript book",
    text: "read two chapters of typescript book",
    done: false,
  },
  {
    id: 2,
    title: "prepare dinner",
    text: "prepare suprise-dinner with candles, wine, spaghetti",
    done: true,
  },
  {
    id: 3,
    title: "help dad",
    text: "visit dad and help him with tasks",
    done: true,
  },
];

const ToDoItemsPage = () => {
  const [items, setItems] = useState<Array<IToDoItem>>(initialItems);
  const [item, setItem] = useState<IToDoItem | null>(null);

  const onDelete = (id: number) => {
    debugger;
    const newItems = Object.values(items).filter((i) => i.id !== id);
    setItems(newItems);
  };

  const onDoubleClick = (id: number) => {
    const newItems = Object.values(items).map((i) =>
      i.id === id ? { ...i, done: !i.done } : i
    );
    setItems(newItems);
  };

  const onEditClick = (id: number) => {
    const selectedItem = Object.values(items).find((i) => i.id === id) || null;
    setItem(selectedItem);
  };

  const onUpsert = (item: IToDoItem) => {
    const editingItem = Object.values(items).find((i) => i.id === item.id);

    const newItems = editingItem
      ? Object.values(items).map((i) => (i.id === item.id ? item : i))
      : [...items, item];

    setItems(newItems);
    setItem(null);
  };

  return (
    <>
      <Grid container spacing={2} style={{ margin: "20px" }}>
        <Grid item xs={8}>
          <ToDoItemsList
            todos={items}
            onDelete={onDelete}
            onDoubleClick={onDoubleClick}
            onEditClick={onEditClick}
          />
        </Grid>
        <Grid item xs={4}>
          <ToDoItemForm item={item} onUpsert={onUpsert} />
        </Grid>
      </Grid>
    </>
  );
};

export default ToDoItemsPage;
