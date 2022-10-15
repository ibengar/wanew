let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0838-5455-1575]
│   「 Donasi • Dana」
│ •  [0857-2215-7719]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
