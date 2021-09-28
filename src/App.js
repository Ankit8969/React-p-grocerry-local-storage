import React, { useState, useEffect } from "react";
import List from "./List";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) return JSON.parse(localStorage.getItem("list"));
  else
    return [
      "Today, you have to go meeting",
      "Tomorrow, you have to go with your Friend!",
      "Buy a new Laptop",
      "You owned a car?",
    ];
};

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [edit, setEdit] = useState(false);
  const [label, setLabel] = useState("Submit");
  const [currInd, setCurrInd] = useState(0);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    /*I used stringfy because we only store string in our server that's the reason */
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      let arr = [...list];
      arr[currInd] = name;
      setList(arr);
      setEdit(false);
    } else {
      setList([...list, name]);
    }
    setLabel("Submit");
    setName("");
    setDisable(false);
  };

  const handleDelete = (data) => {
    const arr = list.filter((item) => item !== data);
    setList(arr);
  };

  const handleEdit = (item, ind) => {
    setName(item);
    setEdit(true);
    setCurrInd(ind);
    setLabel("Edit");
    setDisable(true);
  };

  return (
    <div className="box">
      <div className="add-items">
        <h1>Grocery Bud</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="work"
            value={name}
            autoComplete="off"
            required
            placeholder="e.g.eggs"
            onChange={(e) => setName(e.target.value)}
          />
          <button>{label}</button>
        </form>
      </div>

      <article>
        <List
          list={list}
          onDelete={handleDelete}
          onEdit={handleEdit}
          disable={disable}
        />
      </article>
    </div>
  );
};

export default App;
