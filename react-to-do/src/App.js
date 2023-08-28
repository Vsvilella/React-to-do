import './App.css';
import {useState, useEffect} from "react"
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from "react-icons/bs"

const API = "http://localhost:5000"

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState ([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('enviou');
  }

  return (
    <div className="App">
      <div className='todo-header'>
        <h1>React todo</h1>
      </div>
      <div className='form-todo'>
        <h2>Inseria sua próxima tarefa: </h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
          <label htmlFor='title'>O que você vai fazer?</label>
          <input type='text' name='title' placeholder='Título da Tarefa' 
            onChange={(e) => setTitle(e.target.value)} value={title || ""} required />
          </div>
          <input type='submit' value='enviar' />
        </form>
      </div>
      <div className='list-todo'>
        <h2>Lista de Tarefas</h2>
        {todos.length === 0 && <p>Não Há tarefas!</p>}
      </div>
    </div>
  );
}
export default App;
