const fs = require("fs")
const prettyms = require('pretty-ms')

module.exports = async function (msg, conn){
  const afk = JSON.parse(fs.readFileSync("./lib/database/afk.json"));
  if (afk[msg.sender] != undefined){
    const afktime = await prettyms(Date.now() - afk[msg.sender].time, {
				verbose: true,
			});
    const afkreason = afk[msg.sender].reason;
			tek = `¡Has regresado de afk!\nDespués *${afkreason}*, tiempo _${afktime}_`
			msg.reply(tek);
			delete afk[msg.sender];
			await fs.writeFileSync("./lib/database/afk.json", JSON.stringify(afk));
  }
  	if (msg.quoted && afk[msg.quoted.sender] != undefined) {
			const pushname = store.contacts[msg.quoted.sender];
			const afktime = await prettyms(Date.now() - afk[msg.quoted.sender].time, {
				verbose: true,
			});
			const afkreason = afk[msg.quoted.sender].reason;
			teks = `${pushname != undefined ? pushname.name : "he`s"} No lo etiqueten, él está siendo afk\n`
			teks += "Razon : " + afkreason + "\n"
			teks += "Ya que : " + afktime + "\n\n"
			teks += "Vuelvelo a llamar después de que regrese de afk"
			await msg.reply(teks);
		}
		if (msg.mentions != "" && afk[msg.mentions[0]] != undefined) {
			const pushname = global.store.contacts[msg.mentions[0]];
			const afktime = await prettyms(Date.now() - afk[msg.mentions[0]].time, {
				verbose: true,
			});
			const afkreason = afk[msg.mentions[0]].reason;
			txt = `${pushname != undefined ? pushname.name : "he`s"} ¡No se deje etiquetar, él es afk!\n`
			txt += "Razon : " + afkreason + "\n"
			txt += "Ya que : " + afktime + "\n\n"
			txt += "Vuelvelo a llamar después de que regrese de afk"
			await msg.reply(txt);
		
	}
}
