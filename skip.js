module.exports = ({
  name: "skip",
  aliases: ['pular','skipar'],
  code: `$deletecommand $deleteIn[1m] $color[A200FF] $description[ $skipSong
$onlyIf[$voiceID!=;Você não está em um Canal de Voz!]
<a:success:805845751035985950> **<@$authorID> Sua Música foi Skipada**: $songInfo[title]
]`
})
