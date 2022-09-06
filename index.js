import express from "express";
import fetch from 'node-fetch';

const app = express()
const port = process.env.PORT || 8000

app.get('/api/v1/courses', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            apiKey: 'cXycM0ts1IRN7293bbH1M8F0NbhYRBsx',
        },
    };


    const response = await fetch('https://developers.teachable.com/v1/courses', options);
    const courses = await response.json();





    return res.json(courses)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})