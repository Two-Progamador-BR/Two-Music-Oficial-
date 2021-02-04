module.exports = ({
  name: "play",
  aliases: ['p'],
  code: `$deletecommand $deleteIn[1m] $color[RED] $thumbnail[$serverIcon] $description[ <a:rain_musicaPDV:806724738487025715> **<@$authorID> Sua Música Foi Adicionada**: $playSong[$message;Não consegui tocar a música]
]
$onlyIf[$message!=;Digite o Nome de uma música para eu poder tocar]
$onlyIf[$voiceID!=;Você não está em um Canal de Voz]`
})
