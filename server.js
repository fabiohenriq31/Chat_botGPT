require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const apiKey = process.env.APIKEY;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/sendMessage', (req, res) => {
    const prompt = req.body.prompt;

    fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-0125", 
            prompt: prompt,
            max_tokens: 1000,
            temperature: 0.5
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            res.status(400).json(data);
        } else {
            res.json(data);
        }
    })
    .catch(error => {
        console.error("Error fetching from OpenAI:", error);
        res.status(500).send("Error fetching from OpenAI");
    });
});

app.listen(3333, () => {
    console.log('Server is running on port 3333');
});
