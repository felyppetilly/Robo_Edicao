import fs from 'fs';
import { exec } from 'child_process';

export default async function cortarVideo() {
    let json = lerJSON();
    for (let j of json.corte) {
        let path_video = j.path_video;
        let inicio_corte = j.inicio_corte;
        let duracao_corte = j.duracao_corte
        let nome_final_arquivo = j.nome_final_arquivo
        await editarVideo(path_video, inicio_corte, duracao_corte, nome_final_arquivo);
    }
}

function lerJSON() {
    let json = fs.readFileSync('././arquivos/parametros/json_corte.txt', 'utf-8');
    return JSON.parse(json);
}

function editarVideo(path_video, inicio_corte, duracao_corte, nome_final_arquivo) {
    return new Promise((resolve, reject) => {
        // exec(`ffmpeg -i ${path_video} -ss ${inicio_corte} -t ${duracao_corte} -c:v copy -c:a copy -c:s copy -map 0:0 -map 0:1 "././arquivos/editados/${nome_final_arquivo}"`, (error, stdout, stderr) => {
        exec(`ffmpeg -i ${path_video} -ss ${inicio_corte} -c:v copy -c:a copy -c:s copy -map 0:0 -map 0:1 "././arquivos/editados/${nome_final_arquivo}"`, (error, stdout, stderr) => {


            if (error) {
                console.log(`error: ${error.message}`);
                return
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
            }
            let dados_edicao = `Video ${nome_final_arquivo} cortado com sucesso as ${new Date()}`
            fs.appendFileSync('./arquivos/parametros/log.txt', '\n' + dados_edicao);
            console.log("Edição finalizada");
            resolve("ok");
        });

    })

}