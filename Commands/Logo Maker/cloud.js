const maker = require('mumaker')

module.exports = {
    name: "cloud",
    alias: ["cl"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Xtroid, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}cloud X-Troid*`);
        maker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    `${text}`,]).then((data) => Xtroid.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}