import React from 'react';

const Card = ({ todo, onClose, onComplete }) => {
  return (
    <div className='absolute w-[30%] h-[50%] bg-yellow-300 flex flex-col rounded-xl justify-start pt-10 gap-12 items-center '>
      <h1 className='text-2xl rounded'>{todo.title}</h1>
      <div className='absolute top-24 w-full h-[50%]'>
      <div
        className='border-t-[1px] border-yellow-400 bg-yellow-200 shadow-xl w-full h-full px-6 py-4 leading-6 outline-none'
        dangerouslySetInnerHTML={{ __html: todo.content }}
      />
        <p className='absolute right-2 bottom-2'>{todo.content.length}/600</p>
      </div>
      <div className='flex absolute bottom-0 gap-10 justify-between px-10 w-full h-32'>
        {!todo.done && <button
          onClick={onComplete}
          className='flex-1 rounded-full bg-yellow-400 h-12 pt-3 hover:bg-yellow-200 hover:text-yellow-700 duration-500'
        >
          completed
        </button>}

        <button
          onClick={onClose}
          className='flex-1 rounded-full bg-yellow-400 h-12 pt-3 hover:bg-yellow-200 hover:text-yellow-700 duration-500'
        >
          exit
        </button>
      </div>
    </div>
  );
};

export default Card;
