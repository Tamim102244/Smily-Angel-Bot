const moment = require("moment-timezone");

module.exports.config = {
    name: "Malik",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Tamim", //don't change my credit
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞      : 𝐓 𝐀 𝐌 𝐈 𝐌 ッ
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝐒𝐢𝐧𝐠𝐥𝐞 বস এসব ফালতু কাজে সময় নষ্ট করে না☺️
┃ 🎂 𝐀𝐠𝐞       :এখনো বুইড়া হয়নি 𝟏𝟕+ চলে 😁
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝐂𝐡𝐢𝐭𝐭𝐚𝐠𝐨𝐧𝐠, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎭 𝐓𝐢𝐤𝐭𝐨𝐤  : Smilyheart100k
┃ 📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : এসব আজাইরা জিনিস বস ব্যবহার করে না🫥😷
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://www.facebook.com/profile.php?id=100091383161288
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `
    }, event.threadID);
};
