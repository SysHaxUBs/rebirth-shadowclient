const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("SHXLOGS - homepage visit.")
    res.send('This is the shadow client for project rebirth, an unbl*cked games site for your enjoyment. This is an early test version of the site.')
})
app.listen(process.env.PORT || 3000)
