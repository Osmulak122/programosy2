const Discord = require('discord.js');
var bot = new Discord.Client();

const PREFIX = "?";

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "welcome").send(member.toString() + ", Witaj na programosach :)");
    var role = member.guild.roles.find('name', 'Visitor');
    member.addRole(role)
    })


bot.on("ready", function() {
    bot.user.setGame('Made by Minty!')
    console.log("Im Ready!");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;
        var args = message.content.substring(PREFIX.length).split(" ");

        switch (args[0].toLowerCase()) {
            case "magik":
                message.delete();
                message.channel.send("Magik ssie");
                break;
            case "minty";
                message.channel.send("no chyba nie");
                break;

        }
    }  
)




bot.login(process.env.BOT_TOKEN);
