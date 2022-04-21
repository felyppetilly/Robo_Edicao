const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

export default function cortarVideo() {
    ffmpeg({ source: './arquivos/sem_edicao/Aula_02_Git_Github.mp4' })
        .setDuration('5:00.00')
        .save('Aula_02_Git_Github_Cortada.mp4')
}
