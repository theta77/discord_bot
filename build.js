const Discord = require("discord.js")
const client = new Discord.Client({intents: ["Guilds", "GuildMessages", "MessageContent"]});
const token = "MTE5MDkyMzA2NzA1NzI2MjcwMw.GvVt01.TPBAjIZluRssLdyqT8le9R7Bh_k8DLwGC6JNYM";
client.login(token)

client.once('ready', function() {
    console.log("ready");
})

client.on('messageCreate', function(message) {
    // dt, td
    if (message.content == ";;dt" || message.content == ";;dt cannon" || message.content == ";;DT" || message.content == ";;DT포") {
        message.channel.send("https://harddrop.com/wiki/Double_Triple_Cannon_Setups")
    }
    else if (message.content == ";;tsar" || message.content == ";;tsar cannon" || message.content == ";;차르 캐논") {
        message.channel.send("https://hse30.tistory.com/1224")
    }
    else if (message.content == ";;bt" || message.content == ";;bt cannon" || message.content == ";;BT" || message.content == ";;BT포") {
        message.channel.send("https://harddrop.com/wiki/BT_Cannon")
    }

    // tss
    else if (message.content == ";;sdpc" || message.content == ";;SDPC") {
        message.channel.send("https://harddrop.com/wiki/SingleYou")
    }
    else if (message.content == ";;sdpc spin" || message.content == ";;SDPC 스핀") {
        message.channel.send("https://harddrop.com/wiki/SingleYou#SDPC_Spin")
    }
    else if (message.content == ";;stick" || message.content == ";;stickspin" || message.content == ";;스틱스핀") {
        message.channel.send("https://harddrop.com/wiki/Stickspin")
    }
    else if (message.content == ";;last") {
        message.channel.send("https://harddrop.com/wiki/Last")
    }

    // tsd
    else if (message.content == ";;tsd opener" || message.content == ";;개막tsd" || message.content == ";;tki" || message.content == ";;TKI") {
        message.channel.send("https://harddrop.com/wiki/TKI_3_Opening")
    }

    // four-wide
    else if (message.content == ";;c4w" || message.content == ";;C4W" || message.content == ";;센포" || message.content == ";;센터 포와이드") {
        message.channel.send("https://harddrop.com/wiki/4-Wide_Setups#Center_4_Wide")
    }
})