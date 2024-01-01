const Discord = require("discord.js")
const client = new Discord.Client({intents: ["Guilds", "GuildMessages", "MessageContent"]});
const token = "MTE5MTAwMTgyMzU0OTYwODAyNg.G50aY7.nCjbQAoPEHFwfx4WpuDkDOpcXrwTbjCwJ4y7DE";
client.login(token)

client.once('ready', function() {
    console.log("ready");
})

client.on('messageCreate', function(message) {
    if (message.content == "hi") {
        message.channel.send("hello")
    }
})