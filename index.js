// Funções e os Métodos
// Função não tem valor de retorno
// Método tem valor de retorno
// Subrotina (JAVASCRIPT) -> SYNCRONO? function NOME(PARAM1?, PARAM2?, ...) {} 
// Subrotina (JAVA) -> SYNCRONO? VISIBILIDADE? KEYWORD? TIPO_RETORNO NOME(TIPO PARAM1?, TIPO PARAM2?, ...) {} 

class Calculadora {
  constructor() {}

  convertToDecimal(valor, base) {
    switch (base) {
      case "binary":
        return Number(`0b${valor}`);
      case "octal":
        return Number(`0o${valor}`);
      case "decimal":
        return Number(`${valor}`);
      case "hexadecimal":
        return Number(`0x${valor}`);
    }
    return undefined;
  }

  convertToBaseFinal(valor, baseFinal) {
    switch (baseFinal) {
      case "binary":
        return valor.toString(2);
      case "octal":
        return valor.toString(8);
      case "decimal":
        return valor.toString(10);
      case "hexadecimal":
        return valor.toString(16);
    }
    return undefined;
  }

  converter(valor, base, baseFinal) {
    const valDecimal = this.convertToDecimal(valor, base);

    return this.convertToBaseFinal(valDecimal, baseFinal);
  }

  somar(val1, val2) {
    const result = this.convertToDecimal(val1) + this.convertToDecimal(val2);
    return this.convertToBaseFinal(result);
  }
}

// função para baskhara
async function bhaskara() {
  let delta =
    Number(iptBhaskaraB.value) * Number(iptBhaskaraB.value) -
    4 * Number(iptBhaskaraA.value) * Number(iptBhaskaraC.value);
  let raizDeDelta = Math.sqrt(delta);

  if (raizDeDelta >= 0) {
    let x1Bhaskara =
      (-Number(iptBhaskaraB.value) + raizDeDelta) / (2 * iptBhaskaraA.value);
    let x2Bhaskara =
      (-Number(iptBhaskaraB.value) - raizDeDelta) / (2 * iptBhaskaraA.value);

    let saidaPositivo = x1Bhaskara;
    let saidaNegativo = x2Bhaskara;

    if (x1Bhaskara < 0) {
      let saidaPositivo = `Raiz negativa, continue a conta com o outro valor`;
    }
    if (x2Bhaskara < 0) {
      let saidaNegativo = `Raiz negativa, continue a conta com o outro valor`;
    }

    divMsgBhaskara.innerHTML = `Raiz1: ${saidaPositivo} 
                                  <br>
                                  Raiz2: ${saidaNegativo}`;
  } else {
    divMsgBhaskara.innerHTML = `A equação não possui raizes reais`;
  }
}
// funçao calorimetria
function calorimetria() {
  let massa = Number(iptCalorimetriaMassa.value);
  let calor = Number(iptCalorimetriaCalor.value);
  let delta = Number(iptCalorimetriaDelta.value);

  let conta = massa * calor * delta;

  divMsgCalorimetria.innerHTML = `Seu ΔQ é igual à ${conta}`;
}
// função catetos
function catetos() {
  let catA = Number(iptCatA.value);
  let catB = Number(iptCatB.value);
  let hip = Number(iptHip.value);

  if (hip == 0) {
    let conta = Math.sqrt(Math.pow(catA, 2) + Math.pow(catB, 2));

    divMsgCatetos.innerHTML = conta;
    return
  }
  if (hip < catA || hip < catB) {
    divMsgCatetos.innerHTML = `A hipotenusa não pode ser menor que os catetos!`;
    return;
  }
  if (catA == 0) {
    let conta = Math.sqrt(Math.pow(hip, 2) - Math.pow(catB, 2));

    divMsgCatetos.innerHTML = conta;
    return;
  }
  if (catB == 0) {
    let conta = Math.sqrt(Math.pow(hip, 2) - Math.pow(catA, 2));

    divMsgCatetos.innerHTML = conta;
    
  }
 
}
// equaçao primeiro grau
function equacaoPrimeiroGrau() {
  let x = Number(iptEquacaoPrimeiroGrauX.value);
  let a = Number(iptEquacaoPrimeiroGrauA.value);
  let b = Number(iptEquacaoPrimeiroGrauB.value);

  let resultadoEquacaoPrimeiroGrau = (a + b) / x;

  divMsgEquacaoPrimeiroGrau.innerHTML = `Resultado: ${resultadoEquacaoPrimeiroGrau}`;
}

function jurosSimples() {
  let valor = Number(iptValJuros.value);
  let juros = Number(iptJuros.value);
  let tempo = Number(iptTempoJuros.value);

  let conta = valor * juros * tempo;

  divJurosSimples.innerHTML = `Seus valor de R$${valor}, com juros de ${juros}% ao mês, aplicado por ${tempo} meses renderá aproximadamente R$${conta}`;
}

// função juros compostos
function jurosCompostos() {
  let juros = Number(iptJurosComp.value);
  let tempo = Number(iptTempoMesJuros.value);
  let capital = Number(iptCapitalJuros.value);

  let montante = capital * Math.pow(1 + juros / 100, tempo);

  divJurosComposto.innerHTML = `Você esta com o montante de R$${montante}`;
}
// funçao media
function calcularMedia() {
  let conta = (Number(iptNumMedia.value) + Number(iptNumdoisMedia.value)) / 2;

  divMsgMedia.innerHTML = conta;
}
// função Montante
function Montante() {
  let jurosMontante = Number(iptMontantejuros.value);
  let capital = Number(iptMontantecapital.value);
  let montante = capital * jurosMontante;
  divMsgMontante.innerHTML = `O montante é: ${montante}`;
}
// função regra de 3
function regraDeTres() {
  let x1 = Number(iptRegraX1.value);
  let x2 = Number(iptRegraX2.value);
  let y1 = Number(iptRegraY1.value);
  let y2 = Number("1");

  let resultadoEquacao1 = y1;
  let resultadoEquacao2 = x2 * y1;

  divMsgRegraDeTres.innerHTML = `
    <math display="block"><mfrac linethickness="1">
    <mn>${resultadoEquacao1}</mn>
    <mn>${resultadoEquacao2}</mn>
    </mfrac></math> `;
}

// function impostoDeRenda(){

//     let salario= Number(iptSalario.value);
//     let ir= 0;// se salario for 2500 eu simplesmente pego 7.5% de 2500 e dou display na tela
//     // if (salario > numero && salario > numero)||
//     if (salario <= 0){
//         alert(`isento`)

//     } else if (salario <= 2259.20){
//         alert(`isento`)
//     } else if (salario <= 2826.65){
//         ir = salario * aliquota
//     } else if (salario <=  3751.05){
//         ir = salario * aliquota2
//     } else if (salario <= 4664.68){
//         ir = salario * aliquota3
//     } else {
//         ir= salario * aliquota4
//     }

// }
// </script>
// <style>
// table{
// border-spacing: 0;
// border-collapse: separate !important;
// border-radius: 4px;
// border: 1px solid #636363;
// margin-bottom: 24px;
// }
// td{
// border: 1px solid #636363;
// }
// funçao juros simples