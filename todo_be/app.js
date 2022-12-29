import express from 'express';
import cors from 'cors';
// import { todos } from './data.js';
import fs from 'fs';
// import { body, validationResult } from 'express-validator';

const PORT = 9797;
const app = express();

let taskData = [];

app.use(cors());
app.use(express.json());

fs.readFile("./data.js", (err, data) => {
    if (err) return console.log(err);
    taskData = JSON.parse(data);
});

app.get('/todos', (req, res) => {
    res.json(taskData);
});

app.post('/todos', (req, res) => {
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //     console.log(errors);
    //     return res.json(taskData);
    // };

    console.log(req.body);
    taskData.push(req.body);

    fs.writeFile('./data.js', JSON.stringify(taskData), (err) => {
        if (err) return console.log(err);
    })

    res.json(taskData);
});

app.listen(PORT, () => console.log("Der Server läuft auf Port: ", PORT));