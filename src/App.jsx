
import { useState } from 'react';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import SearchBar from './Components/Search';

function App() {
  const [tasklist, setTaskList] = useState([]);
  const [searchTask, setsearchTask] = useState('');

  const addList = (inputText) => {
    if (inputText !== '') setTaskList([...tasklist, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...tasklist];
    newListTodo.splice(key, 1);
    setTaskList([...newListTodo]);
  };

  const filteredList = tasklist.filter(
    (item) => item.toLowerCase().includes(searchTask.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-4">
      <AddTask addList={addList} />
      <h1 className="text-3xl text-center mb-4">Tasks</h1>
      <SearchBar handleSearch={setsearchTask} />
      {filteredList.map((listItem, i) => (
        <TaskList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
      ))}
    </div>
  );
}

export default App;
