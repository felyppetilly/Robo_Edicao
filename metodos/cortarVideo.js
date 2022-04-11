const ffmpeg = require('fluent-ffmpeg');

export default function cortarVideo() {
    ffmpeg({ source: 'Aula_02_Git_Github.mp4' })
        .setDuration('5:00.00')
        .save('Aula_02_Git_Github_Cortada.mp4')
}
