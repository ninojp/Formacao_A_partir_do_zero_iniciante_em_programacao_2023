# Curso Alura - HTML e CSS: Classes, posicionamento e Flexbox

## Aula 1 - Seletores e Posicionamento

### Aula 1 - Apresentação - Vídeo 1

Transcrição
Guilherme: Olá! Meu nome é Guilherme Lima.

Rafaella: E eu sou Rafaella Ballerini.

Guilherme: Neste curso aprenderemos mais sobre CSS, certo Rafa?

Rafaella: Exatamente! Conseguiremos estilizar nossa página inteira.

Guilherme: Nós aprenderemos como posicionar elementos no CSS e utilizaremos as mesma tecnologias usadas no mundo real.

Rafaella: Conheceremos a tecnologia CSS e a forma como conseguimos trazer fontes diferentes para o nosso projeto.

Guilherme: Isso é bem legal! Também refinaremos o projeto que fizemos para deixá-lo ainda mais bonito.

Vamos começar!

### Aula 1 - Preparando o ambiente

Olá Dev!
Boas-vindas ao curso de HTML e CSS: posicionamento, fontes e Flexbox!

Neste treinamento, usaremos o editor de código [Visual Studio Code](https://code.visualstudio.com/download). Ele pode ser baixado tanto para Windows, como Linux ou Mac.

Além disso, estamos usando o Chrome como navegador principal e é importante tê-lo instalado em seu computador.

Caso você queira dar uma olhada no layout, [esse é o figma do projeto!](https://www.figma.com/community/file/1410363576427136130)

E por último e não menos importante, para se aprofundar no CSS e entender como funciona a estilização de páginas com tecnologias do mundo real, é necessário que você [baixe o zip do projeto base](https://github.com/alura-cursos/Portifolio-HTML-e-CSS/archive/refs/heads/aula_5.zip) ou acesse os [arquivos no Github!](https://github.com/alura-cursos/Portifolio-HTML-e-CSS/tree/aula_5)

Caso tenha dúvidas na instalação ou ao longo do curso, fique à vontade para se juntar ao fórum!

### Aula 1 - Classes no CSS - Vídeo 2

Transcrição  
Rafaella: Estamos em uma situação na qual queremos determinar uma cor específica para tag strong sem que essa formatação passe para todos os elementos que a utilizam. E existe uma maneira para fazermos isso.

No arquivo style.css, estamos usando as tags body e strong como seletores do CSS, o que significa que conseguimos escrever o nome da tag, as chaves ({}) e o que queremos que altere nela dentro dessas chaves. No caso do body, é a cor do fundo e da letra.

Contudo, essa não é a única forma de seletor, e uma dela que é muito utilizada no dia a dia é o seletor de classe que consegue resolver justamente esse problema. Portanto, vamos aprender como utilizá-lo.

Para isso, acessaremos o Google.

Guilherme: Podemos escrever, por exemplo, "classes CSS W3C". Inclusive o correto é "W3S", mas o Google conseguiu achar para nós como "W3C". Podemos abrir o primeiro resultado, que é o CSS .class Selector - W3Schools.

Nessa página ele tem um exemplo e uma definição, que está em inglês. Vamos alterar para o português, clicando na opção de tradução do google tradutor, que fica no canto direito da barra de endereço.

Dica: Inclusive pode aparecer uma janela flutuante com a opção de tradução no lado inferior direito da barra de endereços. O idioma inglês estará selecionado e, ao lado dele, aparecerá a opção "português". Basta clicar nela.

Então na seção "Definição e Uso" descobrimos que um seletor .class irá selecionar elementos com os atributos de uma classe específica. Essa explicação ficou um pouco confusa, mas o que ela quer dizer é que conseguimos selecionar partes para o CSS estilizar. Para selecionar cada elemento de uma classe específica, devemos escrever o ponto (referindo-se ao ponto final, ou seja, .).

Voltando para o nosso CSS, Rafa, repara que todas as nossas tags estão exatamente com o nome delas.

Rafaella: Exato!

Guilherme: O body e o strong, mas poderia ser também o h1, h2, h3, h4 e assim por diante. Basta escrevermos na estrutura nomeDaTag {} e dentro das chaves escrevermos as configurações.

Quando trabalhamos com classes, é diferente. Para criarmos classes no CSS, primeiramente vamos ao HTML e especificamos que a tag possui uma classe específica.

Rafaella: Então, no Explorador, abriremos o arquivo index.html e na linha 13, onde temos a `<strong>` adicionaremos a propriedade class (classe). Essa propriedade fica realmente dentro da tag, como descobrimos com as imagens e com a âncora.

Portanto para definir uma classe para qualquer tag, basta escrever class="" e entre as aspas o nome da classe que queremos, tudo isso dentro da tag, no caso, `<strong class="">`.

```html
//código suprimido
<strong class="">com um Front-end de qualidade!</strong></h1>
//código suprimido
```

Essa estrutura se aplica a qualquer tag para qual queiramos definir uma classe.

Guilherme: Boa, Rafa. Eu vou apenas fechar o Explorador para conseguirmos visualizar o código melhor.

E como funciona a nomeação da classe? Pode ser qualquer nome?

Rafaella: Existem diversos padrões que podemos seguir, mas nesse começo, recomendo sempre escrevermos algo que deixa bem óbvio do que se trata. Por exemplo, estamos no título da nossa página, e o strong é um destaque desse título, então seria bom nomearmos a classe como "titulo-destaque" ou "destaque-titulo".

Guilherme: Então sempre nomeamos de uma forma que faça sentido para aquele elemento.

Rafaella: Isso mesmo. Depois aprenderemos também um padrão que podemos seguir, por exemplo, estamos usando a classe "titulo-destaque", então para classe do título podemos escrever apenas "titulo". Então conseguimos encontrar padrões de nomes.

Guilherme: E aprenderemos isso com o passar do tempo.

Rafaella: Vamos então nomear como class="titulo-destaque".

Guilherme: Descobrimos também que para selecionar esse titulo-destaque precisamos usar o ponto (.) . Portanto voltaremos para o arquivo style.css e, no lugar do strong, escreveremos .titulo-destaque.

```CSS
body {
    background-color: #000000;
    color: #F6F6F6;
}

.titulo-destaque {
    color: #22D4FD;
}
```

Reparem que agora estamos em um momento diferente. Sempre que criamos uma classe CSS, selecionamos essa classe com o ponto final.

Rafaella: É a forma que informamos para o CSS que se trata de uma classe e não apenas de uma tag do HTML.

Guilherme: Temos outro desafio agora, Rafa. Pelo que fizemos, apenas o titulo-destaque estará na cor azul, enquanto o segundo strong, que está na linha 14 e que removeremos depois, porque foi apenas um exemplo, não estará com uma cor diferente.

Rafaella: Exato. É apenas para o strong do título estar azul.

Guilherme: Quando abrimos nosso projeto no navegador, observamos que funcionou. Conseguimos deixar a mesma tag, mas com uma classe específica, o que é bem comum, certo Rafa?

Rafaella: Isso! A classe é como um agrupamento de tipo. E podemos perceber que mesmo assim o trecho "React, HTML e CSS", na segunda linha, ficaram em destaque, mas apenas em negrito.

Isso ocorre porque o strong faz essa alteração quando é inserido em uma tag `<p>`. Portanto não se assustem, não é nenhuma configuração fora do normal ou alteração do CSS que fizemos, é porque utilizamos o `<strong>` que, por padrão, deixa o trecho em negrito dentro do parágrafo.

Porém podemos remover essa tag da linha 14, porque esse destaque não existe no modelo do nosso Figma. Ao retornarmos à página, observamos que o destaque sumiu no parágrafo, mas se manteve no título.

Agora aprendemos a utilizar classes no CSS e já podemos criá-las e utilizá-las em outras partes do projeto.

### Aula 1 - Para saber mais: Class

Class  
Agora você já sabe que o atributo class permite ao CSS selecionar e acessar elementos específicos através dos seletores de classe, mas para entender de forma mais clara e objetiva, você pode acessar a [documentação oficial MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) para tirar dúvidas.

Nomes de classes no CSS  
Quer entender as boas práticas para dar um nome nas classes do CSS? Recomendamos a leitura do [artigo Nomes de classes no CSS](https://www.alura.com.br/artigos/nomes-de-classes-no-css), que aborda de forma simples e prática esse conceito.

### Aula 1 - Seletor de classe

Os Seletores definem quais elementos um conjunto de regras CSS se aplica. Imagine que você precise editar a cor de um título <h1>, de preto para vermelho, que possui a propriedade class=“titulo”.

Qual a sintaxe correta do CSS para estilizar somente o elemento que possui essa classe específica?

Alternativa correta:

```CSS
.titulo {
color: red;
}
```

> Correto! Para estilizar uma classe no CSS é necessário utilizar o ponto final antes de chamar o nome atribuído à classe. Além disso, é a propriedade color do CSS que define o valor da cor de um elemento, e nesse caso, o valor red corresponde à cor vermelha.

### Aula 1 - Para saber mais: seletores

Seletores  
Agora que você já viu e praticou o conceito de seletores, te convido a ler a [documentação MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Selectors) para se aprofundar ainda mais no assunto.

Reset CSS  
Para mergulhar ainda mais nesse mundo Front-end, indico que leia o [artigo Reset CSS: O que é, Exemplos, Como Criar e Utilizar](https://www.alura.com.br/artigos/o-que-e-reset-css). Ele é muito relevante para o nosso treinamento, pois além de mostrar de forma detalhada como funciona essa ferramenta, também aborda conceitos e práticas que com certeza irão te auxiliar na sua jornada Dev!

### Aula 1 - Box Model - Vídeo 3

Transcrição  
Guilherme: Estamos com nosso layout um pouco desorganizado. Conseguimos adicionar as cores com hexadecimal, mas o posicionamento não está legal, Rafa.

Se observarmos, nosso título está grudado à lateral esquerda e parece que ele ocupa uma linha inteira, como também acontece com o parágrafo. O interessante é que , se rolamos a página um pouco para baixo, os links e a imagem parem também aparecer na mesma linha

A sensação que eu tenho é que, sem configurarmos, um estilo já foi aplicado.

Rafaella: Exatamente. Já existe um padrão quando estamos desenvolvendo em HTML e CSS, e justamente por isso, como pessoas desenvolvedoras Front-End, nós utilizamos a modularidade, através do "reset CSS".

Então resetamos o padrão que já existe, como uma decoração nos nossos links ou o espaçamento enorme que existe entre o início da nossa página e o título. No Figma, todo conteúdo está no centro da página, e para termos o controle de posicionamento desse título, não podemos contar com esse espaço do começo, que nem sabemos de quanto é.

Guilherme: Sendo que esse espaço não é padrão para todos os navegadores, certo?

Rafaella: Ainda tem esse ponto, os navegadores têm padrões um pouco diferentes.

Guilherme: Mudando a cor ou o tipo do link, por exemplo. Então realmente temos um problema, que é, temos um estilo e precisamos removê-lo.

Rafaella: Precisamos resetá-los para termos o controle de todos eles.

E podemos usar diversos tipos de reset para o CSS, desde gigantes, que resetam várias tags, e nem descobriremos tão cedo na nossa carreira, até os mais simples, com os quais conseguimos restar as tags mais usadas. Por exemplo, conseguimos resetar o espaçamento da página, ajustando a margem e o padding, que são duas propriedades que entenderemos agora como funcionam no CSS.

Guilherme: Antes disso, conseguimos ver esse espaçamento, Rafa?

Rafaella: Consegue!

Guilherme: Pessoal, o teste é o seguinte. Clicamos com o botão direito do mouse na página e selecionamos "Inspecionar", abrindo uma coluna na metade direita da janela com as DevTools.

Na parte superior dessa coluna pode aparecer a opção "Switch DevTools to Portuguese", e nós podemos clicar nela para mudar para o idioma das DevTools para o português. Na aba "Elementos" das DevTools há duas divisões na parte superior: na direita está a área do código e na área esquerda está a área de "Estilos".

Sendo assim, vamos clicar no botão "Selecionar Elemento" representado pelo ícone de um quadrado com o cursor do mouse no canto inferior direito. Esse botão está no canto superior esquerdo da DevTools, mas também podemos usar o atalho "Ctrl + Shift + C" para ativá-lo.

Feito isso, deixaremos o mouse no elemento do título, que está na metade esquerda da janela. Ao selecionar o título, a sensação que eu tenho, Rafa, é que tem o texto e em cima e embaixo tem algo envolvendo o texto.

Ao observarmos na aba "Estilos" da DevTools, na parte inferior temos vários retângulos um dentro do outro, cada vez menores em cores diferentes. Esses retângulo são:

- margin (margem): o maior e mais externo retângulo, que está na cor laranja-claro;
- border (borda): está dentro do retângulo da margem, sendo proporcionalmente menor a ele, e é da cor amarelo claro;
- padding (espaçamento): retângulo verde-claro que está dentro do retângulo da borda, também proporcionalmente menor a ele;
- conteúdo: um retângulo azul-claro que está dentro do retângulo de espaçamento e é proporcionalmente menor que ele.  
![alt text](image.png)

Na aba "Estilos", ao passarmos o mouse sobre o retângulo da margem, percebemos que no título da página, na metade esquerda da janela, observamos essa margem em destaque também, mudando a cor. Rafa, minha pergunta agora é um pouco estanha, mas vamos abrir a documentação para descobrirmos o que está acontecendo?

Rafaella: Ótima ideia! Vamos abrir outra aba e pesquisar no W3S, que já estávamos consultando, por "Box Model" (modelo de caixa). Sendo assim, vamos pesquisar no Google "w3s box model" e abrir a página correspondente ao resultado, que é o primeiro link.

Abrindo a [página de box model no W3S](https://www.w3schools.com/css/css_boxmodel.asp), encontramos a documentação com a mesma estrutura que vimos na aba "Estilos".

Guilherme: Porém as informações estão mais detalhadas, certo?

Rafaella: Estão. Eu vou traduzir a página e percebemos que esse é o modelo de caixa CSS, então cada elemento que estamos adicionando à página, ou seja, o título, o parágrafo e a imagem, todos são elementos do CSS.

Então quando voltamos para nossa página do projeto e passamos o mouse por cada um dos elementos, na aba "Estilos" constatamos que todos seguem o modelo de caixa. Da mesma forma, visivelmente enxergamos uma borda amarela em cima e embaixo do conteúdo no qual deixamos o mouse em cima. Essa borda representa a margem.

Nós não adicionamos nenhuma informação sobre margem na nossa página, então é isso que estávamos conversando. Existe um padrão que é criado automaticamente nas nossas páginas.

Voltando para documentação, descobrimos que existem, na verdade, três propriedades que conseguimos definir para o nosso elemento. O primeiro é a margem, que é mais externa, seguido da borda, que não está visível no nosso projeto, mas ela existe.

E dentro da borda existe o padding, que é o espaçamento da borda até o conteúdo. Então conseguimos encolher o conteúdo em relação à borda com o padding, enquanto da borda em relação aos elementos externos temos outro espaçamento, que é a margin.

Guilherme: Eu gostei até da explicação presente no W3S, Rafa. Nós temos o conteúdo, que é a parte visível, e temos várias outras coisas invisíveis que não sabemos que estão acontecendo.

Sabemos que existe um espaço ali, que agora sabemos que é a margem, além disso exista a borda, e o W3S explica que se trata do contorno do preenchimento do conteúdo, seja imagem ou texto.

Rafaella: O conteúdo e o padding.

Guilherme: Então Rafa, acho que nosso primeiro passo é tirar a margem de todos os elementos.

Rafaella: Vamos remover essa margem e também o padding, para garantirmos que não teremos esse espaçamento.

E voltando para o VS Code, no CSS existe uma forma de nos referirmos a todos os elementos da nossa página HTML.

Guilherme: Então não precisamos escrever todas as tags e classes, correto?

Rafaella: Não precisa. No nosso arquivo style.css, podemos fazer isso digitando apenas um asterisco (*). Assim ele pega todos os elemento da página. Em seguida, como em todos os elementos, abrimos chaves e, dento delas escrevemos margin: 0 e padding: 0.

```CSS
* {
    margin: 0;
    padding: 0;
}
```

Essa é a configuração padrão que mais utilizamos, pessoal. Existem outros resets CSS que retiram a decoração, entre outras coisas, mas usaremos só esses no nosso projeto, que é bem mais tranquilo. Feito isso, vamos salvar e conferir o resultado no navegador.

Com isso conseguimos notar que todo espaço que tínhamos entre o conteúdo e a página desapareceu. Inclusive podemos clicar para Inspecionar a página, sendo que às vezes a aba "Estilos" muda de posição. Dessa vez ela está em uma divisão abaixo do código, então vamos analisar o modelo de caixas.

Quando ativamos o seletor de elementos, pressionando "Ctrl + Shift + C" e passamos o mouse sobre os elementos da nossa página, reparamos que realmente não tem mais aquela margem padrão. Isso nos ajuda a ter muito mais controle dos elementos da nossa página.

Guilherme: E esse é o nosso próximo desafio!

### Aula 1 - Reset CSS

Você aprendeu sobre a importância de resetar o CSS antes de estilizar qualquer elemento de uma página, pois essa parte do código limpa todos os padrões dos navegadores. Diante disso, analise o erro do código abaixo e responda qual a sintaxe correta do reset.

```CSS
* {
margin: 100;
border: 100;
}
```

Resposta:  

```CSS
* {
margin: 0;
padding: 0;
}
```

> Correto! Para resetar os padrões dos navegadores de forma simples utilizamos as propriedades margin, que define a área de margem nos quatro lados do elemento (cima, direita, baixo, esquerda), e padding, que define a área de preenchimento interna nos mesmos quatro lados do elemento, ambas com valor igual à 0.

### Aula 1 - Lista de exercícios

O que é:  
Boas-vindas à nossa lista de exercícios "Mão na massa", um caminho prático e envolvente para aprender e aprimorar suas habilidades em tecnologia. Aqui, você não encontrará longas leituras teóricas ou explicações abstratas. Em vez disso, nossos exercícios são projetados para colocar você no centro do processo de aprendizado, permitindo que você construa, experimente e explore conceitos tecnológicos de forma direta e aplicada.

Para que serve:  
Esta lista é uma ferramenta dinâmica para aprender, reforçar e aprimorar habilidades práticas em programação e desenvolvimento web. Cada exercício é uma oportunidade de aplicar conhecimentos teóricos em cenários reais, preparando você não apenas para entender a tecnologia, mas para utilizá-la de maneira eficaz e criativa em seus próprios projetos ou no ambiente de trabalho.

Como fazer:

- Leia cada exercício com atenção: comece entendendo o cenário proposto e o que se espera como resultado.
- Escreva o código: utilize o ambiente de codificação de sua escolha para escrever e testar o seu código. Não se preocupe em acertar de primeira, a prática leva à perfeição.
- Verifique o gabarito: após tentar resolver o exercício, compare seu código com o gabarito fornecido em “Opinião do instrutor”. Isso ajudará a identificar áreas de melhoria e consolidar o aprendizado.
- Repita: a repetição é chave para o aprendizado. Tente fazer os exercícios mais de uma vez, aplicando melhorias e variantes.
- Lembre-se, cada desafio é uma chance de crescer. Não se desanime com os erros; eles são degraus no caminho do aprendizado. E acima de tudo, divirta-se! O aprendizado mais eficaz acontece quando nos engajamos e nos interessamos pelo que estamos fazendo.

Não se esqueça que estamos no Fórum e no Discord para te ajudar!

Bons estudos!

1) Estilizando elementos com classes CSS  
Você está trabalhando no desenvolvimento de uma página web e precisa aplicar estilos específicos a diferentes elementos usando classes CSS. Seu desafio é criar uma classe chamada "texto-destaque" no arquivo HTML para um elemento `<p>`e, em seguida, estilizar essa classe no arquivo CSS para alterar a cor do texto. Use sua criatividade para escolher cores que tornem o texto destacado, mas ainda legível e harmonioso com o design geral da página.

2) Destacando títulos com CSS  
Imagine que você está desenvolvendo um blog e precisa destacar os títulos das postagens. Crie uma classe CSS chamada "titulo-blog" e aplique-a a elementos <h1>no seu arquivo HTML. Em seguida, personalize essa classe no arquivo CSS para mudar a cor do texto, para dar mais destaque.

3) Estilos situacionais com classes CSS  
Você está trabalhando em um site de notícias e precisa aplicar um estilo diferente para notícias urgentes. Crie uma classe CSS chamada "urgente" e aplique-a a elementos <p>que contêm notícias urgentes. No CSS, faça com que o texto desses parágrafos seja vermelho, para chamar a atenção do leitor.

4) Entendendo e aplicando o reset CSS  
Você está trabalhando em um projeto de site e notou que o layout está um pouco desorganizado devido aos estilos padrões aplicados pelo navegador. Sua tarefa é aplicar um "reset CSS" para remover esses estilos padrão. Comece criando um arquivo CSS e utilize o seletor universal * para definir a margin e o padding de todos os elementos para 0. Teste o efeito dessa mudança no layout do seu site.

5) Inspecionando elementos e entendimento do modelo de caixa  
Como quem trabalha com front-end, você precisa entender como os estilos são aplicados aos elementos da sua página. Use as ferramentas de desenvolvimento (DevTools) do navegador para inspecionar o modelo de caixa de um elemento do seu site. Preste atenção nas propriedades margin, border, padding e content. Descreva como essas propriedades estão afetando o elemento selecionado.

6) Aplicando o modelo de caixa na prática  
Agora que você entendeu o modelo de caixa CSS, aplique esse conhecimento no seu projeto. Selecione um elemento específico (por exemplo, um parágrafo) e ajuste as propriedades de margin, border, padding e content. Observe como cada alteração afeta o posicionamento e a aparência do elemento na página.

