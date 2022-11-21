let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [081257172080]
│   「 Donasi • Dana」
│ •  [081257172080]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
