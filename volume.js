module.exports = ({
  name: "volume",
  aliases: ['som','s'],
  code: `$deletecommand $deleteIn[1m] $color[YELLOW] $description[ $volume[$message[1]]
<a:BFL_notas_de_musica:806262017081081921>** Volume atual**: $message[1]%

$onlyIf[$isNumber[$message[1]]==true;Digite um número!]
$onlyIf[$message[1]!=;Escreva o volume]
$onlyIf[$voiceID!=;Você não está em um Canal de Voz]
]`
})
