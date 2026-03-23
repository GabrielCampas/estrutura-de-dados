// Função para juntar nome e sobrenome.
function juntarNome() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;

    // 1. Concatenação de strings normal.
    let nomecompleto = nome + ' ' + sobrenome;

    // 2. Uso de interpolação strings (template strings).
    let nomecompleto1 = `<i> ${nome} <br> ${sobrenome} </i>`;
    let nomecompleto2 = nomecompleto;

    // 3. Injetar texto da variável nomecompleto na tag <p> cujo id é "nomecompleto".
    document.getElementById("nomecompleto").innerText = nomecompleto;

    // 4. Injetar o texto da variavel nomecompelto1 na tag <p> cujo id é "nomecompleto1"
    document.getElementById("nomecompleto1").innerHTML = nomecompleto1;

    // 5. Injetar texto da variável nomecompleto1 na tag <p> cujo id é "nomecompleto2".
    document.getElementById("nomecompleto2").textContent = nomecompleto2;
}

// mostrando nome num modal
function janelaNome() {
    let nome = prompt(`Entre com seu nome: `);
    let sobrenome = prompt(`Entre com seu sobrenome: `);

    // validaçao da entrada de dados 
    if (nome === null || sobrenome === null || nome === "" || sobrenome === "") {
        document.writeln("<p><strong>Nome e/ou sobrenome vazios.</strong></p>");
        console.log(`Nome e/ou sobrenome vazios.`);
    } else {
        let nomecompleto1 = `<i> ${nome} <br> ${sobrenome} </i>`;

        // executar a injeçao de tags + textos
        document.getElementById(`nomecompleto1`).innerHTML = nomecompleto1;
        alert(nome + ' ' + sobrenome);
        console.log(nome + ' ' + sobrenome);
    }
}

// função pra escrever o mome completo na página web
function escreverNome() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    
    // Recarregando o CSS para o ícone aparecer na nova página branca
    let css = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">';

    let resultado = "<strong>" + nome + " " + sobrenome + "</strong>";
    document.writeln(resultado);
    document.writeln("<br><br>");
    document.writeln("<button id='voltar' onclick='location.reload()'>" + "<i class='fa fa-solid fa fa-arrow-left'></i>Voltar</button>");
}

// função pra limpar os dados inputados
function limparDados() {
    // exclui os valores contidos no formulario nomes (nome e sobrenome)
    
}