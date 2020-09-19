module.exports = async (message) => { 
  const Discord = require('discord.js');
const buscador_letra = require("buscador-letra");
 
let buscador = new buscador_letra("ZRzbVZzMvU-eg8fUFoM350WeanQEe70k7Utzz7e9O_X9L0NyNIGAEo_3hzUoGNlM"); //Intanciar la libreria
    if (message.content.toLowerCase().startsWith("letra")) { //Crear la condición para ejecutar el comando
 
        let nombre = message.content.split(/(?<=^\S+)\s/)[1]; //Seleccionar el nombre de la canción
 
        if (!nombre) return message.reply("Introduce un nombre"); //Si no se ha introducido un nombre, notificarlo
 
        let resultados = await buscador.buscar(nombre); //Buscar la canción
 
        if (resultados.length == 0) return message.reply("No se ha encontrado nada"); //Si no hay resultados, notificarlo
 
        let letra = await buscador.letra(resultados[0]); //Obtener la letra
 
        let embed = new Discord.RichEmbed() //Crear el embed
        .setColor("RANDOM") //Ponerle un color
        .setTitle(resultados[0].titulo + " de " + resultados[0].artista); //Ponerle un título
 
        if (letra.length <= 2048) embed.setDescription(letra); //Si la letra cabe en la descripción, ponerla
        else { //Si no cabe en la descripción...
            let chunks = letra.match(/[\s\S]{1,1023}/g); //Dividirla en trozos
 
            for (let chunk of chunks) embed.addField("\u200b", chunk, false); //Agregar la canción en diferentes campos
        }
        if (embed.length > 6000) return message.reply("La letra es demasiado larga"); //Si el embed supera el tamaño máximo, notificarlo
       
        return message.reply(embed); //Enviar el embed
    }
}


