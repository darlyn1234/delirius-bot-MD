module.exports = {
	name: "demote",
	alias: ["dm","demote"],
	category: "group",
	desc: "Degradar de admin a un partipante",
	use: "<mencionar>",
	isGroup: true,
	isBotAdmin: true,
	isAdmin: true,
	async run({ msg, conn }) {
		const mm = msg.quoted ? [msg.quoted.sender] : msg.mentions;
		for (let i of mm) await conn.groupParticipantsUpdate(msg.from, [i], "demote");
		await msg.reply("Éxito");
	},
};
