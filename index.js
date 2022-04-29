import lerParametros from './metodos/lerParametros';
import { exec } from 'child_process';

console.log("Iniciando edição")

exec('ffmpeg -f concat -i cortes.txt aula02_editada.mp4', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
    }
    console.log("Video editado com sucesos as " + new Date());
});

// lerParametros('juntar');
// lerParametros('cortar');
