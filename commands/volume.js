exports.run = async (client, message, args, level, audioplayer) => {
	audioplayer.volume(args[0]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "Volume",
  category: "Audio",
  description: "Change the volume of the music, integer 0 - 100.",
  usage: "!volume <0-100>"
};