import fs from 'fs';

export default function lerNomeArquivos() {
    const dir = './arquivos/sem_edicao';
    fs.writeFileSync('././arquivos/parametros/nome_videos.txt', 'Inicio');
    fs.readdir(dir, (err, arquivos) => {
        arquivos.forEach(arquivo => {
            fs.appendFileSync('././arquivos/parametros/nome_videos.txt', '\n' + arquivo);
        });
    });
}