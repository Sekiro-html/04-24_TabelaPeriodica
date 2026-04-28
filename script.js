let  table = document.createElement("table");
let main = document.getElementById("main");

main.appendChild(table);

for (let i = 0; i < 10; i++) {
    let tr = document.createElement("tr");

    table.appendChild(tr);
    tr.classList.add("Linhas")
}

let Linhas = document.querySelectorAll("table tr");

Linhas.forEach ((Linha, index) => {
    const dados = Linha.querySelectorAll("td");
    
    if (index == 0) {
        Linha.id = "Linha1"
        
        for (let i = 0; i < 6; i++) {
            let td = document.createElement("td");
            Linha.appendChild(td);
        }

        const dados = Linha.querySelectorAll("td");
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let th = document.createElement("th");
        
        dados[0].classList.add("Elementos");
        dados[2].colSpan = "10";
        dados[2].rowSpan = "3";
        //dados[2].id = "infoTd";
        dados[2].appendChild(table);
        table.appendChild(thead)
        thead.appendChild(tr);
        tr.appendChild(th);
        for (let j = 0; j < 4; j++) {
            table.appendChild(tr);
            tr.appendChild(td);
        }

        dados[4].colSpan = "5"

        dados[dados.length - 1].classList.add("Elementos");
    };
    console.log(index);
    if (index == 1) {
        Linha.id = "Linha2"

        for (let i = 0; i < 10; i++) {
            let td = document.createElement("td");
            Linha.appendChild(td);
        }

        const dados = Linha.querySelectorAll("td");

        dados[0].classList.add("Elementos");
        dados[1].classList.add("Elementos");
        dados[3].classList.add("Elementos");
        dados[4].classList.add("Elementos");
        dados[5].classList.add("Elementos");
        dados[6].classList.add("Elementos");
        dados[7].classList.add("Elementos");
        dados[8].classList.add("Elementos");
        
    }

    if (index == 2) {
        Linha.id = "Linha3"
        
        for (let i = 0; i < 10; i++) {
            let td = document.createElement("td");
            Linha.appendChild(td);
        }

        const dados = Linha.querySelectorAll("td");

        dados[0].classList.add("Elementos");
        dados[1].classList.add("Elementos");
        dados[3].classList.add("Elementos");
        dados[4].classList.add("Elementos");
        dados[5].classList.add("Elementos");
        dados[6].classList.add("Elementos");
        dados[7].classList.add("Elementos");
        dados[8].classList.add("Elementos");
        
    }

    if (index == 3) {
        Linha.id = "Linha4"
        
        for (let i = 0; i < 19; i++) {
            let td = document.createElement("td");
            Linha.appendChild(td);
        }

        const dados = Linha.querySelectorAll("td");

        dados[0].classList.add("Elementos");
        dados[1].classList.add("Elementos");
        dados[2].classList.add("Elementos");
        dados[3].classList.add("Elementos");
        dados[4].classList.add("Elementos");
        dados[5].classList.add("Elementos");
        dados[6].classList.add("Elementos");
        dados[7].classList.add("Elementos");
        dados[8].classList.add("Elementos");
        dados[9].classList.add("Elementos");
        dados[10].classList.add("Elementos");
        dados[11].classList.add("Elementos");
        dados[12].classList.add("Elementos");
        dados[13].classList.add("Elementos");
        dados[14].classList.add("Elementos");
        dados[15].classList.add("Elementos");
        dados[16].classList.add("Elementos");
        dados[17].classList.add("Elementos");
        dados[dados.length - 1].classList.add("Elementos");
        
    }
    
    if (index == 4) {
        Linha.id = "Linha5"
        for (let i = 0; i < 19; i++) {
            let td = document.createElement("td");
            Linha.appendChild(td);
        }

        const dados = Linha.querySelectorAll("td");

        dados[0].classList.add("Elementos");
        dados[1].classList.add("Elementos");
        dados[2].classList.add("Elementos");
        dados[3].classList.add("Elementos");
        dados[4].classList.add("Elementos");
        dados[5].classList.add("Elementos");
        dados[6].classList.add("Elementos");
        dados[7].classList.add("Elementos");
        dados[8].classList.add("Elementos");
        dados[9].classList.add("Elementos");
        dados[10].classList.add("Elementos");
        dados[11].classList.add("Elementos");
        dados[12].classList.add("Elementos");
        dados[13].classList.add("Elementos");
        dados[14].classList.add("Elementos");
        dados[15].classList.add("Elementos");
        dados[16].classList.add("Elementos");
        dados[17].classList.add("Elementos");
        dados[dados.length - 1].classList.add("Elementos");
        
    }

    if (index == 5) {
        Linha.id = "Linha6"
        for (let i = 0; i < 19; i++) {
            let td = document.createElement("td");
            Linha.appendChild(td);
        }

        const dados = Linha.querySelectorAll("td");

        dados[0].classList.add("Elementos");
        dados[1].classList.add("Elementos");
        dados[3].classList.add("Elementos");
        dados[4].classList.add("Elementos");
        dados[5].classList.add("Elementos");
        dados[6].classList.add("Elementos");
        dados[7].classList.add("Elementos");
        dados[8].classList.add("Elementos");
        dados[9].classList.add("Elementos");
        dados[10].classList.add("Elementos");
        dados[11].classList.add("Elementos");
        dados[12].classList.add("Elementos");
        dados[13].classList.add("Elementos");
        dados[14].classList.add("Elementos");
        dados[15].classList.add("Elementos");
        dados[16].classList.add("Elementos");
        dados[17].classList.add("Elementos");
        dados[dados.length - 1].classList.add("Elementos");
        
    }

    if (index == 6) {
        Linha.id = "Linha7"
        for (let i = 0; i < 19; i++) {
            let td = document.createElement("td");
            Linha.appendChild(td);
        }

        const dados = Linha.querySelectorAll("td");

        dados[0].classList.add("Elementos");
        dados[1].classList.add("Elementos");
        dados[3].classList.add("Elementos");
        dados[4].classList.add("Elementos");
        dados[5].classList.add("Elementos");
        dados[6].classList.add("Elementos");
        dados[7].classList.add("Elementos");
        dados[8].classList.add("Elementos");
        dados[9].classList.add("Elementos");
        dados[10].classList.add("Elementos");
        dados[11].classList.add("Elementos");
        dados[12].classList.add("Elementos");
        dados[13].classList.add("Elementos");
        dados[14].classList.add("Elementos");
        dados[15].classList.add("Elementos");
        dados[16].classList.add("Elementos");
        dados[17].classList.add("Elementos");
        dados[dados.length - 1].classList.add("Elementos");
        
    }

    if (index == 7) {
        Linha.id = "Linha4"
        
        for (let i = 0; i < 19; i++) {
            let td = document.createElement("td");
            Linha.appendChild(td);
        }

        const dados = Linha.querySelectorAll("td");

        dados[0].id = "espaco";
        dados[0].colSpan = "18";
        
    }

    if (index == 8) {
        Linha.id = "Linha9"
        for (let i = 0; i < 16; i++) {
            let td = document.createElement("td");
            Linha.appendChild(td);
        }

        const dados = Linha.querySelectorAll("td");
        dados[0].colSpan = "3"
        dados[1].classList.add("Elementos");
        dados[2].classList.add("Elementos");
        dados[3].classList.add("Elementos");
        dados[4].classList.add("Elementos");
        dados[5].classList.add("Elementos");
        dados[6].classList.add("Elementos");
        dados[7].classList.add("Elementos");
        dados[8].classList.add("Elementos");
        dados[9].classList.add("Elementos");
        dados[10].classList.add("Elementos");
        dados[11].classList.add("Elementos");
        dados[12].classList.add("Elementos");
        dados[13].classList.add("Elementos");
        dados[14].classList.add("Elementos");
        
    }

    if (index == 9) {
        Linha.id = "Linha10"
        for (let i = 0; i < 16; i++) {
            let td = document.createElement("td");
            Linha.appendChild(td);
        }

        const dados = Linha.querySelectorAll("td");
        dados[0].colSpan = "3"
        dados[1].classList.add("Elementos");
        dados[2].classList.add("Elementos");
        dados[3].classList.add("Elementos");
        dados[4].classList.add("Elementos");
        dados[5].classList.add("Elementos");
        dados[6].classList.add("Elementos");
        dados[7].classList.add("Elementos");
        dados[8].classList.add("Elementos");
        dados[9].classList.add("Elementos");
        dados[10].classList.add("Elementos");
        dados[11].classList.add("Elementos");
        dados[12].classList.add("Elementos");
        dados[13].classList.add("Elementos");
        dados[14].classList.add("Elementos");
        
    }
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