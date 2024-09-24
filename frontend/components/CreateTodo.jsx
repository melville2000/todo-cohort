import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("")

    return <div>
        <input type="text" placeholder="Title" onChange={function(e){setTitle(e.target.value)}}/><br />
        <input type="text" placeholder="Description" onChange={function(e){setDescription(e.target.value)}}/> <br />
        <button onClick={()=> 
            fetch("http://localhost:3000/todo",{
            method:"POST",
            body: JSON.stringify({
                title:title,
                description: description
            }),
            headers : {"content-type": "application/json"}
        })}>Add a todo</button>
    </div>
}