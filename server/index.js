const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

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
app.get("/api", (req, res) => {
    res.json({ message: tasks });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});