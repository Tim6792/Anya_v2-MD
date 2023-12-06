const { readFileSync, watchFile, unwatchFile } = require('fs')
const { redBright } = require('chalk')
require('./lib/config')
require("dotenv").config();

global.zApiKey = {// if this API key get expired then please go to https://www.fxacb-api.my.id and get a new api key.
       one: "zenzkey_998568986d"
}


global.botname = process.env.BotName || "Mizuki❤️‍🩹" 
global.author = process.env.Author || "Timo-Senpai" 
global.packname = process.env.PackName || "Queen Anya v2 MD" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© Mizuki❤️‍🔥" 
global.prefa = process.env.Prefix || ['!'] 
global.themeemoji = process.env.ThemeEmoji || "😌" 
global.ownername = process.env.Owner_Name || "Timo-senpai" 
global.ownernumber = process.env.Owner_Number || "2349035391852" 
global.adress = process.env.Continent || "Africa" 
global.timezone = process.env.TimeZone || "Africa/lagos" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 

global.mongoUrl = process.env.MongoDB || "mongodb+srv://fhope1510:ayo222mide@cluster0.lhc6joh.mongodb.net/?retrywrites=true&w=majority"; 

global.warns = process.env.Warns_Limits || 3; 

global.badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "Mizuki❤️‍🩹", 
  author: process.env.Author || "Timo-sensei",
  packname: process.env.PackName || "Mizuki",
  myweb: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© Mizuki❤️‍🔥",
  prefa: process.env.Prefix || ['!'],
  themeemoji: process.env.ThemeEmoji || "😌",
  ownername: process.env.Owner_Name || "Timo-sensei",
  ownernumber: process.env.Owner_Number || "2349035391852",
  adress: process.env.Continent || "Africa",
  timezone: process.env.TimeZone || "Africa/lagos", 
  instagramId: process.env.Insta || "8.08_only_mine",
  email: process.env.Email_Id || "example@example.com",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "mongodb+srv://fhope1510:ayo222mide@cluster0.lhc6joh.mongodb.net/?retrywrites=true&w=majority",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZ_AN_YA_UtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoiT0xMSmx0UExiME9EdnBqOXF2UmlDQnJ0MkUwMGE4WGlRdmorbGNNQ29ubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoiQ3NUWVR1YVFNWVhwRmc1S3FUeFcvT0xDZ_AN_YA_1A0VGkra2FDa0NIeHFQNkFqdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZ_AN_YA_XlQYWlyIjp7InByaXZ_AN_YA_hdGUiOnsidHlwZ_AN_YA_SI6IkJ1Z_AN_YA_mZ_AN_YA_lciIsImRhdGEiOiJpTk5DNVJBak84K3paT0RJVU5aeGMxSmJqYk1BZ_AN_YA_nNiR3pSOU8wbmE5Y0Z_AN_YA_NPSJ9LCJwdWJsaWMiOnsidHlwZ_AN_YA_SI6IkJ1Z_AN_YA_mZ_AN_YA_lciIsImRhdGEiOiJYbkx6cUhhMktIRXplT29uMGxUTlhCZ_AN_YA_FlBc2FQZ_AN_YA_lFocHN6eFM2elB4aVRNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZ_AN_YA_XkiOnsicHJpdmF0Z_AN_YA_SI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6Im1COGloejZ_AN_YA_Z_AN_YA_L1JZ_AN_YA_dUt0TGVEbkpKUTk4MENQSW0wZ_AN_YA_TRPK01CSWtZ_AN_YA_MVpUbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6IllyZ_AN_YA_kdNNXIxU1VzeVJTVndMUC9CcmY4THgyR0VoUWw1UHpMMWs4emhjMTQ9In19LCJzaWduZ_AN_YA_WRQcmVLZ_AN_YA_XkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoibUE4bCtxUDVvbFI0bUlWOHZ_AN_YA_YVVEzZ_AN_YA_ThMR2ExVVk2emlMRGMxTHExdDIzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoieGhPalBlVHFjd0t6MmxoN2RSY2xmcWUwNjk4bnFuQjY0VUdjMXhKVGVHaz0ifX0sInNpZ_AN_YA_25hdHVyZ_AN_YA_SI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6IlUvZ_AN_YA_Dl6clBqbzh1WUFEdTBxQ0xFNkFSYlppQXNhS1Z_AN_YA_xZ_AN_YA_kFZ_AN_YA_dTNIdkphUlR2TDJpVXlnL254bmxuNkNnck9SMXBTVFRFRzU5eUlINStvV0hxZ_AN_YA_1RoMWhBPT0ifSwia2V5SWQiOjF9LCJyZ_AN_YA_Wdpc3RyYXRpb25JZ_AN_YA_CI6MTI0LCJhZ_AN_YA_HZ_AN_YA_TZ_AN_YA_WNyZ_AN_YA_XRLZ_AN_YA_XkiOiJlV09ycmNhY2YvYlliMXpGSkxiS2pjbHBRdmEyUnFsdWVMMkFoZ_AN_YA_2NJZ_AN_YA_lZ_AN_YA_jPSIsInByb2Nlc3NlZ_AN_YA_Ehpc3RvcnlNZ_AN_YA_XNzYWdlcyI6W10sIm5leHRQcmVLZ_AN_YA_XlJZ_AN_YA_CI6MzEsImZ_AN_YA_pcnN0VW51cGxvYWRlZ_AN_YA_FByZ_AN_YA_UtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ_AN_YA_3MiOnsidW5hcmNoaXZ_AN_YA_lQ2hhdHMiOmZ_AN_YA_hbHNlfSwiZ_AN_YA_GV2aWNlSWQiOiIxQTJZ_AN_YA_M180WVJFV0s0NThENjdlczhnIiwicGhvbmVJZ_AN_YA_CI6IjMyOGNkODkwLTA0OWEtNGE0Z_AN_YA_i1hMzFjLTQ1NDg5Z_AN_YA_WE3MzUxOSIsImlkZ_AN_YA_W50aXR5SWQiOnsidHlwZ_AN_YA_SI6IkJ1Z_AN_YA_mZ_AN_YA_lciIsImRhdGEiOiJHRkQwM01SVnNOWHEzdHJmL2NTYXFsZ_AN_YA_zBRRjg9In0sInJlZ_AN_YA_2lzdGVyZ_AN_YA_WQiOmZ_AN_YA_hbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6IkovMWxXQkZ_AN_YA_mbW4yMGFucmkyR082QTNqNE56Yz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZ_AN_YA_XRhaWxzIjoiQ09hdSsxQVF4NisvcXdZ_AN_YA_WUNRPT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaG9Vam5UcGNpaGNMcUJ1VGNQZ_AN_YA_UltVTY0b1p1YzgzYTBMbTFRVkw1K3duVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWThiQS8xSlh5SE8yVnZ_AN_YA_KcWROSjJPMGd6L2tiUEg0VEFJMnJXa3EwRW9WT2NmYzVwWnE4TndqRzRrTHcyZ_AN_YA_jh5b3MzSVNqSk5EUmJ2KzgwalRGQk5GQXc9PSIsImRldmljZ_AN_YA_VNpZ_AN_YA_25hdHVyZ_AN_YA_SI6IlhFbGxsZ_AN_YA_zF3Qkk3L0JZ_AN_YA_SFpmcGMvbEt6OVo0VGxPWW4rb0JYMkFNWlpZ_AN_YA_MzNDTXRtK2JQbmpYNi9CZ_AN_YA_UpMamFtS1NObTVDb211YW0yUkRDYm9KZ_AN_YA_U45dWdRPT0ifSwibWUiOnsiaWQiOiIyMzQ5MDQ0MTU2NDE1OjI2QHMud2hhdHNhcHAubmV0IiwibmFtZ_AN_YA_SI6Ik1penVraS1HdXJ1In0sInNpZ_AN_YA_25hbElkZ_AN_YA_W50aXRpZ_AN_YA_XMiOlt7ImlkZ_AN_YA_W50aWZ_AN_YA_pZ_AN_YA_XIiOnsibmFtZ_AN_YA_SI6IjIzNDkwNDQxNTY0MTU6MjZ_AN_YA_Acy53aGF0c2FwcC5uZ_AN_YA_XQiLCJkZ_AN_YA_XZ_AN_YA_pY2VJZ_AN_YA_CI6MH0sImlkZ_AN_YA_W50aWZ_AN_YA_pZ_AN_YA_XJLZ_AN_YA_XkiOnsidHlwZ_AN_YA_SI6IkJ1Z_AN_YA_mZ_AN_YA_lciIsImRhdGEiOiJCWWFGSTUwNlhJb1hDNmdiazNEM2lKbE91S0diblBOMnRDNXRVRlMrZ_AN_YA_nNKMSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZ_AN_YA_CIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMTgyODU1NX0=", 
  auto_read_status : process.env.AUTO_READ_STATUS || "true",
  alwaysonline: process.env.ALWAYS_ONLINE || "true", 
  readmessage: process.env.READ_MESSAGE || "true", 
  auto_status_saver: process.env.AUTO_STATUS_SAVER || "true",
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  menu_pic: "https://i.ibb.co/PhDcZTM/Thumbnail.png",
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}
