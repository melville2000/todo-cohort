export function Todos({todos}){


    return <div>
            <h2>{todos.title}</h2>
            <p>{todos.description}</p>
            <button>{todos.completed == true? "Completed" : "Mark as completed"}</button>
    </div>
}