## EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

#### Analise os trechos de código em cada exercício e escreva o que ele faz, como faz e qual será o valor impresso.
--------
 ![image](https://user-images.githubusercontent.com/77674803/150620931-748564c2-28c6-4d2a-a15d-7c864e1a88da.png)

###### O QUE ELE FAZ: 
> retorna o valor um valor em dólar multiplicado pela cotação.
###### COMO FAZ:
> existe uma função que recebe como paramentro um valor em dólar,
que quando executada, pede ao usuário que insira o valor da contação,
e retorna o valor do dolar multiplicado pela cotação para uma variavel,
que e impressa pelo console.log()
###### VALOR IMPRESSO:
> será impresso no console o valor inserido pelo usuário
multiplicado por 100. EX: se o usuario digitar 3, no console
será impresso R$300

-----
![image](https://user-images.githubusercontent.com/77674803/150621038-a96fcd41-e3fa-4af8-9f99-9b3444781bc3.png)

###### O QUE ELE FAZ: 
> ele mostar o valor de retorno de um investimento feito pelo usuário.
###### COMO FAZ:
> existe uma função que recebe como paramentros o tipo de investimento e o valor
desse investimento. a função faz uma verificação condicional do tipo de investimento,
escolhido pelo usuario e multiplica esse valor de acordo com  esse tipo de investimento
e retorna esse valor alterado. Caso o usuário informe um um tipo de investimento invalido,
a função retorna uma mensagem invformando o erro.
###### VALOR IMPRESSO:
> primeiro console.log: 165 </br>
 segundo console.log: 'TIPO DE INVESTIMENTO INFORMADO INCORRETO!'   

----
![image](https://user-images.githubusercontent.com/77674803/150621062-4e5528d1-1a73-4ad7-bdf7-d3918932dfeb.png)

###### O QUE ELE FAZ: 
> mostra a quantidade total de números de um array, a quantidade de números pares,
e a quantidade de números impares
###### COMO FAZ:
> é usado um 'for of' para percorer o array principal com os números, dentro
desse for, e feita uma verificação condicional para verificar cada item do array,
e se caso o item for um número par ele é adicionado a um novo array so com números pares,
e caso seja impar é adicionado a outro array som com números impares.
###### VALOR IMPRESSO:
> primeiro console.log: 'Quantidade total de números 14'
segundo console.log: '6'
tercriro console.log: '8'

-----
![image](https://user-images.githubusercontent.com/77674803/150621107-bbcb363b-551f-48cc-8f58-dda29b5c8c52.png)

###### O QUE ELE FAZ: 
> dado um array de número, mostra qual o maior e o menor número desse array.
###### COMO FAZ:
> com o array com os números ja pronto, declara-se duas variaveis, uma para armazena
o menor valor(inicializada com um número maior do que os dentro do array), e outra
para armazena o maior valor(inicializada com zero). E então realizado um 'for of' para percorre
o array com os números e dentro do for uma condicional é feita para verificar cada item do array
e ver se ele é maior ou menor que os outros, sendo esses items armazenados em suas respectivas variaveis.
No final e impresso o valor do maior e menor número do array de números
###### VALOR IMPRESSO:
> primeiro console.log: 1590
segundo console.log: -10
