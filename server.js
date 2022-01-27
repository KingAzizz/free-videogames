const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
require('dotenv').config()

app.use(cors())


app.get('/catgory',(req,res) => {
    const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        params: { category: req.query.category },
        headers: {
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key": process.env.RAPID_API_KEY,
          },
      };
      
      axios
      .request(options)
      .then((response) => {
          res.json(response.data);
      })
      .catch((error) => {
          console.error(error);
      });
})
app.listen(5000,() => console.log("server up"))