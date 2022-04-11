import { readFile } from 'fs';
const ffmpeg = require('fluent-ffmpeg');
const content = './metodos/parametros.txt';

// export default function editarVideo() {

//     readFile(content, 'utf-8', (err, data) => {
//         var param = data.split(';');
//         if (err) throw err;

//         ffmpeg({ source: param[0] })
//         .input(param[1])
//         .on('end', () => console.log('Edição finalizada'))
//         .on('error', (err) => console.log('Error:', err))
//         .mergeToFile(param[2]);
//     })
// }


export default function editarVideo() {

    readFile(content, 'utf-8', (err, data) => {
        var linhas = data.split(/\r?\n/);
        if (err) throw err;

        linhas.forEach((linha) => {
            var param = linha.split(';');
            console.log(param);

            ffmpeg({ source: param[0] })
                .input(param[1])
                .on('end', () => console.log('Edição finalizada'))
                .on('error', (err) => console.log('Error:', err))
                .mergeToFile(param[2]);
        })
    })
}