exports.run = async (client, message, args, level, audioplayer) => {
	let [start, end] = args;
	let value = Math.floor(Math.random() * parseInt(end)) + parseInt(start);
	message.channel.send(value);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "Random",
  category: "Other",
  description: "Random value.",
  usage: "!random <start> <end>"
};