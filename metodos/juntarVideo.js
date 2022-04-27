const ffmpeg = require('fluent-ffmpeg');

export default function juntarVideo(param) {
    ffmpeg({ source: param[0] })
        .input(param[1])
        .on('end', () => console.log('Edição do video ' + param[2] + ' foi finalizada as ' + new Date()))
        .on('error', (err) => console.log('Error:', err))
        .mergeToFile('arquivos/editados/' + param[2]);
}