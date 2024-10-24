const express = require('express');
//const fetch = require('fetch');
const app = express();
const port = "3000"

app.get("/",(req,res)=>{
    const URL = "https://api.football-data.org/v4/competitions/CL/matches";
    const apiKey = "7603d2149a4f4460aefffc5921219a1c";
    fetch(URL,{
        method: "GET",
        headers:{
            'X-Auth-Token': apiKey
        }
    })
    .then(response=>{
        return  response.json();
    }).then(data=>{
        return res.json(data);
    })
    .catch(err=>{
        return  console.error(err);
    });
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})