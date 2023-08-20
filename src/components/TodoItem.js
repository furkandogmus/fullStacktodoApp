import DeleteIcon from '@mui/icons-material/Delete';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useState, useEffect } from 'react';

export const TodoItem = ({ todo, setSelectedTodo, handleDelete }) => {
  const [sure, setSure] = useState(false);
  
  useEffect(() => {
    let timer;

    if (sure) {
      timer = setTimeout(() => {
        setSure(false);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [sure]);

  return (
    <div className='flex items-center w-full h-full gap-4'>
      <li
        onClick={() => setSelectedTodo(todo)}
        className={`${todo.done ? "line-through font-bold" : ""} hover:text-yellow-500 mt-3 duration-150 cursor-pointer`}
      >
        {todo.title}
      </li>
      {sure ? (
        <QuestionMarkIcon onClick={() => handleDelete(todo)} className='text-yellow-500 hover:text-yellow-800' />
      ) : (
        <DeleteIcon onClick={() => setSure(true)} className='text-yellow-500 hover:text-yellow-800' />
      )}
    </div>
  );
};
