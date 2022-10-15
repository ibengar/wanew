let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let helloIrfaan = fs.readFileSync('./mp3/sound2.mp3') 
conn.sendFile(m.chat, helloIrfaan, '', '', m, true)
}

handler.customPrefix = /^(.sound3)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
