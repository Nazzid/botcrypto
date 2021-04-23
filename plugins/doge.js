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
let handler = async(m, { conn }) => {
    if (!args[0]) throw 'Tulis Query nya ngab!'
    linkchart = eChart(args[0])
    if (!linkchart) throw 'Query tidak tersedia'
    axios.get('https://indodax.com/api/summaries')
        .then(async res => {
            doge = res.data.tickers[linkchart.keys]
            text = `*${doge.name} ~ Indodax*\nHarga Terakhir : ${doge.last}\nTertinggi : ${doge.high}\nTerendah : ${doge.low}`
            try {
                buffer = await getBuffer(`https://nurutomo.herokuapp.com/api/ssweb?url=${linkchart.chart}&full=true&delay=3000&type=png`)
                await conn.sendMessage(m.chat, buffer, MessageType.image, { caption: text })
            } catch {
                conn.reply(m.chat, text, m)
            }
        })
}

handler.tags = ['Crypto']
handler.help = ['indodax <query>']
handler.command = /^indodax$/i
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


dataChart = '{"bitcoin": {"keys": "btc_usdt", "chart": "https://indodax.com/chart/btcusdt"}, "tokenomy": {"keys": "ten_idr", "chart": "https://indodax.com/chart/tenidr"}, "1inch": {"keys": "1inch_idr", "chart": "https://indodax.com/chart/1inchidr"}, "aave": {"keys": "aave_idr", "chart": "https://indodax.com/chart/aaveidr"}, "abyss": {"keys": "abyss_idr", "chart": "https://indodax.com/chart/abyssidr"}, "achain": {"keys": "act_idr", "chart": "https://indodax.com/chart/actidr"}, "cardano": {"keys": "ada_idr", "chart": "https://indodax.com/chart/adaidr"}, "algorand": {"keys": "algo_idr", "chart": "https://indodax.com/chart/algoidr"}, "aurora": {"keys": "aoa_idr", "chart": "https://indodax.com/chart/aoaidr"}, "cosmos": {"keys": "atom_idr", "chart": "https://indodax.com/chart/atomidr"}, "attila": {"keys": "att_idr", "chart": "https://indodax.com/chart/attidr"}, "balancer": {"keys": "bal_idr", "chart": "https://indodax.com/chart/balidr"}, "basicattentiontoken": {"keys": "bat_idr", "chart": "https://indodax.com/chart/batidr"}, "bitcoindiamond": {"keys": "bcd_idr", "chart": "https://indodax.com/chart/bcdidr"}, "bitcoincash": {"keys": "bch_idr", "chart": "https://indodax.com/chart/bchidr"}, "bitcoincashabc": {"keys": "bcha_idr", "chart": "https://indodax.com/chart/bchaidr"}, "bnb": {"keys": "bnb_idr", "chart": "https://indodax.com/chart/bnbidr"}, "bitcoinsv": {"keys": "bsv_idr", "chart": "https://indodax.com/chart/bsvidr"}, "bitcoingold": {"keys": "btg_idr", "chart": "https://indodax.com/chart/btgidr"}, "bitshares": {"keys": "bts_idr", "chart": "https://indodax.com/chart/btsidr"}, "bittorrent": {"keys": "btt_usdt", "chart": "https://indodax.com/chart/bttusdt"}, "celsius": {"keys": "cel_idr", "chart": "https://indodax.com/chart/celidr"}, "celo": {"keys": "celo_idr", "chart": "https://indodax.com/chart/celoidr"}, "nervosnetwork": {"keys": "ckb_idr", "chart": "https://indodax.com/chart/ckbidr"}, "coalculus": {"keys": "coal_idr", "chart": "https://indodax.com/chart/coalidr"}, "compound": {"keys": "comp_idr", "chart": "https://indodax.com/chart/compidr"}, "coti": {"keys": "coti_idr", "chart": "https://indodax.com/chart/cotiidr"}, "crypto.comchain": {"keys": "cro_idr", "chart": "https://indodax.com/chart/croidr"}, "curvedaotoken": {"keys": "crv_idr", "chart": "https://indodax.com/chart/crvidr"}, "dad": {"keys": "dad_idr", "chart": "https://indodax.com/chart/dadidr"}, "multi-collateraldai": {"keys": "dai_idr", "chart": "https://indodax.com/chart/daiidr"}, "dash": {"keys": "dash_idr", "chart": "https://indodax.com/chart/dashidr"}, "daex": {"keys": "dax_idr", "chart": "https://indodax.com/chart/daxidr"}, "deapcoin": {"keys": "dep_idr", "chart": "https://indodax.com/chart/depidr"}, "digibyte": {"keys": "dgb_idr", "chart": "https://indodax.com/chart/dgbidr"}, "digixgoldtoken": {"keys": "dgx_idr", "chart": "https://indodax.com/chart/dgxidr"}, "dogecoin": {"keys": "doge_idr", "chart": "https://indodax.com/chart/dogeidr"}, "polkadot": {"keys": "dot_idr", "chart": "https://indodax.com/chart/dotidr"}, "elrond": {"keys": "egld_idr", "chart": "https://indodax.com/chart/egldidr"}, "eminer": {"keys": "em_idr", "chart": "https://indodax.com/chart/emidr"}, "enjincoin": {"keys": "enj_idr", "chart": "https://indodax.com/chart/enjidr"}, "eos": {"keys": "eos_idr", "chart": "https://indodax.com/chart/eosidr"}, "ethereumclassic": {"keys": "etc_idr", "chart": "https://indodax.com/chart/etcidr"}, "ethereum": {"keys": "eth_usdt", "chart": "https://indodax.com/chart/ethusdt"}, "stasiseuro": {"keys": "eurs_idr", "chart": "https://indodax.com/chart/eursidr"}, "filecoin": {"keys": "fil_idr", "chart": "https://indodax.com/chart/filidr"}, "firo": {"keys": "firo_idr", "chart": "https://indodax.com/chart/firoidr"}, "thegraph": {"keys": "grt_idr", "chart": "https://indodax.com/chart/grtidr"}, "globalsocialchain": {"keys": "gsc_idr", "chart": "https://indodax.com/chart/gscidr"}, "gxchain": {"keys": "gxc_idr", "chart": "https://indodax.com/chart/gxcidr"}, "hederahashgraph": {"keys": "hbar_idr", "chart": "https://indodax.com/chart/hbaridr"}, "hedgetrade": {"keys": "hedg_idr", "chart": "https://indodax.com/chart/hedgidr"}, "hive": {"keys": "hive_idr", "chart": "https://indodax.com/chart/hiveidr"}, "honest": {"keys": "hnst_idr", "chart": "https://indodax.com/chart/hnstidr"}, "holo": {"keys": "hot_idr", "chart": "https://indodax.com/chart/hotidr"}, "highperformanceblockchain": {"keys": "hpb_idr", "chart": "https://indodax.com/chart/hpbidr"}, "idk": {"keys": "idk_idr", "chart": "https://indodax.com/chart/idkidr"}, "ignis": {"keys": "ignis_idr", "chart": "https://indodax.com/chart/ignisidr"}, "iost": {"keys": "iost_idr", "chart": "https://indodax.com/chart/iostidr"}, "iota": {"keys": "iota_idr", "chart": "https://indodax.com/chart/iotaidr"}, "just": {"keys": "jst_idr", "chart": "https://indodax.com/chart/jstidr"}, "kingdag": {"keys": "kdag_idr", "chart": "https://indodax.com/chart/kdagidr"}, "linkeye": {"keys": "let_idr", "chart": "https://indodax.com/chart/letidr"}, "lyfegold": {"keys": "lgold_idr", "chart": "https://indodax.com/chart/lgoldidr"}, "chainlink": {"keys": "link_idr", "chart": "https://indodax.com/chart/linkidr"}, "lyfeland": {"keys": "lland_idr", "chart": "https://indodax.com/chart/llandidr"}, "lyfesilver": {"keys": "lsilver_idr", "chart": "https://indodax.com/chart/lsilveridr"}, "litecoin": {"keys": "ltc_idr", "chart": "https://indodax.com/chart/ltcidr"}, "lyfe": {"keys": "lyfe_idr", "chart": "https://indodax.com/chart/lyfeidr"}, "decentraland": {"keys": "mana_idr", "chart": "https://indodax.com/chart/manaidr"}, "maticnetwork": {"keys": "matic_idr", "chart": "https://indodax.com/chart/maticidr"}, "moviebloc": {"keys": "mbl_idr", "chart": "https://indodax.com/chart/mblidr"}, "maker": {"keys": "mkr_idr", "chart": "https://indodax.com/chart/mkridr"}, "neo": {"keys": "neo_idr", "chart": "https://indodax.com/chart/neoidr"}, "energi": {"keys": "nrg_idr", "chart": "https://indodax.com/chart/nrgidr"}, "nxt": {"keys": "nxt_idr", "chart": "https://indodax.com/chart/nxtidr"}, "oceanprotocol": {"keys": "ocean_idr", "chart": "https://indodax.com/chart/oceanidr"}, "octofi": {"keys": "octo_idr", "chart": "https://indodax.com/chart/octoidr"}, "okb": {"keys": "okb_idr", "chart": "https://indodax.com/chart/okbidr"}, "omgnetwork": {"keys": "omg_idr", "chart": "https://indodax.com/chart/omgidr"}, "ontology": {"keys": "ont_idr", "chart": "https://indodax.com/chart/ontidr"}, "orbs": {"keys": "orbs_idr", "chart": "https://indodax.com/chart/orbsidr"}, "orchid": {"keys": "oxt_idr", "chart": "https://indodax.com/chart/oxtidr"}, "paxgold": {"keys": "paxg_idr", "chart": "https://indodax.com/chart/paxgidr"}, "qtum": {"keys": "qtum_idr", "chart": "https://indodax.com/chart/qtumidr"}, "ren": {"keys": "ren_idr", "chart": "https://indodax.com/chart/renidr"}, "augurv2": {"keys": "rep_idr", "chart": "https://indodax.com/chart/repidr"}, "ravencoin": {"keys": "rvn_idr", "chart": "https://indodax.com/chart/rvnidr"}, "thesandbox": {"keys": "sand_idr", "chart": "https://indodax.com/chart/sandidr"}, "saffron.finance": {"keys": "sfi_idr", "chart": "https://indodax.com/chart/sfiidr"}, "synthetixnetworktoken": {"keys": "snx_idr", "chart": "https://indodax.com/chart/snxidr"}, "solve": {"keys": "solve_idr", "chart": "https://indodax.com/chart/solveidr"}, "sumokoin": {"keys": "sumo_idr", "chart": "https://indodax.com/chart/sumoidr"}, "sushiswap": {"keys": "sushi_idr", "chart": "https://indodax.com/chart/sushiidr"}, "tadpolefinance": {"keys": "tad_idr", "chart": "https://indodax.com/chart/tadidr"}, "tfuel": {"keys": "tfuel_idr", "chart": "https://indodax.com/chart/tfuelidr"}, "theta": {"keys": "theta_idr", "chart": "https://indodax.com/chart/thetaidr"}, "titanswap": {"keys": "titan_idr", "chart": "https://indodax.com/chart/titanidr"}, "tron": {"keys": "trx_idr", "chart": "https://indodax.com/chart/trxidr"}, "uma": {"keys": "uma_idr", "chart": "https://indodax.com/chart/umaidr"}, "uniswap": {"keys": "uni_idr", "chart": "https://indodax.com/chart/uniidr"}, "usdcoin": {"keys": "usdc_idr", "chart": "https://indodax.com/chart/usdcidr"}, "usdt": {"keys": "usdt_idr", "chart": "https://indodax.com/chart/usdtidr"}, "vexanium": {"keys": "vex_idr", "chart": "https://indodax.com/chart/vexidr"}, "vidycoin": {"keys": "vidy_idr", "chart": "https://indodax.com/chart/vidyidr"}, "vidyx": {"keys": "vidyx_idr", "chart": "https://indodax.com/chart/vidyxidr"}, "verasity": {"keys": "vra_idr", "chart": "https://indodax.com/chart/vraidr"}, "vsystems": {"keys": "vsys_idr", "chart": "https://indodax.com/chart/vsysidr"}, "waves": {"keys": "waves_idr", "chart": "https://indodax.com/chart/wavesidr"}, "wrappedbitcoin": {"keys": "wbtc_idr", "chart": "https://indodax.com/chart/wbtcidr"}, "wrappednxm": {"keys": "wnxm_idr", "chart": "https://indodax.com/chart/wnxmidr"}, "efforce": {"keys": "wozx_idr", "chart": "https://indodax.com/chart/wozxidr"}, "xinfinnetwork": {"keys": "xdc_idr", "chart": "https://indodax.com/chart/xdcidr"}, "nem": {"keys": "xem_idr", "chart": "https://indodax.com/chart/xemidr"}, "stellarlumens": {"keys": "xlm_idr", "chart": "https://indodax.com/chart/xlmidr"}, "monero": {"keys": "xmr_idr", "chart": "https://indodax.com/chart/xmridr"}, "ripple": {"keys": "xrp_idr", "chart": "https://indodax.com/chart/xrpidr"}, "xsgd": {"keys": "xsgd_idr", "chart": "https://indodax.com/chart/xsgdidr"}, "tezos": {"keys": "xtz_idr", "chart": "https://indodax.com/chart/xtzidr"}, "yearn.finance": {"keys": "yfi_idr", "chart": "https://indodax.com/chart/yfiidr"}, "dfi.money": {"keys": "yfii_idr", "chart": "https://indodax.com/chart/yfiiidr"}, "zcash": {"keys": "zec_idr", "chart": "https://indodax.com/chart/zecidr"}, "zilliqa": {"keys": "zil_idr", "chart": "https://indodax.com/chart/zilidr"}, "0x": {"keys": "zrx_idr", "chart": "https://indodax.com/chart/zrxidr"}, "hashgard": {"keys": "gard_usdt", "chart": "https://indodax.com/chart/gardusdt"}, "pundix": {"keys": "pundix_usdt", "chart": "https://indodax.com/chart/pundixusdt"}, "playgame": {"keys": "pxg_usdt", "chart": "https://indodax.com/chart/pxgusdt"}, "smartshare": {"keys": "ssp_usdt", "chart": "https://indodax.com/chart/sspusdt"}}'
oChart = JSON.parse(a)

function eChart(keys) {
    try {
        return oChart[keys]
    } catch {
        return false
    }
}
