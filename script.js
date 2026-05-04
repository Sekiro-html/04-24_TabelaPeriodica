const mapeamento = {};

colecaoElementos.forEach(Elemento => {
    mapeamento[`${Elemento.linha}-${Elemento.coluna}`] = Elemento;

});
console.log(mapeamento);

let  table = document.createElement("table");
let main = document.getElementById("main");

main.appendChild(table);
table.id = "tabela"

let linhas = 1;
let coluna = 1;

for (let l = 1; l < 9; l++) {
    let tr = document.createElement("tr");

    table.appendChild(tr);
    tr.id = l;
    tr.classList.add("linhas")
    console.log(l);
}

let tr = document.querySelectorAll(".linhas");
let tabela = document.getElementById("tabela");

tr.forEach((linha, index) => {
    for(let c = 1; c < 19; c++) {
        let td = document.createElement("td");
        linha.appendChild(td);
        td.id = coluna;
        console.log(coluna)
        coluna++;
    }
    coluna = 1;
})



let td = document.querySelectorAll(".Elementos");

let contador = 0;

td.forEach(element => {
    let p = document.createElement("p");
    let span = document.createElement("span");
    let h1 = document.createElement("h1");
    
    element.appendChild(span);
    element.appendChild(p);
    element.appendChild(h1);
    
    span.textContent = colecaoElementos[contador].numeroAtomico;
    span.classList.add("Natomico")
    p.textContent = colecaoElementos[contador].simbolo;
    p.id = contador;
    element.style.backgroundColor = colecaoElementos[contador].corGrupo;

    td[contador].addEventListener("mouseenter", () => {
        let pTag = document.createElement("p");
        let spanTag = document.createElement("span");

        console.log(p.id);

        let NomeElemento = document.getElementById("Nome");
        let ImgElemento = document.getElementById("elemento");
        let info1 = document.getElementById("info1");
        let info2 = document.getElementById("info2");
        let info3 = document.getElementById("info3");
        let resposta1 = document.getElementById("resposta1");
        let resposta2 = document.getElementById("resposta2");
        let resposta3 = document.getElementById("resposta3");

        NomeElemento.textContent = colecaoElementos[p.id].nome;
        ImgElemento.appendChild(pTag);
        ImgElemento.appendChild(spanTag);

        spanTag.textContent = colecaoElementos[p.id].numeroAtomico;
        pTag.textContent = colecaoElementos[p.id].simbolo;
        ImgElemento.style.backgroundColor = colecaoElementos[p.id].corGrupo;

        info1.textContent = "Grupo";
        info2.textContent = "Tipo de Ligação";
        info3.textContent = "Ano de Descoberta";

        resposta1.textContent = colecaoElementos[p.id].grupo;
        resposta2.textContent = colecaoElementos[p.id].tipoDeLigacao;
        resposta3.textContent = colecaoElementos[p.id].anoDeDescoberta;
    });

    td[contador].addEventListener("mouseleave", () => {
        let pTag = document.createElement("p");
        let spanTag = document.createElement("span");

        let NomeElemento = document.getElementById("Nome");
        let ImgElemento = document.getElementById("elemento");
        let info1 = document.getElementById("info1");
        let info2 = document.getElementById("info2");
        let info3 = document.getElementById("info3");
        let resposta1 = document.getElementById("resposta1");
        let resposta2 = document.getElementById("resposta2");
        let resposta3 = document.getElementById("resposta3");

        NomeElemento.textContent = "Tabela Periodica";
        ImgElemento.textContent = ""
        pTag.textContent = ""
        spanTag.textContent = ""
        ImgElemento.style.backgroundColor = "white";

        info1.textContent = ""
        resposta1.textContent = ""
        info2.textContent = ""
        resposta2.textContent = ""
        info3.textContent = ""
        resposta3.textContent = ""
    })
    contador++;
});