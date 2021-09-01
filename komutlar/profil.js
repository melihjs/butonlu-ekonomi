const run = async (client, message, args, discord, disbut) => {
  var bal = client.getBalance(message.author.id)
  return message.channel.send(`${message.author.tag} adlı üyenin bakiyesi: **${bal} GC.**`)
}

module.exports = {
  name: "bakiye",
  runner: run,
};