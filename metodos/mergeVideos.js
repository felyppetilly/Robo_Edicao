import fs from 'fs';
import { exec } from 'child_process';

export default async function mergeVideos() {
    let json = lerJSON();
    for (let j of json.merge) {
        await criarArquivoParametro(j);
        let nome_final_arquivo = j.nome_final_arquivo;
        console.log(nome_final_arquivo);
        await editarVideo(nome_final_arquivo);
    }
}

function lerJSON() {
    let json = fs.readFileSync('././arquivos/parametros/json_merge.txt', 'utf-8');
    return JSON.parse(json);
}

function criarArquivoParametro(json) {
        let path_video = json.path_video;
        let path_vinheta = json.path_vinheta;

        fs.writeFileSync('./arquivos/parametros/merge.txt', path_vinheta);
        fs.appendFileSync('./arquivos/parametros/merge.txt', '\n' + path_video)
}

function editarVideo(nome_final_arquivo) {
    return new Promise((resolve, reject) => {
        console.log(`Editando o video ${nome_final_arquivo}`);
        exec(`ffmpeg -f concat -safe 0 -i ././arquivos/parametros/merge.txt ${nome_final_arquivo}`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
            }
            let dados_edicao = `Video ${nome_final_arquivo} editado com sucesso as ${new Date()}`
            fs.appendFileSync('./arquivos/parametros/log.txt', '\n' + dados_edicao);
            resolve("ok");
        });
    })
   
}


function alterarNomeArquivos() {

}


