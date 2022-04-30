import process from 'process';


process.stdout.write("Escolha a operação que gostaria de realizar:");
process.stdout.write("\n1) Ler Nome dos Arquivos");
process.stdout.write("\n2) Cortar Videos");
process.stdout.write("\n3) Merge Videos\n");

function entrarParametrosScript() {
    return new Promise((resolve, reject) => {
        process.stdin.on('data', (keyboard) => {
            resolve(keyboard);
            process.exit(keyboard);
        })
    })
}

async function escolherOpcao() {
    let op = await entrarParametrosScript();
    console.log(op);

    switch (op) {
        case "1":
            // lerNomeArquivos();
            console.log("funcionou o 1");
            break;
        case "2":
            // cortarVideo();
            console.log("funcionou o 2");
            break;
        case "3":
            console.log("funcionou o 3");
            // mergeVideos();
            break;
        default:
            console.log("opção não encontrada, rode o script novamente");
    }

}