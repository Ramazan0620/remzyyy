const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`Koruma Menüsü | GELİŞTİRME AŞAMASINDA`)
.setDescription(`
:white_small_square:  \`${prefix}küfür-aç - kapat\` \n **Etiketlenen Yada Kullanılan Kanalda Küfür Engel Sistemini Açar.**\n
:white_small_square:  \`${prefix}reklam-engel aç - kapat\` \n **Etiketlenen Yada Kullanan Kanalda Reklam Engel'i Açar.**\n
:white_small_square:  \`${prefix}capslock-engel aç - kapat\` \n **Etiketlenen Yada Kullanan Kanalda Reklam Engel'i Açar.**\n
[**Bot Davet**](https://discord.com/api/oauth2/authorize?client_id=796007401903489084&permissions=8&scope=bot)
[**Bota Oy Ver**](https://top.gg/bot/796007401903489084/vote)
`)
//.addField(``,``,true)

.setTimestamp()
.setFooter(`${message.author.username} Tarafından İstendi! | Kullanıcı İD - ${message.author.id}`)
.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['guard-help','guard','koruma'], 
  permLevel: 0
};

exports.help = {
  name: "guard",
  description: '',
  usage: 'guard'
};