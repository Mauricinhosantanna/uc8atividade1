var  data  =  new  Date ( ) ;

var  DataDoEvento  =  13/04/2022
if  ( DataDoEvento  =>  new data ) {
console.log ( "O Evento é permitido" )
} else {
    console.log ( "Evento não permitido, escolha outra data." )
}
let idadeDoParticipante = 25

if (idadeDoParticipante >= 18){
    console.log("Participação Permitida")
}else { 
    console.log("Cadastro não permiditido,O Evento é permitido somente para maiores de 18 anos")
}

let lista = ["Marinara","Marcio","Pedro","Mauricio","Jonas","Elias"];
let quantidadeDeInscritos = lista.length;
console.log(quantidadeDeInscritos);

if (lista.length < 100){

    console.log("Parabéns, inscrição realizada!")
}else{ 
    console.log("Número de vagas Esgotadas")
}
let listaDePalestrantes = ["palestrante1","palestrante2","palestrante3"];
let quantidadeDePalestrantes = listaDePalestrantes.length;
console.log(quantidadeDePalestrantes);


let listaDePalestrante = ["Palestrante1", "Palestrante2", "Palestrante3","Palestrante4","Palestrante5"];
let quantidadeDePalestrante = listaDePalestrante.length;
for (let indice = 0; indice < quantidadeDePalestrante; indice++) {
	const alunoCorrente = listaDePalestrante[indice];
	console.log(alunoCorrente)
}