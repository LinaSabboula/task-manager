const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({  extended: true}));
app.use(express.json());
app.use(express.urlencoded());

const tasks = [{
    id: 1,
    title: "Learn React",
    description: "Learn how to use react in building web app"
}, {
    id: 2,
    title: "Learn Node",
    description: "Learn how to use node in building server"
}, {
    id: 3,
    title: "Learn Array Manipulation",
    description: "Learn how to manipulate arrays in javascript"
}];


app.get('/api', (req, res) => {
    res.json({ message: tasks });
});

app.post('/api/add',(req,res) =>{
    tasks.push(req.body);
    res.send(req.body);
});

app.delete('/api/delete', (req, res) => {
    let taskID = req.body.id;
    let task = tasks.filter(item => {
        return item.id === taskID;
    })[0];
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    res.json({ message: 'Task ' + taskID + ' deleted.'});
});

app.put('/api/edit', (req, res) => {
    let taskID = req.body.id;
    let task = tasks.filter(item => {
        return item.id === taskID;
    })[0];
    task.title = req.body.title? req.body.title: task.title;
    task.description = req.body.description? req.body.description : task.description;
    res.json({ message: "Task "+ taskID + " edited."});
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});