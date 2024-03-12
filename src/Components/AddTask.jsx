import React, { useState } from 'react';

function AddTask(props) {
  const [inputTask, setInputTask] = useState('');

  return (
    <div className="text-3xl text-center text-black my-4">
      <h1>TaskList</h1>
      <input
        type="text"
        className="my-4 rounded-md px-5 outline-none py-2 text-2xl"
        placeholder="Enter Your Task"
        value={inputTask}
        onChange={(event) => setInputTask(event.target.value)}
      />
      <button
        className="bg-orange-700 px-5 py-2 rounded-md mx-2 text-2xl"
        onClick={() => {
          props.addList(inputTask);
          setInputTask('');
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;