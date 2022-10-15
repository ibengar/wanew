const { proto } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, command, usedPrefix, text }) => {
    let M = proto.WebMessageInfo
    if (!m.quoted) throw `Balas pesan dengan perintah *${usedPrefix + command}*`
    if (!text) throw `Pengunaan:${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} tes`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `'${text}' telah terdaftar!`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`Berhasil menambahkan pesan '${text}'\n\nAkses dengan mengetik namanya`.trim())
}

handler.help = ['list'].map(v => 'add' + v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(addlist|listadd)$/i

handler.owner = true

export default handler
