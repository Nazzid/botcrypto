const axios = require('axios')

let handler  = async (m, { conn }) => {
	
	axios.get('https://indodax.com/api/summaries')
		.then(async res => {
			doge = res.data.tickers.doge_idr
			text = `*Dogecoin ~ Nazzbot*\nHarga Terakhir : ${doge.last}\nTertinggi : ${doge.high}\nTerendah : ${doge.low}`
			conn.reply(m.chat, teks, m)
		})
}

handler.tags = ['Crypto']
handler.help = ['doge']
handler.command = /^doge$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
  
  