// const ffmpeg = require('fluent-ffmpeg');
import editarVideo from './metodos/editarVideo';

const video_path = './preparacao_ambiente.mp4';
const vinheta_path = './vinheta.mp4';
const nome_arquivo = 'final-teste-maquinanova.mp4'

// function editarVideo(primeira_parte_video, segunda_parte_video, nome_final_arquivo) {
//     ffmpeg({ source: primeira_parte_video })
//         .input(segunda_parte_video)
//         .on('end', () => console.log('Edição finalizada'))
//         .on('error', (err) => console.log('Error:', err))
//         .mergeToFile(nome_final_arquivo);
// }

editarVideo(video_path, vinheta_path, nome_arquivo);

