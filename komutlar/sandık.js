const ms = require('parse-ms');

const run = async (client, message, args, discord, disbut) => {
  var coins = client.getBalance(message.author.id);
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let times = await client.db.fetch(`worktime_${message.author.id}`);
  let day = 86400000;
  let time = ms(day - (Date.now() - times));
  if (times !== null && day - (Date.now() - times) > 0) {
    let time = ms(day - (Date.now() - times));
    message.channel.send(`Bu komutu kullanabilmek için **${time.hours} saat**, **${time.minutes} dakika** daha beklemen gerekiyor.`);
    return;
  }
  let moneys = rastgeleMiktar(100, 1100);
  message.channel.send(`Günlük bakiyenizi topladınız ve **${moneys} GC** kazandınız, Bu Sandık ile **${coins} GC** bakiyeye ulaştınız.`);
  client.addBalance(message.author.id, moneys),
  client.db.set(`worktime_${message.author.id}`, Date.now());
};

module.exports = {
  name: "sandık",
  runner: run,
};