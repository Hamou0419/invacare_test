const express = require('express')
const bodyParser = require('body-parser')
const env = require('./env')
const { query } = require('./mysql')

const app = express()
const PORT = env.port || '3000'


app.use(bodyParser.json())

app.get('/api/policyholders', async (req, res) => {

})

app.get('/api/policyholders/:code/top', async (req, res) => {

})

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
});

