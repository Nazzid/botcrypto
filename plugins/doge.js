const axios = require('axios')
const { MessageType } = require('@adiwajshing/baileys')

const getBuffer = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: "get",
            url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        })
        return res.data
    } catch (e) {
        console.log(`Error : ${e}`)
    }
}
let handler  = async (m, { conn }) => {
	
	axios.get('https://indodax.com/api/summaries')
		.then(async res => {
			doge = res.data.tickers.doge_idr
			buffer = await getBuffer('https://nurutomo.herokuapp.com/api/ssweb?url=https%3A%2F%2Findodax.com%2Fchart%2FDOGEIDR&full=true&delay=3000&type=png')
			text = `*Dogecoin ~ Nazzbot*\nHarga Terakhir : ${doge.last}\nTertinggi : ${doge.high}\nTerendah : ${doge.low}`
			conn.sendMessage(m.chat, buffer, MessageType.image, {caption: text})
			
			
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
  
  
