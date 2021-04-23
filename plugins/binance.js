const axios = require('axios')
const { MessageType } = require('@adiwajshing/baileys')

const getBuffer = async(url, options) => {
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
let handler = async(m, { conn, args }) => {
    if (!args[0]) throw 'Tulis Query nya ngab!'
    argc = args[0].toLowerCase()
    axios.get('https://api.binance.com/api/v3/ticker/price')
        .then(async res => {  
            for(i = 0; i < res.data.length; i++){
              data = res.data[i]
              if(data.symbol.toLowerCase() == argc){
                text = `*${data.symbol} ~ Binance*\nHarga Terakhir : ${data.price}`
                try {
                  buffer = await getBuffer(`https://nurutomo.herokuapp.com/api/ssweb?url=https://id.tradingview.com/chart/?symbol=BINANCE:${data.symbol}&full=true&delay=3000&type=png`)
                  await conn.sendMessage(m.chat, buffer, MessageType.image, { caption: text })
                } catch {
                  conn.reply(m.chat, text, m)
                }
              }
            }
            

        })
}

handler.tags = ['Crypto']
handler.help = ['binance <query>']
handler.command = /^binance/i
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
