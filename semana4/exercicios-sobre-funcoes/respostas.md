### EXERCÍCIOS SOBRE FUNÇÕES
1. Escreva uma função que receba um `array` de números e imprima na tela o segundo maior e o segundo menor número. Em seguida, invoque essa função. (Não é permitido usar funções de ordenação de vetores.)
```js
function segundoMaiorMenor(array){
    let maior = array[0]
    let menor = array[0]

    for(let i of array){
        if(i > maior){
            maior = i
        } else if(i < menor) {
            menor = i
        }
    }

    array.splice(array.indexOf(maior), 1)
    array.splice(array.indexOf(menor), 1)

    maior = array[0]
    menor = array[0]

    for(let i of array){
        if(i > maior){
            maior = i
        } else if(i < menor) {
            menor = i
        }
    }
    console.log(maior, menor)

}

const array = [10,25,30,5,4,9] //maior= 20 menor= 5
segundoMaiorMenor(array)
```
2. Escreva uma **função não nomeada** que faça um `alert("Hello Future4");`. Em seguida, invoque essa função.
```js
const mensagem = () => {
    alert("Hello Future4")
}

mensagem()

```