Opinião do instrutor

1) Estilizando elementos com classes CSS

- Abra o arquivo HTML e localize o elemento <p>que você deseja estilizar.
- Adicione a propriedade class="texto-destaque" dentro da tag <p>.
- No arquivo CSS, crie uma nova regra para a classe .texto-destaque. Por exemplo:

```CSS
    color: #FF5733; /* Escolha uma cor vibrante */
```

2) Destacando títulos com CSS

- No arquivo HTML, adicione class="titulo-blog" aos elementos `<h1>`que representam os títulos das postagens.
- No arquivo CSS, defina a regra para .titulo-blog. Exemplo:

```CSS
    color: #007BFF; /* Escolha uma cor marcante */
```

3) Estilos situacionais com classes CSS  

- No arquivo HTML, identifique os parágrafos com notícias urgentes e adicione class="urgente" a esses elementos `<p>`.
- No CSS, crie a regra para a classe .urgente. Exemplo:

```CSS
    color: red; /* Cor vermelha para urgência */
```

4) Entendendo e aplicando o Reset CSS

- Criar o Arquivo CSS: Crie um novo arquivo CSS (por exemplo, style.css) para o seu projeto.
- Escrever o Código de Reset CSS: No arquivo style.css, adicione o seguinte código:

```CSS
   * {
       margin: 0;
       padding: 0;
   }
```

