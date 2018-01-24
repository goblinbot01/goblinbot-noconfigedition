/*
 * Goblin Bot, made by Goblin01
 * UPDATES SOON: fs will be not used any longer, bot will be formatted
*/
// Constants, variables and functions
const Discord = require('discord.js');
const client = new Discord.Client();
// MusicBot Instances
var guilds = {};
let YOUTUBE = process.env.YOUTUBE_API_KEY
const ytdl = require('ytdl-core');
const request = require('request');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
function playMusic(id, message) {
  message.member.voiceChannel.join().then(function (connection) {
    stream = ytdl("https://youtube.com/watch?v=" + id, {filter: "audioonly"})
    skipReq = 0;
    skippers = [];
  
    dispatcher = connection.playStream(stream);
  })
}
function add_to_queue(strID) {
  if (isYoutube(strID)) {
    queue.push(getYoutubeID(strID));
  } else {
    queue.push(strID);
  }
}
function isYoutube(str = "") {
  return str.toLowerCase().indexOf("youtube.com")
}
function getId(str, cb) {
  if (isYoutube(str)) {
    cb(getYoutubeID(str));
  } else {
    search_video(str, function(id) {
      cb(id);
    }, message)
  }
}
function search_video(query, callback) {
  request("https://googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + YOUTUBE + "&maxResults=10", function(error) {
    var json = JSON.parse(body);
    callback(json.items[0],id.videoId)
  })
}
// Misc
var averagePing = 0;
var pingPoll = 0;
var pingPollAdded = 0;
var workTime = Date.now();
var MessagesToDelete = 0;
var SERVER_VALUES = ["//","> "]
const profanities = require("profanities");
var NSFW_PROTECT = "true";
var loop = "false";
var symbol1 = "none";
var symbol2 = "none";
var symbol3 = "none";
var casinosymbol1 = "none";
var casinosymbol2 = "none";
var casinosymbol3 = "none";
var casinosymbol4 = "none";
var casinosymbol5 = "none";
const used = process.memoryUsage().heapUsed / 1024 / 1024;
var seven1 = 0
var banana1 = 0
var grapes1 = 0
var strawberry1 = 0
var space_invader1 = 0
var four_leaf_clover1 = 0
var eightball = 0
var cherry1 = 0
var apple1 = 0
var watermelon1 = 0
var champagne1 = 0
var pizza1 = 0
var Confirm_Casino_Complete = false;
var Confirm_Slot_Complete = false;
const moment = require("moment");
const talkedRecently = new Set();
console.log('\x1b[36m%s\x1b[0m', 'GoblinBot MESSAGE: Initalizing')
var userData = {}; // Known no longer like config file. Those that helped me test the Beta, will get extra Coins.
var serverData = {}; // same as up :)
var helpMsg = "``` Goblin Bot Help \n \n help all; \n help mod; \n help music; \n help commands... ```"
// Functions and variables
function doMagicMeme() {
  var memes = [ // Dank memes.. They are here...
    "Meme 1 of 3: The funniest /r/jokes ever seen ! https://i.imgur.com/lw2a0bY.png",
    "Meme 2 of 3: But its kinda right.. Bellend https://s20.postimg.org/c53oy3tel/wdwdwd.png",
    "Meme 3 of 3: Guess what is this! https://s20.postimg.org/mrxi3ltv1/klo.png https://s20.postimg.org/bfkwltdgd/wdwwdwd.png"
  ];
  return memes[Math.floor(Math.random()*memes.length)];
}
function slots() {
  var symbols = [
    ":seven:",
    ":banana:",
    ":grapes:",
    ":strawberry:",
    ":space_invader:",
    ":four_leaf_clover:",
    ":8ball:",
    ":cherries:"
  ]
  return symbols[Math.floor(Math.random()*symbols.length)];
}
function casino() {
  var casino_symbols = [
    ":seven:",
    ":banana:",
    ":grapes:",
    ":strawberry:",
    ":space_invader:",
    ":four_leaf_clover:",
    ":8ball:",
    ":cherries:",
    ":apple:",
    ":watermelon:",
    ":champagne:",
    ":pizza:"
  ]
  return casino_symbols[Math.floor(Math.random()*casino_symbols.length)];
}
client.on("message", function(message) { // STOP PINGING ME!!! meme
  if (message.content.includes("<@395136355115728896>")) {
    message.channel.send("Stop pinging me :imp:");
  }
})
var errorEmbedCreate = function(des) {
  return({embed: {color: 16711680, title: ":x: Error",description: des, footer: { text: "foot" }}});
}
var warningEmbedCreate = function(des) {
  return({embed: {color: 16763904, title: ":warning: Warning",description: des}});
}
var embedCreate = function(col,des,tit,foo) {
  return({embed: {color: col, title: tit,description: des, footer: { text: foo }}});
}
var cat = "http://random.cat/meow.php"
var servers = {};

