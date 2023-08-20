import React, { useState } from 'react'
export const Main = ({ todos, setTodos, hidden }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    const newContent = e.target.innerHTML;

    if (newContent.length <= 600) {
      setContent(newContent);
    }
  };

  const handleKeyPress = (e) => {
    if (content.length >= 600 && e.key !== 'Backspace') {
      e.preventDefault();
    }
  };

  const addNewTodo = () => {
    if(title && content){
    const newTodo = { title: title, content: content };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
    }
    else{
      if(!title){
        alert("Enter a title")
      } else{
        alert("Enter a content")
      }
    }
  };

  return (
    <div className='flex flex-wrap flex-col w-[50%] h-[75%] bg-yellow-300 pt-10 items-center'>
    {hidden && <div className='w-full h-full flex flex-col items-center'>
    <h1 className='text-7xl text-white text-center w-full'>to do</h1>
      <div className='w-[70%] relative'>
        <h3 className='text-2xl absolute top-4'>title</h3>
        <input
          onChange={handleTitle}
          value={title}
          className='outline-none h-12 w-full mt-9 pl-2 pt-3 rounded-md'
        />
      </div>
      <div className='w-[70%] relative'>
        <h3 className='text-2xl absolute top-4'>content</h3>
        <div
          contentEditable={true}
          onBlur={handleContent}
          onKeyPress={handleKeyPress}
          className='outline-none resize-none bg-yellow-100 border border-yellow-400 shadow-xl w-full h-96 mt-9 pl-2 p-2 rounded-md'
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <p className='absolute right-2 bottom-2'>{content.length}/600</p>
      </div>
      <div className='flex flex-col justify-center h-16 w-[70%] text-gray-200'>
        <button
          onClick={addNewTodo}
          className='bg-yellow-500 pt-[10px] px-2 h-8 w-48 rounded-full hover:bg-yellow-200 hover:text-yellow-700 duration-500'
        >
          Add a new todo
        </button>
      </div>
      </div>}
    </div>
  );
};

export default Main