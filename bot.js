const http = require('http');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);
const Constants = require('discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = 'Discord Android'
const Discord = require('discord.js');
const client = new Discord.Client();
let { readdirSync } = require('fs'); 
let cooldown= new Set();
client.config = require('./config.js'); 
client.comandos = new Discord.Collection();  
for(const file of readdirSync('./comandos/')) { 
    if(file.endsWith(".js")) { 
    let fileName = file.substring(0, file.length - 3); 
    let fileContents = require(`./comandos/${file}`);  
    client.comandos.set(fileName, fileContents);
    }
  }
for(const file of readdirSync('./eventos/')) { 
    if(file.endsWith(".js")){
    let fileName = file.substring(0, file.length - 3);   
    let fileContents = require(`./eventos/${file}`); 
    client.on(fileName, fileContents.bind(null, client)); 
    delete require.cache[require.resolve(`./eventos/${file}`)]; 
    }
  }
client.login(client.config.token) 
  .then(() => { 
    console.log(`Estoy listo, soy ${client.user.tag}`);
  })
  .catch((err) => {
    console.error("Error al iniciar sesión: " + err);
  });

    