import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) =>
    res.send(`
    <h1>Node and express server</h1>
    <p>is running on port ${PORT} </p>
    <h3>Check out your package.json for more!</h3>
    `)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);
