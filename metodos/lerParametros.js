import cortarVideo from './cortarVideo';
import juntarVideo from './juntarVideo';
const { readFile } = require('fs');
var content;

export default function lerParametros(acao){
    acao == 'cortar' ? content = './arquivos/parametros/cortes.txt' : content = './arquivos/parametros/edicao.txt';
    
    readFile(content, 'utf-8', (err, data) => {
        var linhas = data.split(/\r?\n/);
        if (err) throw err;

        linhas.forEach((linha) => {
            var param = linha.split(';');
            acao == 'cortar' ? cortarVideo(param) :  juntarVideo(param);
        })
    })
}