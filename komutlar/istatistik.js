const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
require('moment-duration-format');
exports.run = async(client, message, args) => { 

  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {

 
        talkedRecently.add(message.author.id);
        setTimeout(() => {
    
          talkedRecently.delete(message.author.id);
        }, 3000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }  
let rache1 = new Discord.MessageEmbed()
.setAuthor("Rache")
.setThumbnail(client.user.avatarURL())
.addField("__**Bot Verileri**__", `>  :man_technologist:   **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n>  :gift_heart:  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n>  :bulb:   **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `>  📌  **Bot Sahibi**  <@744951596810633306> \n\n> :trackball: \ **Bot Geliştiricisi**  <@744951596810633306> \n`)
.addField("__**Sürümler**__", `>  📌  **Discord.js Sürümü** **|**  **v${Discord.version}** \n>  :medal:  **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__ ", `> **${client.ws.ping}** ms`,true)
.setColor("#ffd100")
message.channel.send(rache1)
}
exports.conf = {
  enabled: true,
guildOnly: false,
aliases: ['bot-bilgi','i','botbilgi','is'],
  permLevel: 0
}
exports.help = {
name: "istatistik",
}