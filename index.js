const express = require('express');

const app = express();

const port = 2025;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Home Page",
    })
})

app.listen(port,() => {
    console.log(`server is running successfully on http://localhost:${port}`);
    
})