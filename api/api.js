const express = require('express');
const axios = require('axios');
var cors = require('cors');
const app = express();
require('dotenv').config()

app.use(cors());

const token = process.env.DISCORD_TOKEN;

async function fetchUser(id) {
    try {
        let res = await fetch(`https://discordapp.com/api/users/${id}`, {
            headers: {
                Authorization: `Bot ${token}`
            }
        })
        let json = await res.json()
        return json;    
    } catch (e) {
        console.log(e)
        return;
    }
}

app.get("/", async (req, res) => {
  res.send("not the page you are looking for.")
})

app.get("test", async (req, res) => {
  
})

app.get('/api/discord/user/:id', async (req, res) => {
  let x = await fetchUser(req.params.id);
  res.send(x);
});

app.get('/api/spotify', async (req, res) => {
  
})

app.listen(3069, () => {
  console.log('server started');
});