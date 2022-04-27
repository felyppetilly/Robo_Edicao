const ffmpeg = require('fluent-ffmpeg');

export default function cortarVideo(param){
    return new Promise((resolve, reject ) => { 
        ffmpeg({ source: param[0] })
        .setStartTime(param[1])
        .save('arquivos/editados/' + param[2])
        .on('end', () => { 
            console.log('Edição Finalizada as: ' + new Date())
            return resolve()
        })
        .on('err',(err)=>{
            return reject(err)
        })
    })    
}
