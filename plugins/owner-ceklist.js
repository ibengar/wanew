let handler = async (m, { usedPrefix, command }) => {
    let msgs = global.db.data.msgs
    let split = Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })
    let fltr = split.map(v => '│◦❒ ' + v.nama).join('\n')

    m.reply(`
┌「 LIST PESAN 」
${fltr}
└────
Akses/ambil dengan mengetik namanya
`.trim())
}

handler.help = ['list'].map(v => 'list' + v)
handler.tags = ['owner']
handler.command = /^(ceklist|listcek)$/i

handler.owner = true

export default handler
