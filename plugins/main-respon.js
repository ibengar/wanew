let handler = async m => m.reply(`
            ⛔❗Kamu Terdeteksi Mengirim Kata-kata Yang Dilarang Di HU TAO BOT-MD, Limit Kamu Akan Dikurangi Sebesar *5* Limit, Jangan Diulangi Lagi Ya🤖
`.trim()) // Tambah sendiri kalo mau

handler.customPrefix = /^(setan|asw|tolol|anjing|ngentot|ngenthod|ngentd|ajg|ngeth|ngenthd|tlol|babi|kontol|kntl|khont|khonthol|kintil|khintil|khintl|puki|pukii|bangsat|bngst|bgst|bangshat|babi|bbi|ajng|bego|bgo|somplak|smplk|njing|lonte|lnte|ngewe|ngwe|entot|gay|ngetot|asu|pejuh|jembut|jembt|jembot|jembud|jmbt|kimak|fuck|bitch|nigga|coli|colmek|memek|mmek|mmk|nenen)$/i
handler.command = new RegExp

handler.limit = 5
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false
module.exports = handler
