module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
var giphy = require('giphy-api')();

if(!args) return  message.channel.send('Debe proporcionar algo para buscar');

message.channel.send(':arrows_counterclockwise: buscando..!')
.then(m => {
       giphy.random(args, function(err, res){
       if(err){
         return console.log(err);
       }
       if(!res.data.url){
         return message.channel.send('¡No se han encontrado resultados!')
       }

       let key = res.data.url.substr(res.data.url.lastIndexOf('-') + 1);
       let url = `https://media.giphy.com/media/${key}/giphy.gif`;

       m.edit(url);
      });
})
}