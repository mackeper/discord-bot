exports.run = async (client, message, args, level, objects) => {
	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel || voiceChannel.type !== 'voice') {
		message.channel.send("Unable to join your voice channel...");
		return;
	}
	voiceChannel.join()
		.then(connection => console.log('Connected to channel ' + voiceChannel.name))
		.catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "Join",
  category: "Audio",
  description: "Join your voice channel.",
  usage: "!join"
};
