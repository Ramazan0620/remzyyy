const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const chrome = new Discord.MessageEmbed()
  .setTitle("Davet Linkleri Altta Belirtilmiştir")
  .setColor("RANDOM")
    .addField("» **Botun Sahibi**", "<@!744951596810633306>| **ΛẔ尺ΛɪŁ#2935** ")
    .addField("**» Destek Sunucusu**", " **Yakında**", )
    .addField("**» Davet Linki**", " [**Botu Davet Et**](https://discord.com/api/oauth2/authorize?client_id=796007401903489084&permissions=8&scope=bot)", )
    .addField("**» Bota Oy Ver**", " [**Oy Vermek İçin Tıkla**](https://top.gg/bot/796007401903489084/vote)",)  
  .setImage("https://i.hizliresim.com/vUFybv.gif")
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
  message.channel.send(chrome);   //DevTR
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet","invite"],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
};