import React, {useState, useEffect} from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');
  
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
    })
  },[]);


  const addTodo = (e) => {
    e.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');
  } 
  return (
    <div className="App">

     <FormControl>
       <InputLabel>
         Write a Todo
       </InputLabel>
       <Input value={input} onChange={(e) => setInput(e.target.value)} />
       <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
     </FormControl>

    <ul>
      {todos.map(todo => 
        <Todo todo={todo} />
      )}
    </ul>

 </div>
  );
}
export default App;

