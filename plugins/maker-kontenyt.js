const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
let d = new Date(new Date + 3600000)
let locale = 'id'
 let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
let handler = async (m, { conn, text }) => {
let name = conn.getName(m.sender)
if (!text) throw 'masukan Query'

let trut = [
"10",
"42",
"32",
"184",
"120",
"150",
"59",
"175",
"96",
"19",
"5",
"2",
"21",
"1",
"200"
]  //
let DislikeNya = trut[Math.floor(Math.random() * trut.length)]
let truht = [
"500",
"1000",
"3539",
"153",
"915",
"915",
"638",
"8155",
"1835",
"8294",
"1534",
"7385",
"6362",
"474",
"9000"
]  //
let LikeNya = truht[Math.floor(Math.random() * truht.length)]
let tt = [
"30",
"86",
"41",
"13",
"74",
"37",
"64",
"21",
"81",
"75",
"63",
"35",
"15",
"52",
"87"
]  //
let PositifNya = tt[Math.floor(Math.random() * tt.length)]
let ik = [
"1",
"8",
"4",
"6",
"12",
"29",
"19",
"24",
"28",
"10",
"9",
"3",
"7",
"13",
"30"
]  //
let NegatifNya = ik[Math.floor(Math.random() * ik.length)]
let rq = [
"3678",
"62538",
"50000",
"72845",
"5000",
"26364",
"75625",
"174637",
"48532",
"21836",
"20836",
"18354",
"70376",
"8354",
"79968"
]  //
let Orangnya = rq[Math.floor(Math.random() * rq.length)]
let ue = [
"5",
"29",
"10",
"60",
"26",
"50",
"28",
"57",
"16",
"48",
"63",
"53",
"64",
"42",
"70"
]  //
let cewekNyaa = ue[Math.floor(Math.random() * ue.length)]
let vf = [
"8",
"19",
"58",
"28",
"47",
"65",
"13",
"76",
"36",
"47",
"10",
"27",
"74",
"80"
]  //
let cowokNyaa = vf[Math.floor(Math.random() * vf.length)]
let gt = [
"10",
"43",
"47",
"15",
"17",
"36",
"58",
"62",
"16",
"15",
"13",
"19",
"67"
]
let nontonYaa = gt[Math.floor(Math.random() * gt.length)]
let mc = [
"14",
"43",
"47",
"15",
"17",
"36",
"58",
"62",
"16",
"15",
"73",
"72",
"67",
"30",
"19",
"89"
]
let nontonYaaa = mc[Math.floor(Math.random() * mc.length)]
let kn = [
"25",
"43",
"47",
"42",
"65",
"36",
"58",
"62",
"38",
"79",
"73",
"72",
"67",
"30",
"48",
"90"
]
let IndoNya = kn[Math.floor(Math.random() * kn.length)]
let ck = [
"2",
"15",
"14",
"13",
"12",
"11",
"10",
"9",
"8",
"7",
"6",
"5",
"3",
"4",
"12",
"15"
]
let MalayNya = ck[Math.floor(Math.random() * ck.length)]
let yt = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"11",
"12",
"13",
"14",
"15"
]
let Indianya = yt[Math.floor(Math.random() * yt.length)]
let ij = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"11",
"12",
"13",
"14",
"15"
]
let BrazilNya = ij[Math.floor(Math.random() * ij.length)]
let ff = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"11",
"12",
"13",
"14",
"15"
]
let SingaNya = ff[Math.floor(Math.random() * ff.length)]
let wk = [
"11",
"21",
"37",
"18",
"13",
"42",
"49",
"18",
"28",
"50",
"38",
"59",
"17",
"55",
"27",
"37",
"60"
]
let TigaBelas = wk[Math.floor(Math.random() * wk.length)]
let kk = [
"25",
"27",
"49",
"85",
"62",
"58",
"34",
"39",
"63",
"55",
"21",
"84",
"29",
"79",
"89"
]
let DelapanBelas = kk[Math.floor(Math.random() * kk.length)]
let kon = [
"12",
"28",
"22",
"14",
"15",
"16",
"27",
"26",
"19",
"20",
"21",
"19",
"13",
"25",
"30"
]
let TigaPuluh = kon[Math.floor(Math.random() * kon.length)]
let tandapetik = '```'
let SubscribNya = ['Subscribe Anda Naik 📈','Subscribe Anda Turun 📉']
let SubrekNya = pickRandom(SubscribNya)
let KontenText =`▶️ 𝍤 ${tandapetik}KONTEN YOUTUBE${tandapetik}
꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦

_Kamu baru saja membuat konten._

*judul :* ${text}
*author :* ${name}

*ANALYTICS*
ditonton : ${Orangnya} orang
uploader : ${time}
subscriber : +${SubrekNya}
like : ${LikeNya}
dislike : ${DislikeNya}

*USIA*
13-17 tahun = ${TigaBelas}%
18-24 tahun = ${DelapanBelas}%
25-34 tahun = ${TigaPuluh}%

*GENDER*
pria : ${cowokNyaa}%
wanita : ${cewekNyaa}%

*GEOGRAFI TERATAS*
Indonesia : ${IndoNya}%
Malaysia : ${MalayNya}%
India : ${Indianya}%
Brazil : ${BrazilNya}%
Singapura : ${SingaNya}%

*WAKTU TONTON*
tidak subscribe : ${nontonYaaa}%
disubscribe : ${nontonYaa}%

${tandapetik}Komentar positif${tandapetik} : *${PositifNya}%*
${tandapetik}Komentar negatif${tandapetik} : *${NegatifNya}%*`
m.reply(KontenText)
}
handler.help = ['kontenyt']
handler.tags = ['sticker']
handler.command = /^kontenyt$/i
handler.limit = true

handler.fail = null

module.exports = handler
