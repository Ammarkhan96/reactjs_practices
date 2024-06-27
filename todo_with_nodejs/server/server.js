const express = require("express")
const fs = require('fs')
const todos = require('./MOCK_DATA (3).json')
const yup = require('yup')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const app = express()
const PORT = 8001
app.use(cors());
app.use(express.json());

const secretKey = 'your_secret_key'

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

//Middleware  (but for now assume this is a Plugin)
app.use(express.urlencoded({ extended: false }))


const titleDetail = yup.object({
    title: yup.string().required(),
})

// app.post("/signup", async (req, res) => {
//     const { id, email, password } = req.body;
//     const token = jwt.sign({ id, email }, secretKey);
//     res.json({ token });
// });


let users = []
const userSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required()
});

app.post("/signup", async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    try {
        if(password !== confirmPassword){
            return res.status(400).json({ error: 'Password and confirm password should be same' });
        }
        await userSchema.validate({ email, password, confirmPassword });
        const result = users.find(user => user.email === email)
        if (result) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ email, password: hashedPassword });
        const token = jwt.sign({ email }, secretKey);
        res.json({ token });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});


app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = users.find(user => user.email === email);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        const token = jwt.sign({ email }, secretKey);
        res.json({ token });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});


//Routes

app.get("/todos", (req, res) => {
    const html = `
    <ol>
       ${todos.map(user => `<li>${user.title}</li>`).join("")}
    </ol>
    `;
    res.send(html);
})
//run (http://localhost:8001/todos)


//REST API
app.get('/api/todos', (req, res) => {
    return res.json(todos)
})
//run (http://localhost:8001/api/todos)

app
.route("/api/todos/:id")
.get((req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find((todo) => todo.id === id);
    return res.json(todo);
})



app.post("/api/todos", async (req, res) => {
    try {
        const body = await titleDetail.validate(req.body);
        todos.push({ ...body, id: todos.length + 1 });
        fs.writeFile('./MOCK_DATA (3).json', JSON.stringify(todos), (err, data) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to write to file' });
            }
            return res.json({ status: "success", id: todos.length });
        });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});



app.patch("/api/todos/:id", async (req, res) => {
    const id = Number(req.params.id);
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    try {
        const updatedTodo = await  titleDetail.validate(req.body);
        todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };
        fs.writeFile('./MOCK_DATA (3).json', JSON.stringify(todos), (err, data) => {
            return res.json({ status: "success" });
        });
    } catch (error) {
        return res.status(400).json({ error: error.errors.join(', ') });
    }
});


app.delete("/api/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    todos.splice(todoIndex, 1);
    fs.writeFile('./MOCK_DATA (3).json', JSON.stringify(todos), (err, data) => {
        return res.json({ status: "success" });
    });
});


app.listen(PORT, () =>console.log(`Server Started at PORT: ${PORT}`))
