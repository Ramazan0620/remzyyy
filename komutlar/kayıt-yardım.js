const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor("#3a00fe")
.setAuthor(`Kayıt Yardım Menüsü | GELİŞTİRME AŞAMASINDA`)
.setDescription(`
:white_small_square:  \`${prefix}otorol\` \n **Sunucuya Gelen Kullanıcılara Ayarlamış Olduğunuz Rolü Otomatik Verir.**\n
:white_small_square:  \`${prefix}oto-isim\` \n **Sunucuya Gelen Kullanıcıların İsimlerini Otomatik Sizin Belirlediğiniz İsmi Yapar.**\n
:white_small_square:  \`${prefix}kayıt-kanal\` \n **Kaydın Yapılıcağı Kanalı Belirler.**\n
:white_small_square:  \`${prefix}kayıt-yetkili\` \n **Kaydı Yapıcak Yetkiliyi Belirlemenizi Sağlar.**\n
:white_small_square:  \`${prefix}kız-rol\` \n **Kayıdı Yaparken Vermesi Gereken Kız Rolünü Belirlemenizi Sağlar.**\n
:white_small_square:  \`${prefix}kız - k\` \n **Kişiyi Belirlenen Kız Rolünde Kayıt Etmenizi Sağlar.**\n
:white_small_square:  \`${prefix}erkek-rol\` \n **Kayıdı Yaparken Vermesi Gereken Erkek Rolünü Belirlemenizi Sağlar.**\n
:white_small_square:  \`${prefix}erkek - e\` \n **Kişiyi Belirlenen Erkek Rolünde Kayıt Etmenizi Sağlar.**\n
:white_small_square:  \`${prefix}alınıcak-rol\` \n **Kaydı Yapılan Kişiden Alınıcak Rolü Belirler (Kayıtsız Rolünü Almasını Sağlar).**\n
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
  aliases: ['kayıt-yardım','register-help','register-commands','registercommands','kyardım'], 
  permLevel: 0
};

exports.help = {
  name: "kayıtyardım",
  description: 'Kayıt Yardım Menüsünü Açar',
  usage: 'kayıtyardım'
};