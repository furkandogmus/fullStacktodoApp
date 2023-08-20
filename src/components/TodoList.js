import {TodoItem} from "./TodoItem"

export const TodoList = ({left,todos,setSelectedTodo, done, handleDelete}) => {
    return (
    <div className={`flex-6 w-[15%] text-center relative bg-yellow-200 h-[75%] ${left ? "rounded-l-xl" : "rounded-r-xl" } `}>
    <h3 className='text-2xl absolute top-4 w-full underline'>to do`s</h3>
    <ul className='mt-16 text-start pl-10 list-disc space-y-4'>
      
    {todos.map((todo,index)=>
    (
        <TodoItem todo={todo} key={index} handleDelete={handleDelete} setSelectedTodo={setSelectedTodo} done={done} />
    ))
    
    }
      </ul>
      </div>
  )
}
