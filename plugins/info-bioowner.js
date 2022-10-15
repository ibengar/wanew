let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : A7 RAFLI 
*✉️ Nama RL* : M.Rafli Setiawan
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 14 Juli 2006
*🎨 Umur* : 16
*🧮 Kelas* : 2 SMA 
*🧩 Hobby* : Nonton Anime, Chatting, Recode Script Bot, Nonton Hentai
*💬 Sifat* : Baik, Toxic, Ramah, Suka Berbagi, Friendly, Kurang Bergaul 
*🗺️ Tinggal* : Indonesia, Jawa Barat, Sukabumi, Kabandungan, Mekarjaya 
*❤️ Suka* :  Anime, Waifu, Loli, Trap, Furry, Kucing, Hentai, 
*💔 Benci* : Autis, Seleb, Cewe Sasimo, Rasis
*❤️ Pacar* : Gak punya🙂

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @rafli_editz2
*🍻 TikTok* : rafli_editz2
*🏮 Chanel Youtube* : A7 RAFLI
*🐈 Github:* Futaroukun

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
