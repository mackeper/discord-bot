exports.run = async (client, message, args, level, audioplayer) => {
	audioplayer.resume();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "Resume",
  category: "Audio",
  description: "Resume the current music",
  usage: "!resume"
};