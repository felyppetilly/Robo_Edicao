import { exec } from 'child_process';

export default function juntarVideo() {
    console.log('Editando o video')
    exec('ffmpeg -f concat -safe 0 -i ././arquivos/parametros/edicao.txt ./arquivos/editados/aula02_editada.mp4', (error, stdout, stderr) => {
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