module.exports = async (client, message, args) => {
  const Discord = require('discord.js');

    let number = Math.floor(Math.random() * args); /* Aquí se hace lo aleatorio con el maximo de los argumentos*/

    if (!args) {
      return message.channel.send("`❌ Debes especificar el numero máximo.");/* Si no hay argumentos*/
    }
    message.channel.send(number);
  }
