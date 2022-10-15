let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let haibot = fs.readFileSync('./mp3/sound1.mp3') 
conn.sendFile(m.chat, haibot, '', '', m, true)
}

handler.customPrefix = /^(.sound1)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
