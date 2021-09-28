import React, { useState } from "react";

const List = ({ list, onDelete, onEdit, disable }) => {
  const foredit = (item) => {
    if (!disable) {
      onDelete(item);
    }
  };

  return (
    <React.Fragment>
      {list.map((item, index) => (
        <div className="dummy" key={item}>
          <div className="text" value={item}>
            {item}
          </div>
          <div className="btn btn-group">
            <span>
              <i
                className="far fa-edit"
                onClick={() => onEdit(item, index)}
              ></i>
            </span>
            <span>
              <i className="far fa-trash-alt" onClick={() => foredit(item)}></i>
            </span>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default List;

/*
fa-smile
fa-trash-alt

*/
