const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();


app.get("/api", (req, res) => {
    res.json({ message: "server call" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});