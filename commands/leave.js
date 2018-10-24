exports.run = async (client, message, args, level, audioplayer) => {
	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel || voiceChannel.type !== 'voice') {
		message.channel.send("Unable to leave your voice channel...");
		return;
	}
	voiceChannel.leave();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "Leave",
  category: "Audio",
  description: "Leave voice channel",
  usage: "!leave"
};