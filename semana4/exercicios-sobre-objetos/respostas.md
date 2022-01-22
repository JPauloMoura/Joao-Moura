## EXERCÍCIOS SOBRE OBJETOS
1. Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos.

    > Array é uma estrutura de dado que armazena varias variaveis e
de tipos diferente, e podem ser acessadas atraves de indices.
Podemos usar um array quando queremos amazena um conjunto de variaveis
como se separacemos em um grupo.</br>
Objeto é um tipo de estrutura de dados que possui propriedades, cada uma 
com uma chave e um valor.
Usamos um objeto quando abstraimos algo do mundo real para o codigo.
Eles possui um nivel de abstração mais proximo do ser humano.

2. Crie uma função chamada `criaRetangulo` que recebe como parâmetros dois lados (`lado1` e `lado2`) e retorna um objeto com 4 informações: largura (`lado1`), altura (`lado2`), perímetro (`2 * (lado1 + lado2)`) e área (`lado1 * lado2`).
```js
function criaRetangulo(lado1, lado2){
  return {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 + lado2
  }
}

console.log(criaRetangulo(10,8))
```

3. Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes). Imprima na tela a seguinte string, baseada nos valores do objeto:
`Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n`. A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.
```js
const filme = {
  titulo: 'karate kid',
  ano: 1984,
  diretor: 'John G. Avildsen',
  atores: ['Ralph Macchio', 'Pat Morita']
}

console.log(`
  Venha assistir ao filme ${filme.titulo}, de ${filme.ano},
  dirigido por ${filme.diretor} e estrelado por ${filme.atores} 
`)

```
4. Crie um objeto que represente uma pessoa qualquer, com as propriedades de `nome`, `idade`, `email` e `endereco`. Crie uma função chamada `anonimizarPessoa`, que deverá retornar um **novo** objeto com as mesmas propriedades, mas com a string `ANÔNIMO` no lugar do nome. O objeto original deve ser mantido com o nome da pessoa.
```js
const fulano = {
  nome: 'Bruna',
  idade: 22,
  email: 'bruna@hotmail.com',
  endereco: 'rua Cesa Galvão N°123'
}

function anonimizarPessoa(pessoa){
// criamos um novo obj com o conteúdo de pessoa e o modificamos
  let anonimar = {...pessoa}
  anonimar.nome = 'Anonima'

  return anonimar
}

console.log(anonimizarPessoa(fulano))
console.log(fulano)
```
