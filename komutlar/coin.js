const sahip = require('../sahip.json');

const run = async (client, message, args, discord, disbut) => {
  if (!sahip.ids.includes(message.author.id)) return;
  var arg = args[0];
  if (!arg) { return;
  } else {
    if (arg == "ekle") {
      var user = message.mentions.users.first();
      var arg2 = args[2];
      if (!user) return;
      if (!arg2) return;
      client.addBalance(user.id, arg2);
      return message.react('👍');
    } else if (arg == "sil") {
      var user = message.mentions.users.first();
      var arg2 = args[2];
      if (!user) return;
      if (!arg2) return;
      client.delBalance(user.id, arg2);
      return message.react('👍');
    }
  }
}

module.exports = {
  name: "coin",
  runner: run,
};