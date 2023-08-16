import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

const List = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/api/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newTodos = Array.from(todos);
    const [removed] = newTodos.splice(result.source.index, 1);
    newTodos.splice(result.destination.index, 0, removed);

    setTodos(newTodos);

    axios.put(`/api/todos/${removed.id}`, { position: result.destination.index })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCheckboxChange = (event, todo) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(t => t.id === todo.id);
    newTodos[index].completed = event.target.checked;

    setTodos(newTodos);

    axios.put(`/api/todos/${todo.id}`, { completed: event.target.checked })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={(event) => handleCheckboxChange(event, todo)}
                    />
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                      {todo.title}
                    </span>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
