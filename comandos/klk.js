module.exports = async(client, message, args) => { 
var Weez = require("weez");
var weez = new Weez.WeezAPI("aX2nTQn0JhVGWgutKN3DI3DdGjQIeHtjeKdo");
 
  
 let member = message.mentions.users.first()

     if (!member) return message.channel.send("Menciona a un usuario para ejecutar el comando :D"); 


let img = await weez.olvido(member.displayAvatarURL)
 
message.channel.send({files: [img]})
}