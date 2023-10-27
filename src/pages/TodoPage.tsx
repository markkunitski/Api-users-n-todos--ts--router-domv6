import * as React from 'react';
import List from '../components/List';
import TodoItem from '../components/TodoItem';
import { ITodo } from '../types/types';
import { useEffect, useState } from 'react';
import axios from 'axios';



const TodoPage: React.FunctionComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
      fetchTodos()
    }, [])
  
    async function fetchTodos() {
      try {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos(response.data)
      } catch (error) {
        alert(error)
      }
    }
    
  return (
    <List items={todos} renderItem={(todo: ITodo)=> <TodoItem key={todo.id} todo={todo}></TodoItem>}></List>

  );
};

export default TodoPage;

