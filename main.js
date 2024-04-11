alert("Hello Word!! \n Aperte OK pata começar.");

function operationsum() {
  alert("Vamos realizar uma soma :)");

  let firstNumber = prompt("Digite o primeiro número:");
  let secondNumber = prompt("Digite o segundo número:");
  sum = Number(firstNumber) + Number(secondNumber);

  alert(`Resultado da soma: ${sum}`);
}
operationsum();

function operationSub() {
  alert("Vamos fazer uma subtração :)");
  let firstNumber = prompt("Digite o primeiro número:");
  let secondNumber = prompt("Digite o segundo número:");
  let sum = Number(firstNumber) - Number(secondNumber);

  alert(`Resultado da Subtração: ${sum}`);
}
operationSub();

function operationMulti() {
  alert("Vamos fazer uma multiplicação :)");
  let firstNumber = prompt("Digite o primeiro número:");
  let secondNumber = prompt("Digite o segundo número:");
  let sum = Number(firstNumber) * Number(secondNumber);

  alert(`Resultado da subtração: ${sum}`);
}
operationMulti();

function operationDiv() {
  alert("Vamos fazer uma divisão :)");

  let firstNumber = prompt("Digite o primeiro número:");
  let secondNumber = prompt("Digite o segundo número");
  let sum = Number(firstNumber) / Number(secondNumber);

  alert(`Resultado da divisão: ${sum}`);
}
operationDiv();

function checkNumber() {
  let value = prompt("Digite um valor para verificar se é uma número:");

  if (!isNaN(value)) {
    alert("Esse valor é um número.");
  } else {
    alert("Não é um número.");
  }
}
checkNumber();

function checkstring() {
  let value = prompt("Digite um valor para verificar se é uma string:");

  if (isNaN(value)) {
    alert("É uma string");
  } else {
    alert("Não é uma string");
  }
}
checkstring();

function checkbool() {
  let value = prompt("Digite um valor");

  if (value === "true" || "false") {
    alert("É tipo booleano");
  } else {
    alert("Não é do tipo booleano");
  }
}
checkbool();


function EvenOrOdd() {
  alert("Vamos verificar se o número é impar ou par :)");
  let number = prompt("Digite um número:");

  if (Number(number) % 2 == 0) {
    alert("Esse número é par.");
  } else {
    alert("Esse número é impar.");
  }
}
EvenOrOdd()

alert("Fim, aperte OK para sair :)")
