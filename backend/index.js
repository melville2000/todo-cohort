const express = require("express");
const dotenv = require('dotenv').config
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")
const port = process.env.PORT

const app = express();

app.use(express.json())
app.use(cors({}))


app.post("/todo", async function (req, res) {
    const todoList = await todo.find()
    const todoId = todoList.length + 1
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
    const parsedPayload = updateTodo.safeParse(createPayload)
    console.log(parsedPayload)
    if (!parsedPayload.success) {
        res.status(401).json({
            msg: 'you sent the wrong inputs'
        })
        return
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })

})

app.post("/delete", async (req, res) => {
    const createPayload = req.body
    const parsedPayload = updateTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.json({
            message: "Wrong Inputs"
        })
    }

    const todoFind = await todo.findOne({
        _id: req.body.id
    })

    if (todoFind) {
        await todo.deleteOne({
            _id: req.body.id
        })
        res.json({ message: "Todo deleted successfully" })
        return
    }

    res.json({ message: "Todo Dosent exits" })
})

app.listen(port, function () {
    console.log(`App running on port ${port}`)
})