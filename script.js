const mapeamento = {};
const mapeamentotabela = [];

colecaoElementos.forEach((Elemento, index) => {
    mapeamento[`${Elemento.linha}-${Elemento.coluna}`] = Elemento;
});
console.log(mapeamento);

let  table = document.createElement("table");
let main = document.getElementById("main");

main.appendChild(table);
table.id = "tabela"

let linhas = 1;
let coluna = 1;
let contadorclass = 1;

for (let l = 0; l < 11; l++) {
    let row = table.insertRow(l);
    row.id = `L${linhas}`;
    row.classList.add("Rows")
    for(let c = 0; c < 18; c++) {
        let cells = row.insertCell(c);
        cells.id = `${linhas}-${coluna}`
        cells.classList.add("Elementos" + contadorclass);
        coluna++;
    }
    linhas++;
    contadorclass++
    coluna = 1;
}
let row  =  document.querySelectorAll("#tabela tr");
let cell3 = document.getElementById("1-3");

let cell = document.querySelectorAll("#tabela tr td");



for (let Linha = 1; Linha < row.length; Linha++) {
    let rows = document.getElementById(`L${Linha}`);
    console.log(rows)
    for (let coluna = 1; coluna < 19; coluna++){
        let cells = document.getElementById(`${Linha}-${coluna}`)
        let p = document.createElement("p");
        let span = document.createElement("span");
        let h1 = document.createElement("h1");
        
        cells.appendChild(span);
        cells.appendChild(p);
        cells.appendChild(h1);

        if (mapeamento[`${Linha}-${coluna}`] !== undefined) {

            span.textContent = mapeamento[`${Linha}-${coluna}`].numeroAtomico;
            span.classList.add("Natomico")
            p.textContent = mapeamento[`${Linha}-${coluna}`].simbolo;
            p.id = `${Linha}-${coluna}`;
            cells.style.backgroundColor = mapeamento[`${Linha}-${coluna}`].corGrupo;
        }

        
    }
    coluna = 1
}

let rowremove = document.getElementById("L11")

rowremove.remove()