import React, { useState } from "react";
import "./EditModal.css";
const EditModal = (props) => {
  let [item, setItem] = useState(props.editTodo);
  function handleEditTodo(e) {
    let newObj = { ...item };
    newObj.task = e.target.value;
    setItem(newObj);
  }
  function handleSaveTodo() {
    props.handleSave(item);
  }
  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button onClick={props.handleCloseModal}>&times;</button>
        </div>
        <input
          type="text"
          onChange={handleEditTodo}
          value={item.task}
          className="inp-edit"
        />
        <button onClick={handleSaveTodo}>save</button>
      </div>
    </div>
  );
};

export default EditModal;
