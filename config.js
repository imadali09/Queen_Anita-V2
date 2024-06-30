//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFBnZkZsWEVJOWt0TWRSQ3IyL09IMXdwNHNMenRzdkwvZkFTREI5NkpFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiei9kNmlkYnZaNDRWZ1p6dzYreWxpV1FzbCs5aFgzT2VrMDExdEpCR09SWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQzV1bjdiRWlMSzJBczlrVDUvajYrZlMrZGIya3YrOVVDekZiVE9GMzFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjdXpXVkNsTHRubDJZMUdIbW94ME1OMlppd1ErQ2QwVUE5Y3UwN3NrRW1jPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdHZ2hvRmZDVjd2Mm9yRFpQSzZuVEhsQTdIRlNyRFhzdU9aU3V3aU5NbTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldMdHA5UjUwMWY3TndtQlByTUZLRUJEZWUzOG9jMHlLRVhWRlBGd28yd1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU51Y2JRajZTblVWaE1RVnpqR3pQRXdpQ3k5ei8xT3RDNW5RZTg4T0cwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEd0WDNXaXRxQ0JXRFl6TXZjUVFHNktCYmdpUTVTdHdyWUI0T2gzTnUxQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRmVWJiQmJSVytYVXFRaWdQYmp6Zm1IQTU5b3F0Qk04bE1ORmt5ZFhxbDg4ZUtmT1V2UERMR2VLS2x0dkxNWW1TMkN6VEVMeGQ3b2JmTG1YTXFFdmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6IlMva3lNUWZiNkFSV0F1bXNIclFSRkpvNVBwSlZpMi9sbHdNZ1NHTWx5UU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDc0OTg5NDU3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkYzM0U3MUQwRjc1RjI4NjNDMTEzQUJFMUZCRURDODUzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk3ODU5NTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IktvQmRadHRhUmhXakotZy1sT1FfUUEiLCJwaG9uZUlkIjoiNzAyYmYzOTYtZjVkOC00YjNlLTk4NDktZWZmMzY5NDZkYjgyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZZRkNWUEozMG1GQWRUQVkvbldVdUdQU1ZERT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNOHZuOE80dkxKZmlqL0daY0xUU3ZBYVFQVjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR1ZNVDZNQ1oiLCJtZSI6eyJpZCI6IjkyMzQ3NDk4OTQ1NzoxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZmM8J2ZkPCdmYDwnZmA8J2ZiSB+IPCdmYTwnZmM8J2ZjfCdmLwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0orUHU3OEVFTlN6aDdRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZDemVOSkJXRnNnL3lEVWxvQmd3dllFK1V6WWg4NHUwT09WK1BCZ3EzRGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxsOEZvL3lJUStzUGVVN21KNk9GU0V6U3dpRG1CaUJrSTBpWTF1ZHR4Y1h4R2xjQlpMbTdZRzZSa08wV1VLQ0hYU1NnR1FTRXRBQ0Ivekx5eGxCRkFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlb2RXY3Y3QjN1M1dkT3E5eUM2cEJ0NjV3N1lUdC9KOE9JTnlRV1V3NURzTUNBWVNoZWN0QXE0YWlwWkdGWEVMRzZRL3c2Y3BRczZaY0IvdGtDOGxnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ3NDk4OTQ1NzoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJid3MzalNRVmhiSVA4ZzFKYUFZTUwyQlBsTTJJZk9MdERqbGZqd1lLdHc1In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5Nzg1OTU0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUQxViJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349066528353";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
