const ffmpeg = require('fluent-ffmpeg');
const { readFile } = require('fs');
const content = './metodos/cortes.txt';


export default function cortarVideo() {


    readFile(content, 'utf-8', (err, data) => {
        var linhas = data.split(/\r?\n/);
        if (err) throw err;

        linhas.forEach((linha) => {
            var param = linha.split(';');

            ffmpeg({ source: param[0] })
            .setDuration(param[1])
            .on('end', () => console.log('Corte Finalizado'))
            .save(param[2])
        })
    })

    
  
}
