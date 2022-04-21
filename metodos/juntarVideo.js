import { readFile } from 'fs';
const ffmpeg = require('fluent-ffmpeg');
const content = './arquivos/sem_edicao/edicao.txt';

export default function juntarVideo() {

    readFile(content, 'utf-8', (err, data) => {
        var linhas = data.split(/\r?\n/);
        if (err) throw err;

        linhas.forEach((linha) => {
            var param = linha.split(';');

            ffmpeg({ source: param[0] })
                .input(param[1])
                .on('end', () => console.log('Edição finalizada'))
                .on('error', (err) => console.log('Error:', err))
                .mergeToFile(param[2]);
        })
    })
}