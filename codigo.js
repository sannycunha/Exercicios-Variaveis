var primeiroValor = prompt('Digite um valor: ');
var segundoValor = prompt('Digite um novo valor:');
var resultado = 0;
var escolhaOperação = prompt(' Escolha umaoperação: Se soma digite 1, Se subtração digite 2, Se divisão digite 3, Se Multiplicação digite 4');
if(escolhaOperação ==1){
  resultado = parseInt(primeiroValor) + parseInt(segundoValor);
    alert(resultado);
}
if(escolhaOperação ==2){
    resultado = (primeiroValor - segundoValor)
      alert(resultado);
  }
  if(escolhaOperação ==3){
    resultado =  (primeiroValor / segundoValor)
      alert(resultado);
  }
  if(escolhaOperação ==4){
    resultado =  (primeiroValor * segundoValor)
      alert(resultado);}