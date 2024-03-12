
import React from 'react';

function TaskList(props) {
  return (
    <li className="flex items-center justify-between bg-gray-500 text-white p-4 mb-4 rounded-md">
      <span>{props.item}</span>
      <button
        className="bg-red-500 px-4 py-2 rounded-md ml-2 text-white text-lg"
        onClick={(event) => {
          props.deleteItem(props.index);
        }}
      >Delete Task
      </button>
    </li>
  );
}

export default TaskList;
