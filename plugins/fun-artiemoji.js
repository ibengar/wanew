const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let set = global.db.data.settings[conn.user.jid]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case '😁':
     m.reply(`Emoji yang menggambarkan mood positif. Memberikan kesan tertawa yang nakal, bersemangat, dan sedikit malu.`)
      break
    case '😂':
      m.reply(`Emoji ini menggambarkan seseorang sedang tertawa sampai keluar air mata. Menertawakan sesuatu yang sangat lucu dan menggelitik.`)
      break
    case '😇':
      m.reply(`Emoji ini mengungkapkan perasaan bersyukur dengan manis. Lebih mengarah pada perasaan mirip malaikat dan setelah melakukan perbuatan yang baik.`)
      break
    case '😊':
      m.reply(`Emoji ini menggambarkan perasaan sukacita yang benar-benar tulus dan tidak dibuat-buat.`)
      break
    case '☺':
      m.reply(m.chat, m.chat, `Emoji ini digunakan untuk menggambarkan kegembiraan dan sedang dalam suasana hati yang baik.`)
      break
    case '🥹':
      m.reply(`Emoji yang ingin menuturkan perasaan haru sampai ingin meneteskan air mata. Bisa diartikan dengan perasaan memohon dengan sungguh-sungguh.`)
      break
    case '😚':
      m.reply(`Emoji yang digunakan sebagai ucapan terima kasih pada teman, keluarga, dan orang terkasih. Bentuk tip atas bantuan yang sudah diberikan.`)
      break
    case '🏃':
      m.reply(`Emoji yang menggambarkan seseorang sedang berolahraga. Bisa juga ekspresi kabur dari masalah atau pembicaraan yang menakutkan dan membosankan.`)
      break
    case '🙅':
      m.reply(`Emoji ini memiliki arti ketidaksetujuan. Bisa juga berarti seseorang meminta lawan bicara menghentikan sesuatu secepatnya.`)
      break
      case '😭':
      m.reply(`Emoji ini memiliki arti ketika keluarga atau ortu kalian meninggal. Bisa juga pacar kalian putus dengan mu🗿,sungguh menyakitkan🗿.`)
      break
      case '😐':
      m.reply(`Emoji ini menunjukkan ekspresi kepolosan. Selain itu, emoji wajah netral juga bisa diartikan bahwa seseorang tidak paham terhadap jokes tertentu.`)
      break
      case '😪':
      m.reply(`Emoji 😪 ternyata bukan emoji yang menggambarkan wajah yang sedang menangis. Emoji ini sebenarnya menandakan wajah mengantuk, dan air mata yang keluar itu sebenarnya ingus dari hidung.`)
      break
      case '😑':
      m.reply(`Emoji wajah datar (😑) digambarkan sebagai ekspresi mata tertutup disertai mulut yang datar. Emoji ini memiliki arti merasa terganggu, sesuatu yang tidak sesuai ekspektasi, atau sedikit tersinggung.`)
      break
      case '😶':
      m.reply(`Emoji wajah tanpa mulut (😶) memiliki makna yang luas, namun umumnya berarti sedikit terkejut (shock), tidak bisa berkata-kata (speechless), dan emosi negatif seperti kekecewaan, frustrasi, dan kesedihan dalam hati.`)
      break
      case '😖':
      m.reply(`Emoji 😖 Merasa Sial digambarkan dengan mata berbentuk “X” dan bentuk mulut kusut. Seringkali dimaknai dalam berbagai emosi, seperti rasa frustrasi, muak, jengkel, kesedihan, dan kekecewaan atau cewek nya minta ngen🗿.`)
      break
      case '😨':
      m.reply(`Emoji ini memiliki arti rasa takut secara luas namun juga termasuk kaget sedih dan kecewa.`)
      break
      case '😍':
      m.reply(`Emoji wajah tersenyum dengan mata hati (😍) memiliki arti rasa antusiasme cinta, atau dengan kata lain merasa jatuh cinta terhadap subjek yang dibicarakan, baik orang maupun benda. Emoji ini umumnya digambarkan wajah tersenyum dengan mulut terbuka, kadang menampilkan gigi, disertai ikon “love” di kedua matanya. Bentuk mulut berperan sangat penting dalam memberikan kesan kagum atau terpesona.`)
      break
      case '😴':
      m.reply(`Emoji wajah mengantuk (😴) dilambangkan dengan mata tertutup lesu, mulut terbuka sembari mengeluarkan huruf “zzz”, sebuah tanda familiar dari orang yang tertidur. Emoji ini umumnya memiliki arti orang yang sedang tidur, mengantuk, atau merasa bosan.`)
      break
      case '💀':
      m.reply(`Emoji 💀 tengkorak memperlihatkan warna putih keabuan dan tidak menggambarkan ekspresi tertentu. Namun emoji tengkorak sering diilustrasikan sebagai kematian yang bersifat figuratif (kiasan). Misalnya tertawa keras sampai merasa hampir mati atau tersiksa karena beban tugas yang teramat banyak.`)
      break
      case '🗿':
      m.reply(`Emoji 🗿 Moai merupakan patung raksasa dari wujud manusia di Pulau Paskah. Diilustrasikan sebagai batu abu-abu yang diukir menjadi kepala manusia, dengan  alis dan hidung yang menonjol, paling sering menghadap ke kiri. Emoji ini terkadang  digunakan untuk berbagai makna unik, seperti menyampaikan ekspresi tabah, datar, atau konyol.`)
      break
     case '🙍':
     m.reply(`Emoji 🙍 Orang Mengerutkan Dahi dapat diartikan sebagai ungkapan kekecewaan, kesedihan, rasa lelah, tersinggung, dan perasaan negatif lainnya. Sosok yang ditampilkan umumnya seperti wanita, meski demikian emoji ini tidak secara tegas menyatakan gender pada karakter.`)
     break
     case '😛':
     m.reply(`Emoji wajah dengan lidah menjulur keluar (😛) merupakan ekspresi untuk mengungkapkan sesuatu yang lucu, kekonyolan, dan candaan. Karena mulutnya yang terbuka, karakter ini tidak terlalu menyinggung dan lebih kepada gurauan santai.`)
     break
     case '🌝':
     m.reply(`Emoji 🌝 Wajah Bulan Purnama merupakan bulan purnama dengan wajah tersenyum. Emoji ini umumnya menggambarkan bulan sebagai piringan terang dengan wajah manusia yang sedikit tersenyum dan memiliki hidung. Emoji ini dapat digunakan untuk mewakilkan bulan secara lebih umum. Terkadang emoji ini digunakan untuk ironi dan sarkasme.`)
     break
     case '💃':
     m.reply(`Emoji 💃 Perempuan Menari umumnya diilustrasikan sebagai seorang wanita yang sedang menari, dengan salah satu tangannya terangkat, memakai gaun merah, serta seperti terlihat menari salsa atau flamenco. Emoji ini juga dapat digunakan untuk mengekspresikan hal-hal yang menyenangkan atau bersifat afirmasi positif, misalnya “bagus! 💃”.`)
     break
     case '😘':
     m.reply(`Emoji mencium dengan hembusan hati (😘) memiliki arti ciuman perpisahan, misal sebelum tidur atau perasaan cinta dan kasih sayang. Meski kerap dianggap sebagai ekspresi menggoda, tetapi emoji ini pada dasarnya dibuat untuk menunjukkan kasih sayang kepada lawan bicara (pacar),gua belike: jomblo🗿🗿.`)
     break
    case '😮':
    m.reply(`Emoji 😮 Wajah dengan Mulut Terbuka secara umum memiliki arti perasaan terkejut, takjub, atau bisa juga baru memahami sesuatu. Dalam percakapan sehari-hari, emoji ini sering disandingkan dengan kalimat “wow”, ” astaga!”, atau “luar biasa!”.`)
    break
    case '😫':
    m.reply(`Emoji 😫 Wajah Lelah Fisik memiliki mata berbentuk huruf “X”, alis berkerut, dan mulut terbuka. Umumnya diartikan sebagai rasa lelah secara fisik karena mengerjakan sesuatu. Bagian mulut yang terbuka mencerminkan nafas terengah-engah atau juga bisa diasumsikan sedang menguap.`)
    break
   case '😣':
   m.reply(`Emoji 😣 Wajah Berusaha Keras memiliki arti perasaan yang beragam, namun berdasarkan definisinya, emoji ini dikaitkan sebagai orang yang sedang berusaha keras dalam suatu hal. Sementara makna lainnya meliputi rasa frustrasi, pergumulan, atau bahkan rintihan atau bisa dibilang lagi pengen ke hotel buat anak🗿🗿.`)
   break
    default:
      if (!/[01]/.test(command)) return m.reply(`
List option:
😁
🙅
🏃
😚
😊
😃
😄
😭
😐
😪
😑
😶
😖
😨
😍
😴
💀
🗿
🙍
😛
🌝
💃
😘
😮
😫
😣
Contoh:
${usedPrefix}artiemoji 🙅
`.trim())
      throw false
  }
}
handler.help = ['artiemoji <emoji>']
handler.tags = ['fun']
handler.command = /^(artiemoji)$/i

module.exports = handler
