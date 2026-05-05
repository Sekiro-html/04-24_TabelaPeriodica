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


for (let l = 0; l < 10; l++) {
    let row = table.insertRow(l);
    row.id = linhas;
    for(let c = 0; c < 18; c++) {
        let cells = row.insertCell(c);
        cells.id = coluna
        mapeamentotabela.push(`${linhas}-${coluna}`);
        coluna++;
    }
    linhas++;
    coluna = 1;
}
let tabela = document.querySelectorAll("#tabela tr"); 

let cells = document.querySelectorAll("td")

let contador = 0;

cells.forEach((td, index) => {
    
})