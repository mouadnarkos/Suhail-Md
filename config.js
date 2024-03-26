const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://<username>:<password>@cluster0.atchjj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 



global.devs = "212719688776" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212719688776";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_45_03_26_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRU9sRHYrWE1ROFpvd2xmTWIzUlZ1WXVwUlJFOXkzRHZhVHNxSlJqM1JGUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlVkOHNrU0Y4bTFlUGdhRG1udW9OSDBGNVhEemlWQU1GWFBydWhRNUxvblE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSUVJSTRsSmlnc1IwYlJYVEdNUC80NnBnaDc4SkF0NkFOVDZOZHR3VVZrND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkpPQjhRMExNbHk3Z1Y2WTZERzlnRjIySktPZUt2bVFmOGdjTVR0b2xvUzA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZUUycEN3ZE9rM3V2enk5T2JKb0xGNVpkK3RMZW0vbnZxOVB3SndCdXNuYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImxYTmwxRFBvWXdjWWZkeHpPMEUreU0raUc3Q0c1T3ExdUdYT1M3dms5eW89XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJLSHl4R2R2N1hQcDhDM2Nob2ZOQmsrTVN3QVM4MUZnTXdESHRxWk1SaG5vPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNit4NWJaanluTTVad2w3akgrUktoQldOUHYxeDFRYlR0dHNQbk1zMGV6ST1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJxZEVwTWlJQnJoRGVzcFJybFdJbituZHNrbk1pR3FFdm9OaFo4SHppNzU5ZTQzOTBQUzQ4Yit5VzN6aWdURlJGclJ6SkRaclBEdThkdzlQNFk3Nm5pZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjUwLFwiYWR2U2VjcmV0S2V5XCI6XCJ0V0tJMWdOOHovN25MVEhRUkV3ZzBBd3hRZFlYNGZQYnpLSVl0UWVsUnVjPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjEyNzE5Njg4Nzc2QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjFEQ0QwQTBBRUQzMjQ0MDJCNzdGM0JDMTdDNUNBRTZFXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE0MzE5NTV9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjEyNzE5Njg4Nzc2QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjFBM0RCNjM4QTY2Q0E1NzU0OTJDRjM3REVCRTExMDM3XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE0MzE5NTZ9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJXdTZHVmg3elRlcXIwcmpOTl9iSzdBXCIsXCJwaG9uZUlkXCI6XCJmZjA5NjM4Yy0xYjYxLTQ1Y2QtYTBlYi03MzVkOTlkMWJmZDNcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInJ2NlczeHlyVVBTbGZJcFEwQ0RnWXQvZFptTT1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI1aVZ0c3MveEh2eERHdVVRQ09HRnphSHV5T3c9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiVjVXVzVENlhcIixcIm1lXCI6e1wiaWRcIjpcIjIxMjcxOTY4ODc3NjoxQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjg1NTU2MjM1MTM3Mjc3OjFAbGlkXCIsXCJuYW1lXCI6XCJOXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNNT0xzMUlRaU1LSnNBWVlBU0FBS0FBPVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiaGRhZFh2aUJmZUhQYzhpa3lFc2gxMlozSjg0OVNlZm1IeUhlK0RpdHRnUT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIllOQnVQMzd2cDFTVmlXV29UczZJRmZSOWhjcUtZUmdUVitBYVZ2MDROUzFIQ3MyaEtuVDc4a3FtSDJEVGVDWjg4WWF0V1BwVnhERTlhZmtQME5VU0FBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiRVFodmdtSitDb0RBckdyeXVLMzhDRmluWjQvWk9NbVhyK2xjTjBhQ2paenV2MDhLUExpRjVZNklwVUJZNG80OW1OMkwyNW93ejQ2ZThya1RnUDU4Z1E9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIxMjcxOTY4ODc3NjoxQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQllYV25WNzRnWDNoejNQSXBNaExJZGRtZHlmT1BVbm41aDhoM3ZnNHJiWUVcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzExNDMxOTQ4LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQU5jd1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5jdy5qc29uIjogIntcImtleURhdGFcIjpcIkxFZ2lDTHlzZlE1VmlGcC80bzdhb3ZwWUVvWWlVUkVWZ2xpc3dKRTN4Zk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcyODAzNTIzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE0MzE5NTA1NzNcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "@𝑵𝑨𝑹𝑲𝑶𝑺(𝑴𝑶𝑼𝑨𝑫)🖤黎!" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ @𝑵𝑨𝑹𝑲𝑶𝑺(𝑴𝑶𝑼𝑨𝑫)🖤黎! 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "@𝑵𝑨𝑹𝑲𝑶𝑺(𝑴𝑶𝑼𝑨𝑫)🖤黎!",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "@𝑵𝑨𝑹𝑲𝑶𝑺(𝑴𝑶𝑼𝑨𝑫)🖤黎!",
  ownername:process.env.OWNER_NAME|| "@𝑵𝑨𝑹𝑲𝑶𝑺(𝑴𝑶𝑼𝑨𝑫)🖤黎!",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
