const express = require('express');
const fs = require('fs').promises;

const app = express();

const PORT = 3000;
const filePath = './counter.txt';

async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, { encoding: "utf8" });
        return data;

    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
};

async function readFile(filePath) {
    try {
        return await fs.readFile(filePath, { encoding: "utf8" });

    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
};

async function addCounterToFile(filePath, count) {
    try {
        await fs.writeFile(filePath, String(count));

    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
};

app.get('/', async (req, res) => {
    res.send(`Start page!`);
});

app.get('/hello', async (req, res) => {
    const count = await readFile(filePath);
    await addCounterToFile(filePath, +count + 1);

    res.send(`Number of visitings is - ${count}!`);
});

app.listen(PORT, () => {
    console.log(`App start on port ${PORT}!`);
});