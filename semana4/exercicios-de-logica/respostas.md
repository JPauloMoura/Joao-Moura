## EXERCÍCIOS DE LÓGICA DE PROGAMAÇÃO
---
1. Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.
```js
const lista = [10, 20, 30]
// usando um "for"
for(let i = 0; i < lista.length; i++){
  console.log(lista[i])
}

// usando "while"
let i = 0
while(i < lista.length){
  console.log(lista[i])
  i++
}

// usando o "foreach"
lista.forEach(item =>{ console.log(item) })
```
---
2. Para este exercício considere as seguintes variáveis:
```js
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2
const booleano4 = !booleano3 
```
Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:
    
a) booleano1 && booleano2 && !booleano4
> false

b) (booleano1 && booleano2) || !booleano3
> false

c)  (booleano2 || booleano3) && (booleano4 || booleano1)
> true

d) !(booleano2 && booleano3) || !(booleano1 && booleano3)
> true

e !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
> true
---
3. Você tem que escrever um código que, dado um número **N**, ele imprima (no `console`) os **N** primeiros números pares (por exemplo, se **N** for 3, você deve imprimir 0, 2 e 4; se **N** for 5, deve imprimir 0, 2, 4, 6 e 8).  Um colega seu disse que já começou esta tarefa, mas não conseguiu terminar. Dê uma olhada no código dele:
    
```js
const quantidadeDeNumerosPares
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
}
``` 
Este código funciona? Por quê? Caso não funcione, corrija a implementação dele.
> não funcionava, era necessario atribuir um valor a 'quantidadeDeNumerosPares'
```js
//mudar a comparação do while de (<=) para (<),
// e adiciona +1 a variavel 'i' dentro so while
    const quantidadeDeNumerosPares = 5
    let i = 0

    while(i < quantidadeDeNumerosPares) {
        console.log(i*2)
        i++
    }

```
---
4. Vocês lembram de trigonometria? ~~(Oh, não, trigonometria)~~. Relaxem. O exercício é simples, mas mexe com isso. Veja bem: quando nos ensinam triângulos (uma figura de três lados), nós aprendemos como classifica-los dependendo do tamanho de seus lados. Se um triângulo possuir os **três lados iguais**, ele é chamado de "Equilátero". Se possuir, **dois (e somente 2) lados iguais**, diz-se que ele é "Isósceles". Se os **três lados tiverem medidas diferentes**, ele é "Escaleno". Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: `a, b, c`  e retorne se ele é equilátero, isósceles ou escaleno.
```js
function tipoTriagulo(a,b,c){
    if(a === b && b === c){
        return 'triagulo equilátero'
    } else if( a !== b && b !== c) {
        return 'triagulo escaleno'
    } else {
        return 'triangulo isósceles'
    }
}

console.log(tipoTriagulo(9,8,10))
```
---
5. Faça um programa que, dados dois números,
    
    i. indique qual é o maior,
    
    ii. determine se eles são divisíveis um pelo outro (use o operador `%`) e
    
    iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)
    
    Um exemplo:
    
    ![image](https://user-images.githubusercontent.com/77674803/150621559-40b28d9f-f0c0-469f-91ae-e9c76dd1919f.png)

```js
function comparcao(num1, num2){
  let maior = num1
  let menor = num2

  if(num1 > num2){
    maior = num1
    menor = num2
  } else if (num2 > num1){
    maior = num2
    menor = num1
  } 

  console.log(`O maior é: ${maior}`)

  if(num1 % num2 === 0){
    console.log(`${num1} é divisivel por ${num2}`)
  } else {
    console.log(`${num1} não é divisivel por ${num2}`)
  }

  if(num2 % num1 === 0){
    console.log(`${num2} é divisivel por ${num1}`)
  } else {
    console.log(`${num2} não é divisivel por ${num1}`)
  }

  console.log('A diferença entre eles é', maior-menor)
}

comparcao(10, 40)
```