export function Todos({todos}){


    return <div>
            <h2>{todos.title}</h2>
            <h3>{todos.description}</h3>
            <button onClick={()=> 
                fetch("http://localhost:3000/completed",{
                method:"PUT",
                body: JSON.stringify({
                id:todos._id
            }),
            headers : {"content-type": "application/json"}
            })}>
            {todos.completed == true? "Completed" : "Mark as completed"} </button>
            
            
            <button style={{margin:"10px"}} onClick={()=>{
                fetch("http://localhost:3000/delete",{
                    method:"POST",
                    body: JSON.stringify({
                    id:todos._id
                }),
                headers : {"content-type": "application/json"}
                })}
            }>Delete Todo</button>
    </div>
}