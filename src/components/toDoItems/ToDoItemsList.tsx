import { Checkbox } from "@material-ui/core";
import MaterialTable, { MTableBodyRow } from "material-table";
import React, { useState } from "react";
import ToDoItem, { IToDoItem } from "./ToDoItemComponent";

interface IToDoItemsList {
  todos: IToDoItem[];
  onDelete: (key: number) => void;
  onDoubleClick: (key: number) => void;
  onEditClick: (key: number) => void;
}

const ToDoItemsList = ({
  todos,
  onDelete,
  onDoubleClick,
  onEditClick,
}: IToDoItemsList) => {
  const [filter, setFilter] = useState(false);

  const columns = [
    {
      title: "Info",
      field: "text",
      render: (rowdata: IToDoItem) => (
        <>
          <p style={{ margin: 0, textDecoration: "underline" }}>
            <b>{rowdata.title}</b>
          </p>
          <span>{rowdata.text}</span>
        </>
      ),
    },
    {
      title: "Done?",
      field: "done",
      render: (rowdata: IToDoItem) => (
        <>
          <Checkbox disabled={true} checked={rowdata.done} />
        </>
      ),
      width: "10%",
    },
  ];

  const options = {
    actionsColumnIndex: -1,
    search: true,
    paging: true,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20, 50, 100],
    sorting: true,
    maxBodyHeight: "440px",
    width: "100%",
    filtering: filter,
    headerStyle: {
      backgroundColor: "#bfbfbf",
      fontWeight: "bold",
      borderRight: "2px solid #e5e5e5",
    },
    rowStyle: () => {
      return {
        border: "2px solid #e5e5e5",
      };
    },
  };

  const actions = [
    {
      icon: "filter",
      tooltip: "Show/Hide filters",
      isFreeAction: true,
      onClick: (event: any) => {
        setFilter(!filter);
      },
    },
    (rowData: IToDoItem) => ({
      icon: "delete",
      tooltip: "delete item",
      isFreeAction: false,
      onClick: (event: any) => {
        onDelete(rowData.id);
      },
    }),

    (rowData: IToDoItem) => ({
      icon: "edit",
      tooltip: "edit item",
      isFreeAction: false,
      onClick: (event: any) => {
        onEditClick(rowData.id);
      },
    }),
  ];

  const components = {
    Row: (props: any) => (
      <MTableBodyRow
        {...props}
        onDoubleClick={(e: any) => {
          onDoubleClick(props.data.id);
        }}
      />
    ),
  };

  return (
    <MaterialTable
      title={"ToDoList"}
      data={todos}
      columns={columns}
      options={options}
      actions={actions}
      components={components}
    />
  );
};

export default ToDoItemsList;
