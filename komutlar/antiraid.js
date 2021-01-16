const Discord = require("discord.js");
const db = require("wio.db");
exports.run = (client, message, args) => {
 const DBL = require('dblapi.js')
 const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc5NjAwNzQwMTkwMzQ4OTA4NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjEwNzg0ODQ5fQ.zSiJQtFJqbuPp_Oe5vUdVC305-B4evpLy1jiC6H_mQc', client)

  dbl.hasVoted(message.author.id).then(voted => {
    if(voted) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (args[0] == "aç") {
    if (db.has(`antiraidK_${message.guild.id}`) === true) {
      return message.channel.send("Anti-raid zaten açılmış.");
    }
    db.set(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("Anti-raid sistemi başarıyla açıldı");
  }
      } else {
    message.channel.send("**Oy Verilmemiş** <a:remzybasarisiz:799626534993526795> \n Bu komutu kullanabilmek için Remzy'nin top.gg sayfasından bota oy vermen gerekiyor.Sayfaya gitmek için [tıklayabilirsin](https://top.gg/bot/796007401903489084/vote). Oy verdikten sonra tekrar komutu kullanabilirsin")
  }
})
 
  if (args[0] == "kapat") {
    if (db.has(`antiraidK_${message.guild.id}`) === false) {
      return message.channel.send(
        "Anti-raid açılmamış. Açmak için **a!anti-raid aç**"
      );
    }
    db.delete(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("Anti-raid sistemi başarıyla kapatıldı");
  }
  if (!args[0])
    return message.reply(
      "Lütfen geçerli işlem girin. Örnek: **r!anti-raid aç/kapat**"
    );
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "anti-raid"
};