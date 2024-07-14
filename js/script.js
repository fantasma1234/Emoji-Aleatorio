const div = document.querySelector("#iemoji")
const nomeEmoji = document.querySelector("#inome")
const codigo = document.querySelector("#icodigo")

const emoji = []

async function getEmoji() {
    let busca = await fetch("https://emoji-api.com/emojis?access_key=47cfc9e52f6e903f73ce5efa5a6f147ffd7e1c71")

    dados = await busca.json()

    for (let index = 0; index < 1857; index++) {
        emoji.push({
            emojiName: dados[index].character,
            emojiCode: dados[index].unicodeName,
            emojiPoint: dados[index].codePoint,
        })
    }
    console.log(dados);
}

getEmoji()

async function gerarEmoji() {
    let numero = numeroAleatorio()
    div.innerText = emoji[numero].emojiName
    nomeEmoji.innerText = emoji[numero].emojiCode
    codigo.innerText = emoji[numero].emojiPoint
    div.classList.remove("hide")
    nomeEmoji.classList.remove("hide")
    codigo.classList.remove("hide")
}

function numeroAleatorio() {
    const numero = parseInt((Math.random()) * 1858)
    return numero
}