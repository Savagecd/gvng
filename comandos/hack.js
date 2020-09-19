const Discord = require('discord.js');
module.exports = (client, message, args) => { 
let persona = message.mentions.users.first();
    if (!persona) persona = message.author;
let usuario = message.mentions.members.first() 
  if (!usuario) return message.channel.send(`Debes mencionar a alguien para hackearlo.`);
	   const correos = [
"gmail.com",
"yahoo.com",
"discordapp.com"
       ];
  
   const añadibles = [
"43242",
"938475"
     ]; 


let correosresult = Math.floor((Math.random() * correos.length)); 
  let añadiblesresult = Math.floor((Math.random() * añadibles.length)); 

  
  
  
  const agregablescontraseñas = [
"4TeRDZ",
"tY9Rs",
"xxx666g"
  ]; 

  let agregablescontraseñasresult = Math.floor((Math.random() * agregablescontraseñas.length)); 
  
  const contraseñas = [
    `${usuario.user.username}${agregablescontraseñas[agregablescontraseñasresult]}`,
    `${agregablescontraseñas[agregablescontraseñasresult]}${usuario.user.username}`
  
  ]; 
  
   let contraseñasresult = Math.floor((Math.random() * contraseñas.length)); 



  
  message.channel.send( new Discord.RichEmbed()
                      .setTitle(`Hackeando a ${usuario.user.tag}`)
                      .setImage(persona.displayAvatarURL) 
                       .setColor('#8892fd')
                      ).then(m => {

const embed2 = new Discord.RichEmbed()
.setTitle(`Cuenta de ${usuario.user.tag}`)
.addField("Correo:", usuario.user.username + añadibles[añadiblesresult] + "@" + correos[correosresult])
.addField("Contraseña:", contraseñas[contraseñasresult])
.setColor('#40c452')
setTimeout(()=> {
m.edit(embed2);
  }, 3000)
} 
                             )
}