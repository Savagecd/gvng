
const Discord = require('discord.js');
module.exports = async (client, message, args) => {

{
  message.delete()
    let usuariomencionado = message.mentions.users.first();
if(!usuariomencionado) return message.channel.send(`**Debes mencionar a alguien**`)
    let elementos = [ `https://i.imgur.com/XAVNWHV.gif`, `https://i.imgur.com/QlRNL54.gif`, `https://media.giphy.com/media/l4FGo3IonE0SdQYeY/giphy.gif`];//Puedes agregar mas gifs aqui o imagenes
let captura = elementos[Math.floor(elementos.length * Math.random())];


  
const embed = new Discord.RichEmbed() 
            .setColor('RANDOM')
            .setDescription(`** ${message.author} Ha contagiado con Coronavirus a ${message.mentions.users.first()}**`)
            .setImage(captura)

            message.channel.send(embed);      

  }
  
  }
