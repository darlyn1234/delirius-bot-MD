module.exports = {
	name: "addcmd",
	alias: ["addcmd"],
	category: "private",
	desc: "Guardar/añadir archivos",
	isOwner: true,
	query: "Ingrese la ruta del archivo.\nEjemplo: .addcmd main/node",
	use: "<Nombre de archivo>\nEjemplo .addcmd main/menu",
	isQuoted: true,
	async run({ msg, conn }, { q, map, args, cmdNya }) {
	  try {
	    q = q.split("/");
	    teks = `./command/${q[0]}/${q[1]}.js`
	   	await require("fs").writeFileSync(teks, msg.quoted.text);
	  	await msg.reply(`Guardado con éxito, y se está reiniciando`);
	  	process.send("reset");
	  } catch (e){
	    global.error(cmdNya, e, msg)
	  }
	},
};
