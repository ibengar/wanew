let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINK 」*\n\nTerdeteksi *${await conn.getName(m.sender)}* Anda Telah Mengirim Tautan Di Grup!\n\nHayo Loh Ketahuan Ngirim Link, Aku Tendang Nih...`)
    if (isAdmin) return m.reply('*Eh maaf kamu admin, kamu tidak akan di tendang. hehe..*')
    if (!isBotAdmin) return m.reply('*Bot bukan admin, bagaimana saya bisa menendang orang? _-*')
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return m.reply('*「 ANTI LINK 」*\n\nPesan ditolak, bot tidak akan menendangmu.\nKarena tautan grup itu sendiri')
    await conn.sendMessage(m.chat, { delete: m.key })
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  return true
}

module.exports = handler


