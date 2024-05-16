const express = require('express');
const app = express();
const axios = require('axios');

app.get("/Random/joke/api", async(req, res) => {
    console.log("request recieved");
    const response = await axios.get("https://api.api-ninjas.com/v1/jokes", {
        headers: {
            'x-api-key': "4cJxAZ1/RlzNjFuX/tUZDA==erxEIRdc6xW06R5a",
        }
    });
    // console.log(response.data)
    res.json({
        success: true,
        joke:response.data[0].joke,
    })
})

app.listen(8000, () => { console.log("server done on 8000") });