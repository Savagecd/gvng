module.exports = async (client, message, args) => { 
var cheerio = require("cheerio"); // Para esto vamos a utilizar el npm "cheerio" para instalarlo -> npm i cheerio
const Discord = require("discord.js");
var request = require("request"); // Igual vamos a usar el npm "request" para instalar -> npm i request

var parts = message.content.split(" "); // Divimos el mensaje que vamos a insertar nuestro comando con el split.
   
var search = parts.slice(1).join(" "); 
if(!search) return message.channel.send("Por favor agregar algo para que pueda buscar."); // Si no inserta algo para buscar ponemos un return que nos devolvera este mensaje.

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
  
    request(options, function(error, response, responseBody) {
        if (error) {
            // Error
            return;
        }
 
        $ = cheerio.load(responseBody); 
      
        var links = $(".image a.link"); 
 //Para obtener los roles lo hacemos con la funcion .attr () de jQuery
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        console.log(urls);
        if (!urls.length) {
            return;
        }

        // Enviamos el resultado, puede ser normal, en este caso yo lo coloque en Embed. Para la version de discord V12 MessageEmbed.
      
const embed = new Discord.RichEmbed()

.setTitle("⭐ | ¡Resultado de la busqueda!")
.setImage(urls[0]) 
.setFooter(message.author.username, message.author.displayAvatarURL)
.setTimestamp() //<-- indicador de tiempo
.setColor('RANDOM')
message.channel.send(embed);
    });
}  

