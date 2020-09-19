//Para este codigo necesitas el npm de node-fetch.
//Si puedes pasate por mis otros codigos.

//Indicamos Discord.js
const Discord = require('discord.js');

module.exports = async (client, message, args) => {


try{
//Indicamos la pagina web de los datos, puedes poner o cambiar un dato si prefieres
    let res = await require('node-fetch')(`https://corona.lmao.ninja/v2/all?yesterday=false`);
    let data = await res.json();
//Hacemos un embed para indicar los datos
    let covid = new Discord.RichEmbed()
    .setTitle('Informacion Covid-19') 
    .addField('Casos', data.cases.toLocaleString(), true)
    .addField('Casos de hoy', data.todayCases.toLocaleString(), true)
    .addField('Muertes', data.deaths.toLocaleString(), true)
    .addField('Muertes de hoy', data.todayDeaths.toLocaleString(), true)
    .addField('Situaciones criticas', data.critical.toLocaleString(), true)
    .addField('Recuperados', data.recovered.toLocaleString(), true)
    .addField('Probabilidades en un millón', data.testsPerOneMillion.toLocaleString(), true)
    .addField('Paises afectados ', data.affectedCountries.toLocaleString(), true)
    .setColor('#FF0000')
    message.channel.send(covid)
}catch(e){
//Indicamos que pasa si hay un error
message.channel.send('There was an error!')
}
}
//Recuerda darle like a este codigo, asi me ayudas a publicar mas