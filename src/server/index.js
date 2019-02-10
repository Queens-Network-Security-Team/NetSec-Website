const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('test')
})

app.listen(8080, () => {
    console.log('Server up and listening on port 8080')
});