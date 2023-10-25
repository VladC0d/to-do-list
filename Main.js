import React, { useState } from "react";

export default function Main() {
  const [taskname, settaskname] = useState("");
  const [tasklist, settasklist] = useState([]);
  const tasklistcontent = tasklist.map((task, i) => {
    return (
      <div className="galati">
        <p>{task}</p>
        <br />
        <i
          class="fa fa-trash del"
          aria-hidden="true"
          onClick={() => deletetask(i)}
        ></i>
      </div>
    );
  });
  function deletetask(i) {
    var duparray = [...tasklist];
    duparray.splice(i, 1);
    settasklist(duparray);
  }
  function addTask() {
    settasklist([...tasklist, taskname]);
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
          <h1>Lista </h1>
          <input
            type="text"
            placeholder="Enter task.."
            className="form-control"
            value={taskname}
            onChange={(e) => settaskname(e.target.value)}
          />
          <button className="btn btn-success" onClick={addTask}>
            <i class="fa fa-plus add" aria-hidden="true"></i>
          </button>
          <br />
          {tasklistcontent}
        </div>
      </div>
    </div>
  );
}
