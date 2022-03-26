const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

({intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});


const prefix = "?";

Client.on("ready", () => {
console.log("bot opérationnel");
});

Client.on("messageCreate", message => {
if (message.author.bot) return;

//?help
if(message.content === prefix + "help"){
const embed = new Discord.MessageEmbed()
.setColor("#0099ff")
.setTitle("Liste des commandes")
.setURL("https://rb126.webnode.fr")
.addField("__?help__", "Affiche la liste des commandes du bot")
.addField("__?website__", "Le lien de mon site s'affiche")
.addField("__?invite__", "Le lien pour m'ajouter à votre serveur s'affiche")
.setImage("https://d6scj24zvfbbo.cloudfront.net/d4ebfbd1d927bf7f7bb011835dc67825/200000001-77c9377c94/450/EXPORT.png?ph=87cf800e3c")
.setTimestamp();

message.channel.send({ embeds: [embed]});
}
});




({intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS
]
});

Client.on("guildMemberAdd", member => {
    console.log("Un nouveau membre est arrivé !");
});

Client.on("guildMemberRemove", member => {
    console.log("Un membre a quitté le serveur");
})









































Client.login(process.env.TOKEN);