setInterval(()=>{
  pingPoll+=client.ping;
  pingPollAdded+=1;
  averagePing = pingPoll / pingPollAdded;
},30000)
// On startup actions
client.on('ready', () => {
  console.log('\x1b[36m%s\x1b[0m', "GoblinBot MESSAGE: I am ready!")
  client.user.setGame("Say //help v0.10", "https://www.twitch.tv/goblinbot_fakestatus_lol")
});
// User Commands
client.on("message", function(message) {
  // ALWAYS return when prefix is undefined.
  if (message.content.startsWith("undefined")) return; // undefined prefix is banned.
  if (message.author.equals(client.user)) {
    console.log('\x1b[33m%s\x1b[0m', "GoblinBot SELF-MESSAGE: Message has been provided from bot: " + message.content)
    return;
  }
  // Firstly, check is the command/message profanity!
  if (NSFW_PROTECT==="true") {
    for (x = 0; x < profanities.length; x++) {
      if (message.content.toUpperCase() == profanities[x].toUpperCase()) {
        console.log("\x1b[33m%s\x1b[0m", "GoblinBot WARN: Profanity detected in following message: " + message.content)
        message.channel.send("Hey! Don't say that!");
        message.delete();
        return;
      }
    }
  }
  if (!guilds[message.guild.id]) {
    guilds[message.guild.id] = {
      queue: [],
      queueNames: [],
      isPlaying: false,
      dispatcher: null,
      voiceChannel: null,
      skipReq: 0,
      skippers: []
    };
  }
  // Level system
  if (!userData[message.member.id]) userData[message.member.id] = {
    messagesSent: 0
  }
  userData[message.member.id].messagesSent++;
  fs.writeFile("userData/userData.json", JSON.stringify(userData), (err) => {
    if (err) {
      console.log("\x1b[31m%s\x1b[0m", "GoblinBot ERR!: Failed to write Level data. Log is shown below.")
      console.error(err)
    }
  })
  if (userData[message.member.id].tokens) {
    if (message.content.length > 10) {
      userData[message.member.id].tokens+=10
      fs.writeFile("userData/userData.json", JSON.stringify(userData), (err) => {
        if (err) {
          console.error(err);
        }
    })}
  }
  if (!serverData[message.guild.id]) serverData[message.guild.id] = {
    serverPrefix: "//"
  }
  // Main command system
  if (!message.content.startsWith(serverData[message.guild.id].serverPrefix)) {
    console.log('\x1b[36m%s\x1b[0m', "Message has been sent in one of channels: " + message.content)
    return;
  } else {
    console.log('\x1b[33m%s\x1b[0m', "GoblinBot COMMAND: Command executed: " + message.content.slice(serverData[message.guild.id].serverPrefix.length))
  }
  // Check user cooldown. (Thanks to ItsJordan#4297)
  // Inside your message event, this code will stop any command during cooldown.
  // Should be placed after your code that checks for bots & prefix, for best performance
  if (talkedRecently.has(message.author.id)) {
    message.reply("Please cool down!")
    return;
  }
  var args = message.content.substring(serverData[message.guild.id].serverPrefix.length).split(" "); // Specify what args are.
  switch (args[0]) { // Command loop
    case "play":
      if (message.member.voiceChannel || guilds[message.guild.id].voiceChannel != null) {
        if (guilds[message.guild.id].queue.length > 0 || guilds[message.guild.id].isPlaying) {
          getId((serverData[message.guild.id].serverPrefix.length + 4), function(id) {
            add_to_queue(id, message);
            fetchVideoInfo(id, function(err, videoInfo) {
              if (err) throw new Error(err);
              message.reply(" added to queue: **" + videoInfo.title + "**");
              guilds[message.guild.id].queueNames.push(videoInfo.title);
            });
          });
        } else {
          isPlaying = true;
          getId((serverData[message.guild.id].serverPrefix.length + 4), function(id) {
            guilds[message.guild.id].queue.push(id);
            playMusic(id, message);
            fetchVideoInfo(id, function(err, videoInfo) {
              if (err) throw new Error(err);
              guilds[message.guild.id].queueNames.push(videoInfo.title);
              message.reply(" now playing: **" + videoInfo.title + "**");
            });
          });
        }
      } else {
        message.reply(" you need to be in a voice channel!");
      }
      break;
    case "bot-stats":
      var ServerResponseTime = Date.now()
      var ProgramResponseTime = Date.now()
      message.channel.sendCode("json", '{ "Version": "0.10", \n  "Heap Memory Used": "' + used + ' / 1024 MB", \n  "Work Time": "' + (Date.now()-workTime) + 'ms", \n  "Ping": "' + client.ping +'ms", \n  "Estimated program response time": "' + (new Date().getTime() - message.createdTimestamp) + 'ms", \n  "Average Ping": "' + averagePing + 'ms"  }')
      break;
    case "casino-slots":
      if (args[1]==="help") {
        message.channel.send({embed: {
          color: 3447003,
          fields: [{
            name: "Differences between Slots and Casino Slots",
            value: "The Slots have 3 symbols, the Casino Symbols have 5. In Slots you can get wins by every way matching 2 or 3 symbols, in Casino Slots you can't. You must match 3, 4 or 5 in a row. Examples:"
          },
          {
            name: "Bad",
            value: ":space_invader: :four_leaf_clover: :space_invader: :four_leaf_clover: :space_invader: \n :pizza: :banana: :banana: :cherries: :banana: "
          },
          {
            name: "Good",
            value: ":seven: :seven: :seven: :space_invader: :apple:"
          },
          {
            name: "Prizes",
            value: "Slots: 2 symbols: 2000 Coins, 3 symbols: 3000 Coins, 777: 10000 Coins. Casino Slots: 3 symbols: 3000 Coins, 4 symbols: 7200 Coins, 5 symbols: 18000 Coins, 77777: 30000 Coins"
          }
        ],
        }})
        return;
      }
      if (!userData[message.member.id].tokens) {
        message.channel.send("You must be registered first. `[prefix]economy register`")
        return;
      }
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 7000);
      userData[message.member.id].tokens-=400
      message.channel.send("Rolling the casino slots. 400 Coins have been taken from your account. You have now " + userData[message.member.id].tokens + " Coins.")
      casinosymbol1 = casino();
      casinosymbol2 = casino();
      casinosymbol3 = casino();
      casinosymbol4 = casino();
      casinosymbol5 = casino();
      message.channel.send(casinosymbol1 + casinosymbol2 + casinosymbol3 + casinosymbol4 + casinosymbol5).then((message)=>{
        setTimeout(() => {
          casinosymbol1 = casino();
          casinosymbol2 = casino();
          casinosymbol3 = casino();
          casinosymbol4 = casino();
          casinosymbol5 = casino();
          message.edit(casinosymbol1 + casinosymbol2 + casinosymbol3 + casinosymbol4 + casinosymbol5)
        },1000)
        setTimeout(() => {
          casinosymbol1 = casino();
          casinosymbol2 = casino();
          casinosymbol3 = casino();
          casinosymbol4 = casino();
          casinosymbol5 = casino();
          message.edit(casinosymbol1 + casinosymbol2 + casinosymbol3 + casinosymbol4 + casinosymbol5)
        },2000)
        setTimeout(() => {
          casinosymbol1 = casino();
          casinosymbol2 = casino();
          casinosymbol3 = casino();
          casinosymbol4 = casino();
          casinosymbol5 = casino();
          message.edit(casinosymbol1 + casinosymbol2 + casinosymbol3 + casinosymbol4 + casinosymbol5)
        },3000)
        setTimeout(() => {
          casinosymbol1 = casino();
          casinosymbol2 = casino();
          casinosymbol3 = casino();
          casinosymbol4 = casino();
          casinosymbol5 = casino();
          message.edit(casinosymbol1 + casinosymbol2 + casinosymbol3 + casinosymbol4 + casinosymbol5)
        },4000)
        setTimeout(() => {
          casinosymbol1 = casino();
          casinosymbol2 = casino();
          casinosymbol3 = casino();
          casinosymbol4 = casino();
          casinosymbol5 = casino();
          message.edit(casinosymbol1 + casinosymbol2 + casinosymbol3 + casinosymbol4 + casinosymbol5)
        },5000)
        setTimeout(() => {
          casinosymbol1 = casino();
          casinosymbol2 = casino();
          casinosymbol3 = casino();
          casinosymbol4 = casino();
          casinosymbol5 = casino();
          message.edit(casinosymbol1 + casinosymbol2 + casinosymbol3 + casinosymbol4 + casinosymbol5)
        },6000)
        setTimeout(() => {
          casinosymbol1 = casino();
          casinosymbol2 = casino();
          casinosymbol3 = casino();
          casinosymbol4 = casino();
          casinosymbol5 = casino();
          message.edit(casinosymbol1 + casinosymbol2 + casinosymbol3 + casinosymbol4 + casinosymbol5)
        },7000)
        setTimeout(() => {
          casinosymbol1 = casino();
          casinosymbol2 = casino();
          casinosymbol3 = casino();
          casinosymbol4 = casino();
          casinosymbol5 = casino();
          message.edit(casinosymbol1 + casinosymbol2 + casinosymbol3 + casinosymbol4 + casinosymbol5)
        },8000)
        setTimeout(() => {
          casinosymbol1 = casino();
          casinosymbol2 = casino();
          casinosymbol3 = casino();
          casinosymbol4 = casino();
          casinosymbol5 = casino();
          message.edit(casinosymbol1 + casinosymbol2 + casinosymbol3 + casinosymbol4 + casinosymbol5)
        },9000)
        setTimeout(() => {
          casinosymbol1 = casino();
          casinosymbol2 = casino();
          casinosymbol3 = casino();
          casinosymbol4 = casino();
          casinosymbol5 = casino();
          message.edit(casinosymbol1 + casinosymbol2 + casinosymbol3 + casinosymbol4 + casinosymbol5);
          Confirm_Casino_Complete = true;
          CheckCasino();
        },10000)
      });
      function CheckCasino() {
        if ((casinosymbol1 == casinosymbol2 && casinosymbol1 == casinosymbol3) || (casinosymbol2 == casinosymbol3 && casinosymbol2 == casinosymbol4) || (casinosymbol3 == casinosymbol4 && casinosymbol3 == casinosymbol5)) {
          message.channel.send("Good: 3 matching symbols in a row. You will get 3000 Coins")
          userData[message.member.id].tokens+=3000
        } else {
          if ((casinosymbol1 == casinosymbol2 && casinosymbol1 == casinosymbol3 && casinosymbol1 == casinosymbol4) || (casinosymbol2 == casinosymbol3 && casinosymbol2 == casinosymbol4 && casinosymbol2 == casinosymbol5)) {
            message.channel.send("Great: 4 matching symbols in a row. You will get 7200 Coins")
            userData[message.member.id].tokens+=7200
          } else {
            if (casinosymbol1 == ":seven:" && casinosymbol2 == ":seven:" && casinosymbol3 == ":seven:" && casinosymbol4 == ":seven:" && casinosymbol5 == ":seven:") {
              message.channel.send("BIG JACKPOT! 5x 7. You will get 30000 Coins")
              userData[message.member.id].tokens+=30000
            } else {
              if (casinosymbol1 == casinosymbol2 && casinosymbol1 == casinosymbol3 && casinosymbol1 == casinosymbol4 && casinosymbol1 == casinosymbol5) {
                message.channel.send("JACKPOT: 5x Same symbols. You will get 18000 Coins")
                userData[message.member.id].tokens+=18000
              } else {
                message.channel.send("Bad: No symbols matching in a row.")
              }
            }
          }
        }
      }
      break;
    case "slots":
      if (!userData[message.member.id].tokens) {
        message.channel.send("You must be registered first. `[prefix]economy register`")
        return;
      }
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
        }, 7000);
      function display() {
        userData[message.member.id].tokens-=200
        message.channel.send("Rolling the slots. 200 Coins have been taken from your account. You have now " + userData[message.member.id].tokens + " Coins.")
        symbol1 = slots();
        symbol2 = slots();
        symbol3 = slots();
        message.channel.send(symbol1 + symbol2 + symbol3).then((message)=>{
          setTimeout(() =>  {
            symbol1 = slots();
            symbol2 = slots();
            symbol3 = slots();
            message.edit(symbol1 + symbol2 + symbol3)
          },1000)
          setTimeout(() =>  {
            symbol1 = slots();
            symbol2 = slots();
            symbol3 = slots();
            message.edit(symbol1 + symbol2 + symbol3)
          },2000)
          setTimeout(() =>  {
            symbol1 = slots();
            symbol2 = slots();
            symbol3 = slots();
            message.edit(symbol1 + symbol2 + symbol3)
          },3000)
          setTimeout(() =>  {
            symbol1 = slots();
            symbol2 = slots();
            symbol3 = slots();
            message.edit(symbol1 + symbol2 + symbol3)
          },4000)
          setTimeout(() =>  {
            symbol1 = slots();
            symbol2 = slots();
            symbol3 = slots();
            message.edit(symbol1 + symbol2 + symbol3)
            Confirm_Slot_Complete = true;
            CheckSlots();
          },5000)
        })
        function CheckSlots() {
          setTimeout(() => {
            if (Confirm_Slot_Complete===false) {
              message.channel.send("Error! The slots could not be rolled. Attempting again...")
              Confirm_Slot_Complete = false;
            } 
            Confirm_Slot_Complete = false;
            if (symbol1 == ":seven:" && symbol2 == ":seven:" && symbol3 == ":seven:") {
              message.channel.send("Jackpot: 3x 7, You will receive 10000 coins.")
              userData[message.member.id].tokens+=10000
            } else {
              if (symbol1 == symbol2 && symbol1 == symbol3) {
                message.channel.send("Jackpot: 3 same symbols, You will receive 3000 coins.")
                userData[message.member.id].tokens+=3000
              } else {
                if (symbol1 == symbol2 || symbol1 == symbol3 || symbol2 == symbol3) {
                  message.channel.send("Not bad: 2 same symbols. You will receive 2000 coins.")
                  userData[message.member.id].tokens+=2000
                } else {
                  message.channel.send("Too bad: You lost. No coins received.")
                }
              }
            }  
          },1)
        }
      }
      display();
      break;
    case "meme":
      message.channel.send(doMagicMeme());
      break;
    case "economy":
      if (args[1]==="balance") {
        if (userData[message.member.id].tokens) {
          message.channel.send("You have a balance of total " + userData[message.member.id].tokens + " Coins.")
        } else {
          message.channel.send("You must have an account first.")
        }
      }
      if (args[1]==="register") {
        if (!userData[message.member.id].tokens) {
          userData[message.member.id].tokens = 2400;
          message.channel.send("You have been successfully registered to Economy System.")
          fs.writeFile("userData/userData.json", JSON.stringify(userData), (err) => {
            if (err) {
              console.log("\x1b[31m%s\x1b[0m", "GoblinBot ERR!: Failed to write Economy data. Log is shown below.")
              console.error(err)
            }
          })
        } else {
          message.channel.send("You already have a account!");
        }
      }
      if (args[1]==="info") {
        message.channel.send({embed: {
          color: 3447003,
          fields: [{
            name: "Coins",
            value: "Coins are main valuablity of the bot."
          },
          {
            name: "Getting coins",
            value: "You can get coins by participating in chat. You get 10 coins every message that has at least 11 chars."
          },
          {
            name: "Am I getting coins on all servers where the bot is invited?",
            value: "Yes. The main value is made on all servers where I am."
          }
        ],
        }});
      }
      if (args[1]==="daily") {
        if (!userData[message.member.id].tokens) {
          message.channel.send("You must be registered first!")
        } else {
          if (!userData[message.member.id].lastDaily) userData[message.member.id].lastDaily = "Not Collected";
          if (userData[message.member.id].lastDaily != moment().format("L")) {
            userData[message.member.id].lastDaily = moment().format("L");
            userData[message.member.id].tokens += 3000
            message.channel.send("Daily prize collected")
          } else {
            message.channel.send("Try later, you collected ur prize already.")
          }
        }
      }
      break;
    case "saysecret":
      message.delete();
      message.channel.send(message.content.slice(11))
      console.log("\x1b[33m%s\x1b[0m", "GoblinBot WARN: Secret message has been said. It's content is: " + message.content.slice(11) + " , requested by <@" + message.member.id + ">.")
      break;
    case "skip":
      var server = servers[message.guild.id];
      message.channel.send("I skipped the song. Please dont skip other songs, please. :(");
      if (server.dispatcher) server.dispatcher.end();
      break;
    case "help":
      if (args[1]===undefined) {
        message.channel.send(helpMsg);
      } else {
        if (args[1]==="music") {
          message.author.send("``` Gobin Bot Help: Music \n \n play <youtube-url>; \n loop; \n skip; \n stop...```")
          message.channel.send("Check your Personal messages")
        } else {
          if (args[1]==="mod") {
            message.author.send("``` Goblin Bot Help: Moderation \n \n > prefix_user [set | show] [prefix]...```")
            message.channel.send("Check your Personal messages")
          } else {
            if (args[1]==="commands") {
              message.author.send("``` Goblin Bot Help: Commands \n \n meme; \n economy [info | purchase | daily]; \n saysecret <secret message>; \n ping; \n say <message>; \n embed <description | [title] | [footer] | [decimal color]...```")
              message.channel.send("Check your Personal messages")
            } else {
              if (args[1]==="all") {
                message.author.send("``` Goblin Bot Help: All \n \n play <youtube-url>; \n loop; \n skip; \n stop; \n > prefix_user [set | show] [prefix]; \n meme; \n economy [info | purchase | daily]; \n saysecret <secret message>; \n ping; \n say <message>; \n embed <description | [title] | [footer] | [decimal color]...```")
                message.channel.send("Check your Personal messages")
              } else return;
            }
          }
        }
      }
      break;
    case "ping":
      message.reply("Pong! `" + client.ping + "ms` has been taken to pong to you back");
      break;
    case "say":
      if (!args[1]) message.channel.send("The syntax of command is incorrect.")
      else message.channel.send(message.content.slice(6));
      break;
    case "embed":
      var args2 = message.content.substring(serverData[message.guild.id].length).split(" | ");
      if (!args[1]) {
        message.channel.send("The syntax of command is incorrect.")
      } else {
        if (!isNaN(args2[3])) {
          if (args2[3]<16777216 && args2[3]>-1) {
            message.channel.send(embedCreate(args2[3],args2[0].content.slice(6),args2[1],args2[2]))
          } else {
            message.channel.send("The color number must be less or equal to 16777215 and greater or equal to 0.")
          }
        } else {
          if (args2[3]===undefined) {
            message.channel.send(embedCreate(3447003,args2[0],args2[1],args2[2]))
          } else {
            message.channel.send("The color must be decimal number.")
          }
        }
      } 
      break;
    default:
      message.channel.send("Invalid command");
   }
});
// MOD Commands
client.on("message", function(message) {
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(SERVER_VALUES[1])) return;
  if (!message.member.permissions.has("MANAGE_GUILD")) {
    message.channel.send("No Permissions")
    return;
  }
  var args = message.content.substring(SERVER_VALUES[1].length).split(" ");
  switch (args[0]) {
    case "prefix_user":
      if (args[1]===undefined) {
        message.channel.send("Please specify an action to do with prefix. Setting prefix to none will be not supported.")
        return;
      }
      if (args[1]==="show") {
        message.channel.send("The following server prefix is " + serverData[message.guild.id].serverPrefix);
        return;
      }
      if (args[1]==="set") {
        if (args[2]===undefined) {
          message.channel.send("You cant set the prefix to undefined !")
        } else {
          serverData[message.guild.id].serverPrefix = args[2]
          fs.writeFile("userData/serverData.json", JSON.stringify(serverData), (err) => {
          if (err) {
              console.error(err);
            } else {
              message.channel.send("Successfully changed prefix to `" + args[2] + "`.")
            }
          })
        }
      }
      break;
    case "mute":
      message.channel.send("The command is still being worked on");
      break;
    case "clear":
      try {
        var MessagesToDelete = (message.content.slice(8));
        message.channel.send("Attempting to delete " + MessagesToDelete + " messages ..")
        while (!MessagesToDelete===0) {
          var MessagesToDelete = (MessagesToDelete - 1);
          message.delete();
        }        
      } catch(err) {
        message.channel.send("Failed to clear. Make sure the value is the number. Note: Messages older than 2 weeks cannot be deleted due to Discord limitations.")
      }
      break;
    default:
      message.channel.send("Invalid MOD command");
  }
});
// hi, foo and ping reaction + reverse
client.on('message', message => {
  if (message.content === 'hi') {
    message.reply('hi');
  }
  if (message.content === 'foo') {
    message.reply('bar');
  }
  if (message.content === 'bar') {
    message.reply('foo');
  }
  if (message.content === 'ping') {
    message.reply('pong');
  }
  if (message.content === 'pong') {
    message.reply('ping');
  }
});
// when anything is done, log in the bot with its token.  THIS  MUST  BE  THAT  WAY
client.login(process.env.BOT_TOKEN)
