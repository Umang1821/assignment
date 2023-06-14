import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Todo';
import { db } from '../firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';
 import styles from "./Account.css"
const Account = () => {
  const { logOut, user } = UserAuth();
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      alert('Please enter a valid todo');
      return;
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    });
    setInput('');
  };
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    <div>
       <div className='box'>
       <div className='heading'> <p>Todo App</p> </div>
        <form onSubmit={createTodo}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='Add Todo'
          />
          <button>
            <AiOutlinePlus size={15} />
          </button>
        </form>
        <ul className='strip'>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
        {todos.length < 1 ? null : (
          <p>{`You have ${todos.length} todos`}</p>
        )}
      </div>
      <button onClick={handleSignOut}>
        Logout
      </button>
    </div>
  );
};

export default Account;




 


