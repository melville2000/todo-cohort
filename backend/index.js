const express = require("express");
const dotenv = require('dotenv').config
const { createTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")
const port = process.env.PORT

const app = express();

app.use(express.json())
app.use(cors({}))

let counter = 0

app.post("/todo", async function (req, res) {
    const todoId = counter++
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(401).json({
            msg: 'you sent the wrong inputs'
        })
    }
    await todo.create({
        id: todoId,
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "todo Created"
    })
})

app.get("/todos", async function (req, res) {
    const todos = await todo.find()
    res.json({
        todos
    })
})

app.put('/completed', async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(401).json({
            msg: 'you sent the wrong inputs'
        })
        return
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })

})

app.listen(port, function () {
    console.log(`App running on port ${port}`)
})