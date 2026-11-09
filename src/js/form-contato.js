
// Executa a função backup() assim que o HTML terminar de carregar.
document.addEventListener("DOMContentLoaded", backup)

// Captura os elementos HTML através dos seus respectivos IDs.
let nome = document.getElementById("nome")
let email = document.getElementById("email")
let assunto = document.getElementById("assunto")
let mensagem = document.getElementById("mensagem")
let p = document.getElementById("resultado")
let btn = document.getElementById("btn-enviar")

// Adiciona o evento input aos campos.
// Sempre que o usuário digitar ou apagar algo, extrairTexto() será executada.
nome.addEventListener("input", extrairTexto)
email.addEventListener("input", extrairTexto)
mensagem.addEventListener("input", extrairTexto)

// Objeto responsável por armazenar os valores dos campos do formulário.
let dados = {
    nome: nome.value,
    email: email.value,
    assunto: assunto.value,
    mensagem: mensagem.value
}

// Evento responsável pelo envio do formulário.
btn.addEventListener("click", function(event) {

    // Impede que o formulário seja enviado e a página recarregada.
    event.preventDefault()

    console.log("btn clicado")

    // Verifica se todos os campos possuem algum valor.
    if (!dados.nome || !dados.email || !dados.assunto || !dados.mensagem) {

        // Exibe uma mensagem de erro caso algum campo esteja vazio.
        p.innerText = "Por favor, preencha todos os campos corretamente antes de enviar a mensagem."
        p.style.backgroundColor = "red"
        p.hidden = false

        return
    }

    // Converte o objeto dados para JSON e armazena no localStorage.
    localStorage.removeItem("dados") // Remove os dados do localStorage após o envio ja que não é mais necessário.

    // Exibe a mensagem de sucesso após a validação.
    p.innerText = "Mensagem enviada. Responderemos em breve."
    p.style.backgroundColor = "#3F6B3C"
    p.hidden = false

    // limpa os campos após o envio
    nome.value = ""
    email.value = ""
    mensagem.value = ""
})

// Evento change: detecta alterações no campo de seleção (assunto).
assunto.addEventListener("change", function() {

    console.log(`assunto: ${assunto.value}`)

    // Atualiza a propriedade assunto dentro do objeto dados.
    dados.assunto = assunto.value

    console.log("dados atualizados: ", dados)

    // Salva o objeto atualizado no armazenamento local.
    localStorage.setItem("dados", JSON.stringify(dados))
})

// Função responsável por extrair os valores dos campos do formulário.
function extrairTexto(event) {

    // Identifica qual elemento HTML disparou o evento.
    let campo = event.target

    // Obtém o valor atual desse elemento.
    let valor = campo.value

    // Exibe no console o conteúdo digitado, caso não esteja vazio.
    if (valor.length > 0) {
        console.log(`${campo.id}: ${valor}`)
    }

    // Identifica o campo alterado e atualiza sua propriedade no objeto dados.
    switch (campo.id) {

        case "nome":
            dados.nome = valor
            break

        case "email":
            dados.email = valor
            break

        case "mensagem":
            dados.mensagem = valor
            break

        case "assunto":
            dados.assunto = valor
            break
    }

    // Transforma o objeto em JSON e salva os dados atualizados no localStorage.
    // Dessa forma, cada alteração nos campos é armazenada automaticamente.
    localStorage.setItem("dados", JSON.stringify(dados))

    console.log("Dados atualizados:", dados)
}

// Função responsável por recuperar os dados salvos anteriormente.
function backup() {

    // Recupera os dados do localStorage e converte o JSON em objeto JavaScript.
    let dados = JSON.parse(localStorage.getItem("dados"))

    // Verifica se existem dados armazenados.
    // Caso não existam, interrompe a função.
    if (!dados) return

    // Restaura os valores armazenados nos respectivos campos do formulário.
    // O operador || "" evita que campos sem valor recebam undefined ou null.
    nome.value = dados.nome || ""
    email.value = dados.email || ""
    assunto.value = dados.assunto || ""
    mensagem.value = dados.mensagem || ""

    console.log("Dados restaurados do localStorage:", dados)
}
