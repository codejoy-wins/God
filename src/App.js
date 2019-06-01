import React, { useState } from 'react';
import jordan from './imgz/Peterson.jpg';
import adam from './imgz/adam.jpg';
import alan from './imgz/watts.png';
import asha from './imgz/asha-timeless.jpg';
import good from './imgz/Nietzsche.jpg';
import sad from './imgz/god.jpg';
import jesus from './imgz/jesus.jpg';

import './App.css';

// to adjust responsiveness of text i can create a variable like .7 and then hmmm
// can you reorder the list?
// can you click a div without overriding children onclicks?


// fancy destructuring of props
function Todo({ todo, index, completeTodo, deleteTodo, highlightTodo }) {
  return (

    <div style={{textDecoration: todo.isCompleted ? 'line-through' : '', color: todo.isHighlighted ? 'blue' : 'black'}} className="todo">
      {todo.text}
      <div >
        <button onClick={()=> completeTodo(index)}>Complete</button>
        <button onClick={()=> deleteTodo(index)}>x</button>
      </div>
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, magic] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    if(value.length<2) return;
    addTodo(value);
    magic('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" placeholder="Add Todo..." value={value} onChange={e => magic(e.target.value)}></input>
    </form>
  )
}



// Todo alternate structures:

// no destructuring
function Xp(props){
  return(
    <div>XP{props.todo.text}</div>
  )
}
// some
function Xxp(props){
  const { todo } = props;
  return(
    <div>XXP{todo.text}</div>
  )
}

// more

function Xxxp({todo}){
  return <div>mage {todo.text}</div>
}
// most

function Xxxxp({todo, index, key}){
  return <div>mage {index}{todo.text}{key}</div>
}

//   MAIN APPLICATION 

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Treat others how you want to be treated',
      isCompleted: false,
      isHighlighted: false,
    },
    {
      text: 'Love one another',
      isCompleted: false,
      isHighlighted: false,
    },
    {
      text: 'Glorify God',
      isCompleted: false,
      isHighlighted: false,
    },
    {
      text: 'Pick up as much as you can carry',
      isCompleted: false,
      isHighlighted: false,
    },
    {
      text: 'Hail Satan',
      isCompleted: true,
      isHighlighted: false,
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    newTodos[index].isHighlighted = true;

    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos].filter((thing,spot)=>spot!=index);
    setTodos(newTodos);
  }

  const highlightTodo = index => {
    console.log(`highlighting ${index}`);
    const newTodos = [...todos];
    newTodos[index].isHighlighted = true;
    setTodos(newTodos);
  }

  const nice = {
    "background": "rebeccapurple",
    "color": "aliceblue",
    "fontSize": "22px",
    "display": "inline-block",
    "padding": "1vw",
    "margin": ".5vw auto",
    "width": "100%",
    "textAlign": "center",
  }

  const Footer = ()=> {
    return (
      <div style={nice}>
        &copy; <a href="https://maxjann.com">Jann Software</a> | <span className="strange">  <a href="https://docs.google.com/document/d/1jD5PJxBGta0Rg98w-c5o0L7vDuFHw_NmLcrWomRK5XQ/edit?usp=sharing">View My Resume</a> </span>
      </div>
    )
  }
const More = ()=> {
  return (
    <div>
      <h3>"You're blowing their whole scam out of the water" - Jonathan Adampants</h3>
      <a href="https://youtu.be/avInTfCd92Q"><img src={jordan} className="savior"></img></a>
      <a href="https://youtu.be/fgReurGebJg"><img src={asha} className="savior"></img></a>
      <a href="https://youtu.be/xYT6rRliNjs"><img src={adam} className="savior"></img></a>
      <img src={jesus} className="savior"></img>
      <img src={good} className="savior"></img>
      <a href="https://youtu.be/nhS71NrmfTw"><img src={alan} className="savior"></img></a>
      <a href="https://youtu.be/Gw1I7fqmxmA"><img src={sad} className="savior"></img></a>
      

    </div>
  )
}

  const Header = ()=> {
    return (
      <div style={nice}>
        <h1><span className="strange">C</span><span className="strange">H</span><span className="strange">R</span><span className="strange">I</span><span className="strange">S</span><span className="strange">T</span><span className="strange"> C</span><span className="strange">o</span><span className="strange">n</span><span className="strange">s</span><span className="strange">c</span><span className="strange">i</span><span className="strange">o</span><span className="strange">u</span><span className="strange">s</span><span className="strange">n</span><span className="strange">e</span><span className="strange">s</span><span className="strange">s</span>
        
        
        </h1>
        <p> <span className="strange">I</span> <span className="strange">love</span> <span className="strange">you</span> <span className="strange">and</span> <span className="strange">I</span> <span className="strange">Forgive</span> <span className="strange">You</span>  <span className="strange">of</span> <span className="strange">your</span> <span className="strange">sins</span>.</p>
      </div>
    )
  }

  return (
    <div className="app">
      < Header />
      <div className="todo-list">
        {todos.map((thing,spot)=> (
          <Todo key={spot} index={spot} todo={thing} completeTodo={completeTodo} deleteTodo={deleteTodo} highlightTodo={highlightTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
      < More />
      < Footer />
    </div>
  )
}

export default App;
