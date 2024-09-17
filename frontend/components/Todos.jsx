export function Todos({todos}){


    return <div>
        {todos.map(function(todo){
                return <div>
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                    <button>{todo.completed == true? "Completed" : "Mark as completed"}</button>
                </div>
        })}
    </div>
}