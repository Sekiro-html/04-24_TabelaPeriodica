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

for (let l = 0; l < 10; l++) {
    let row = table.insertRow(l);
    row.id = linhas;
    row.classList.add("Rows")
    for(let c = 0; c < 18; c++) {
        let cells = row.insertCell(c);
        cells.id = coluna
        cells.classList.add("Elementos" + contadorclass);
        mapeamentotabela.push(`${linhas}-${coluna}`);
        coluna++;
    }
    linhas++;
    contadorclass++
    coluna = 1;
}
let rows = document.querySelectorAll("#tabela tr");