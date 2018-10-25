exports.run = (client, message, args, level, objects) => {
	if(args.length > 0) {
		let cmdStr = "";
		let commandFile = require(`./${args[0]}.js`);
		cmdStr = cmdStr + commandFile.help.name + ":\n\t- " + 
		commandFile.help.description +"\n\t- " + 
		commandFile.help.usage + "\n";
		message.channel.send(cmdStr);
	} else {
		const fs = require('fs');
		fs.readdir('./commands/', function(err, files) {
			if(err) {
				console.log('Error', err);
			} else {
				let cmdStr = "Use !help <command> for more details.\n";
				let cmdDict = {};
				files.forEach(function(f) {
					let commandFile = require(`./${f}`);
					if(cmdDict[commandFile.help.category] === undefined) {
						cmdDict[commandFile.help.category] = [commandFile.help];
					} else {
						cmdDict[commandFile.help.category].push(commandFile.help);
					}
				});
				
				for(category in cmdDict) {
					cmdStr = cmdStr + "\n" +category + ":";
					for(cmd in cmdDict[category]) {
						cmdStr = cmdStr + "\n\t- " + cmdDict[category][cmd].name;
					}
				}
				message.channel.send(cmdStr);
			}
		});
	}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h", "halp"],
  permLevel: "User"
};

exports.help = {
  name: "Help",
  category: "System",
  description: "Displays all the available commands for your permission level.",
  usage: "!help [command]"
};
