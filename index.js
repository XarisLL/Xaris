const Discord = require("discord.js");
const ytdl = require("ytdl-core")
const Client = new Discord.Client;

const prefix = "-";
const Token = "NzEyMTk5NDE2NzEwMjk5NjUw.XtAAOw.PeZLIPSDLueEzV5DIpiPBPX7TUk"

Client.on("ready", () => {
    console.zlog("bot opérationnel");

    Client.guild.cache.find(guild => guild.id == "759083381010071602").channels.cache.find(channel => channel.id === "764203712456949780")
});

Client.on("guildMemberAdd", member => {
    console.log ("un nouveau membre est arrivé");
    member.guild.channels.cache.find(channel => channel.id === "717648243676151852").send(member.displayName + " a débarquer \nslt mon ruf et bienvenu ds la Xaris :kissing_heart: \nmtn on est **" + member.guild.memberCount + "** sur le serveur !")
    member.roles.add("744132135455031366").then(member => {
        console.log("role atribué pour ") + member.displayName;
    }).catch(() => {
        console.log("le role n'a pas pu etre atribué");
    });
});

Client.on("guildMemberRemove", member => {
    console.log("un membre nous a quitter")
    member.guild.channels.cache.find(channel => channel.id === "717648243676151852").send(member.displayName + " ns a quitter, cette enculer il ns a lacher")
});

Client.on("message", message => {
    if(message.content.startsWith("!" + "play")){
        if(message.member.voice.channel){
            message.member.voice.channel.join().then(connection => {
                let args = message.content.split(" ")

                if(!args[1]){
                    message.reply("tu doi mettre un lien")
                }
                else {
                    let dispatcher = connection.play(ytdl(args[1] , { quality: "highestaudio"}));

                    dispatcher.on("finish", () => {
                        dispatcher.destroy();
                        connection.disconnect();
                    });

                        dispatcher.on("error", err => {
                            console.log("erreur de dispatcher" + err);
                        });
                }
            }).catch(err => {
                message.reply("jarrive pas a rejoindre dsl " + err)
            });
        }
        else {
            message.reply("t pas co a un salon vocal")
        }
    }
});

