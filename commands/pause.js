exports.run = async (client, message, args, level, audioplayer) => {
	audioplayer.pause();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "Pause",
  category: "Audio",
  description: "Pause the current music.",
  usage: "!pause"
};