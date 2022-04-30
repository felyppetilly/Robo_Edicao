import fs from 'fs';
import { exec } from 'child_process';

export default async function mergeVideos(){
    let json = lerJSON();
    console.log(json)
    for(let j of json.merge){
        await criarArquivoParametro(j);
    }
    editarVideo();
}

function lerJSON(){
    let json = fs.readFileSync('././arquivos/parametros/json.txt', 'utf-8');
    return JSON.parse(json);
}

function criarArquivoParametro(json){
    console.log(json);
    let path_video = json.path_video;
    let path_vinheta = json.path_vinheta;
    let nome_final_arquivo = json.nome_final_arquivo;

    fs.writeFileSync('./arquivos/parametros/merge.txt', path_vinheta);
    fs.appendFileSync('./arquivos/parametros/merge.txt', '\n' + path_video)
    console.log("Arquivo criado")
}

function editarVideo(){
    console.log('Editando o video')
    exec('ffmpeg -f concat -safe 0 -i ././arquivos/parametros/merge.txt ./arquivos/editados/aula02_editada.mp4', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
        }
        console.log("Video editado com sucesos as " + new Date());
    });
}



