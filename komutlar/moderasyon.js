const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`Moderasyon Menüsü | GELİŞTİRME AŞAMASINDA`)
.setDescription(`
:white_small_square:  \`${prefix}ban\` \n **Banlamak İstediğiniz Kişiyi Etiketleyerek Kişiyi Sunucudan Yasaklamanıza Yarar...**\n
:white_small_square:  \`${prefix}bansay\` \n **Kullanığı Zaman Sunucudaki Yasaklanan Üye Sayısını Gösterir.**\n
:white_small_square:  \`${prefix}kick\` \n **Etiketlediğiniz Kişiyi Sunucudan Atar.**\n
:white_small_square:  \`${prefix}sil\` \n **Kullanılan Kanalda Belirtilen Sayı Kadar Mesaj Siler.**\n
:white_small_square:  \`${prefix}slowmode\` \n **Komutun Kullanıldığı Kanala Yzma Süresi Ayarlar.**\n
:white_small_square:  \`${prefix}capslock-engel\` \n **Suncuuda Büyük Harf Kullanımını Engeller.**\n
:white_small_square:  \`${prefix}çek\` \n **Etiketlediğiniz Kullanıcıyı Bulunduğunız Sesli Kanalınıza Çekersiniz.**\n
:white_small_square:  \`${prefix}git\` \n **Etiketlediğiniz Kullanıcının Sesli Kanalda Yanına Gidersiniz.**\n
:white_small_square:  \`${prefix}oylama\` \n **Oylama Yaparsınız.**\n
:white_small_square:  \`${prefix}kilit\` \n **Kanala Mesaj Atmayı Kapatır - Açar.**\n
[**Bot Davet**](https://discord.com/api/oauth2/authorize?client_id=796007401903489084&permissions=8&scope=bot)
`)
//.addField(``,``,true)

.setTimestamp()
.setFooter(`${message.author.username} Tarafından İstendi!`)
.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['mod-help','moderasyon','mod'], 
  permLevel: 0
};

exports.help = {
  name: "mod-yardım",
  description: 'Yardım Menüsü.',
  usage: 'mod-yardım'
};