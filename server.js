import express from "express";

const app = express();
const port = 7000;

app.get("/", (req, res) => {
    res.send("Felipe Santos Pulcherio - Week #4 Test");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