- Linkar o Arquivo CSS ao HTML: Certifique-se de que o arquivo CSS está corretamente vinculado ao seu arquivo HTML.
- Testar as Mudanças: Abra o seu site no navegador e observe as mudanças no layout. Os espaços padrões (margens e paddings) devem ter sido removidos.

5) Inspecionando elementos e entendimento do modelo de caixa

- Acessar as DevTools: Clique com o botão direito em um elemento da sua página e selecione "Inspecionar" para abrir as DevTools.
- Analisar o Modelo de Caixa: Na aba "Elementos", passe o mouse sobre as diferentes propriedades (margin, border, padding, content) para visualizar como elas estão afetando o elemento selecionado.
- Descrever as Observações: Note como cada uma dessas propriedades altera o layout do elemento. Por exemplo, margin adiciona espaço externo, padding espaço interno, border define um contorno, e content é a área onde o conteúdo do elemento é exibido.

6) Aplicando o modelo de caixa na prática

- Selecionar um Elemento: Escolha um elemento no seu HTML, como um parágrafo (`<p>`).
- Aplicar Estilos no CSS: No seu arquivo CSS, adicione estilos específicos para o elemento escolhido. Por exemplo:

```CSS
   p {
       margin: 10px;
       border: 2px solid black;
       padding: 5px;
   }
```

Observar as Mudanças: Após salvar as alterações no arquivo CSS, recarregue a página no navegador e observe como o elemento selecionado mudou. A margem adiciona espaço externo, a borda cria um contorno visual, o padding adiciona espaço interno, e o conteúdo é exibido dentro desses limites.

### Aula 1 - O que aprendemos?

- Nessa aula, você aprendeu:
- Utilizar classes no HTML e CSS;
- Boas práticas na criação das classes;
- Posicionamento de elementos com CSS;
- Importância de resetar o padrão do CSS;
- Testar os elementos da página inspecionando via ferramenta de desenvolvimento;
- Box model (margin, border e padding);

Diferentes seletores CSS.

## Aula 2 - Posicionando mais elementos

### Aula 2 -  - Vídeo 1
### Aula 2 -  - Vídeo 2
### Aula 2 -  - Vídeo 3
### Aula 2 -  - Vídeo 4
### Aula 2 -  - Vídeo 5
### Aula 2 -  - Vídeo 6
### Aula 2 -  - Vídeo 7
### Aula 2 -  - Vídeo 8
