/*function entrar (){
    var input_user = document.getElementById('input_user')
    var input_senha = document.getElementById('input_senha')

if (input_user === '' || input_senha === '' || isNaN (input_user) || isNaN (input_senha) ){
    notie.alert({ text: "Por favor, preenche os campos em branco", type: 5});
    return;
} 
}

function submeter (){
    var input_user = document.getElementById('input_user')
    var input_cargo = document.getElementById('input_cargo')
    var input_senha = document.getElementById('input_senha')
    var confirmar_senha = document.getElementById('confirmar_senha')
}

if (input_user === '' || input_cargo === '' || input_senha === '' || confirmar_senha === '' || isNaN(input_user) || isNaN(input_cargo) || isNaN(input_senha) || isNaN (confirmar_senha)){
    
}*/

const inputFile = window.document.getElementById('input_upload')
const descricaoupload = window.document.getElementById('descricao_upload')
const descricaouploadTxt = "ESCOLHER ARQIVOS"
descricaoupload.innerHTML = descricaouploadTxt

inputFile.addEventListener('change', function(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];


    if (file){
        descricaoupload.innerHTML = "Arquivo Anexado"

    } else{
        descricaoupload.innerHTML = descricaouploadTxt
    }
    console.log(file);
}) 


function enviarArquivo() {
    const inputUpload = document.getElementById('input_upload');
    const arquivo = inputUpload.files[0];

    if (arquivo) {
        const formData = new FormData();
        formData.append('arquivo', arquivo);

        fetch('gerenciamento.html', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                console.log('Arquivo enviado com sucesso.');
                // Redireciona para a página de destino, se necessário
                window.location.href = 'gerenciamento.html';
            } else {
                console.error('Erro ao enviar o arquivo.');
            }
        })
        .catch(error => {
            console.error('Erro de rede:', error);
        });
    } else {
        console.error('Nenhum arquivo selecionado.');
    }
}