const ffmpeg = require('fluent-ffmpeg');

export default function editarVideo(primeira_parte_video, segunda_parte_video, nome_final_arquivo) {
    ffmpeg({ source: primeira_parte_video })
        .input(segunda_parte_video)
        .on('end', () => console.log('Edição finalizada'))
        .on('error', (err) => console.log('Error:', err))
        .mergeToFile(nome_final_arquivo);
}