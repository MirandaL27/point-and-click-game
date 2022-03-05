const express = require('express');
const path = require('path'); // need path for making files paths

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//this get route serves the html file with the image on it
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});