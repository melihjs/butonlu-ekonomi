const d = require('discord.js');
const ds = require('discord-buttons');
const client = new d.Client();
client.db = require('croxydb');
client.cmds = new d.Collection();
client.cmdFolder = require('fs');
client.addBalance = (userId, amount) => client.db.add(`para_${userId}`, amount);
client.delBalance = (userId, amount) => client.db.subtract(`para_${userId}`, amount);
client.getBalance = (userId) => {
  var bal = client.db.get(`para_${userId}`);
  return bal || 0;
};
require('discord-buttons')(client);

client.on('ready', () => {
  console.log('bot hazır.');
});

client.on('message', async (message) => {
  var prefix = "prefix";
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift();
  var cmd = client.cmds.get(command);
  if (!cmd) return;
  cmd.runner(client, message, args, d, ds);
});

client.cmdFolder.readdir('./komutlar', async (err, files) => {
  if (err) throw new Error(err.message);
  files.forEach(async (dosya) => {
    var file = require(`./komutlar/${dosya}`);
    client.cmds.set(file.name, file);
  });
});

client.on('message', async (m) => {
  if (m.author.bot) return;
  client.addBalance(m.author.id, '1');
});

client.login('token');