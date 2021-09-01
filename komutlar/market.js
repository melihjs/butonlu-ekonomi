const run = async (client, message, args, discord, disbut) => {
  var bal = client.getBalance(message.author.id);
  var aries = "750000";
  var polaris = "400000";
  var elnath = "250000";
  var taurus = "175000";
  var orion = "100000";
  var b1 = new disbut.MessageButton()
  .setLabel('1')
  .setID('1');
  var b2 = new disbut.MessageButton()
  .setLabel('2')
  .setID('2');
  var b3 = new disbut.MessageButton()
  .setLabel('3')
  .setID('3');
  var b4 = new disbut.MessageButton()
  .setLabel('4')
  .setID('4');
  var b5 = new disbut.MessageButton()
  .setLabel('5')
  .setID('5');
  var b6 = new disbut.MessageButton()
  .setStyle('red')
  .setLabel('X')
  .setID('x');
  if (bal > aries) {
    b1.setStyle('green');
  } else {
    b1.setStyle('grey').setDisabled(true);
  }
  if (bal > polaris) {
    b2.setStyle('green');
  } else {
    b2.setStyle('grey').setDisabled(true);
  }
  if (bal > elnath) {
    b3.setStyle('green');
  } else {
    b3.setStyle('grey').setDisabled(true);
  }
  if (bal > taurus) {
    b4.setStyle('green');
  } else {
    b4.setStyle('grey').setDisabled(true);
  }
  if (bal > orion) {
    b5.setStyle('green');
  } else {
    b5.setStyle('grey').setDisabled(true);
  }
  var row1 = new disbut.MessageActionRow()
  .addComponents([ b1, b2, b3 ]);
  var row2 = new disbut.MessageActionRow()
  .addComponents([ b4, b5, b6 ]);
  return message.channel.send(`<@${message.author.id}>, market aşağıda gösterilmektedir:\n**__Bakiyeniz: ${bal} GC__**\n\n**1)** Aries: 750,000 GC\n**2)** Polaris: 400,000 GC\n**3)** Elnath: 250,000 GC\n**4)** Taurus: 175,000 GC\n**5)** Orion: 100,000 GC\n\n**Bakiyenizle satın alabilecekleriniz yeşil, satın alamayacaklarınız gri renkte gösterilmektedir.**`, { components: [ row1, row2 ] }).then(async (msg) => {
    var filter = b => b.clicker.member.id !== client.user.id;
    var collector = msg.createButtonCollector(filter, {});
    collector.on('collect', async (btn) => {
      await btn.clicker.fetch();
      if (btn.id == "1") {
        if (btn.clicker.member.id !== message.author.id) {
          btn.reply.send("Sen bunu yapamazsın.", true);
        } else {
          btn.reply.send(`:+1: **Aries** adlı eşyayı satın aldın.`, true).then(() => {
            client.delBalance(message.author.id, '750000');
            client.db.add(`aries_${message.author.id}`, 1);
          });
        }
      } else if (btn.id == "2") {
        if (btn.clicker.member.id !== message.author.id) {
          btn.reply.send("Sen bunu yapamazsın.", true);
        } else {
          btn.reply.send(`:+1: **Polaris** adlı eşyayı satın aldın.`, true).then(() => {
            client.delBalance(message.author.id, '400000');
            client.db.add(`polaris_${message.author.id}`, 1);
          });
        }
      } else if (btn.id == "3") {
        if (btn.clicker.member.id !== message.author.id) {
          btn.reply.send("Sen bunu yapamazsın.", true);
        } else {
          btn.reply.send(`:+1: **Elnath** adlı eşyayı satın aldın.`, true).then(() => {
            client.delBalance(message.author.id, '250000');
            client.db.add(`elnath_${message.author.id}`, 1);
          });
        }
      } else if (btn.id == "4") {
        if (btn.clicker.member.id !== message.author.id) {
          btn.reply.send("Sen bunu yapamazsın.", true);
        } else {
          btn.reply.send(`:+1: **Taurus** adlı eşyayı satın aldın.`, true).then(() => {
            client.delBalance(message.author.id, '175000');
            client.db.add(`taurus_${message.author.id}`, 1);
          });
        }
      } else if (btn.id == "5") {
        if (btn.clicker.member.id !== message.author.id) {
          btn.reply.send("Sen bunu yapamazsın.", true);
        } else {
          btn.reply.send(`:+1: **Orion** adlı eşyayı satın aldın.`, true).then(() => {
            client.delBalance(message.author.id, '100000');
            client.db.add(`orion_${message.author.id}`, 1);
          });
        }
      } else if (btn.id == "x") {
        if (btn.clicker.member.id !== message.author.id) {
          btn.reply.send("Sen bunu yapamazsın.", true);
        } else {
          btn.message.delete({ timeout: 1500 });
        }
      }
    });
  });
};

module.exports = {
  name: "market",
  runner: run,
};