import fs from 'fs';

export default function alterarNomeArquivo() {
    let json = [{ "nome_original_video": "Aula01.mp4", "nome_edicao_video": "Aula 01 - Objetos JSON.mp4" }, { "nome_original_video": "Aula02.mp4", "nome_edicao_video": "Aula 02 - Interpolação.mp4" }, { "nome_original_video": "Aula03.mp4", "nome_edicao_video": "Aula 03 - Const e Let.mp4" }, { "nome_original_video": "Aula04.mp4", "nome_edicao_video": "Aula 04 - Desestruturação.mp4" }, { "nome_original_video": "Aula05.mp4", "nome_edicao_video": "Aula 05 - Arrow Function.mp4" }, { "nome_original_video": "Aula06.mp4", "nome_edicao_video": "Aula 06 - Manipulação do DOM I - Eventos.mp4" }, { "nome_original_video": "Aula07.mp4", "nome_edicao_video": "Aula 07 - Manipulação do DOM II - Funções Nativas.mp4" }, { "nome_original_video": "Aula08.mp4", "nome_edicao_video": "Aula 08 - Manipulação do DOM III - Funções Nativas.mp4" }, { "nome_original_video": "Aula09.mp4", "nome_edicao_video": "Aula 09 - Filter.mp4" }, { "nome_original_video": "Aula10.mp4", "nome_edicao_video": "Aula 10 - Map.mp4" }, { "nome_original_video": "Aula11.mp4", "nome_edicao_video": "Aula 11 - Reduce.mp4" }, { "nome_original_video": "Aula12.mp4", "nome_edicao_video": "Aula 12 - Fetch I - API.mp4" }, { "nome_original_video": "Aula13.mp4", "nome_edicao_video": "Aula 13 - Fetch II.mp4" }, { "nome_original_video": "Aula14.mp4", "nome_edicao_video": "Aula 14 - Fetch III.mp4" }]

    for (let j of json) {
        fs.rename(`./arquivos/sem_edicao/${j.nome_original_video}`, `./arquivos/sem_edicao/${j.nome_edicao_video}`, (err) => {
            if (err) throw err;
            console.log(`Arquivo ${j.nome_original_video} alterado para ${j.nome_edicao_video}`);
        })
    }
}