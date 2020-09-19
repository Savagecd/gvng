module.exports = (client, message, args) => { 
   
    const Discord = require('discord.js')
    const respuestas = ['Sí', 'No', 'Tal vez', 'No sé', '¡Claro!', 'Por supuesto', 'Por supuesto que no', 'Claro que no', 'Pregúntale a la mamá de Forky', 'Le podríamos preguntar a la mamá de Forky pero está ocupada chupando la pija de Swiftx.', 'Definitivamente']; //Creamos un array con las repuestas random
    
 let pregunta = args.join(" ")
 let result = Math.floor((Math.random() * respuestas.length));
 
 
 if (!args[0])
 return message.channel.send({embed:{color:341312,description:"Debes escribir una pregunta."}});
 
 const embed = new Discord.RichEmbed()
 embed.addField("Pregunta",`${pregunta}`)
 embed.addField("Respuesta", respuestas[result])
 embed.setColor('RANDOM')
 
 message.channel.send(embed)
    
    
  } 