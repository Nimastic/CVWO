const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const { restart } = require('nodemon');

//middleware
app.use(cors());
app.use(express.json()); //req.body
app.listen(3000, () => console.log(`Server has started on port 3000`));

//ROUTES//

//create a todo
app.post("http://localhost:3000/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


//get all todos
app.get("http://localhost:3000/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get a todo
app.get("http://localhost:3000/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1",
            [id]
            );
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a todo
app.put("http://localhost:3000/todos/:id", async (req, res) => {
    try {
        const { id } = req.params; //WHERE
        const { description } = req.body; //SET

        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
        );

        res.json("Todo was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a todo
app.delete("http://localhost:3000/todos/:id", async (req, res) => {
    try {
        const { id } = req.params; //WHERE
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        );
        res.json("Todo was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});

/*app.listen(3000, () => {
    console.log('server has started on port 3000');
});*/

