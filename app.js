const express = require('express')
const bodyParser = require('body-parser')
const env = require('./env')
const { query } = require('./mysql')

const app = express()
const PORT = env.port || '3000'


app.use(bodyParser.json())

app.get('/api/policyholders', async (req, res) => {
    const { code } = req.query
    if (!code) {
        return res.status(400).json({ error: 'Invalid Input' })
    }
    try {
        const queryResult = await query('SELECT * FROM invacare_customer WHERE code = ?', [code])

        if (queryResult.length === 0) {
            return res.status(400).json({ error: 'Invalid Code' })
        }
        const result = queryResult[0]

        const { name, registration_date, introducer_code } = result

        const nodeResult = await query('SELECT * FROM invacare_customer WHERE introducer_code = ?', [introducer_code])

        let l = []
        let r = []

        if (nodeResult.length !== 0) {
            for (const node of nodeResult) {
                const { code: nodeCode, name: nodeName, registration_date: nodeDate } = node
                if (nodeCode === code) continue
                const nodeObj = {
                    code: nodeCode,
                    name: nodeName,
                    registration_date: nodeDate,
                    introducer_code
                }
                nodeCode > code ? r.push(nodeObj) : l.push(nodeObj)
            }
        }

        res.json({
            code,
            name,
            registration_date,
            introducer_code,
            l,
            r
        })
    } catch (e) {
        return res.status(404).json({ error: 'Unknown Error' })
    }
})

app.get('/api/policyholders/:code/top', async (req, res) => {

})

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
});

