import fs from 'fs';
import mergeVideos from './metodos/mergeVideos';
import cortarVideo from './metodos/cortarVideo';
import lerNomeArquivos from './metodos/lerNomeArquivos';


// lerNomeArquivos();


// let json = {
//     "corte": [
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 01 - PT01 - Algoritmos.mp4",
//             "nome_edicao_video": "Aula01",
//             "path_video": "././arquivos/sem_edicao/Aula01",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 01 - PT01 - Algoritmos.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 01 - PT02 - Sintaxe e Semantica.mp4",
//             "nome_edicao_video": "Aula02",
//             "path_video": "././arquivos/sem_edicao/Aula02",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 01 - PT02 - Sintaxe e Semantica.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 02 - Tipos de Dados - Variáveis vs Constantes.mp4",
//             "nome_edicao_video": "Aula03",
//             "path_video": "././arquivos/sem_edicao/Aula03",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 02 - Tipos de Dados - Variáveis vs Constantes.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 03 - Operadores.mp4",
//             "nome_edicao_video": "Aula04",
//             "path_video": "././arquivos/sem_edicao/Aula04",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 03 - Operadores.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 04 - Tabela Verdade.mp4",
//             "nome_edicao_video": "Aula05",
//             "path_video": "././arquivos/sem_edicao/Aula05",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 04 - Tabela Verdade.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 05 - Fluxograma - Entrada - Processamento e Saída de Dados.mp4",
//             "nome_edicao_video": "Aula06",
//             "path_video": "././arquivos/sem_edicao/Aula06",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 05 - Fluxograma - Entrada - Processamento e Saída de Dados.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 06 - Fluxograma - Estrutura Sequencial.mp4",
//             "nome_edicao_video": "Aula07",
//             "path_video": "././arquivos/sem_edicao/Aula07",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 06 - Fluxograma - Estrutura Sequencial.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 07 - Fluxograma - Estrutura Condicional.mp4",
//             "nome_edicao_video": "Aula08",
//             "path_video": "././arquivos/sem_edicao/Aula08",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 07 - Fluxograma - Estrutura Condicional.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 08 - Fluxograma - Estrutura de Repetição.mp4",
//             "nome_edicao_video": "Aula09",
//             "path_video": "././arquivos/sem_edicao/Aula09",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 08 - Fluxograma - Estrutura de Repetição.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 09 - PT01 - Introdução ao Javascript.mp4",
//             "nome_edicao_video": "Aula10",
//             "path_video": "././arquivos/sem_edicao/Aula10",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 09 - PT01 - Introdução ao Javascript.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 09 - PT02 - Introdução ao Javascript.mp4",
//             "nome_edicao_video": "Aula11",
//             "path_video": "././arquivos/sem_edicao/Aula11",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 09 - PT02 - Introdução ao Javascript.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 10 - Variáveis e Operadores.mp4",
//             "nome_edicao_video": "Aula12",
//             "path_video": "././arquivos/sem_edicao/Aula12",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 10 - Variáveis e Operadores.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 11 - Estrutura Sequencial.mp4",
//             "nome_edicao_video": "Aula13",
//             "path_video": "././arquivos/sem_edicao/Aula13",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 11 - Estrutura Sequencial.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 12 - Estrutura Condicional.mp4",
//             "nome_edicao_video": "Aula14",
//             "path_video": "././arquivos/sem_edicao/Aula14",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 12 - Estrutura Condicional.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 13 - Estrutura de Repetição.mp4",
//             "nome_edicao_video": "Aula15",
//             "path_video": "././arquivos/sem_edicao/Aula15",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 13 - Estrutura de Repetição.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 14 - Vetor.mp4",
//             "nome_edicao_video": "Aula16",
//             "path_video": "././arquivos/sem_edicao/Aula16",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 14 - Vetor.mp4_editado"
//         },
//         {
//             "nome_original_video": "Algoritmo_JS - Aula 15 - Funções.mp4",
//             "nome_edicao_video": "Aula17",
//             "path_video": "././arquivos/sem_edicao/Aula17",
//             "inicio_corte": "00:00:05",
//             "duracao_corte": "",
//             "nome_final_arquivo": "Algoritmo_JS - Aula 15 - Funções.mp4_editado"
//         }
//     ]
// }

// for(let j of json.corte){
//     fs.rename(`./arquivos/sem_edicao/${j.nome_original_video}`, `./arquivos/sem_edicao/${j.nome_edicao_video}.mp4`, (err) =>{
//         if(err) throw err;
//         console.log(`Arquivo ${j.nome_original_video} alterado para ${j.nome_edicao_video}`);
//     })
// }

// cortarVideo();
mergeVideos();

