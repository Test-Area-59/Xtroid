const axios = require("axios");

module.exports = {
  name: "oppai",
  alias: ["boobs", "oppais"],
  desc: "Get anime bog boobs girls picture.",
  react: "🥵",
  category: "Weeb",
  start: async (Xtroid, m, { pushName, prefix }) => {
    let oppai = await axios.get("https://nekosenpai-apis.onrender.com/oppai");

    let Button = [
      {
        buttonId: `${prefix}oppai`,
        buttonText: { displayText: `>>` },
        type: 1,
      },
    ];
    let oppais = {
      image: { url: oppai.data.url },
      caption: `Do you love Oppai too ${pushName}  ... ?`,
      footer: `*${botName}*`,
      buttons: Button,
      headerType: 4,
    };
    await Xtroid.sendMessage(m.from, oppais, { quoted: m }).catch((err) => {
      return "Error!";
    });
  },
};