let handler = async (m, { conn, command }) => {
m.reply('Wait 🐦')
let audio = `https://raw.githubusercontent.com/saipulanuar/Api-Github/main/audio/${command}.mp3`
await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true)
}

handler.help = ['anjay','ara-ara','ara-ara-cowok','ara-ara2','arigatou','assalamualaikum','asu','ayank','aku-ngakak','bacot','bahagia-aku','baka','bansos','beat-box','beat-box2','biasalah','bidadari','bot','buka-pintu','canda-anjing','cepetan','cuekin-terus','daisuki-dayo','daisuki','dengan-mu','gaboleh-gitu','gak-lucu','gamau','gay','gelay','gitar','gomenasai','hai-bot','hampa','hayo','hp-iphone','i-like-you','ih-wibu','india','karna-lo-wibu','kiss','kontol','ku-coba','maju-wibu','makasih','mastah','nande-nande','nani','ngadi-ngadi','nikah', 'nuina','onichan','owner-sange','ownerku','pak-sapardi','pale','pantek','pasi-pasi','punten','sayang','siapa-sih','sudah-biasa','summertime','tanya-bapak-lu','to-the-bone','wajib','waku','woi','yamete','yowaimo','yoyowaimo']
handler.tags = ['sound-random']
handler.command = /^(anjay|ara-ara-cowok|ara-ara2|arigatou|assalamualaikum|asu|ayank|aku-ngakak|bacot|bahagia-aku|baka|bansos|beat-box|beat-box2|biasalah|bidadari|bot|buka-pintu|canda-anjing|cepetan|ara-ara|ownerku|owner-sange|yoyowaimo|wajib|tanya-bapak-lu)$/i
handler.owner = false
handler.limit = true
module.exports = handler