Client.on("message", message => {
    if(message.author.bot) return;

    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("ta pas ou mal mentionner le membre")
            }
            else {
                if(mention.bannable){
                    mention.roles.remove("721664889625772042")
                    mention.ban();
                    message.channel.send(mention.displayName + " a ete banni");
                }
                else {
                    message.reply("dsl jy arrive pas")
                }
            }
        }
        else if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("ta pas ou mal mentionner le membre")
            }
            else {
                if(mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + " a ete kick");
                }
                else {
                    message.reply("jy arrive pas");
                }
            }
        }
        else if(message.content.startsWith(prefix + "punis")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("ta pas ou mal mentionner le membre");
            }
            else {
                mention.roles.remove("777490924841730058")
                mention.roles.add("759083381010071605");
                message.reply(mention.displayName + " a ete puni");
                
            }
        }
        else if(message.content.startsWith(prefix + "depunis")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("ta pas ou mal mentionner le membre");
            }
            else {
                mention.roles.add("777490924841730058")
                mention.roles.remove("759083381010071605");
                message.channel.send(mention.displayName + " ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "temp punis")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("ta pas ou mal mentionner le membre");
            }
            else {
                let args = message.content.split(" ");

                mention.roles.add("721267878032179211")
                setTimeout(function() {
                    mention.roles.remove("721267878032179211")
                    message.channel.send("<@" + mention.id + "> ca y est t libre mon gars");
                }, args[0] * 1000);
            }
        }
        else if(message.content.startsWith(prefix + "call of duty")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.add("718911416547147867")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "csgo")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            
            }
            else {
                mention.roles.add("718696128299663401")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "fortnite")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.add("712321982946869320")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "garry's mod")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.add("712322722713305201")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "gta")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.add("712323657183002695")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "minecraft")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.add("712322067206504538")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "paladins")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.add("712322478487371857")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "rocket league")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.add("712322342122029067")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "warzone")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.add("712322672796893254")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "supr call of duty")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.remove("718911416547147867")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "supr csgo")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.remove("759083381044019263")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "supr fortnite")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.remove("712321982946869320")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "supr garry's mod")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.remove("712322722713305201")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "supr gta")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.remove("712323657183002695")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "supr minecraft")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.remove("712322067206504538")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "supr paladins")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.remove("712322478487371857")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "supr rocket league")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
            }
            else {
                mention.roles.remove("712322342122029067")
                message.reply("ca y est");
            }
        }
        else if(message.content.startsWith(prefix + "supr warzone")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("ta pas ou mal mentionner le membre");
            }
            else {
                mention.roles.remove("712322672796893254")
                message.reply("ca y est");
            }
        }
    }

    //!salut
    if(message.content == prefix + "salut"){
        message.channel.send("wsh le gang")
    }

    //!salut
    if(message.content == prefix + "c'est qui le plus beau ?"){
        message.channel.send("pas toi éspece de con")
    }

    //!salut
    if(message.content == prefix + "met de la musique"){
        message.channel.send("demande à capuzi")
    }

    //!salut
    if(message.content == prefix + "fait une blague"){
        message.channel.send("coment apelle ton un chien san pate ? \non l'appelle pas on vien le chercher :rofl: ")
    }

    //!salut
    if(message.content == prefix + "ta geule"){
        message.channel.send(":middle_finger: ")
    }

    //!salut
    if(message.content == prefix + "je t'aime"){
        message.channel.send(":nauseated_face: :nauseated_face: :face_vomiting: :face_vomiting: :face_vomiting: ")
    }

    //!salut
    if(message.content == prefix + "cou cou"){
        message.channel.send("cc")
    }

    //!salut
    if(message.content == prefix + "tu es qui ?"){
        message.channel.send("je suis TMSG \n(Ta Mere en String de Guerre)")
    }

    //!salut
    if(message.content == prefix + "tu es moche"){
        message.channel.send(":no_mouth: ")
    }
    
    //!salut
    if(message.content == prefix + "teste"){
        message.channel.send("cv chui ok")
    }

    //!salut
    if(message.content == prefix + "qu'est ce que tu sais faire ?"){
        message.channel.send("pas grand chose a part casser le cul de ta maman 3 a 4 fois par jour")
    }

    //!salut
    if(message.content == prefix + "ca va ?"){
        message.channel.send("oe et toi ?")
    }

     //!salut
     if(message.content == prefix + "3*4 ?"){
        message.channel.send("12")
    }

    //!salut
    if(message.content == prefix + "c'est lequel le bot le plus nul ?"){
        message.channel.send("celui d'owen pcq lui il le fai en python c trop facile")
    }

    //!salut
    if(message.content == "kenzo vien"){
        message.channel.send("nn il ma souler lui degage le")
    }

    //!salut
    if(message.content == prefix + "c'est laquelle la pdp la plus nul ?"){
        message.channel.send("celle de leo c fuze son truque \n:nauseated_face: ")
    }

    //!salut
    if(message.content == prefix + "tu peu me mettre modo ?"){
        message.channel.send("t un ouf toi")
    }

    //!salut
    if(message.content == prefix + "jeux"){
        message.channel.send("Fortnite 🚌 \nMinecraft ⛏ \nRocket League ⚽🚗 \nPaladins 🏹 \nWarzone 🔪 \nGarry's mod 😂 \nGTA 🔫 \nCSGO 🔥 \nCall of Duty 💣")
    }

    //!salut
    if(message.content == prefix + "bonjour"){
        message.channel.send("salut")
    }

    //!salut
    if(message.content == prefix + "regles"){
        message.channel.send("1) ici c la street c pas comme ds les autres serveurs tt pouris ou on a pas le droit de dire des gros mots, ici on fait ce quon veu \n2)interdi dinsulter ilian il le merite pas, le pauvre il a eu du mal a me creer pour que je vous aide tous a etre dans un server potable \n3)tt jour se rappeller que la Xaris est le meilleur de tt les server \n4)tt les rendez-vous de jeux video ce fond vers 2h \n5)ntm kenzo pcq jtaime pas")
    }

    //!salut
    if(message.content == prefix + "ca va ca va"){
        message.channel.send("jmen blc")
    }

    //!salut
    if(message.content == prefix + "trql"){
        message.channel.send("jmen blc")
    }

    //!salut
    if(message.content == prefix + "oe"){
        message.channel.send("jmen blc")
    }

    //!salut
    if(message.content == prefix + "oui"){
        message.channel.send("jmen blc")
    }
    
    //!salut
    if(message.content == prefix + ""){
        message.channel.send("")
    }
        
    //!salut
    if(message.content == prefix + ""){
        message.channel.send("")
    }
        
    //!salut
    if(message.content == prefix + ""){
        message.channel.send("")
    }
        
    //!salut
    if(message.content == prefix + ""){
        message.channel.send("")
    }
        
    //!salut
    if(message.content == prefix + ""){
        message.channel.send("")
    }
        
    //!salut
    if(message.content == prefix + ""){
        message.channel.send("")
    }
        
    //!salut
    if(message.content == prefix + ""){
        message.channel.send("")
    }
        
    //!salut
    if(message.content == prefix + ""){
        message.channel.send("")
    }
        
    //!salut
    if(message.content == prefix + ""){
        message.channel.send("")
    }
        
    //!salut
    if(message.content == prefix + ""){
        message.channel.send("")
    }

    if(message.content == prefix + "call of lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous call of duty lundi")
    }

    if(message.content == prefix + "call of mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous call of duty mardi")
    }

    if(message.content == prefix + "call of mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous call of duty mercredi")
    }
    
    if(message.content == prefix + "call of jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous call of duty jeudi")
    }

    if(message.content == prefix + "call of vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous call of duty vendredi")
    }
    
    if(message.content == prefix + "call of samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous call of duty samedi")
    }
    
    if(message.content == prefix + "call of dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous call of duty dimanche")
    }

    if(message.content == prefix + "csgo lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous csgo lundi")
    }

    if(message.content == prefix + "csgo mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous csgo mardi")
    }

    if(message.content == prefix + "csgo mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous csgo mercredi")
    }
    
    if(message.content == prefix + "csgo jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous csgo jeudi")
    }

    if(message.content == prefix + "csgo vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous csgo vendredi")
    }
    
    if(message.content == prefix + "csgo samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous csgo samedi")
    }
    
    if(message.content == prefix + "csgo dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous csgo dimanche")
    }

    if(message.content == prefix + "fortnite lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous fortnite lundi")
    }

    if(message.content == prefix + "fortnite mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous fortnite mardi")
    }

    if(message.content == prefix + "fortnite mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous fortnite mercredi")
    }
    
    if(message.content == prefix + "fortnite jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous fortnite jeudi")
    }

    if(message.content == prefix + "fortnite vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous fortnite vendredi")
    }
    
    if(message.content == prefix + "fortnite samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous fortnite samedi")
    }
    
    if(message.content == prefix + "fortnite dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous fortnite dimanche")
    }

    if(message.content == prefix + "garry's lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous garry's mod lundi")
    }

    if(message.content == prefix + "garry's mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous garry's mod mardi")
    }

    if(message.content == prefix + "garry's mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous garry's mod mercredi")
    }
    
    if(message.content == prefix + "garry's jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous garry's mod jeudi")
    }

    if(message.content == prefix + "garry's vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous garry's mod vendredi")
    }
    
    if(message.content == prefix + "garry's samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous garry's mod samedi")
    }
    
    if(message.content == prefix + "garry's dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous garry's mod dimanche")
    }

    if(message.content == prefix + "gta lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous gta lundi")
    }

    if(message.content == prefix + "gta mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous gta mardi")
    }

    if(message.content == prefix + "gta mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous gta mercredi")
    }
    
    if(message.content == prefix + "gta jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous gta jeudi")
    }

    if(message.content == prefix + "gta vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous gta vendredi")
    }
    
    if(message.content == prefix + "gta samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous gta samedi")
    }
    
    if(message.content == prefix + "gta dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous gta dimanche")
    }

    if(message.content == prefix + "minecraft lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous minecraft lundi")
    }

    if(message.content == prefix + "minecraft mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous minecraft mardi")
    }

    if(message.content == prefix + "minecraft mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous minecraft mercredi")
    }
    
    if(message.content == prefix + "minecraft jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous minecraft jeudi")
    }

    if(message.content == prefix + "minecraft vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous minecraft vendredi")
    }
    
    if(message.content == prefix + "minecraft samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous minecraft samedi")
    }
    
    if(message.content == prefix + "minecraft dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous minecraft dimanche")
    }

    if(message.content == prefix + "paladins lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous paladins lundi")
    }

    if(message.content == prefix + "paladins mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous paladins mardi")
    }

    if(message.content == prefix + "paladins mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous paladins mercredi")
    }
    
    if(message.content == prefix + "paladins jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous paladins jeudi")
    }

    if(message.content == prefix + "paladins vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous paladins vendredi")
    }
    
    if(message.content == prefix + "paladins samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous paladins samedi")
    }
    
    if(message.content == prefix + "paladins dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous paladins dimanche")
    }

    if(message.content == prefix + "rocket league lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous rocket league lundi")
    }

    if(message.content == prefix + "rocket league mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous rocket league mardi")
    }

    if(message.content == prefix + "rocket league mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous rocket league mercredi")
    }
    
    if(message.content == prefix + "rocket league jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous rocket league jeudi")
    }

    if(message.content == prefix + "rocket league vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous rocket league vendredi")
    }
    
    if(message.content == prefix + "rocket league samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous rocket league samedi")
    }
    
    if(message.content == prefix + "rocket league dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous rocket league dimanche")
    }

    if(message.content == prefix + "warzone lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous warzone lundi")
    }

    if(message.content == prefix + "warzone mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous warzone mardi")
    }

    if(message.content == prefix + "warzone mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous warzone mercredi")
    }
    
    if(message.content == prefix + "warzone jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous warzone jeudi")
    }

    if(message.content == prefix + "warzone vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous warzone vendredi")
    }
    
    if(message.content == prefix + "warzone samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous warzone samedi")
    }
    
    if(message.content == prefix + "warzone dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("@everyone **" + message.author.username + "** a creer un rendez-vous warzone dimanche")
    }

    //!salut
    if(message.content == prefix + "commandes"){
        message.channel.send("-ban \n-kick \n-punis \n-depunis \n-jeux \n-regles \n-jeux video+jour de la semaine (pour creer un rendez-vous) \n-jeux video+mention (pour ajouter quelqun ds un role de jeux video) \n-supr+jeux video+mention (pour enlever quelqun ds un role de jeux)")
    }

    if(message.content == prefix + ":bomb: lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous  duty lundi")
    }

    if(message.content == prefix + ":bomb: mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous  duty mardi")
    }

    if(message.content == prefix + ":bomb: mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous  duty mercredi")
    }
    
    if(message.content == prefix + ":bomb: jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous  duty jeudi")
    }

    if(message.content == prefix + ":bomb: vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous  duty vendredi")
    }
    
    if(message.content == prefix + ":bomb: samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous  duty samedi")
    }
    
    if(message.content == prefix + ":bomb: dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous  duty dimanche")
    }

    if(message.content == prefix + ":fire: lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :fire:  lundi")
    }

    if(message.content == prefix + ":fire:  mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :fire:  mardi")
    }

    if(message.content == prefix + ":fire:  mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :fire:  mercredi")
    }
    
    if(message.content == prefix + ":fire: jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :fire:  jeudi")
    }

    if(message.content == prefix + ":fire: vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :fire:  vendredi")
    }
    
    if(message.content == prefix + ":fire: samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :fire:  samedi")
    }
    
    if(message.content == prefix + ":fire: dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :fire:  dimanche")
    }

    if(message.content == prefix + ":bus: lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :bus:  lundi")
    }

    if(message.content == prefix + ":bus: mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :bus:  mardi")
    }

    if(message.content == prefix + ":bus: mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :bus:  mercredi")
    }
    
    if(message.content == prefix + ":bus: jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :bus:  jeudi")
    }

    if(message.content == prefix + ":bus: vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :bus:  vendredi")
    }
    
    if(message.content == prefix + ":bus: samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :bus:  samedi")
    }
    
    if(message.content == prefix + ":bus: dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :bus:  dimanche")
    }

    if(message.content == prefix + ":joy: lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :joy: mod lundi")
    }

    if(message.content == prefix + ":joy: mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :joy: mod mardi")
    }

    if(message.content == prefix + ":joy: mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :joy: mod mercredi")
    }
    
    if(message.content == prefix + ":joy: jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :joy: mod jeudi")
    }

    if(message.content == prefix + ":joy: vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :joy: mod vendredi")
    }
    
    if(message.content == prefix + ":joy: samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :joy: mod samedi")
    }
    
    if(message.content == prefix + ":joy: dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :joy: mod dimanche")
    }

    if(message.content == prefix + ":gun: lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous lundi")
    }

    if(message.content == prefix + ":gun: mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous mardi")
    }

    if(message.content == prefix + ":gun: mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous mercredi")
    }
    
    if(message.content == prefix + ":gun: jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous jeudi")
    }

    if(message.content == prefix + ":gun: vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous vendredi")
    }
    
    if(message.content == prefix + ":gun: samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous samedi")
    }
    
    if(message.content == prefix + ":gun: dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous dimanche")
    }

    if(message.content == prefix + ":pick: lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :pick: lundi")
    }

    if(message.content == prefix + ":pick: mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :pick: mardi")
    }

    if(message.content == prefix + ":pick: mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :pick: mercredi")
    }
    
    if(message.content == prefix + ":pick: jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :pick: jeudi")
    }

    if(message.content == prefix + ":pick: vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :pick: vendredi")
    }
    
    if(message.content == prefix + ":pick: samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :pick: samedi")
    }
    
    if(message.content == prefix + ":pick: dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :pick: dimanche")
    }

    if(message.content == prefix + ":bow_and_arrow: lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :bow_and_arrow: lundi")
    }

    if(message.content == prefix + ":bow_and_arrow: mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :bow_and_arrow: mardi")
    }

    if(message.content == prefix + ":bow_and_arrow: mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :bow_and_arrow: mercredi")
    }
    
    if(message.content == prefix + ":bow_and_arrow: jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :bow_and_arrow: jeudi")
    }

    if(message.content == prefix + ":bow_and_arrow: vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :bow_and_arrow: vendredi")
    }
    
    if(message.content == prefix + ":bow_and_arrow: samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :bow_and_arrow: samedi")
    }
    
    if(message.content == prefix + ":bow_and_arrow: dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :bow_and_arrow: dimanche")
    }

    if(message.content == prefix + ":soccer: :red_car: lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :red_car:  lundi")
    }

    if(message.content == prefix + ":soccer: :red_car: mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :red_car:  mardi")
    }

    if(message.content == prefix + ":soccer: :red_car:  mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :red_car:  mercredi")
    }
    
    if(message.content == prefix + ":soccer: :red_car: jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :red_car:  jeudi")
    }

    if(message.content == prefix + ":soccer: :red_car: vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :red_car:  vendredi")
    }
    
    if(message.content == prefix + ":soccer: :red_car:  samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :red_car:  samedi")
    }
    
    if(message.content == prefix + ":soccer: :red_car:  dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :red_car:  dimanche")
    }

    if(message.content == prefix + ":knife: lundi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :knife: lundi")
    }

    if(message.content == prefix + ":knife: mardi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :knife: mardi")
    }

    if(message.content == prefix + ":knife: mercredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :knife: mercredi")
    }
    
    if(message.content == prefix + ":knife: jeudi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :knife: jeudi")
    }

    if(message.content == prefix + ":knife: vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :knife: vendredi")
    }
    
    if(message.content == prefix + ":knife: samedi"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :knife: samedi")
    }
    
    if(message.content == prefix + ":knife: dimanche"){
        message.guild.channels.cache.find(channel => channel.id === "719451994624098324").send("**" + message.author.username + "** a creer un rendez-vous :knife: dimanche")
    }

    if(message.content == prefix + "among vendredi"){
        message.guild.channels.cache.find(channel => channel.id === "780522566216712192").send("@everyone **" + message.author.username + "** a creer un rendez-vous Among Us vendredi de 18h à quand tu veux")
    }

    //!salut
    if(message.content == "parle mieux"){
        message.channel.send(":rofl: :rofl: :rofl: :rofl: ")
    }

    //!salut
    if(message.content == prefix + "petit poney"){
        message.channel.send("https://www.youtube.com/watch?v=u5Ho1trvlro")
    }

    //!salut
    if(message.content == prefix + "chacaron macaron"){
        message.channel.send("https://www.youtube.com/watch?v=_i4t5BNV1KE")
    }

    //!salut
    if(message.content == prefix + "mais non mais non"){
        message.channel.send("https://www.youtube.com/watch?v=T30ec-r1yjM")
    }

    //!salut
    if(message.content == prefix + "chevre qui crie"){
        message.channel.send("https://www.youtube.com/watch?v=7jXwFqomkmc")
    }

    //!salut
    if(message.content == prefix + "rap"){
        message.channel.send("https://open.spotify.com/playlist/3mNwMJUt3cZ3ZGevhDMB3g")
    }
    
    //!salut
    if(message.content == prefix + "ikson"){
        message.channel.send("https://open.spotify.com/playlist/7yCumhEwLQa5Lx9wLC2ikY")
    }
    
    //!salut
    if(message.content == prefix + "massa"){
        message.channel.send("https://www.youtube.com/watch?v=AS6vdl4WtEM")
    }
    
    //!salut
    if(message.content == prefix + "nique la bac"){
        message.channel.send("https://www.youtube.com/watch?v=Zc_c36jJ40I")
    }

    //!salut
    if(message.content == prefix + "6.3"){
        message.channel.send("https://www.youtube.com/watch?v=nFNWXGemcpM")
    }
    
    //!salut
    if(message.content == prefix + "djomb"){
        message.channel.send("https://www.youtube.com/watch?v=zquFZaHw2TQ")
    }
    
    //!salut
    if(message.content == prefix + "en detente"){
        message.channel.send("https://www.youtube.com/watch?v=Qs7IIWgs95s")
    }
    
    //!salut
    if(message.content == prefix + "gang"){
        message.channel.send("https://www.youtube.com/watch?v=1esyx2sHsuk")
    }
        
    //!salut
    if(message.content == prefix + "puissance"){
        message.channel.send("https://www.youtube.com/watch?v=ZuYyv5-0p2c")
    }
        
    //!salut
    if(message.content == prefix + "sale"){
        message.channel.send("https://www.youtube.com/watch?v=KVpeHSX2ZEY")
    }
        
    //!salut
    if(message.content == prefix + "miami heat"){
        message.channel.send("https://www.youtube.com/watch?v=aOEdWj8QC4A&t=67s")
    }
        
    //!salut
    if(message.content == prefix + "rari"){
        message.channel.send("https://www.youtube.com/watch?v=6HRzrA0992A")
    }
        
    //!salut
    if(message.content == prefix + "maman ne le sais pas"){
        message.channel.send("https://www.youtube.com/watch?v=yGJLE1UXBjo")
    }
        
    //!salut
    if(message.content == prefix + "champions league"){
        message.channel.send("https://www.youtube.com/watch?v=zi1D0MKWHU0")
    }

    //!salut
    if(message.content == prefix + "putain de merde"){
        message.channel.send("https://www.youtube.com/watch?v=vkDI5ElVwsA")
    }
    
    //!salut
    if(message.content == prefix + "train de vie"){
        message.channel.send("https://www.youtube.com/watch?v=IUy2KcZpYMc")
    }
    
    //!salut
    if(message.content == prefix + "wlg"){
        message.channel.send("https://www.youtube.com/watch?v=Jpw5Y2DMai4")
    }
    
    //!salut
    if(message.content == prefix + "elle bonne sa mere"){
        message.channel.send("https://www.youtube.com/watch?v=pX8CNkjmXGk")
    }
    
    //!salut
    if(message.content == prefix + "rechercher"){
        message.channel.send("https://www.youtube.com/watch?v=-rF_8dM8DX8")
    }
    
    //!salut
    if(message.content == prefix + "t shirt croco"){
        message.channel.send("https://www.youtube.com/watch?v=uTJjd5MhXaE")
    }
    
    //!salut
    if(message.content == prefix + "roulette russe"){
        message.channel.send("https://www.youtube.com/watch?v=qP0aqVVxijU")
    }
    
    //!salut
    if(message.content == prefix + "dingue"){
        message.channel.send("https://www.youtube.com/watch?v=hcuvmcNbaJg")
    }
        
    //!salut
    if(message.content == prefix + "popopop"){
        message.channel.send("https://www.youtube.com/watch?v=H_rZMgS5nE4")
    }
            
    //!salut
    if(message.content == prefix + "jcvd"){
        message.channel.send("https://www.youtube.com/watch?v=ByHxaDIyRTk")
    }
            
    //!salut
    if(message.content == prefix + "ne revien pas"){
        message.channel.send("https://www.youtube.com/watch?v=ZVgdQHA_IH4")
    }
            
    //!salut
    if(message.content == prefix + "rr 9.1"){
        message.channel.send("https://www.youtube.com/watch?v=rD-pMUYJxGM")
    }
            
    //!salut
    if(message.content == prefix + "un peu de haine"){
        message.channel.send("https://www.youtube.com/watch?v=KvmRDZy93Nc")
    }
            
    //!salut
    if(message.content == prefix + "papers"){
        message.channel.send("https://www.youtube.com/watch?v=kTwTWsw4rY4")
    }
            
    //!salut
    if(message.content == prefix + "woin woin"){
        message.channel.send("https://www.youtube.com/watch?v=tWIDtMcAan0")
    }
            
    //!salut
    if(message.content == prefix + "he ho"){
        message.channel.send("https://www.youtube.com/watch?v=xSHGzO4FzBA")
    }
            
    //!salut
    if(message.content == prefix + "medicament"){
        message.channel.send("https://www.youtube.com/watch?v=AhO3INtwFwA")
    }
            
    //!salut
    if(message.content == prefix + "les mechants"){
        message.channel.send("https://www.youtube.com/watch?v=IW7hshq4J-M")
    }
            
    //!salut
    if(message.content == prefix + "reseaux"){
        message.channel.send("https://www.youtube.com/watch?v=tul6zYBp9tA")
    }
            
    //!salut
    if(message.content == prefix + "khapta"){
        message.channel.send("https://www.youtube.com/watch?v=W-gmIG41dGA")
    }
            
    //!salut
    if(message.content == prefix + "damdamdeo"){
        message.channel.send("https://www.youtube.com/watch?v=4p2J7y7R0Bk")
    }
            
    //!salut
    if(message.content == prefix + "aristocrate"){
        message.channel.send("https://www.youtube.com/watch?v=eKtXIePYoTY")
    }
            
    //!salut
    if(message.content == prefix + "moulaga"){
        message.channel.send("https://www.youtube.com/watch?v=5OAysfkcMjg")
    }
            
    //!salut
    if(message.content == prefix + "batiment"){
        message.channel.send("https://www.youtube.com/watch?v=1Jt9nLUA3KU")
    }
            
    //!salut
    if(message.content == prefix + "problemmes"){
        message.channel.send("https://www.youtube.com/watch?v=f5j3r7DYdSw")
    }
            
    //!salut
    if(message.content == prefix + "street"){
        message.channel.send("https://www.youtube.com/watch?v=Vc1qKb3pXwE")
    }
            
    //!salut
    if(message.content == prefix + "power rangers"){
        message.channel.send("https://www.youtube.com/watch?v=GkBpzh_TRZo")
    }
            
    //!salut
    if(message.content == prefix + "mechant"){
        message.channel.send("https://www.youtube.com/watch?v=hpGNRHdNSDU")
    }
            
    //!salut
    if(message.content == prefix + "jamais"){
        message.channel.send("https://www.youtube.com/watch?v=LJaCSPxDrSg")
    }
            
    //!salut
    if(message.content == prefix + "mec de cite"){
        message.channel.send("https://www.youtube.com/watch?v=mbhxt4qxojM")
    }
            
    //!salut
    if(message.content == prefix + "stop"){
        message.channel.send("")
    }
            
    //!salut
    if(message.content == prefix + "dfedr"){
        message.channel.send("")
    }
            
    //!salut
    if(message.content == prefix + "a kinshasa"){
        message.channel.send("")
    }
            
    //!salut
    if(message.content == prefix + "idiote"){
        message.channel.send("")
    }
            
    //!salut
    if(message.content == prefix + "ils ns comprennent pas"){
        message.channel.send("")
    }
            
    //!salut
    if(message.content == prefix + "hola"){
        message.channel.send("")
    }
            
    //!salut
    if(message.content == prefix + "copine"){
        message.channel.send("")
    }
                
    //!salut
    if(message.content == prefix + "a c cool"){
        message.channel.send("")
    }
                    
    //!salut
    if(message.content == prefix + "kekchose"){
        message.channel.send("")
    }
                    
    //!salut
    if(message.content == prefix + "zipette"){
        message.channel.send("")
    }
                    
    //!salut
    if(message.content == prefix + "nique tout tes morts"){
        message.channel.send("oe de ouf")
    }
                    
    //!salut
    if(message.content == prefix + "lilian nique ta mere"){
        message.channel.send("oe wlh nique ta mere il a raison")
    }
                    
    //!salut
    if(message.content == prefix + "je vais te goumer"){
        message.channel.send(":kissing_heart: ")
    }
                    
    //!salut
    if(message.content == prefix + "jvai te goumer sale enculer"){
        message.channel.send(":kissing_heart: ")
    }
                    
    //!salut
    if(message.content == prefix + "jvais te goumer"){
        message.channel.send(":kissing_heart: ")
    }
                    
    //!salut
    if(message.content == prefix + "ptnn vas y tu soule"){
        message.channel.send(":kissing_heart: ")
    }
    
    //!salut
    if(message.content == prefix + "ara"){
        message.channel.send("Ajoute une réaction à ce message avec l'émoji du role que tu veut obtenir")
    }
    
    //!salut
    if(message.content == prefix + "rap 1"){
        message.channel.send("https://open.spotify.com/playlist/7sDBPgcTcKuArG0qvVVy9N")
    }

    //!salut
    if(message.content == prefix + "bd"){
        message.channel.send("https://www.youtube.com/watch?v=-CVn3-3g_BI")
    }

    //!salut
    if(message.content == prefix + ""){
        message.channel.send("")
    }

    if(message.content == prefix + "id"){
        message.channel.send("**" + message.author.username + "** a comme id __" + message.author + "__");
    }
    
    if(message.content == prefix + "play'"){
        message.channel.send("tu doi mettre un lien t bete ou quoi ?");
    }
});

Client.login(Token);
