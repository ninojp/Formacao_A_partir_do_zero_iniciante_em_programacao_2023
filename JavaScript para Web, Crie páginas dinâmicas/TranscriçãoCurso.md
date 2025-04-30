# Curso Alura - JavaScript para Web: Crie páginas dinâmicas

## Aula 1 - Conhecendo o JavaScript

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Olá! Boas-vindas! Eu sou a Vanessa Tonini, instrutora da Alura.

Audiodescrição: Vanessa é uma mulher de pele clara, cabelos lisos e castanho-escuros na altura dos ombros, de óculos com armação preta e arredondada. Está usando um headphone branco e camiseta cinza-escura. Ao fundo, uma parede iluminada por tons de azul-claro a lavanda.

Se você veio da nossa formação de HTML e CSS ou já sabe codificar páginas com HTML e CSS, esse curso é para você!

O Alura Midi é um instrumento musical de interface digital, onde cada botão reproduz o som de um instrumento.
![alt text](image.png)

Interface gráfica deo 'Alura Midi' com um conjunto de nove botões brancos e retangulares dispostos em uma grade 3x3. Cada botão contém uma palavra em inglês, representando diferentes sons: 'Pom', 'Clap', 'Tim', 'Puff', 'Splash', 'Toim', 'Psh', 'Tic' e 'Tom'. A palavra 'Splash' está realçada com um halo amarelo ao redor do botão, indicando seleção ou interação.
Se clicamos em "Pom", um som parecido com essa onomatopeia é reproduzido. O mesmo para o Clap, Tim, Splash e assim por diante, lembrando diferentes sons de uma bateria acústica.

O código do projeto já virá com o HTML e o CSS prontos para focarmos no desenvolvimento do JavaScript do zero, utilizando recursos atuais da linguagem, como constantes, variáveis, querySelector, template strings, eventos de teclado e de mouse e muito mais.

Vale lembrar que neste curso não vamos utilizar recursos avançados do JavaScript, como integração com o back-end, APIs do navegador, classes e objetos a fundo.

Se desenvolver o Alura Midi despertou interesse em você, te esperamos no nosso próximo vídeo!

### Aula 1 - Baixando o projeto

Preparando o ambiente
Para realizarmos este curso, usamos um editor de código chamado [Visual Studio Code](https://code.visualstudio.com/download). Se você quiser usá-lo também pode baixar tanto para Windows, como Linux ou Mac.

Porém fique a vontade para usar seu editor de código favorito.

Além disso, estamos usando o Firefox como navegador principal e é importante tê-lo instalado em seu computador, assim como o Chrome onde realizamos testes também.

Baixando o projeto
Após preparar o ambiente, vamos precisar [baixar o projeto](https://github.com/alura-cursos/aluramidi-curso/archive/refs/heads/arquivos-iniciais.zip) em seu computador:

Para acompanhar o desenvolvimento deste curso, é importante que você tenha os arquivos necessários do projeto inicial.

Depois de baixado, extraia o conteúdo em algum lugar que você consiga encontrar depois.

Abrindo no Visual Studio Code
Primeiro abra o editor de código. Na tela inicial, no canto superior esquerdo, clique em "arquivo" ou "file".

Tela inicial do editor Visual Studio Code com uma seta vermelha apontando para a palavra File no canto superior esquerdo

Um menu dropdown deve aparecer. Selecione a opção "abrir pasta" ou "open folder".

Menu dropdown com a opção Open Folder selecionada

Navegue para onde você baixou os arquivos do projeto e clique na pasta (clique apenas uma vez para selecionar). Depois clique em "Abrir" ou "Open".

Tela de seleção de arquivo com dois círculos vermelhos. Um círculo marcando a pasta selecionada e outro círculo no botão Open. Os números 1 e 2 aparecem respectivamente ao lado dos círculos

Você deve ter uma estrutura de arquivos e pastas na esquerda do editor.

Tela inicial do Visual Studio Code com a seguinte estrutura de pastas e arquivos no painel à esquerda: "css", "images", "sounds" e "index.html"

Agora podemos começar!

### Aula 1 - Clicando no botão - Vídeo 2

Transcrição  
Olá! Agora que já conhecemos o Midi, precisamos descobrir como começar a desenvolver suas funcionalidades.

Reproduzindo som no HTML  
Por ser um instrumento musical, queremos reproduzir um som diferente ao clicar em cada um dos botões. Porém, como fazemos para o HTML reproduzir um som?

Vamos abrir nosso código no Visual Studio Code, nosso editor de código, e expandir toda a estrutura de pastas dos arquivos do curso. Temos uma pasta com o nosso CSS ("css"), com as imagens ("images") e com os arquivos de som ("sounds"), que são os sons que vamos reproduzir ao clicar nos botões. Além disso, temos o arquivo index.html, o HTML principal da nossa aplicação.

Vamos abrir o arquivo HTML e ir direto para a tag body. Nela há uma section com uma série de buttons, que são os botões que vimos no navegador, já estilizados com o CSS para ter a aparência desejada do Midi.

Embaixo dessa seção com os botões, temos uma série de tags audio. Essas tags audio são as responsáveis por carregar e fornecer ao navegador os sons dos instrumentos que queremos reproduzir.

A tag audio não está aparecendo no HTML, porque omitimos um atributo importante para a visualização dela. É um atributo da tag audio chamado controls. Esse atributo, ao ser adicionado, vai começar a exibir a tag. Vamos adicioná-lo em todas as tags audio, selecionando uma e pressionando o atalho "Ctrl + D", que seleciona todas as tags iguais, e e escrevendo o atributo controls.

index.html

```html
  <audio controls src="sounds/keyq.wav" id="som_tecla_pom"></audio>
  <audio controls src="sounds/keyw.wav" id="som_tecla_clap"></audio>
  <audio controls src="sounds/keye.wav" id="som_tecla_tim"></audio>
  <audio controls src="sounds/keya.wav" id="som_tecla_puff"></audio>
  <audio controls src="sounds/keys.wav" id="som_tecla_splash"></audio>
  <audio controls src="sounds/keyd.wav" id="som_tecla_tom"></audio>
  <audio controls src="sounds/keyz.wav" id="som_tecla_psh"></audio>
  <audio controls src="sounds/keyx.wav" id="som_tecla_tic"></audio>
  <audio controls src="sounds/keyc.wav" id="som_tecla_tom"></audio>
```

Vamos salvar o nosso arquivo HTML e abrir o navegador.

Ao recarregar a página, notamos que as tags audio começaram a ser exibidas abaixo da grade de botões do Alura Midi, em forma de nove players de áudio, um depois do outro. Isso ocorre porque adicionamos o atributo controls.

Podemos notar que essa tag audio já vem com controles nativos, como o botão de play, uma barra de progresso, a duração do som e um slider de volume. Ao clicar nos botões de play, são reproduzidos os sons dos nossos instrumentos, que no caso são as diferentes vozes de uma bateria, na ordem em que os botões aparecem.

No navegador Firefox, a tag audio tem uma aparência muito específica e muito parecida com um mini player. Ela é retangular, com fundo preto e botões brancos. No Chrome, esse mini player tem os mesmos elementos, mas num fundo branco, bordas arredondadas, botões pretos. A divergência na aparência desse player entre um navegador e o outro não é ideal.

Queremos ter uma consistência de design na nossa aplicação para as pessoas usuárias, e esse tipo de tag é muito difícil de customizar, não sendo possível customizar com CSS diretamente.

Portanto, precisamos passar o controle da reprodução do som, que está na tag audio, para os nossos botões. É aqui que começamos a precisar utilizar uma linguagem de programação que trabalhe com HTML e que trabalhe com CSS, que é o JavaScript.

Atributo onclick  
Vamos voltar para o nosso VS Code e retirar o atributo control das tags audio, pois não vamos precisar mais dele aqui. Em seguida vamos até a seção com os botões.

O primeiro botão do nosso Alura Midi é a tecla Pom (tecla_pom). Para fazermos algo com JavaScript nesse botão, podemos utilizar um atributo HTML na tag button chamado onclick.

O atributo onclick, como muitos atributos HTML, também vem acompanhado do sinal de igual e aspas duplas, e dentro das aspas duplas podemos escrever qualquer código JavaScript — onclick="".

Vamos começar com um código bem simples, só para testar esse dinamismo que o JavaScript é capaz de agregar a uma página.

Podemos usar uma função muito famosa do JavaScript, chamada alert. O alert cria uma janela com uma mensagem específica e um botão de "OK" para fechá-la. Essa janela é muito utilizada em várias aplicações para testar funcionalidades, mandar mensagens para as pessoas usuárias e assim por diante.

Então, escrevemos alert dentro das aspas duplas do onclick, depois adicionamos parênteses, e dentro dos parênteses adicionamos aspas simples — onclick="alert('')". Precisa ser aspas simples para não entrar em conflito com aspas duplas do HTML.

Dentro das aspas simples vamos escrever uma mensagem. Como estamos clicando na tecla de um som, vamos escrever Pom, o som do instrumento desse botão.

index.html

```html
<button onclick="alert('Pom')" class="tecla tecla_pom">Pom</button>
```

Agora vamos salvar o nosso HTML com o atalho "Ctrl + S" e retornar ao navegador. No Chrome, ao recarregar a página e clicar na tecla Pom, recebemos o alert no topo da tela, uma pequena janela com a mensagem "This page says Pom" e o botão "OK". Podemos clicar no OK para fechá-la.

Vamos verificar como essa janela aparece no Firefox. Ao recarregar a página e clicar na tecla Pom, a janela do alert aparece no centro da tela, com apenas o texto "Pom" e o botão OK.

Conclusão  
Esse é o primeiro código JavaScript desse curso! Começamos a adicionar dinamismo à nossa aplicação! Claro, isso ainda está bem longe da nossa proposta, porém, já é o primeiro passo para entender o que o JavaScript faz numa página web.

No nosso próximo vídeo, você vai aprender a fazer um código ainda melhor para adicionar comportamentos à página com JavaScript.

### Aula 1 - Conectar JS com o HTML - Vídeo 3

Transcrição  
Agora, nós já sabemos como inserir um alert dentro de um onclick e executar um primeiro código JavaScript bem simples. Porém, se observarmos nosso HTML, percebemos que escrevemos o código JavaScript dentro da tag do HTML.

Isso é muito semelhante ao CSS Inline, que já sabemos não ser a melhor prática, pois dificulta a reprodução dos mesmos estilos para outras tags. Se quisermos modificar algo, teremos que alterar todas as outras tags, correndo o risco de cometer algum erro. O mesmo ocorre com JavaScript. Acabamos de fazer JavaScript Inline através do atributo onclick.

Imagine se tivéssemos 88 teclas, como um piano completo, ou outros instrumentos no Alura Midi. Ficaria muito difícil reproduzir essa lógica se tivéssemos que colocar elemento por elemento, tecla por tecla do nosso instrumento e se tivéssemos que fazer alguma modificação futuramente.

Portanto, entendemos que JavaScript Inline não é a melhor prática, apesar de podermos e conseguirmos fazê-lo para fins de teste e conhecer as potencialidades do JavaScript no HTML.

Além disso, cada linguagem tem a sua responsabilidade. O HTML é responsável pela estrutura semântica da página, o CSS pelos estilos da página e o JavaScript adiciona o dinamismo e as atualizações de programação, a lógica na página, utilizando essa lógica de programação que não é fornecida pelo HTML.

Portanto, como podemos fazer o JavaScript de uma maneira consistente e correta? Com um arquivo externo! Assim como o CSS tem um arquivo CSS e o HTML tem um arquivo HTML, também teremos um arquivo JavaScript.

Criando o arquivo JavaScript  
Vamos criá-lo dentro da nossa estrutura de arquivos, no Visual Studio Code, por meio do atalho "New file" ("Novo arquivo") no canto superior esquerdo da tela, representado por um ícone de folha com um sinal de mais. O nome desse novo arquivo será main.js. Pressionamos "Enter" para confirmar e entrar no arquivo.

O nome main ("principal" em inglês) é uma convenção das pessoas desenvolvedoras de JavaScript para o arquivo principal de JavaScript, para facilitar a compreensão de todo site ou aplicação escrita com JavaScript sobre qual é o arquivo que dá a entrada a toda lógica e todos os arquivos JavaScript. Portanto, vamos seguir essa convenção utilizada pelo mercado.

E como fazemos, então, para ligar esse arquivo JavaScript dentro do HTML?

Conectando o JavaScript ao HTML - tag `<script>`
No nosso HTML (index.html) temos a tag head, que contém tags que ajudam a configurar a página, por exemplo: metadados (meta), título (title), links com ícones, com CSS, com fontes, etc. Também podemos ter dentro dessa tag head a tag script, responsável por carregar o JavaScript dentro do nosso HTML.

É interessante sempre utilizar a ajuda do VS Code para escrever script, para garantir que não cometemos nenhum erro de digitação.

Assim como a tag img e a tag audio, a tag script tem o atributo src, que significa o source ("recurso" em inglês) que vai ser carregado por essa tag. Depois dele, adicionamos o sinal de igual e aspas duplas.

Vamos indicar o caminho desse arquivo dentro das aspas duplas, que será o main.js, automaticamente sugerido pelo VS Code.

index.html

```html
<script src="main.js"></script>
```

Agora, como garantimos que esse arquivo foi corretamente carregado e está funcionando no nosso HTML? Da mesma forma que usamos o alert para conhecer o onclick no botão, também podemos utilizá-lo dentro do arquivo main.js para testar seu funcionamento.

Então, vamos escrever nele o nome da função diretamente na primeira linha, alert(), inserimos aspas simples dentro dos parênteses e, dentro deles, digitamos a mensagem "Olá mundo". Depois do parênteses, colocamos ponto e vírgula.

O ponto e vírgula é opcional no JavaScript, cujo código funciona sem ele na maioria dos casos, porém é altamente recomendado utilizá-lo para evitar possíveis erros futuros.

main.js

```JavaScript
alert('Olá mundo');
```

Vamos salvar o arquivo JS com o atalho "Ctrl + S" e voltar para o navegador.

Recarregando a página, uma mensagem com a caixa de alerta é exibida na tela, com a mensagem "Olá mundo" e um botão de OK para fechá-la, sobre o fundo cinza da tela no Firefox e sobre um fundo branco no Chrome. Ao clicar em "OK" e fechar a caixa de alerta, surge o Alura Midi.

Isso confirma que o arquivo main.js foi devidamente carregado na nossa aplicação!

Agora, analisando nossos dois arquivos, temos um desafio: Como fazemos para pegar esse botão (button) que está dentro do HTML, chamá-lo dentro do main.js e fazer alguma coisa com esse botão?

Vamos descobrir isso no próximo vídeo!

### Aula 1 - Buscar um elemento - Vídeo 4

Transcrição  
Agora precisamos descobrir como vamos colocar um botão do HTML dentro do JavaScript. É muito parecido com o que já fizemos no CSS.

Conhecendo o DevTools  
Vamos utilizar aquela ferramenta do navegador que auxilia as pessoas desenvolvedoras para nos ajudar a fazer essa tarefa, que é o DevTools. Basta clicar com o botão direito do mouse na página e escolher a opção de "Inspect". No nosso caso, está em inglês, mas você também pode encontrá-lo como "Inspecionar", "Inspecionador de elementos" ou "Inspect element" - depende bastante de navegador para navegador.

Às vezes, o DevTools pode se abrir como um painel na parte inferior do navegador, mas a Vanessa prefere trabalhar com ele no lado direito. Por isso, vamos clicar no ícone de três pontinhos e escolher "Dock to right" para colocá-lo na direita.

Sempre começamos a trabalhar com esse DevTools, essa ferramenta de desenvolvedores, na aba "Elements". Essa aba contém todos os nossos elementos HTML do index.html e embaixo temos essa aba "Styles", que tem o CSS de cada elemento, como já aprendemos também nos cursos de CSS, no dia a dia desenvolvimento front-end, com os estilos das nossas tags.

Para conseguir selecionar e adicionar um estilo em um botão, por exemplo, foi preciso criar uma classe para adicionar esses estilos, como boa prática do CSS. Poderíamos ter estilizado direto a tag pelo nome button ou por seu ID, mas o correto é sempre usar o nome da classe ou o nome do elemento.

E para o JavaScript não é diferente, precisamos ter um nome para encontrar dentro do JavaScript esse elemento com o qual queremos fazer alguma ação.

No DevTools, vamos utilizar a aba "Console", que fica do lado da aba "Elements", que nela vamos poder executar qualquer código JavaScript dentro desse arquivo index.js, que está carregado ali nesse momento. E isso vai nos ajudar a desenvolver e a entender o nosso código.

Seguindo essa lógica parecida com CCS, o primeiro passo é ter nome do seletor, que pode ser o nome da tag, pode ser o nome da classe, pode ser um ID, enfim, qualquer seletor CSS. Por enquanto, vamos usar o seletor do nome da tag chamado tecla_pom.

Se escrevemos tecla_pom entre aspas simples no console do Chrome e damos um "Enter", vai nos retornar tecla_pom.

```html
'tecla_pom'
```

'tecla_pom'

Não teve nenhum problema. Se tivesse algum com problema nessa escrita, já saberíamos, porque o console também nos retorna todos os problemas do nosso código. Então tecla_pom entre aspas é um seletor válido.

Só que só esse tecla_pom entre aspas é basicamente um texto, é o mesmo que escrever entre aspas o nome Vanessa ou Alura, por exemplo. É um texto. Precisamos passar esse texto para alguém ou algo que consiga fazer essa busca por esse elemento através desse seletor informado.

Buscando um elemento com querySelector
Agora, vamos usar a funcionalidade de limpar o console, clicando no botão "Clear console" (ou atalho "Ctrl + L"). Em seguida, vamos digitar e apresentar para vocês uma função que é capaz de buscar e nos trazer um elemento, quando informamos o seletor desse elemento, que é a função querySelector.

Então a função querySelector, com Q minúsculo e S maiúsculo, faz uma busca pelo seletor e é exatamente isso que significa o nome dela. Query em inglês, uma das traduções é "busca", e selector é "seletor", o mesmo seletor de CSS.

Assim como o alert, essa função também tem a sintaxe padrão. Em outras palavras, deve vir com o parêntese depois e entre parênteses, aspas simples, porque vamos passar um texto para ela. Nesse caso, vamos passar o nome do seletor.

```JavaScript
querySelector('')
```

Como o seletor é um nome, precisamos decidir se será uma classe, o nome da tag ou ID - assim como no CSS. Se for o nome da tag, é direto o nome da tag button.

Exemplo para nome da tag:

```JavaScript
querySelector('button')
```

Se for uma classe ponto e o nome da classe, .tecla_pom.

Exemplo para nome da classe:

```JavaScript
querySelector('.tecla_pom')
```

Se for um ID, vamos começar com hashtag, #som_tecla_pom, que é o ID de um outro elemento. Podemos abrir a aba "Elements" para conferir que é o ID de uma das tags <audio>. Informamos um ID que realmente existe.

Exemplo para ID:

```JavaScript
querySelector('#som_tecla_pom')
```

Mas, queremos acessar o botão da tecla Pom, então vamos selecioná-lo com o nome de sua classe:

```JavaScript
querySelector('.tecla_pom')
```

Ao dar um "Enter", teremos o nosso primeiro erro no JavaScript.

Uncaught ReferenceError: querySelector is not defined at `<anonymous>`:1:1

Esse erro significa que querySelector não está definido, é um erro referência.

O alert é uma funcionalidade que está em um escopo maior, que é a nossa janela. Por isso, podemos chamá-lo em qualquer lugar do nosso código. É uma funcionalidade que está disponível para qualquer parte, qualquer momento do nosso código e para qualquer situação.

Diferentemente do alert, o querySelector é uma funcionalidade que precisa ter um escopo, precisamos dizer para o JavaScript onde queremos que seja buscado este elemento, com este seletor. Por isso, sempre devemos executar o querySelector dentro de um outro lugar que precisamos informar. Pode ser uma outra tag, mas geralmente usamos dentro do nosso documento HTML.

Pedimos para o JavaScript, dentro do documento HTML, buscar o elemento que tem este seletor, que é a classe tecla_pom. Para fazer isso, o JavaScript tem uma palavra reservada, chamada document.

A palavra reservada document representa todo o documento HTML.

Inclusive, ao escrever essa palavra, toda a página do Alura Midi ficou destacada com azul, como se tivéssemos passado o inspecionador de elemento e tivesse selecionado todo o documento HTML. Está representando a seleção de todo esse documento.

Agora, para executar algo dentro desse documento, vamos usar um caractere que acessa esse documento, ou seja, que entra dentro dessa palavra, que é o ponto (.).

O ponto é capaz de entrar dentro dessa representação do document e acessar atributos e funcionalidades que são possíveis serem executadas dentro do documento, e uma delas é o querySelector.

Após o ponto, acessamos o querySelector() sempre com q minúsculo S maiúsculo e abre e fecha parênteses.

Dentro dos parênteses, colocamos aspas simples e escrevemos .tecla e já funciona! Isso porque todos os nossos botões têm duas classes: a classe tecla e a classe tecla seguido de underline e um som.

```JavaScript
document.querySelector('.tecla')
```

Por isso, a própria classe tecla já funciona e destaca o elemento correto no nosso HTML. E, embaixo também dá uma prévia do que esse código que escrevemos vai retornar. Nesse caso, já informa que vai ser a tecla pom.

Para ser mais específico, poderíamos colocar tecla_pom para retornar a primeira tecla. Se colássemos tecla_clap, retornaria a segunda e assim por diante.

Primeiro, vamos pegar a tecla_pom e dar um "Enter".

```JavaScript
document.querySelector('.tecla_pom')
```

Com o "Enter", confirmamos a execução desse código JavaScript que vai nos trazer a representação, a referência daquele botão:

```html
<button class="tecla tecla_pom">Pom
```

Esse código acessa o documento HTML, busca aquele elemento daquele seletor informado e nos retorna a referência desse elemento - nesse caso, o botão com o qual queremos trabalhar.

E só mais um detalhe! Se colocamos um elemento que não existe, por exemplo, tecla_tum, ele vai retornar null, ou seja, nulo, porque não encontrou nada.

Exemplo de elemento que não existe:

```JavaScript
document.querySelector('.tecla_tum')
```

null

Além disso, se escrevemos queryselector com S minúsculo, vamos ter um erro também, porque queryselector todo minúsculo não é uma função, não existe.

Exemplo de função com erro de digitação:

```JavaScript
document.queryselector('.tecla_pom')
```

Uncaught TypeError: document.queryselector is not a function at `<anonymous>`:1:10

O JavaScript é sensível a letras maiúsculas e minúsculas, portanto, devemos ter muita atenção na hora de escrever.

Às vezes escrevemos tudo minúsculo ou fazemos um erro de digitação, como esquecer de escrever uma letra da palavra, também retorna o mesmo erro. Esse erro indica que aconteceu algum equívoco na hora de digitar, seja no querySelector ou no document.

Por isso, sempre utilize o auto complete, ou seja, essas sugestões do navegador e do Visual Studio Code que nos ajudam a digitar o código corretamente.

Sabendo que esse código está correto, vamos copiá-lo e colá-lo no main.js. Caso você queira praticar mais um pouco, podemos digitá-lo no main.js.

Voltando no VS Code, vamos apagar aquele alert, pois não precisamos mais dele. No lugar, vamos digitar document. O Visual Studio Code já nos ajuda a digitar, adivinhando que íamos usar o querySelector. Podemos dar um "Enter" para autocompletar.

Entre parênteses e aspas simples, usamos o seletor .tecla_pom. Não se esqueça de colocar o ponto e vírgula no final!

main.js:

```JavaScript
document.querySelector('.tecla_pom')
```

Sabemos que esse código quando for lido pelo JavaScript vai nos trazer um elemento HTML - no caso, com esse seletor, será o nosso botão.

Após salvar o main.js, vamos recarregar a página. Nada acontece, nenhum problema, nenhuma letra vermelha no console. O botão Pom ainda não reproduz nada.

Também podemos testar no Firefox. Abrimos o navegador, recarregamos a página, clicamos com o botão direito, abrimos o DevTools e acessamos a aba "Console". Não aparece nenhum erro e nenhum som é reproduzido ao clicar na tecla Pom. Está tudo correto.

Próximos passos  
Já temos o acesso ao botão Pom através do código, porém ainda não fazemos nada com ele. Na próxima aula, vamos descobrir como adicionar uma funcionalidade dentro desse botão e reproduzir o som do nosso instrumento musical.

Até lá!

### Aula 1 - Para que serve o DevTools?

A ferramenta DevTools presente nos navegadores web é de grande ajuda para comunidade de desenvolvedores web, a ponto de serem apelidados carinhosamente de “melhor amiga/o” da pessoa desenvolvedora.

Marque as alternativas com afirmações verdadeiras a respeito da ferramenta DevTools.

Alternativa correta  
Através dessa ferramenta, conseguimos editar a aplicação em tempo de execução, adicionar ou remover tags HTML, mexer no CSS da página, escrever código JavaScript no console e ver as modificações sem persistência.

> Alternativa correta! É isso mesmo! Com essa ferramenta, conseguimos realizar modificações em tempo real tanto de HTML, como de CSS e JavaScript, porém sem alterar o código fonte real.

Alternativa correta  
Diferente do método tradicional para resolver problemas do código fonte que consistia em abrir o código e olhar linha a linha para descobrir o erro, o DevTools apresenta uma maneira mais simples e direta do problema no código, bastando acessar a aba Console que lá estará indicando o tipo e o arquivo onde se encontra o erro.

> Alternativa correta! Como conseguimos mexer em tempo real no código da aplicação através do navegador, uma prática muito comum, principalmente se tratando do CSS, é ir escrevendo as propriedades e vendo como o site se comporta, para aí depois, colocar o código final no código fonte da aplicação.

### Aula 1 - Faça como eu fiz: Brinque com seletores no JS

Praticar ajuda bastante no aprendizado de um novo conceito, assim, é muito importante que você esteja sempre praticando. Pensando nisso, gostaria de propor este pequeno desafio que envolve o que foi visto em aula.

A partir deste código a seguir:

HTML

```html
<h1> Alura Fone </h1>
 <section class="teclado">
    <input type="button" value="1">
    <input type="button" value="2">
    <input type="button" value="3">
    <input type="button" value="4">
    <input type="button" value="5">
    <input type="button" value="6">
    <input type="button" value="7">
    <input type="button" value="8">
    <input type="button" value="9">
    <input type="button" value="*">
    <input type="button" value="0">
    <input type="button" value="#">
  </section>
  <input type="tel" placeholder="Digite seu telefone">
```
  
CSS

```CSS
* {
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #191919;
  min-height: 100vh;
}

input {
  border: none;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: #fff;
}

.teclado {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px; 
  background-color: #cccccc;
  border-radius: 30px;
  padding: 10px;
}

input[type=button] {
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  height: 80px;
  width: 80px;
}

input[type=tel] {
  background-color: #cccccc;
  border-radius: 10px;
  font-family: monospace;
  font-size: 22px;
  height: 40px;
  margin-bottom: 24px;
  padding: 10px;
  text-align: center;
  width: 280px;
}
```

Escreva o código em JavaScript capaz de selecionar o elemento HTML input do tipo telefone:

Como fazer:

- Abra o editor de código de sua preferência;
- Crie dois arquivos: desafio.html e desafio-estilo.css;
- Copie o código acima e cole dentro da tag < body> do arquivo chamado desafio.html e o código CSS no arquivo desafio-estilo.css;
- Para resolver este desafio, você pode usar apenas a aba Console da ferramenta DevTools;

Opinião do instrutor

Gabarito:

```JavaScript
document.querySelector('input[type=tel]');
```

Para selecionar o elemento HTML input do tipo tel podemos utilizar o código document.querySelector(‘input[type=tel]’), porquê com essa linha, o JavaScript vai acessar o documento HTML (representado por document) e procurar pelo elemento input que tenha como atributo [type=tel], os colchetes fazem parte da sintaxe para seleção de atributos de um elemento HTML, funciona tanto para o CSS quanto para o Javascript.

### Aula 1 - Para saber mais: HTML x CSS x JavaScript

Para que fique mais claro o porquê de se utilizar arquivos separados para HTML e JavaScript, leia o artigo da instrutora Rafaella Ballerini, que explica a diferença entre essas linguagens.

Artigo: [HTML X CSS X JavaScript. Quais as diferenças?](https://www.alura.com.br/artigos/html-css-e-js-definicoes)

### Aula 1 - Lista de exercícios

O que é:  
Boas-vindas à nossa lista de exercícios , um caminho prático e envolvente para aprender e aprimorar suas habilidades em tecnologia. Aqui, você não encontrará longas leituras teóricas ou explicações abstratas. Em vez disso, nossos exercícios são projetados para colocar você no centro do processo de aprendizado, permitindo que você construa, experimente e explore conceitos tecnológicos de forma direta e aplicada.

Para que serve:  
Esta lista é uma ferramenta dinâmica para aprender, reforçar e aprimorar habilidades práticas em programação e desenvolvimento web. Cada exercício é uma oportunidade de aplicar conhecimentos teóricos em cenários reais, preparando você não apenas para entender a tecnologia, mas para utilizá-la de maneira eficaz e criativa em seus próprios projetos ou no ambiente de trabalho.

Como fazer:  

- Leia cada exercício com atenção: comece entendendo o cenário proposto e o que se espera como resultado.
- Escreva o código: utilize o ambiente de codificação de sua escolha para escrever e testar o seu código. Não se preocupe em acertar de primeira, a prática leva à perfeição.
- Verifique o gabarito: após tentar resolver o exercício, compare seu código com o gabarito fornecido em “Opinião do instrutor”. Isso ajudará a identificar áreas de melhoria e consolidar o aprendizado.  
- Repita: a repetição é chave para o aprendizado. Tente fazer os exercícios mais de uma vez, aplicando melhorias e variantes.
- Lembre-se, cada desafio é uma chance de crescer. Não se desanime com os erros; eles são degraus no caminho do aprendizado. E acima de tudo, divirta-se! O aprendizado mais eficaz acontece quando nos engajamos e nos interessamos pelo que estamos fazendo. Não se esqueça: estamos no Fórum e no Discord para ajudar você!

Bons estudos!

Vamos, agora, conhecer os exercícios da aula 1!

1) Selecionando elementos com JavaScript  
Você já sabe como usar o DevTools para inspecionar elementos HTML. Agora, está trabalhando em um projeto de site musical e precisa interagir com os botões que representam as teclas de um piano. Logo, seu desafio é: utilize o Javascript para selecionar um botão específico na sua página.

2) Emitindo um alerta na tela  
Imagine que você está trabalhando em um projeto de site que inclui elementos interativos como botões que emitem sons, semelhante a um piano. Até o momento, você já aprendeu como emitir o som utilizando JavaScript, agora, a sua missão é emitir um alerta escrito “Fui clicado”, em um botão assim que ele receber um clique.

3) Integrando estilo e funcionalidade em um projeto Web  
Neste exercício, você enfrentará um desafio comum no desenvolvimento web: garantir consistência de design entre diferentes navegadores. Trabalhando com o mesmo projeto do instrumento musical digital, você percebeu que o mini player de áudio tem aparências diferentes no Firefox e no Chrome. Seu objetivo é personalizar o estilo desse player de áudio usando CSS para que ele tenha uma aparência consistente em ambos os navegadores. Como a tag audio é difícil de estilizar diretamente, você precisará encontrar uma maneira criativa de contornar essa limitação, talvez usando elementos HTML adicionais e CSS para alcançar o design desejado.

Opinião do instrutor

Veja as soluções dos exercícios. Lembre-se de que há várias maneiras de solucionar um mesmo problema (e tudo bem caso seu código tenha saído diferente). O importante é que ele esteja organizado, bem escrito e funcione.

1) Selecionando elementos com JavaScript

- Abra o DevTools no seu navegador;
- Use a aba "Console" para testar a seleção de um botão específico, utilizando a função querySelector;
- Tente selecionar o botão usando diferentes seletores: nome da tag, classe, e ID;
- Verifique se a seleção está correta observando o retorno no console do DevTools;
- Salve as alterações no arquivo main.js.
- Código utilizado aplicado no console do navegador:

```JavaScript
document.querySelector('.tecla_pom');
```

2) Emitindo um alerta na tela

- No seu arquivo HTML, adicione a tag `<script>` dentro da tag `<head>` ou antes do fechamento da tag `<body>`. Use o atributo src para vincular ao arquivo main.js;
- No arquivo main.js, adicione um alert para testar se está tudo funcionando.
- Use um método como document.getElementById ou document.querySelector para selecionar um botão do seu HTML;
- Adicione um eventListener ao botão para que, quando clicado, execute uma função;
- Teste a interação no navegador para garantir que o código JavaScript está manipulando corretamente o elemento HTML.  
Código HTML:

```html
<button>Clique aqui</button>
<script src="main.js"></script>
```

Código JavaScript:

```JavaScript
let botao = document.querySelector('button');

botao.addEventListener('click', function() {
    alert('Fui clicado!');
});
```

3) Integrando estilo e funcionalidade em um projeto Web

- Como não é possível estilizar diretamente a tag audio, crie um novo elemento HTML que servirá como seu player personalizado. Por exemplo, um div com botões para play e pause;
- Utilize CSS para estilizar esse novo elemento de forma que tenha uma aparência consistente em diferentes navegadores;
- Teste a aparência e a funcionalidade do seu player personalizado nos navegadores Firefox e Chrome para garantir consistência.  
Código CSS:

```CSS
    .meuPlayer {
        background-color: #fff;
        border-radius: 5px;
        color: #000;
        /* Adicione mais estilos conforme necessário */
    }
```

## Aula 2 - Funções

### Aula 2 - Play no JS - Vídeo 1

Transcrição  
Na aula anterior aprendemos como trazer um botão que está no HTML para dentro do JavaScript, e portanto assim vamos conseguir adicionar um clique e fazer as demais funcionalidades que precisamos para funcionar o Alura Midi.

Porém, agora precisamos descobrir como fazemos para reproduzir um som que está carregado dentro de uma tag `<audio>`.

Reproduzindo som  
Acessando o navegador, vamos abrir a aba "Elements" no DevTools. A aba de elementos tem as tags `<audio>`, a qual não está sendo exibida porque omitimos o atributo controls.

Porém essa tag contém todos os controles necessários para reprodução de uma mídia, como um som. Portanto vamos ter disponível também, via JavaScript esses controles para reprodução do som.

Seguindo a mesma lógica do botão, precisamos acessar essa tag `<audio>` para então conseguir acessar os controles dela.

Para isso, vamos usar o document, porque queremos procurar o elemento dentro do documento, utilizando a função .document.querySelector(), que é a função que busca um elemento através do seu seletor. Entre parênteses, devemos abrir e fechar aspas simples.

Podemos conferir na aba "Elements" novamente qual é o seletor que queremos usar, podemos usar tanto o nome da tag `<audio>` quanto o id dela.

Para ser mais certeiro, o ideal é utilizar o id dessa tag. Colocamos uma hashtag para o seletor começar com ID, então #som_tecla_pom.

```JavaScript
document.querySelector('#som_tecla_pom')
```

Ao dar "Enter", realmente localizamos e conseguimos trazer com o JavaScript a referência desse elemento áudio.

Retorno:

```html
<audio src="sounds/keyq.wav" id="som_tecla_pom"></audio>
```

Agora que sabemos acessá-lo é muito fácil entrar dentro dele e encontrar os controles de reprodução da mídia que ela está carregando.

Portanto podemos repetir esse mesmo código, document.querySelector('#som_tecla_pom') e esse código representa uma tag, um elemento áudio, portanto, se logo após os parênteses do querySelector colocarmos um ponto, estaremos acessando este elemento.

Ou seja, estaremos entrando dentro dele e conseguindo acessar todas as funcionalidades que estão disponíveis dentro desse elemento áudio, que está sendo retornado pelo querySelector.

Como é um elemento de multimídia, após colocar o ponto, abre-se uma janela no console com uma lista de sugestões de atributos e funcionalidades disponíveis para esse tipo de elemento.

Com a seta do teclado para baixo, é possível navegar por todas as coisas que tem dentro dessa lista de funcionalidades ou atributos. Dentre elas, existe uma chamada play. É justamente essa que reproduz o nosso som.

Sabemos que é uma funcionalidade, porque quando selecionamos play, logo embaixo aparece um "F" no console. Isso significa que é uma função.

Se é uma função, devemos usar sintaxe de função para reproduzir. Isto é, abre e fecha parênteses.

```JavaScript
document.querySelector('#som_tecla_pom').play()
```

Não é preciso passar nada entre parênteses para que ela funcione, só vamos apertar o "Enter" e esse código vai ser executado e vamos escutar o som do Pom.

Promise {`<pending>`}

Escutaram? Já sabemos como reproduzir o som de uma tag `<audio>` com JavaScript. Porém não precisamos nos preocupar com retorno promise pending, pois não vamos usar isso.

Vamos seguir agora com esse código dentro do nosso main.js.

Em main.js, vamos dar "Enter" e vamos escrever o código que fizemos e executamos no console:

main.js:

```JavaScript
document.querySelector('#som_tecla_pom').play();
```

Vamos salvar, abrir o navegador e recarregar a página. O que esperar dessa execução?

Uncaught TypeError: Cannot read properties of null (reading 'play') at main.js:3

Então, recarregamos e recebemos um erro. É normal receber erros, devemos estar preparados para conseguir tratar esses erros.

### Aula 2 - O que é uma função? - Vídeo 2

Transcrição  
Recarregamos o navegador Chrome e no console já obtivemos um erro.

Mudando local da tag `<script>`
Não precisamos ter medo de erros, precisamos aprender a lidar com os erros, pois eles nos ajudam a entender o nosso código.

Uncaught TypeError: Cannot read properties of null (reading 'play') at main.js:3

Esse erro nos informa que não é possível ler as propriedades de nulo. Nesse caso, ele está tentando ler uma propriedade 'play'.

Outro lugar que podemos conseguir entender melhor nosso erro é abrir outro navegador. Vamos abrir o Firefox? Ao recarregar navegador, aparecerá o mesmo erro, só que fraseado de forma diferente.

Uncaught TypeError: document.querySelector(…) is null «anonynous> file://home/vanessa/Desktop/aluramidi-curso/main.js:3

O Firefox explicita que é o document.querySelector que está nulo. Ambos navegadores também informam que o erro ocorre na linha 3 do arquivo main.js.

main.js, linha 3:

```JavaScript
document.querySelector('#som_tecla_pom').play();
```

Se conferimos a linha 3, é onde está o nosso código recém-escrito com um document.querySelector. Os erros estão dizendo que a execução document.querySelector('#som_tecla_pom') não existe e retorna nulo, portanto, não é possível executar o play() de algo que é nulo, que não existe.

Colocamos esse erro de forma proposital para entendermos um conceito muito importante, que é o local correto do arquivo main.js.

O navegador lê o nosso arquivo HTML linha por linha e já vai chamando e executando os códigos que estão escritos e declarados no arquivo. Portanto, no momento em que o navegador passa na linha 18, onde colocamos a tag `<script>`, ele entra no arquivo main.js para executar esses códigos JavaScript. Porém, esses códigos dependem do `<body>` do HTML, e o navegador ainda não chegou na linha 21 do HTML e não construiu o `<body>`.

Desse modo, temos um código que depende dessa estrutura do HTML abaixo, mas que não existe ainda nesse momento.

Essa é uma lição muito importante sobre o local da tag `<script>`:

Conseguimos colocar a tag `<script>` tanto no `<head>` quanto no `<body>`. Contudo, se o nosso JavaScript depende da estrutura HTML carregada e pronta, devemos colocá-la dentro do `<body>`, logo antes do fechamento da tag `<body>` e não dentro da tag `<head>`.

Vamos fazer isso? Podemos recortá-la da tag `<head>` e colá-la logo antes do fechamento da tag `<body>`.

index.html:

```html
<body>
    <script src="main.js"></script>
</body>
```

Se nosso arquivo JavaScript tiver um monte de funcionalidades que não dependem do que tem declarado dentro da tag `<body>`, então podemos colocar, sim, o `<script>` dentro da tag `<head>`.

Após salvar, vamos voltar no navegador. Conseguimos resolver o problema do nulo, mas agora temos outro problema.

Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.

E às vezes quando estamos codando em JavaScript é assim mesmo, temos um problema atrás do outro e isso é muito legal, pois vamos aprendendo como a linguagem funciona.

Executando um som sem permissão  
Vamos recarregar também o Firefox. O erro também aconteceu sobre o método play que estamos fazendo.

Uncaught (in promise) DOMException: The play method is not allowed by the user agent or the platform in the current context, possibty because the user denied permission.

Esse erro é muito peculiar, da natureza da nossa aplicação, porque precisamos executar um som e o JavaScript, como mencionamos para vocês, ele vai sendo lido e executado imediatamente pelo navegador.

Imagina que você está abrindo um site qualquer. Quando você abre o site, você ainda nem fez nada, o site está carregando e já começa a tocar um monte de sons indesejados!

Por causa disso, os navegadores têm uma política de bloquear esse tipo de código que já executa mídias e sons antes da pessoa usuária interagir com a página.

O erro que está acontecendo no Chrome é um problema com a permissão e controle das pessoas usuárias. O mesmo erro também acontece no Firefox, pois o navegador não permite que demos o play pelo JavaScript antes da pessoa usuária fazer algum tipo de atividade na nossa página, interagir com a nossa página.

E realmente não faz sentido, não queremos que os sons do Alura Midi sejam reproduzidos ao abrir a página, só queremos que seja reproduzido quando clicamos no botão.

Por isso, vamos ter que fazer algo para guardar esse código do play() para ele ser chamado somente quando nós quisermos. E quando precisamos de um código que é chamado somente quando nós queremos, precisamos criar uma função.

Criando uma função  
Agora, vamos abrir o arquivo main.js para aprender como fazemos para criar nossa própria função - porque até agora usamos funções prontas que já vem no JavaScript ou nos elementos.

Vamos voltar para a linha 1 e empurrar o código mais para baixo dando "Enter". Na linha 1, vamos escrever uma declaração de função, digitando a palavra reservada do JavaScript function. Ao digitar function, o código já fica com uma outra cor e em itálico, justamente identificando que é uma palavra reservada.

Quando criamos uma função, é preciso dar um nome para essa função. Lembrando que a nossa função vai armazenar esse código que toca o som de algum instrumento, de alguma tecla, portanto vai ser uma função que toca um som. Por isso, vamos colocar o nome dessa função de tocaSom. E como ela vai tocar o som da tecla Pom, vamos colocar tocaSomPom para ser mais específica.

main.js:

```JavaScript
function tocaSomPom
```

Continuando na sintaxe de criação de uma função, precisamos declarar abre e fecha parênteses. Depois do fechamento dos parênteses, abre e fecha chaves. Damos um "Enter" dentro das chaves e tudo que vai dentro das chaves vai ser o código que vai ser guardado dentro dessa função para ser executado apenas quando a função for chamada por alguém.

Agora, vamos transferir esse código que está como play para dentro da função. Podemos arrastar com o mouse ou dar um "Ctrl + X", "Ctrl + V". Por fim, podemos tirar esses espaços que colocamos e salvar o código.

```JavaScript
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
```

Em seguida, voltamos ao navegador para verificar se aquele erro continua. Após recarregar, o erro saiu tanto do Firefox quanto do Chrome. Mas, quando clicamos na tecla Pom, nada acontece.

Isso porque a nossa função foi criada, ela existe e ela já está disponível para ser utilizada, inclusive de dentro do console.

Se começamos a digitar o nome da função no console, o navegador até completa o nome, porque ele percebe que dentro do main.js já tem funções disponíveis. Então, escrevemos tocaSomPom, e como é uma função, devemos colocar abre e fecha parênteses para executar.

Quando der "Enter" vai reproduzir o nosso som.

console:

```JavaScript
tocaSomPom()
```

undefined

Tocou! Vocês não precisam se preocupar com esse undefined que apareceu. Ele aparece porque o retorno não está definido, mas não vamos trabalhar com isso.

Próximos  
Nossa função já está funcionando, falta só um pequeno detalhe. No próximo vídeo, aprendemos como conectar o clique com o botão que já trouxemos para o JavaScript e também com a função que reproduz o som daquela tecla.

Falta muito pouco para concluirmos a nossa atividade principal do Alura Midi. Até logo!

### Aula 2 - O local da tag script?

Como vimos nesta aula, é possível inserir um arquivo JavaScript em dois locais do documento HTML, dentro da tag head ou da tag body.

Com base nessas informações, devemos colocar o JavaScript dentro da tag body logo antes do seu fechamento, `</body>`, quando:

Resposta:  
O script depende de elementos do body já carregados pelo navegador.

> Alternativa correta! Quando o código JavaScript que vamos adicionar depende de elementos que estão no body, por exemplo um querySelector que espera receber determinado seletor, o local mais apropriado para sua inserção é dentro da tag body e na linha anterior ao fechamento da tag `</body>`. No head podemos inserir scripts, porém eles não devem ter dependencias de elementos do body, por exemplo uma biblioteca de funcionalidades.

### Aula 2 - Faça como eu fiz: Para que serve uma função?

Como vimos nesta aula, declaramos uma função no JavaScript quando precisamos guardar um código que será executado num segundo momento, ou seja apenas quando ele for chamado/invocado.

Agora declare a função tocaSomClap, e desenvolva dentro dela o código necessário para dar play no áudio do som clap.

Opinião do instrutor

Gabarito:

```JavaScript
function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play()
}
```

Para declarar uma função no JavaScript, usamos a palavra function e depois o nome que escolhemos, no caso tocaSomClap seguido da sua sintaxe padrão, que são os parênteses e depois chaves.

O espaço dentro das chaves é conhecido como bloco ou corpo da função, e é nele que colocamos o script que desejamos executar quando a função for chamada.

Como queremos executar o som do clap, devemos localizar o elemento audio pelo seu seletor id: #som_tecla_clap.

```JavaScript
document.querySelector('#som_tecla_clap')
```

Este código irá retornar o elemento, portanto logo em seguida já podemos usar o operador ponto para entrar dentro deste elemento e já acessar a função play() que é nativa dos elementos audio do HTML.

```JavaScript
 document.querySelector('#som_tecla_clap').play()
```

### Aula 2 - Clique no botão - Vídeo 3

Transcrição  
Como aprendemos no vídeo anterior, agora já sabemos como pegar um botão com JavaScript e também já sabemos como reproduzir o som de uma tag `<audio>` quando quisermos, através da nossa própria função.

Agora falta só um único detalhe, que é como vamos unir o botão que vai chamar a função que vai dar play e executar o som do instrumento. Precisamos de algo que chamará essa função.

Na verdade, já sabemos o que é. Sabemos que é esse momento do usuário clicar em cima do botão do Alura Midi. Até já aprendemos como fazer algo quando a pessoa usuária clica no botão.

Clicando no botão  
No VS Code, vamos navegar até o elemento `<button>` no HTML para usar aquele atributo onclick Já aprendemos que não é ideal utilizá-lo, mas vamos colocá-lo só para testar a função tocaSomPom().

Alteração de teste no index.html:

```JavaScript
<button onclick="tocaSomPom()" class="tecla tecla_pom">Pom</button>
```

Após voltar no navegador e recarregar a página, o som do bumbo já vai tocar ao clicar no botão Pom.

Já havíamos feito isso, porém sabemos que JavaScript inline não é legal por vários motivos, já que dificulta a manutenção e a escalabilidade, assim como CSS inline. Por isso, precisamos fazer esse onclick lá de dentro do arquivo main.js, que é onde estamos mantendo as nossas boas práticas de JavaScript.

Lembrem que criamos um código document.querySelector, passando o seletor da tecla Pom, que é a classe tecla_pom. Sabemos que esse código vai trazer o botão da tecla Pom.

Se você tiver dúvida do que esse código faz, você pode copiar esse trecho e colá-lo na aba console do navegador. Ao dar "Enter", você vai garantir que é retornado o botão com som Pom.

Da mesma forma que conseguimos acessar com querySelector, o elemento da tag `<audio>` através do ponto. No main.js, podemos tirar o ponto vírgula e continuar o código do querySelector('. tecla_pom'). usando o ponto.

O ponto vai entrar para dentro daquele elemento que está sendo buscado no querySelector e vai trazer todas as propriedades e funcionalidades que são possíveis ser consultadas ou executadas dentro daquele elemento. Então com um ponto o próprio Visual Studio Code abriu uma janela de coisas que são possíveis fazer.

E o que queremos agora é acessar o atributo onclick desse elemento, que sabemos que existe porque está lá no HTML, se podemos usá-lo no HTML, também podemos usá-lo no JavaScript.

Então, podemos escrever .onclick para ter acesso a esse atributo. Como ele é um atributo, para passar e definir um valor para ele, devemos usar o sinal de atribuição, o mesmo do HTML, que é o sinal de igual (=). Esse sinal vai poder atribuir tudo que vem para o lado direito aquilo, nesta propriedade/atributo o que está do lado esquerdo do sinal.

Portanto, queremos que quando o onclick deste elemento da tecla Pom seja executado, queremos que chame a função tocaSomPom().

main.js:

```JavaScript
document.querySelector('.tecla_pom').onclick = tocaSomPom();
```

Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.

Vamos salvar e verificar se dá certo. Ao recarregar a página, já aparece um problema. O problema do play(), que o usuário não interagiu com a página antes. Já encontramos esse problema antes.

Já havíamos corrigido esse problema, porém voltamos a tê-lo por culpa nossa mesmo. O que acontece no JavaScript? Quando escrevemos o nome da função e abrimos e fechamos parênteses imediatamente, não estamos guardando essa função dentro do atributo onclick. Isso é uma peculiaridade do arquivo JavaScript. Já estamos dizendo para o navegador passar por esse trecho de código e executar a função imediatamente.

Portanto, se dentro de um arquivo .js queremos guardar uma função em um atributo onclick, precisamos retirar esses parênteses, porque só assim se ele vai guardar dentro do onclick a referência, esse nome da função e não vai necessariamente executá-la no mesmo momento em que ela é guardada. Isso tem relação com a ordem de execução do código JavaScript.

```JavaScript
document.querySelector('.tecla_pom').onclick = tocaSomPom;
```

Voltando no navegador e recarregando, esse problema deixa de acontecer, porque agora não estamos chamando a função tocaSomPom() que toca imediatamente o play da tag `<audio>`. Estamos realmente guardando a função tocaSomPom() dentro onclick do botão Pom. Agora, se apertamos a tecla Pom, vai executar o som de bumbo.

Vamos testar se no Firefox terá algum problema? Recarregamos o Firefox, apertamos o botão e o som tocou novamente.

Próximos passos  
Na próxima aula, vamos aprender como reproduzir esse som de forma automática para todos os botões do nosso teclado, porque já conseguimos fazer funcionar para uma, mas como fazemos automaticamente para todos os nossos botões?

Lembrem-se, imagine se tivéssemos um piano com 88 teclas? Até lá.

### Aula 2 - Lista de exercícios

Vamos praticar o que aprendemos até aqui?

1) Desenvolvendo interatividade com JavaScript e HTML  
Imagine que você está trabalhando no projeto de um instrumento musical digital, similar ao Alura Midi, onde ao clicar nos botões, sons diferentes são reproduzidos. Sua tarefa é utilizar HTML e JavaScript para criar a interatividade desses botões:

Inicie com o botão que representa o som "Pom";  
Utilize a tag button no HTML e adicione a funcionalidade de reprodução de som usando JavaScript.
Para fazer essas ações, você precisa vincular o som específico (que já está disponível em um arquivo de áudio) ao clique deste botão.

2) Resolvendo erros de nulo no JavaScript  
Você está desenvolvendo um site que inclui a reprodução de sons ao clicar em botões. Ao testar o site, você se depara com um erro no console do navegador: o JavaScript está tentando acessar uma propriedade de um elemento que ainda não foi carregado, resultando em um erro de "nulo". Sua tarefa é corrigir esse erro, garantindo que o script só execute depois que todos os elementos necessários da página tenham sido carregados. Para fazer a correção, você precisa mover a tag `<script>` para o local apropriado no arquivo HTML.

3) Adicionando funcionalidade de áudio ao botão  
Você está desenvolvendo um aplicativo web de instrumentos musicais e precisa criar uma interface que permita aos usuários tocar sons diferentes ao clicar em botões específicos. Já existe um botão com a classe tecla_pom e uma função tocaSomPom() que reproduz o som. Seu desafio é vincular a função tocaSomPom() ao evento de clique do botão tecla_pom sem usar o atributo onclick no HTML, mantendo as boas práticas de JavaScript.

4) Criando uma função para tocar sons  
Agora, você identificou um segundo problema: os sons estão sendo automaticamente reproduzidos ao carregar a página, o que é bloqueado por padrão pelos navegadores por razões de experiência do usuário (algumas pessoas não gostam de ser surpreendidas por sons). Para resolver isso, você precisa modificar o arquivo JavaScript para que o som só seja reproduzido quando um botão específico for clicado. Crie uma função chamada tocaSomPom, que será responsável por reproduzir o som apenas quando invocada, e assegure que ela seja chamada corretamente quando o botão apropriado for clicado.

Opinião do instrutor

Veja as soluções dos exercícios. Lembre-se de que há várias maneiras de solucionar um mesmo problema (e tudo bem caso seu código tenha saído diferente). O importante é que ele esteja organizado, bem escrito e funcione.

1) Desenvolvendo interatividade com JavaScript e HTML

- Adicione um botão em seu arquivo HTML com a tag button;
- Vincule o arquivo de áudio do som "Pom" ao seu projeto HTML. Inclua a tag audio sem o atributo controls e com o ID correspondente;
- No seu arquivo JavaScript, crie uma função para reproduzir o som quando o botão for clicado;
- Teste o botão no seu navegador para garantir que o som seja reproduzido corretamente ao clicar.  
Código HTML:

```html
     <button id="tecla_pom" class="tecla_pom">Pom</button>

    <audio src="caminho_para_seu_arquivo_de_som_pom.mp3" id="som_tecla_pom"></audio>
```

Código JavaScript:

```JavaScript
 document.querySelector("#tecla_pom").onclick = function() {
    document.querySelector("#som_tecla_pom").play();
};
```

2) Resolvendo erros de nulo no JavaScript

- Verifique a localização da tag `<script>` no seu arquivo HTML. Ela deve estar colocada ao final do corpo do documento, logo antes do fechamento da tag `</body>`;
- Mova a tag `<script>` para essa nova localização. Isso garantirá que o JavaScript só será executado após todos os elementos da página terem sido carregados;
- Salve as alterações e recarregue a página no navegador. Verifique se o erro de nulo foi resolvido.  
Código HTML:

```html
<body>
    <!-- Conteúdo do body -->
    <!-- ... -->
    <script src="main.js"></script>
</body>
```

3) Adicionando funcionalidade de áudio ao botão

- Primeiro, selecione o botão com a classe tecla_pom (como no código Javascript abaixo):

```JavaScript
const botaoPom = document.querySelector('.tecla_pom')
```

Em seguida, adicione um event listener de clique a este botão:

```JavaScript
botaoPom.addEventListener('click', tocaSomPom);
```

Pronto!

4) Criando uma função para tocar sons

- No arquivo JavaScript (main.js), crie uma nova função chamada tocaSomPom;
- Dentro da função, coloque o código que executa o som. Este código deve ser a causa do erro de reprodução automática anteriormente;
- Adicione um evento de clique ao botão desejado que, quando clicado, invoca a função tocaSomPom;
- Salve as alterações e teste o botão no navegador para garantir que o som só é reproduzido ao clicar no botão.  
Código JavaScript:

```JavaScript
function tocaSomPom() {
    // Código para tocar o som
}

document.querySelector('#botaoPom').addEventListener('click', tocaSomPom);
```

### Aula 2 - O que aprendemos?

Nesta aula, você aprendeu:

Play no JS:  
Como manipular a tag `<audio>` do HTML através do JavaScript, como selecionar um elemento a partir de um seletor de id e a reproduzir um som a partir da função play(). Além disso, viu também como os erros são apresentados na aba Console da ferramenta DevTools.

O que é uma função?:  
O que é uma função, para que servem, como declará-la e sua sintaxe básica. Além disso, viu que a ordem de execução de um código JavaScript importa, desde a inserção da tag script antes do fechamento da tag `</body>` no HTML até a ordem do código JavaScript dentro do seu próprio arquivo.

Clique no botão:  
A utilizar o onclick como atributo no JavaScript, e como atribuir uma função ao onclick sem que esta função seja invocada imediatamente.

## Aula 3 - Listas

### Aula 3 - Lista de elementos - Vídeo 1

Transcrição  
Olá! Nas aulas passadas, aprendemos a reproduzir o som que está dentro da tag audio e passar o controle para a nossa tag button do Alura Midi. Agora, temos o desafio de realizar a mesma tarefa para as próximas teclas do nosso Alura Midi.

Vamos abrir o Visual Studio Code. A maneira mais simples, com o que sabemos até agora, seria copiar o código e renomear para cada tipo de som. Vamos fazer isso apenas para ver como ficará e o tamanho que ficará o nosso arquivo main.js.

Basicamente, teremos que copiar a função e o querySelector. tocaSomPom e vai ficar tocaSomClap. document.querySelector('#som_tecla_clap'), e tocaSomClap.

```JavaScript
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;
```

Vamos reproduzir isso mais sete vezes e ver como ficará no fim.

```JavaScript
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;

function tocaSomTim () {
    document.querySelector('#som_tecla_tim').play();
}
document.querySelector('.tecla_tim').onclick = tocaSomTim;

function tocaSomPuff () {
    document.querySelector('#som_tecla_puff').play();
}
document.querySelector('.tecla_puff').onclick = tocaSomPuff;

function tocaSomSplash () {
    document.querySelector('#som_tecla_splash').play();
}
document.querySelector('.tecla_splash').onclick = tocaSomSplash;

function tocaSomToim () {
    document.querySelector('#som_tecla_toim').play();
}
document.querySelector('.tecla_toim').onclick = tocaSomToim;

function tocaSomPsh () {
    document.querySelector('#som_tecla_psh').play();
}
document.querySelector('.tecla_psh').onclick = tocaSomPsh;

function tocaSomTic () {
    document.querySelector('#som_tecla_tic').play();
}
document.querySelector('.tecla_tic').onclick = tocaSomTic;

function tocaSomTom () {
    document.querySelector('#som_tecla_tom').play();
}
document.querySelector('.tecla_tom').onclick = tocaSomTom;
```

Conseguimos reproduzir o código que fizemos para todas as nossas nove teclas. Vejam como está a situação desse código. Vamos recarregar o navegador.

Já ocorreram problemas aqui onde digitamos algo errado. TocaSomSplash Is Not Defined. Vamos verificar o código. Vejam como fica difícil encontrar onde está o erro dessa forma. Faltou um S em .tocaSomSplah. Agora, vamos reproduzir os sons e vocês verão que está tudo funcionando. Porém, o nosso código está horrível!

Aprendendo a usar os comentários  
Se não quisermos avançar o código e apenas organizá-lo, um recurso que o JavaScript e todas as linguagens de programação têm é o recurso de comentários.

É basicamente um texto, uma frase que você pode escrever e que não será executada como um código JavaScript. Ela será ignorada e serve apenas para nós, pessoas desenvolvedoras, termos uma ajuda. Quando revisitarmos esse código, daqui um ano, daqui meses, vamos conseguir entender o que escrevemos.

Os comentários podem começar com o //, que é o comentário em linha. Podemos escrever, por exemplo, // Som Pom ou apenas // Pom. E aí, podemos colocar umas linhas para separar.

E aí, temos a função do tocaSomPom e temos o querySelector do botão pom. Agora, o clap também. Podemos usar o comentário de bloco, que é o /*. E aí, conseguimos dar um Enter. Todas as linhas abaixo do /* já ficaram cinza. Isso significa que, a partir dali tudo aquilo está comentado. Mas, podemos encerrar o comentário de bloco com o */. E aí, entre esses dois símbolos, essas linhas são ignoradas, como comentário. Também podemos escrever clap, para nos ajudar a entender esse código.

```JavaScript
/*
    Clap
*/
```

Assim, podemos dividir o nosso código com comentários, para conseguir ajudar a entender e dar manutenção. Mas, de novo, entramos naquela mesma questão.

Temos comentários, temos o código funcionando. Mas, imagine se tivéssemos 88 teclas. Com nove teclas, já estamos com um código de 60 linhas. E, se começarmos a colocar os comentários, potencialmente, já vai virar umas 90 linhas. Agora, imagine se tivéssemos um monte de teclas. Seria praticamente um horror trabalhar nesse código.

Agora que vimos que não compensa fazer repetição de código, até porque, se precisarmos mudar alguma coisa na funcionalidade das nossas funções que tocam som, teríamos que mexer em, pelo menos, nove funções.

Trabalhando com listas de elementos  
Precisamos aprender uma nova coisa do JavaScript, que é automatizar as nossas funcionalidades e, principalmente, trabalhar com muitos elementos de uma vez só. Precisamos aprender a trabalhar com listas de elementos.

Para isso, a primeira coisa que temos que fazer é, ao invés de selecionarmos um único botão do nosso teclado, precisamos saber como selecionar todos os botões de uma vez e pegar todos eles de uma vez e colocar a função que toca o som.

Para isso, vamos usar o Console do navegador. Estamos usando o Firefox e, no Console, vamos digitar document, porque, dentro do nosso document, queremos fazer uma busca. Então, .querySelector. Só que, ao invés de usarmos agora o querySelector, que busca o primeiro elemento que ele encontrar com aquele seletor informado, vamos usar o querySelectorAll.

O querySelectorAll é uma funcionalidade do JavaScript que busca todos os elementos com o seletor passado entre os parênteses. Então, vamos abrir aspa simples e passar o seletor que todos esses botões têm.

Podemos inspecionar eles na aba Inspecionador, e ver qual que é. Sabemos que o nome da tag button não é um seletor muito bom, porque pode ser que tenhamos outros botões que não sejam do nosso teclado, no futuro da nossa aplicação, e pode dar algum problema. Queremos garantir que sejam só os botões do teclado do Alura Midi.

Então, vemos que tem uma classe tecla que tem em todos os meus botões, vamos usar ela como seletor de todos os botões. Então, seletor de classe começa com .tecla, e vamos dar Enter para ver o que acontece.

Dando Enter, vamos ver que a execução que acontece no Console é trazer uma linha escrito NodeList e tem um número 9 nos indicando qual quantidade de elementos que ele encontrou com esse seletor. Abre um colchete, e dentro desse colchete começa cada elemento button encontrado. Conseguimos passar o mouse em cima, e ele destaca na nossa página cada um dos elementos que foram encontrados.

```JavaScript
document.querySelectorAll('.tecla')

NodeList(9) [button.tecla.tecla_pom, button.tecla.tecla_clap, button.tecla.tecla_tim, button.tecla.tecla_puff, button.tecla.tecla_splash, button.tecla.tecla_toim, button.tecla.tecla_psh, button.tecla.tecla_tic, button.tecla.tecla_tom]
```

Se clicarmos no triangulozinho que tem do lado esquerdo do NodeList, ele vai abrir e mostrar essa lista ainda com o índice do lado, 0, 1, 2, 3, 4, 5, 6, 7, 8. Então, são 9 elementos começando do 0 ao 8, somando 9, e cada botão desse elemento.

Vamos executar agora o mesmo código no Google Chrome para vocês verem a diferença. Então, vamos recarregar, document.querySelectorAll('.tecla'). Vamos dar o Enter, então aqui também aparece o NodeList com 9 elementos e o triangulozinho para abrir e ver os índices dessa lista e também todos os elementos que estão dentro dela.

```JavaScript
document.querySelectorAll('.tecla')
NodeList(9) [button.tecla.tecla_pom, button.tecla.tecla_clap, button.tecla.tecla_tim, button.tecla.tecla_puff, button.tecla.tecla_splash, button.tecla.tecla_toim, button.tecla.tecla_psh, button.tecla.tecla_tic, button.tecla.tecla_tom]

0: button.tecla.tecla_pom
1: button.tecla.tecla_clap
2: button.tecla.tecla_tim
3: button.tecla.tecla_puff
4: button.tecla.tecla_splash
5: button.tecla.tecla_toim
6: button.tecla.tecla_psh
7: button.tecla.tecla_tic
8: button.tecla.tecla_tom
lenght: 9
[[Prototype]] NodeList
```

Notem que a lista começa com colchete, então antes de abrir o triangulozinho, vimos aqui todos os elementos e em volta deles tem um colchete. Mesma coisa no Firefox, se recolhermos esse triangulozinho, conseguimos ver que elas estão em volta de um colchete. Isso é a característica de que estamos trabalhando com listas.

Agora, precisamos saber como botar o nosso código para funcionar junto com essa lista. Então, no lugar de um querySelector de um botão, lá no main.js, vamos apagar todo esse código, então vocês não precisavam fazer essa repetição que fizemos, era só para termos noção de quão caótico pode ser.

E lá onde temos o querySelector da tecla Pom e o onClick, vamos apagar esse código. Também é possível comentá-lo, mas não tenha pena de código, pode apagar. E vamos usar o querySelector no lugar, então document.querySelectorAll, abre e fecha parênteses, aspas, .tecla.

```JavaScript
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
document.querySelectorAll('.tecla')
```

A partir da próxima aula, vamos ver como fazemos a mesma coisa que estávamos fazendo com o onClick, agora trabalhando com uma lista.

### Aula 3 - Por que o document.querySelectorAll()?

Como vimos durante a aula, apesar de utilizarmos o script document.querySelector(seletor) para capturar elementos do HTML individualmente, no Alura MIDI, trocamos ele pelo document.querySelectorAll(seletor).

Desta forma, por que o uso do document.querySelectorAll se justifica?

Resposta:  
Utilizamos o document.querySelectorAll() para selecionarmos todos os elementos do seletor desejado, reduzindo a quantidade de repetição de código, que consequentemente, promoverá uma otimização no código em alternativa a repetição.

> Alternativa correta! Ao utilizarmos esse script, ao invés de capturarmos um elemento por vez, conseguimos pegar todos de uma só vez. Portanto isto facilitará a manipulação, reutilização e manutenção do nosso código para todos os elementos que recebem o mesmo tipo de função.

### Aula 3 - Referências - Vídeo 2

Transcrição  
No vídeo anterior, conseguimos capturar todos os elementos do nosso teclado, todos os botões do Alura Midi, de uma vez só, e obtivemos uma lista de elementos. Agora, precisamos começar a entender como essas listas funcionam no JavaScript e como podemos automatizar alguns códigos utilizando a lista.

Primeiramente, precisamos deixar nosso código legível e fácil de entender. Vamos voltar ao arquivo main.js no VSCode. Já inserimos o document.querySelectorAll, selecionando todos os elementos com a classe tecla. No entanto, à primeira vista, pode ser difícil entender que por trás desse código existe uma lista de elementos que compartilham essa mesma classe.

Para melhorar a legibilidade e o entendimento desse código, podemos criar alguns nomes que nos ajudem a entender o código. Seria ideal se, no lugar desse document.querySelectorAll, pudéssemos utilizar algo em português, como listaDeTeclas, por exemplo. Isso facilitaria o entendimento de que temos uma lista e que o que tem dentro dessa lista são teclas.

Utilizando referências  
Podemos fazer isso com JavaScript, usando um recurso da linguagem chamado referências. As referências no JavaScript devem ser criadas ou declaradas com base no valor que elas vão receber e guardar.

Por exemplo, a listaDeTeclas: Em algum momento na execução do nosso JavaScript, a listaDeTeclas vai se tornar outra coisa, vai receber um outro valor? Muito provavelmente não. O ideal seria que realmente a listaDeTeclas sempre armazenasse a mesma lista de teclas. Portanto, terá seu valor constante.

Se fosse um outro tipo de valor que fosse armazenado nessa referência, que pudesse ter seu valor modificado ao longo do script, essa outra referência poderia ser uma variável, que não é o nosso caso. O ideal é sempre usar referências constantes e, caso necessitemos de uma variável, utilizá-la como variável.

Criando uma referência constante
Então, como criamos uma referência constante no JavaScript? Já criamos o nome dela como listaDeTeclas, que seria o ideal, e podemos criar com o nome que quisermos. Porém, antes, vamos colocar a declaração dessa referência. No nosso caso, vai ter o valor constante, então, escrevemos const, espaço, e o nome da nossa referência, que no caso é listaDeTeclas.

```JavaScript
const listaDeTeclas
```

Por isso é importante saber se ela vai ser uma constante ou uma variável, porque isso define essa palavra que vamos escrever antes do nome da referência, do lado esquerdo. E depois, do lado direito, temos o sinal de atribuição (=), que já conhecemos, que vai armazenar o que está aqui do lado direito, dentro dessa referência.

Queremos colocar a nossa listaDeTeclas, que está dentro do document.querySelectorAll, armazenada dentro de listaDeTeclas. Então, vamos recortar o código, ou podemos arrastar movendo aqui, e vamos colocar para o lado direito do sinal de atribuição. Desta forma, conseguimos ter uma listaDeTeclas guardadas em um nome que faça sentido, que tenha significado, que seja fácil de entender.

```JavaScript
const listaDeTeclas = document.querySelectorAll('.tecla');
```

É a partir da listaDeTeclas que vamos começar a manipular a nossa lista de teclas, de botões, em nossas próximas aulas. Inclusive, da forma que fizemos e declaramos aqui, se formos ao navegador, no Firefox, recarregarmos, abrirmos o console e digitarmos listaDeTeclas, ela já vai aparecer para nós, até para autocompletar. Vamos dar um Enter, e vai aparecer aquela NodeList. É muito mais fácil trabalhar com listaDeTeclas do que document.querySelector todo o tempo.

Agora que o nosso código está mais fácil de entender, no nosso próximo vídeo, vamos conhecer um pouco mais de detalhes sobre as listas, para conseguirmos aplicar a funcionalidade de execução do som de cada instrumento para cada botão. Até lá!

### Aula 3 - Conhecendo listas - Vídeo 3

Transcrição  
Agora que já sabemos como deixar nosso código mais legível, criando uma referência constante que armazena todas as teclas do nosso Alura Midi nessa referência listaDeTeclas, precisamos entender como acessar individualmente um elemento dessa lista.

No console do navegador, temos disponível a referência listaDeTeclas que contém todos os nossos elementos. Percebemos também que temos um colchete que representa essa lista.

No entanto, quando colocamos o ponto para entrar dentro da listaDeTeclas, como já fizemos com o document ou com um elemento retornado no querySelector, percebemos que não conseguimos acessar, por exemplo, uma propriedade onclick para colocar nos elementos de dentro, porque a lógica não é feita dessa maneira.

Não colocamos na lista o evento de clicar, mas em cada elemento da lista.

Portanto, apesar de termos conseguido concentrar todos os nossos elementos em uma linha de código, ainda precisaremos acessá-los individualmente para conseguir, em cada um, atribuir um valor para o onclick, ou seja, uma função que vai reproduzir o determinado som da tecla.

Portanto, não temos mais a propriedade onclick logo em seguida, como teríamos se fosse para acessar um elemento. Então, precisamos saber como acessar um elemento que está dentro dessa lista, e para isso usamos essa sintaxe de colchetes, usada para lista. E dentro do colchete, vamos passar um número com o índice que o elemento está dentro dessa lista.

```JavaScript
listaDeTeclas[0]
```

Então, vamos colocar um número que é, por exemplo, queremos o índice zero, que é o da tecla POM. Ao fazer isso, o elemento que está armazenado no índice zero dessa lista de teclas fica destacado na nossa página, preenchido de azul.

Índice 1, temos o CLEP, 2, temos o TIM, 3, temos o PUFF, e assim até o número 8, representando todos os elementos da lista. Se colocarmos um número que não existe, vai retornar que está indefinido.

Então, se quisermos voltar a ter o nosso onclick aqui no POM, precisamos acessar este elemento pela lista, mas informando o número do seu índice para conseguir acessá-lo, e então acessar o onclick.

Lembrando que quando abrimos o NodeList, conseguimos verificar o número do índice de cada botão. Esse índice é organizado pela ordem de declaração do HTML. Então, o primeiro elemento a ser declarado com essa classe foi o nosso botão POM, por isso que ele ficou como o primeiro elemento da lista com índice zero.

É muito comum que as listas dentro da programação comecem com índice zero e vão até um número total menos um. Aqui no Firefox, vamos clicar no ícone de uma lixeirinha no canto superior esquerdo da aba console, pois ela limpa o console para nós. Vamos acessar novamente a nossa listaDeTeclas e vamos adicionar os colchetes e colocar o índice zero para acessar a tecla POM.

Então, se fizermos isso e pressionarmos Enter, já vai nos retornar o elemento com a tecla POM. Então, se fizermos a mesma coisa e colocar o ponto logo em seguida dos colchetes, ou seja, listaDeTeclas[0]., vamos voltar a acessar todas as propriedades e funcionalidades de um elemento, porque agora a nossa referência para este elemento é através da listaDeTeclas e não precisamos mais usar o document.querySelector de um único seletor.

E aqui conseguimos fazer o onclick e atribuir ao onclick a nossa função tocaSomPom. Lembrando que não podemos passar parênteses, senão temos aquele problema do play. Então, vamos guardar no onclick a referência àquela função que já declaramos.

```JavaScript
listaDeTeclas[0].onclick = tocaSomPom
```

Então, vamos dar um Enter e vamos clicar aqui no botão POM para ver se vai reproduzir o som. Reproduziu. Esse código está só aqui em tempo de execução do nosso navegador. Agora que ele já está funcionando, podemos copiá-lo e colocar dentro do nosso main.js, porque se recarregarmos a nossa página, vamos perder essa execução e vai deixar de funcionar o nosso botão POM.

Então, vamos editar novamente no arquivo main.js no VS Code, que é listaDeTeclas, colchete, índice do nosso elemento, fora dos colchetes, ponto, onclick, recebe, tocaSomPom e ponto e vírgula no final.

```JavaScript
listaDeTeclas[0].onclick = tocaSomPom;
```

Bom, voltando ao navegador e recarregando a nossa página, se clicarmos no botão POM, vai reproduzir o som. Voltando ao código que tínhamos algumas aulas atrás, apenas um botão funciona e as outras não têm mais funcionalidade.

E se fôssemos usar essa mesma lógica para colocar o som nos outros botões, teríamos que fazer algo parecido com isso aqui. Ou seja, listaDeTeclas[1].onclick e criar uma função tocaSomClap. listaDeTeclas[2].onclick e recebe a tocaSomTim e criar essa função, até a última tecla, de índice 8.

Porém, sabemos que se criarmos todas essas funções, o nosso código vai ficar enorme, não vai ficar funcional, vai ficar repetitivo, vamos ter os mesmos problemas que estávamos tendo antes.

Então, fica de desafio para a nossa próxima aula, pensarmos como podemos usar as listas para conseguir realmente automatizar essa funcionalidade, essa tarefa de atribuir ao onclick de cada elemento da nossa lista uma função que toca o som do seu respectivo instrumento.

### Aula 3 - Faça como eu fiz: Declarando uma referência

No JavaScript podemos criar nossas próprias referências armazenarem de maneira mais simples valores para utilizarmos ao longo do código.

Desta forma, a partir deste código no [CodePen](https://codepen.io/vanessametonini/pen/eYEVEqR), faça:

Uma referência que armazene uma lista com todas as teclas e imprima o valor dela na aba console.
Como fazer:

- Abra o link do CodePen;
- Abra a aba JS e escreva seu código dentro dela;

Opinião do instrutor

Gabarito:

```JavaScript
const listaDeTeclas = document.querySelectorAll('input[type=button]');
console.log(listaDeTeclas);
```

Para selecionarmos todas as teclas do Alura Fone, é necessário usar o script const listaDeTeclas = document.querySelectorAll(‘input[type=button]), porquê o JavaScript vai criar uma referência chamada listaDeTeclas e armazenar dentro dela a NodeList com todas as teclas do Alura Fone, pois o script document.querySelectorAll(‘input[type=button]’) acessa o documento HTML (representado por document) e captura todos os elementos input que tenha como atributo type=button. É necessário passar o type, ou seja, o seletor de atributo, pois os inputs do HTML não tem classes nem IDs, e também temos um input que não é do tipo type, impossibilitando o uso do seletor de nome de tag input.

### Aula 3 - Lista de exercícios

Vamos praticar o que aprendemos até aqui?

1) Selecionando todos os botões no Alura Midi  
Você trabalha com desenvolvimento web e está aprimorando um projeto de teclado musical virtual, o "Alura Midi". Utilize o conhecimento adquirido nesta aula para utilizar um método que seleciona todos os botões do projeto de uma só vez, através de sua classe.

2) Salvando todos os botões no Alura Midi em uma constante  
Desta vez, sua tarefa é guardar todos esses botões que podem ser selecionados através de suas classes de mesmo nome, e guardá-los em uma variável. Dessa forma, será possível aplicar funcionalidades a todos eles de uma só vez.

3) Acessando elementos de uma lista  
Vamos continuar o desenvolvimento do projeto virtual "Alura MIDI"? Sua próxima tarefa, é acessar o primeiro elemento da lista de teclas, listaDeBotoes. Para fazer isso, utilize a sintaxe que acessa determinados elementos de uma lista, também chamado de array no JavaScript.

4) Atribuindo funções a elementos da lista  
Nova tarefa! Atribua a função tocaSomPom ao evento onclick da tecla correspondente ao índice 0 da lista. Lembre-se de que você não deve usar parênteses ao passar a referência da função para evitar a execução imediata dela.

5) Aplicando funções em mais elementos da lista  
Sua missão da vez é utilizar a mesma lógica de atribuir funções a elementos da lista, porém agora para tocar o arquivo de áudio com o nome TocaSomClap ao clicar no botão Clap. Esse botão é o segundo elemento da lista de elementos.

Opinião do instrutor

Veja as soluções dos exercícios. Lembre-se de que há várias maneiras de solucionar um mesmo problema (e tudo bem caso seu código tenha saído diferente). O importante é que ele esteja organizado, bem escrito e funcione.

1) Selecionando todos os botões no Alura Midi

- Aplique ao conjunto de botões o mesmo nome de classe;
- No arquivo JavaScript, utilize o método querySelectorAll para selecionar todos os botões de uma só vez, e no seu parâmetro passe o nome da classe entre aspas, por exemplo, (‘.botoes’).
- A sintaxe do querySelectorAll é:

```JavaScript
document.querySelectorAll('.botoes');
```

2) Salvando todos os botões no Alura Midi em uma constante

- Guarde a seleção de elementos (todos os botões) em uma variável, por exemplo, const listaDeBotoes, dessa forma, será possível aplicar funcionalidades a todos os botões de uma só vez, utilizando apenas essa variável.

Veja um exemplo de como seria o código:

```JavaScript
const listaDeBotoes = document.querySelectorAll('.botoes');
```

3) Acessando elementos de uma lista  
Acesse o primeiro elemento da lista listaDeBotoes usando a sintaxe de colchetes e observe que cada elemento da lista é um objeto que pode ter eventos associados a ele:

```JavaScript
listaDeBotoes[0]
```

4) Atribuindo funções a elementos da lista

- Acesse o elemento desejado da lista usando listaDeBotoes[0];
- Atribua a função tocaSomPom ao evento onclick deste elemento.
- Veja como ficaria o código JavaScript:

```JavaScript
listaDeBotoes[0].onclick = tocaSomPom
```

5) Aplicando funções em mais elementos da lista

- Acesse o elemento desejado da lista usando listaDeBotoes[1];
- Crie a função TocaSomClap e atribua ao evento onclick deste elemento;
- Analise o código e repare que ele gera uma repetição de métodos (ao longo do curso, você verá que existem métodos que evitam essa repetição, portanto, não se preocupe com isso neste momento).
- Veja como ficaria o código JavaScript:

```JavaScript
function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}
const listaDeBotoes = document.querySelectorAll('.tecla');
listaDeBotoes[1].onclick = tocaSomClap;
```

Muito bom! Você chegou ao fim de mais uma lista de exercícios!

### Aula 3 - O que aprendemos?

Nessa aula, você aprendeu:

Lista de elementos:  
O que são os comentários de código e como utilizá-los para auxiliar durante a escrita da nossa aplicação. Vimos também uma alternativa ao querySelector quando necessário buscar muitos elementos, que é o querySelectorAll, que retorna uma lista (NodeList) com todos os elementos do seletor informado evitando a repetição de código.

Referências:  
Para que serve uma referência e como declaramos uma referência de valor constante no código.

Conhecendo listas:  
A estrutura de uma lista em JavaScript e como podemos acessar os elementos a partir dos índices com a sintaxe do colchetes.

## Aula 4 - Iterando em Listas

### Aula 4 - Percorrendo uma lista - Vídeo 1

Transcrição  
Olá! Na aula passada, aprendemos como obter todos os botões do teclado do Alura Midi utilizando a função querySelectorAll(), que recebe a classe que todas têm em comum. Armazenamos o retorno dessa função em uma constante, uma referência que facilita o entendimento do nosso código. Nós a nomeamos de listaDeTeclas. Depois, aprendemos como acessar cada elemento individualmente dentro dessa lista, utilizando os índices.

Agora, precisamos saber como acessar cada item dessa lista de forma automatizada. Não será viável continuarmos repetindo esse trecho de atribuição a um clique de cada elemento e uma lista cujo tamanho não conhecemos. Estamos trabalhando com uma lista de nove botões, mas se fosse um teclado com 80, mil ou mais botões e precisássemos adicionar alguma função ao evento onclick delas, esta não seria uma estratégia eficiente.

Acessando os itens da lista com while  
Toda linguagem de programação contém uma estrutura de repetição para trabalhar nesses casos de códigos que precisam ser repetidos muitas vezes até um determinado ponto. No JavaScript, vamos usar a estrutura while, que significa enquanto (em inglês).

Enquanto determinada condição informada entre os parênteses após a declaração de while for verdadeira, a repetição continuará. Precisamos criar uma condição que determine onde essa repetição deve parar, pois, caso contrário, ela rodará para sempre, causando um loop (laço) infinito e possivelmente travando o navegador e o computador.

Vamos adicionar o while () abaixo da linha com o onClick. Após os parênteses, adicionaremos as chaves entre as quais será definida a rotina dessa repetição, ou seja, o que será executado a cada loop. Nesse caso, vamos acessar um elemento da lista, acessar o onclick deles e colocar uma função dentro desse onclick.

Vamos recortar a linha listaDeTeclas[0].onclick = tocaSomPom; e colá-la entre as chaves do while. Em seguida, vamos entender como criar a condição dessa estrutura.

```JavaScript
//enquanto
while () {
    listaDeTeclas[0].onclick = tocaSomPom;
}
```

O while espera receber uma condição que seja verdadeira ou falsa, ou seja, algo que o JavaScript possa verificar. Voltando ao navegador, vamos acessar novamente o DevTools (Ferramentas da pessoa Desenvolvedora) e a aba "Console", dentro da qual podemos testar esses valores verdadeiros e falsos, representados pela palavra true (verdadeiro) e false (falso).

Precisamos ter um true ou um false, e precisamos comparar as condições para informar ao while. Temos o tamanho da lista, que é de nove elementos, e temos repetições. Podemos contar essas repetições, e enquanto elas não atingirem o tamanho da lista, elas serão incrementadas.

Podemos utilizar os operadores matemáticos de comparação de "maior que" (>) e "menor que" (<) para comparar os números da repetição atual do while e do tamanho da lista. Por exemplo, na primeira repetição, que seria a zero, temos o número zero e podemos comparar com o tamanho da lista, que é de nove elementos.

```JavaScript
0 < 9
true
```

Enquanto zero for menor que nove, a condição será verdadeira. Depois, na próxima repetição, compararemos se um é menor que nove, que é verdade, e assim por diante. Sempre teremos do lado direito um número que vai condicionar a situação de falso. Até chegar ao ponto em que teremos nove à direita, que não é menor que nove, o que dará falso.

```JavaScript
9 < 9
false
```

Precisamos ter do lado esquerdo do nosso operador algo que sempre conte as repetições e compare com o número total da lista. Para isso, precisamos criar a referência variável de um contador.

Adicionando um contador  
No JavaScript, para criar uma referência variável, escreveremos a palavra let. Ela define uma variável que sempre receberá um valor novo. No nosso caso, será o contador, que começará com o valor 0.

Vamos escrever let contador = 0 duas linhas acima do while.

Entre os parênteses do while, teremos o contador e vamos compará-lo com zero.

```JavaScript
let contador = 0;

//enquanto
while (contador < 9) {
    listaDeTeclas[0].onclick = tocaSomPom;
}
```

Muito cuidado nesse ponto do código! Não salve nem recarregue o navegador, porque se fizermos isso nesse momento, teremos um loop infinito**, porque nosso contador ainda vale zero. Isso vai travar o navegador e até mesmo o próprio computador.

Precisamos saber como mudar o valor do contador a cada repetição do while. Primeiro ele vai valer zero, vai comparar com nove e vai dar tru e vai entrar nas chaves.

Dentro do while podemos fazer qualquer coisa, inclusive, mudar o valor de contador, porque ele é uma referência variável. Ele permite que o chamemos de novo duas linhas abaixo do onclick. Vamos fazer ele receber, por exemplo, o número um.

```JavaScript
let contador = 0;

//enquanto
while (contador < 9) {
    listaDeTeclas[0].onclick = tocaSomPom;
    
    contador = 1;
}
```

Mas se colocarmos um, quando ele passar de novo e fazer a segunda repetição, ele vai continuar valendo um, que vai ser menor que nove, que retornará true. Ou seja, será novamente um loop infinito, que sempre será verdade.

Nosso contador vai receber algum valor mais um. Esse primeiro valor terá que ser o valor antigo do contador. Então, podemos adicionar ele mesmo, contador, mais um.

```JavaScript
let contador = 0;

//enquanto
while (contador < 9) {
    listaDeTeclas[0].onclick = tocaSomPom;
    
    contador = contador + 1;
}
```

Como assim? Vamos pensar.

Na primeira repetição, contador vai valer zero. Zero é menor que nove? Verdade. Então, zero receberá o acréscimo de um e se tornará um. Essa conta contador + 1 é sempre processada primeiro, como se estivesse entre parênteses, e depois ele vai fazer zero mais um igual a um, então vai guardar o valor um dentro de si.

Em seguida, voltamos ao início da repetição, com o contador valendo um. Um é menor que nove, então, o contador que vale receberá outro acréscimo de um, vai se tornar dois e vai guardar o novo valor dois nele mesmo, e assim por diante.

Utilizando o console  
Mas como sabemos que isso vai funcionar? Como vemos esse valor do contador sendo incrementado e modificado durante a execução desse while? Abaixo da linha contador = contador +1, podemos usar uma funcionalidade que ajuda a entender o nosso código em alguns momentos, principalmente dentro de funções que não conseguimos acessar no console.

Dentro do JavaScript, conseguimos acessar o console através da referência dele, que se chama console.

Dentro do JavaScript, existe uma palavra reservada chamada console, que é o console do DevTools. Acessando o interior desse console com o ponto, temos uma função chamada log(), que consegue mandar mensagens para o console do navegador de quem abrir essa página. Entre os parênteses,, podemos colocar o nome do contador e ele vai imprimir o contador várias vezes, até essa condição ser falsa.

```JavaScript
let contador = 0;

//enquanto
while (contador < 9) {
    listaDeTeclas[0].onclick = tocaSomPom;
    
    contador = contador + 1;
    
    console.log(contador);
}
```

Agora, sim, podemos salvar, porque temos uma comparação que pode se tornar falsa.

Após recarregar o navegador, veremos o índice de cada elemento na aba "Console".

0  
1  
2  
3  
4  
5  
6  
7  
8  
9  

Ao tocar na tecla "Pom" pela aplicação, ouviremos seu som. Contudo, nenhuma das outras possui som, porque falta um detalhe no código.

Voltando a ele, na linha listaDeTeclas[0].onclick = tocaSomPom; que exibe o índice de cada elemento, não pode ser sempre 0 nas 9 vezes. Precisamos que seja uma vez o número 0, na outra o número 1, depois o 2, o 3, e assim por diante.

O próprio contador tem esse número que vai de 0 a 9, até a condição ser falsa. Então, no lugar de 0, podemos escrever a referência contador, que vai guardar um número variável, um número que uma hora vai ter um valor, outra hora vai armazenar outro.

```JavaScript
//enquanto
while (contador < 9) {
    listaDeTeclas[contador].onclick = tocaSomPom;
    
    contador = contador + 1;
    
    console.log(contador);
}
```

Vamos salvar e retornar ao navegador para recarregá-la. Se clicarmos em qualquer tecla, veremos que todas estão tocando o mesmo som, porque estamos com a função tocaSomPom para todas.

Para as próximas aulas, precisamos descobrir como fazer uma função mais genérica que consiga descobrir qual é o som da tecla na qual estamos clicando.

Comparando duas referências
Antes de encerrar esse vídeo, vamos abordar um detalhe sobre a condição contador < 9 entre os parênteses do while, que compara o contador com o número 9. Sabemos que nossa lista tem 9 elementos, mas será que sempre vamos saber quantos elementos tem em uma lista? Nem sempre, certo?

Como mencionamos, podemos trabalhar com um teclado de 100 ou de 1.000 teclas. Pode ser um teclado dinâmico ou mesmo ter outro tipo de funcionalidade que não necessariamente musical.

Podemos acessar a aba "Console" do navegador e acessar a listaDeTeclas. Basta escrever seu nome e pressionar "Enter".

```JavaScript
listaDeTeclas
```

Com isso, podemos clicar nela listaDeTeclas para exibir seu interior, no qual, além de conferir o índice, podemos ver que existe uma propriedade ou atributo chamado length.

length: 9

Length, em inglês, significa tamanho, ou seja, o comprimento dessa lista que guarda o número 9. Ao invés de usarmos o número 9 dentro do while, vamos usar a listaDeTeclas e o atributo length, que aí, sim, esse atributo vai guardar o número 9 dinamicamente.

```JavaScript
//enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSomPom;
    
    contador = contador + 1;
    
    console.log(contador);
}
```

Dessa forma, estamos fazendo uma comparação entre duas referências que armazenam o número nelas. Dessa forma, nosso código fica mais legível, apesar de ficar um pouco maior em termos de palavras. Podemos fazer isso em vez de comparar números, dos quais nem sempre saberemos o significado dentro do código. Dessa forma, nosso código fica mais dinâmico.

Nos veremos no próximo vídeo para melhorarmos essa função que toca o som dos instrumentos musicais.

### Aula 4 - Por que usamos os while?

Assim como em outras linguagens de programação, o JavaScript também tem o while que é uma das formas de trabalhar com estruturas de repetição.

Com base nisso, como poderia ser justificado o uso de uma estrutura de repetição no projeto Alura MIDI?

Resposta:  
Usando o while como estrutura de repetição para auxiliar o acesso a cada elemento dentro da lista de teclas, podendo aplicar a rotina de associar uma função no atributo onclick de cada um destes elementos.

> Alternativa correta! O while é uma estrutura de repetição que foi necessária para trabalhar com a lista de teclas. Esta estrutura possibilita que uma variável de contador tenha seu valor incrementado a cada repetição, e que pode ser utilizado para acessar os indices de uma lista além de ser comparado com o tamanho de lista, formando a condição para a repetição cessar.

### Aula 4 - Funções com parâmetros - Vídeo 2

Transcrição  
No vídeo anterior, aprendemos como acessar cada elemento da nossa lista de forma otimizada, utilizando a estrutura de repetição while para aplicar uma rotina em cada elemento. No nosso caso, a rotina é acessar cada elemento, acessar o atributo onClick e atribuir uma função que vai tocar um som.

Porém, percebemos que, dessa forma, todas as teclas do Midi ficaram com o mesmo som, pois estamos atribuindo a função tocaSomPom() a todas elas. Nosso desafio atual é fazer uma função mais genérica que possa tocar o som de qualquer tecla.

Primeiramente, vamos criar uma função que tenha um nome mais genérico. Voltando ao VS Code, no arquivo main.js, vamos remover o comentário que inserimos anteriormente acima da função tocaSomPom().

Podemos começar a eliminar coisas que não vamos usar no arquivo. Na linha inicial da função tocaSomPom(), que possui a sua declaração, vamos trocar esse nome por outro mais genérico, que não está atribuído ao nome do som: TocaSom().

Dentro do bloco dessa função, onde tem o código que ela está armazenando para ser executado quando a chamarmos, temos a linha do document.querySelector() buscando o seletor da tecla "pom", ou seja, da tag de áudio que tem o ID #som_tecla_pom, e um .play().

Esse seletor também não pode estar fixo, ou seja, deve ser variável, já que o áudio será informado. Precisamos informar qual será a tag de áudio específica para recuperar o som de determinada tecla. Para isso, precisamos obter o seu ID.

Além disso, este seletor precisa ser informado à nossa função.

Quem chamar a função tocaSom() vai precisar passar o ID para que a ela consiga tocar o som do elemento de áudio. Portanto, vamos necessitar de um parâmetro.

Utilizando funções com parâmetros  
O parâmetro é algo que passamos para a função. O código da função depende do parâmetro para funcionar corretamente.

Muitas vezes, esse parâmetro pode ser opcional, mas no nosso caso, não é. Realmente precisamos desse parâmetro, ou seja, dessa informação, para a nossa função tocar o som corretamente.

Para declarar um parâmetro de uma função, basta adicioná-lo entre os parênteses da assinatura dessa função, ou seja, na linha que possui function, o nome da função e um par de parênteses.

No nosso caso, vamos precisar do ID da tag de áudio. Portanto, entre os parênteses, vamos criar um IdElementoAudio. Quanto mais informativos forem os nomes das nossas referências, sejam elas constantes, variáveis, funções ou parâmetros, melhor e mais fácil de entender o nosso código fica.

Chamamos isso de nomes significativos. É importante criar nomes que tenham sentido.

Vamos precisar desse parâmetro, ou seja, quem utilizar a função tocaSom() deve informar a essa função o ID do elemento de áudio.

Já que IdElementoAudio é um valor variável, podemos utilizá-lo imediatamente dentro da própria função, entre os parênteses do querySelector(). Como se trata de uma variável, ou seja, uma referência, não podemos colocá-lo entre aspas. Vamos digitar apenas idElementoAudio.

Podemos digitar uma parte desse nome e usar o autocomplete (autocompletar) do VS Code para ajudar a escrever corretamente.

```JavaScript
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
```

Com isso, temos uma função mais genérica no nosso código.

Para testá-la, temos que substituir o onClick = tocaSomPom dentro do while, agora vai ser tocaSom.

```JavaScript
//enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSom;
    // Código omitido
}
```

Vamos salvar o arquivo, retornar ao navegador e testar a nossa função tocaSom, utilizando os parâmetros. No nosso onClick, dentro do while, ainda não estamos informando os parâmetros, mas logo faremos isso. Primeiro, precisamos testar se o código que fizemos está correto.

Vamos recarregar a página no Chrome e limpar o console, pois estamos imprimindo o contador. Para isso, basta clicar no botão "Clear console" na barra superior deste e chamar a função tocaSom. Temos a referência, abriremos e fecharemos parênteses.

```JavaScript
tocaSom()
```

Ao colocar o cursor dentro dos parênteses, ele exibe uma caixa flutuante que nos diz qual é o parâmetro a informar, o idElementoAudio. Na linha abaixo, o console nos antecipa o erro que obteremos se não informarmos o parâmetro.

Ao pressionar Enter sem essa informação, ele vai informar que não consegue ler a propriedade play de algo que está nulo.

Uncaught TypeError: Cannot read properties of null (reading 'play')

at tocaSom (main.js:2)

at :1:1

Ou seja, no main.js o código document.charSelector(idElementoAudio) que possui o idElementoAudio que não foi passado, vai retornar um código nulo. Portanto, ele não consegue executar o play de algo que está nulo.

Vamos informar um id de um elemento de áudio que existe. Acessando a aba "Elements" do DevTools, vamos verificar as tags áudio e ver os ids delas.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <!-- ... -->
  </head>
  <body>flex
      <h1>Alura Midi</h1>
      <section class="teclado"> ... </section>
      <audio src="sounds/keyq.wav" id="som_tecla_pom"></audio>
      <audio src="sounds/keyw.wav" id="som_tecla_clap"></audio>
      <audio src="sounds/keye.wav" id="som_tecla_tim"></audio>
      <audio src="sounds/keya.wav" id="som_tecla_puff"></audio>
      <audio src="sounds/keys.wav" id="som_tecla_splash"></audio>
      <audio src="sounds/keyd.wav" id="som_tecla_toim"></audio>
      <audio src="sounds/keyz.wav" id="som_tecla_psh"></audio>
      <audio src="sounds/keyx.wav" id="som_tecla_tic"></audio>
      <audio src="sounds/keyc.wav" id="som_tecla_tom"></audio>
      <script src="main.js"></script>
  </body>
</html>
```

Já sabemos o som_tecla_pom. Vamos copiar um id diferenciado: o som_tecla_tick.

```JavaScript
som_tecla_tick
```

Vamos copiar, voltar à aba "Console" e escrever tocaSom, abrir parênteses e colar o id. Lembrando que esse valor tem que estar entre aspas, pois é um texto. Neste caso, vamos usar aspas simples.

As aspas devem ser passadas junto ao parâmetro. Além disso, como esse seletor é um atributo id, precisa começar com hashtag (o sinal #).

```JavaScript
tocaSom('#som_tecla_tick')
```

Ao pressionar Enter, ouviremos o som do "Tick". Ele ficou muito baixo, vamos repetir o processo com o "Tom" e o "Psh".

```JavaScript
tocaSom('#som_tecla_tom')
```

```JavaScript
tocaSom('#som_tecla_psh')
```

Ouvimos o com corretamente, portanto, a função já está correta e reproduzindo o som adequado de acordo com o id da tag de áudio.

Temos uma função mais genérica de tocar sons. A seguir, precisamos saber como utilizamos essa função de forma mais genérica, dentro do nosso main.js, no while. Pois se tentarmos executá-la agora, teremos alguns problemas no nosso código.

Vamos entender o que está acontecendo.

### Aula 4 - O que é parâmetro de uma função?

A função é o conjunto de instruções de código, que executa uma determinada tarefa, que é utilizada somente quando chamada/invocado, podendo receber parâmetros ou não.

Deste modo, o que são os parâmetros em uma função?

Resposta:  
Os parâmetros são os nomes que damos a valores que uma função pode receber em sua chamada, que podem ou não ter um valor padrão. Os parâmetros de uma função são como variáveis ficam disponíveis apenas no corpo da função.

> Alternativa correta! Os parâmetros servem para auxiliar em alguma lógica no código dentro de uma função. Por exemplo, uma função calculaMedia(), pode ter como parâmetros notaA e notaB, que serão os valores utilizados para serem calculados e retornar o valor da média.

### Aula 4 - Funções anônimas - Vídeo 3

Transcrição  
No vídeo anterior, aprendemos como fazer uma função mais genérica que possa executar qualquer tipo de som armazenado em uma tag `<audio>`, dado o seletor da tag `<audio>`. Fizemos a função tocaSom e conseguimos testá-la no console passando o ID daquelas tags `<audio>` e escutar o som de cada instrumento.

Porém, quando fomos clicar nas teclas do Alura Midi no navegador, obtivemos um erro no console dizendo que o querySelector falhou, pois o objeto PointerEvent não é um seletor válido.

Uncaught DOMException: Failed to execute 'querySelector' on 'Document': '[object PointerEvent]' is not a valid selector.

Isso é porque não informamos o seletor correto para nossa função, o parâmetro correto para nossa função, então o JavaScript tentou resolver com as informações que ele tinha disponível.

Ao conferir o while, no nosso main.js, onde temos a instrução do onclick atribuindo a função tocaSom, percebemos que não passamos o parâmetro dela.

Como vamos conseguir passar o parâmetro? Vamos testar. Adicionaremos os parênteses na função e passaremos um ID fixo, por exemplo, #som_tecla_pom entre aspas simples.

main.js:

```JavaScript
//enquanto
while (contador < listaDeTeclas.length) {
        listaDeTeclas[contador].onclick = tocaSom('#som_tecla_pom');
        // Código omitido…
}
```

Uncaught (in promise) DOMException: play() failed because the user didn't Interact with the document first.

Ao salvar o arquivo e recarregar o navegador, teremos aquele velho problema que a página não pode executar o play, porque a pessoa usuária ainda não interagiu com a página.

Ou seja, toda vez que colocamos os parênteses ao lado do nome de uma função, já a invocamos imediatamente, antes mesmo da pessoa usuária interagir com a página e isso é uma restrição, um bloqueio que o browser (navegador) faz.

Além disso, não é isso que queremos, não queremos que ela seja executada nesse momento que o while ainda está atribuindo e guardando essa função em cada click de cada tecla do Alura Midi.

Criando uma função anônima  
Então, precisamos de certa forma poder passar um parâmetro para essa função, para esse atributo onclick, sem executá-la imediatamente. E o JavaScript tem uma funcionalidade muito interessante, chamada funções anônimas, a qual utilizar no lugar da função tocaSom.

No onclick, vamos remover o tocaSom por enquanto, e vamos escrever uma função anônima, ou seja, uma função sem nome.

As funções sem nome só podem ser utilizadas em um contexto quando elas são o valor de algum atributo ou estão sendo armazenadas dentro de alguma referência constante ou variável.

Como estamos aguardando uma função, vamos escrever function dentro desse atributo onclick. E não precisamos colocar um nome nela, só abre e fecha parênteses e depois abre fecha chaves.

Dentro das chaves, vamos conseguir chamar a função tocaSom() com parênteses, porque na nossa atribuição da função anônima ao onclick, estamos declarando uma nova função. Quando criamos uma função, não a invocamos imediatamente, só criamos e declaramos que ela existe naquele contexto, naquele momento.

Para chamá-la, nesse caso, precisaremos fazer o clique naquele determinado botão.

```JavaScript
//enquanto
while (contador < listaDeTeclas.length) {
        listaDeTeclas[contador].onclick = function () {
        }

        // Código omitido…
}
```

Portanto, agora dentro da função anônima, vamos poder chamar a função tocaSom e aí colocar os parênteses e passar um determinado ID. Por exemplo, vamos colocar os parênteses e aspas simples #som_tecla_pom.

```JavaScript
//enquanto
while (contador < listaDeTeclas.length) {
        listaDeTeclas[contador].onclick = function () {
                tocaSom('#som_tecla_pom');
        }
        // Código omitido…
}
```

Vamos salvar o arquivo main.js, recarregar o Alura Midi e clicar em algumas teclas. O som é reproduzido, porém, todas as teclas ainda estão com o mesmo som.

Apesar da função tocaSom já estar preparada para receber um ID dinamicamente, o ID da nossa tecla ainda está fixo dentro do nosso código.

Como criar um ID dinamicamente? Como ter acesso ao ID das teclas áudio nesse momento do código? Será um desafio para o próximo vídeo!

### Aula 4 - Mais sobre funções anônimas

As Funções anônimas são ótimas ferramentas para escrever diferentes funções, porque oferecem flexibilidade e conveniência. Podemos ver alguns exemplos de funções anônimas no JavaScript e como elas diferem de funções nomeadas.

Primeiro vamos comparar com funções nomeadas:

Imagine que você tem uma função simples, chamada soma, para somar dois números:**

```JavaScript
function soma(a, b) {
    console.log(a + b);
};
```

Essa função de soma pode ser chamada em qualquer lugar do nosso código utilizando a seguinte sintaxe:

```JavaScript
soma(1, 2);
```

Agora, vamos dar uma olhada em como usar uma função anônima. Em JavaScript, você pode atribuir uma função a uma variável, sem precisar dar um nome a ela:

```JavaScript
const soma = function (a, b) {
    console.log(a + b);
};
```

Note que no exemplo acima, a função não tem nome como no primeiro exemplo. Daí o nome função anônima.

Quando funções anônimas são úteis?  
As funções anônimas são bem úteis quando queremos executar alguma coisa uma única vez ou em apenas um lugar. Veja o exemplo a seguir com a função nativa do JavaScript setTimeout():

```JavaScript
setTimeout(function() {
    console.log("Olá mundo!");
}, 1000);
```

A função setTimeout() executa outra função depois de um determinado tempo e ela precisa de dois argumentos, uma referência de uma função e um número inteiro. Neste nosso exemplo, não vamos usar a função de imprimir "Olá mundo!" em nenhum outro lugar, apenas dentro do setTimeout. Ou seja, quando a função setTimeout() for chamada, o JavaScript vai guardar a função anônima em memória, executar depois de um determinado tempo, e depois que a função terminar a execução ela é apagada.

Vamos fazer uma comparação com uma função nomeada:

```JavaScript
function imprime() {
    console.log("Olá mundo!");
};
setTimeout(imprime, 1000);
```

No exemplo acima, a função imprime() é guardada em memória e vai ficar até a aplicação/página for fechada. Nós também ocupamos o nome imprime, o que significa que não podemos criar outra função ou variável com esse mesmo nome.

Vamos ver outro caso em que funções anônimas são importantes. Veja o código abaixo:

```JavaScript
const umaMensagem = "Sou uma mensagem de Olá mundo!";

function imprime(mensagem) {
    console.log(mensagem);
};

setTimeout(imprime, 3000);
```

Neste caso, a função imprime() recebe um argumento, mas na função setTimeout() nós só podemos passar uma referência. Se tentarmos passar da seguinte forma setTimeout(imprime(umaMensagem), 3000), a função imprime() é chamada instantaneamente ao invés de ser chamada 3 segundos depois.

Vamos ver como ficaria o código com uma função anônima:

```JavaScript
const umaMensagem = "Sou uma mensagem de Olá mundo!";

function imprime(mensagem) {
    console.log(mensagem);
};

setTimeout(function () {imprime(umaMensagem)}, 3000);
```

No código acima, agora passamos uma referência de uma função que vai executar a função imprime(), e essa função anônima só vai existir para servir como referência e depois que a função setTimeout() for executada ela é apagada da memória.

Espero que isso tenha ajudado a entender melhor as funções anônimas e por que elas são úteis!

### Aula 4 - Textos dinâmicos - Vídeo 4

Transcrição  
Até o momento, descobrimos como fazer uma função receber um parâmetro dinamicamente para que executasse sua funcionalidade de forma dinâmica.

No nosso caso, a função tocaSom() está recebendo o ID de um elemento que será buscado pelo querySelector e, então, reproduzir o seu som através da função play().

```JavaScript
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = function () {
        tocaSom("#som_tecla_pom");
    }

    contador = contador + 1;

    console.log(contador);
}
```

A função tocaSom() está sendo utilizada dentro do nosso while(), que acessa cada tecla do nosso Alura Midi utilizando a variável que criamos para contar as repetições e, então, acessar o índice. Elas vão conter um índice que vai acessar determinado elemento da lista de teclas.

Portanto, a cada elemento, vamos acessar o onClick e atribuir uma função anônima que chamará, por sua vez, a função tocaSom(). Porém, os parâmetros que estamos passando para a função tocaSom() ainda estão fixos, porque escrevemos o texto fixamente.

Sabemos que essa última parte do nosso parâmetro — a parte do nome do instrumento, do nome do som — deve ser dinâmica. Se acessarmos o arquivo index.html e verificarmos as tags audio, notaremos a existência de um padrão para os IDs.

```html
<audio src="sounds/keyw.wav" id="som_tecla_pom"></audio>
<audio src="sounds/keye.wav" id="som_tecla_clap"></audio>
<audio src="sounds/keya.wav" id="som_tecla_puff"></audio>
<audio src="sounds/keys.wav" id="som_tecla_splash"></audio>
<audio src="sounds/keyd.wav" id="som_tecla_tim"></audio>
<audio src="sounds/keyz.wav" id="som_tecla_psh"></audio>
<audio src="sounds/keyx.wav" id="som_tecla_tic"></audio>
<audio src="sounds/keyc.wav" id="som_tecla_tom"></audio>

<script src="main.js"></script>
```

Todos começam com som_tecla_pom. Fazendo só a última parte ser diferente a cada tag audio: pom; clap; tim; puff; etc. Nos botões, podemos perceber que temos uma parte dessa informação.

```html
<h1>Alura Midi</h1>

<section class="teclado">
    <button class="tecla tecla_pom">Pom</button>
    <button class="tecla tecla_clap">Clap</button>
    <button class="tecla tecla_tim">Tim</button>

    <button class="tecla tecla_puff">Puff</button>
    <button class="tecla tecla_splash">Splash</button>
    <button class="tecla tecla_toim">Toim</button>

    <button class="tecla tecla_psh">Psh</button>
    <button class="tecla tecla_tic">Tic</button>
    <button class="tecla tecla_tom">Tom</button>
</section>
```

Além da classe tecla, cada botão tem uma classe chamada tecla seguida do nome do som do instrumento: pom, clap, tim, etc. De volta ao main.js, dentro do while(), não temos acesso à tag audio, porém, temos acesso a um elemento button. Dentro desse elemento button - através da sua classe - podemos acessar qual é o instrumento em questão que está sendo clicado.

Então, é a partir dessas classes que estão dentro dos elementos button que vamos conseguir montar dinamicamente o texto, já que o texto é um tipo de dado dinâmico. Podemos escrever do jeito que precisarmos.

Escrevendo texto dinâmico  
Vamos usar o console do navegador. Estamos no Chrome, limparemos o console, acessaremos a lista de teclas e um índice qualquer. Por exemplo, o índice 0, que é o da tecla "pom".

```JavaScript
listaDeTeclas[]
```

`<button class="tecla tecla_pom">`Pom

Ao apertarmos "Enter", o botão é retornado. Agora, vamos acessar um atributo que, quando colocamos o ponto na lista de teclas — colchete, zero, ponto — depois dos colchetes, conseguimos entrar nesse elemento e visualizar todos os atributos e funcionalidades que estão disponíveis para esse ele, como já temos feito.

E um desses atributos, assim como o onclick, o class também é um atributo, e disponibilizado da forma mais organizada pelo classList.

```JavaScript
listaDeTeclas[0].classList
```

O próprio nome, classList, sugere que o retorno será de uma lista, que é um tipo de dado que também já estamos aprendendo a utilizar. Se dermos um "enter", ele vai nos retornar com a anotação que também já estamos começando a conhecer melhor, que é a de colchetes, representando uma lista.

Retorno:

```JavaScript
DOMTokenList(2) ['tecla', 'tecla_pom', value: 'tecla tecla_pom']
0: "tecla"
1: "tecla_pom"
length: 2
value: "tecla tecla_pom"
// [[Prototype]]: DOMTokenList
```

Nas listas, temos o índice. No nosso caso, em uma lista de classes, temos o índice zero e o valor armazenado é a classe. A classe é simplesmente um texto. Portanto, está sinalizada por aspas. No índice 1, também temos a segunda classe, totalizando uma lista de dois itens. Lembrando que os índices sempre começam com zero.

Portanto, se quisermos acessar a segunda classe dessa lista, temos que usar a anotação de colchetes com índice 1:

```JavaScript
listaDeTeclas[0].classList[1]
```

'tecla_pom'

Assim, vamos conseguir acessar a segunda classe da nossa lista de classes. Esse dado virá do while(). Então, vamos voltar no main.js e passar a nossa lista de teclas. Usaremos o contador que está armazenando o valor do nosso índice.

```JavaScript
// Código omitido.
// enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].classList[1]
        
    listaDeTeclas[contador].onclick = function () {
        tocaSom("#som_tecla_pom");
    }

    contador = contador + 1;

    console.log(contador);
}
```

Sabemos que a lista com a instrução (por exemplo, tecla_pom) será retornada. E podemos, inclusive, utilizar o console.log para verificar se realmente essa informação que colocamos aqui está correta.

```JavaScript
// Código omitido.
// enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].classList[1]
     
     console.log()
    
    listaDeTeclas[contador].onclick = function () {
        tocaSom("#som_tecla_pom");
    }

    contador = contador + 1;

    console.log(contador);
}
```

Para facilitar o entendimento do nosso código, vamos armazenar a listaDeTeclas[contador].classList[1] dentro de uma referência constante. Então, vamos declarar uma constante que vai ter, por exemplo, o instrumento.

Portanto, instrumento é o nome da nossa constante. Ela vai armazenar a instrução que obterá o nome da segunda classe do elemento listaDeTeclas[contador].

```JavaScript
// Código omitido.
// enquanto
while (contador < listaDeTeclas.length) {

    const instrumento = listaDeTeclas[contador].classList[1]
     
     console.log()
    
    listaDeTeclas[contador].onclick = function () {
        tocaSom("#som_tecla_pom");
    }

    contador = contador + 1;

    console.log(contador);
}
```

Então, vamos dar um console.log na constante instrumento.

```JavaScript
// Código omitido.

// enquanto
while (contador < listaDeTeclas.length) {

    const instrumento = listaDeTeclas[contador].classList[1]
     
     console.log(instrumento);
   
   console.log()
    
    listaDeTeclas[contador].onclick = function () {
        tocaSom("#som_tecla_pom");
    }

    contador = contador + 1;

    console.log(contador);
}
```

No navegador, vamos recarregar a nossa página e notaremos que, no console, estamos recebendo o console tanto do nosso instrumento como também do valor do contador que mantivemos. Então, na repetição 1, temos a tecla_pom. Na repetição 2, temos a tecla_clap. Na repetição 3, tecla_tim. Na repetição 4, tecla_puff. E assim por diante, vai até a repetição 9, que encerra o nosso while().

Voltando no main.js, podemos perceber que há uma repetição de código no nosso while(), que é a listaDeTeclas[contador]. Estamos utilizando-a tanto para acessar o classList, quanto para fazer um onclick. Essa repetição de código não é recomendável e podemos atribuí-la para uma constante que tenha um nome mais significativo.

Afinal, temos uma listaDeTeclas[contador], mas não explicitamos exatamente o que ela guarda internamente, isto é, "por baixo dos panos". Então, quando acessamos um elemento de uma lista de teclas, o que temos? Uma tecla. Então, podemos criar uma constante, ou seja, uma referência tecla, que vai conter o elemento do momento da lista de teclas.

Então, passamos o índice que está dentro do contador e podemos substituir esse código listaDeTeclas[contador] por tecla, deixando o nosso código um pouco mais limpo.

```JavaScript
// Código omitido.
// enquanto
while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento);

    tecla.onclick = function () {
        tocaSom("#som_tecla_pom");
    }

    contador = contador + 1;

    console.log(contador);
}
```

Agora que já temos a tecla e o instrumento, falta só o ID correto. Se tivéssemos uma string, seria algo como '#som_{} (aspas, hashtag, som) e o restante do código, já temos. Está dentro doinstrumento. Então, vamos representar como chaves a parte que é dinâmica dentro da nossa string.

É possível fazer isso com JavaScript e é muito simples. Vamos criar uma nova referência constante que vai guardar o ID da tag audio. Vamos chamá-la de idAudio. Ela vai receber a nossa string com um pedaço dinâmico.

Porém, para fazermos isso, não podemos utilizar a string comum, com aspas simples ou aspas duplas. Vamos ter que substituir pela crase. E a crase é uma outra forma de criar strings dentro do JavaScript. Então, vamos começar a nossa string com crase e finalizá-la com crase.

```JavaScript
let contador = 0;
// enquanto
while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento);

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom("#som_tecla_pom");
    }

    contador = contador + 1;

    console.log(contador);
}
```

Agora, tudo que é variável dentro da nossa string, precisamos envolver entre chaves, porém, iniciando com um cifrão antes da abertura das chaves. Note que até a cor do highlight do VS Code muda, sinalizando que ${instrumento} é um pedaço de código.

O "cifrão-chaves", isto é, ${}, faz uma abertura para o código JavaScript de dentro da string. Podemos acessar variáveis, métodos, fazer contas aí dentro. É incrível! E o nome desse recurso que utilizamos da linguagem JavaScript é template string.

Agora, vamos fazer o console.log da nossa referência idAudio para verificarmos como ficou.

```JavaScript
let contador = 0;
// enquanto
while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento);

    const idAudio = `#som_${instrumento}`;
     console.log(idAudio);

    tecla.onclick = function () {
        tocaSom("#som_tecla_pom");
    }

    contador = contador + 1;

    console.log(contador);
}
```

Vamos salvar nosso main.js e recarregar o navegador. Já temos os IDs dinamicamente: #som_tecla_pom; #som_tecla_clap, dentre outros. Vamos conferir também o Firefox. É sempre importante verificar nos dois navegadores se há algum problema. Está tudo correto no Firefox também.

Agora, dentro da nossa função, onde está o tocaSom(), vamos retirar o parâmetro fixo, '#som_tecla_pom', que está dentro da função anônima, tocaSom(), e passar a idAudio, string que está sendo montada a cada iteração do while().

```JavaScript
let contador = 0;
// enquanto
while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento);

    const idAudio = `#som_${instrumento}`;
     console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    console.log(contador);
}
```

Vamos salvar e recarregar. No Firefox, executaremos os sons de cada um dos nossos instrumentos. Vamos clicar no "Pom". O som saiu. E no "Clap". Também saiu. No "Tim". Também funcionou. No "Splash". Enfim, em todos. Todos deram certo.

Finalmente, nossa Alura Midi está funcional, com um código super inteligente e reaproveitado. Podemos tirar os "console.logs" para que não poluam o console da aplicação. Na verdade, podemos tanto apagar, quanto deixá-los comentados.

A principal funcionalidade do Alura Midi está implementada e, a partir dos próximos vídeos, vamos trabalhar ainda mais nas melhorias desse código, em como deixá-lo ainda mais profissional, conhecer mais recursos da linguagem e, principalmente, em saber como trabalhamos na navegação via teclado.

### Aula 4 - Repetição otimizada com For - Vídeo 5

Transcrição  
No nosso último vídeo, conseguimos finalmente terminar de implementar as funcionalidades completas do Alura Midi. Ao clicar em cada tecla do teclado do nosso Midi, o som do instrumento correspondente é reproduzido.

No código, alcançamos um código inteligente e automatizado, com poucas ou nenhuma repetição, e que espelha essa funcionalidade para todas as teclas.

```JavaScript
// Código omitido.

// enquanto
while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    // Template string 
    const idAudio = `#som_${instrumento}`;

    // console.log(idAudio); 
        
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;
    
    //console.log(contador);

}
```

Ainda há muitas melhorias que podemos fazer no código. Neste vídeo, vamos melhorar a forma de percorrer cada elemento que está dentro de uma lista. Utilizamos a estrutura de repetição while(), que depende de uma condição ser verdadeira ou falsa para determinar se a rotina dentro das chaves do while() será aplicada.

Imagine que podemos expandir o Alura Midi para além de um teclado digital, podendo oferecer outros instrumentos para as pessoas usuárias, como um bongo, um piano, uma harpa, etc.

Portanto, o while() dependeu de um fator externo para funcionar, que é o contador. Tivemos que criar uma variável chamada contador, que é verificada a cada repetição do while() e tem seu valor modificado a cada repetição da nossa rotina.

Se tivéssemos outros instrumentos com botões e fôssemos reproduzir outros while(), teríamos que declarar outros contadores e geraríamos repetições em nosso código. Teríamos que criar, por exemplo, um let contador2, contadorBongo ou contadorPiano, etc. Essa variável contador se tornaria repetitiva.

O JavaScript oferece outras estruturas na linguagem que podem resolver esse problema de forma mais otimizada. A estrutura que vamos utilizar no lugar do while() se chama for() e significa "para".

Conhecendo o for  
O for() é uma estrutura de laço de repetição que também vai fazer o mesmo que o while(): enquanto uma condição for verdadeira, ele vai repetir a rotina. A vantagem em relação ao while() é que o contador pode ser declarado dentro dos parênteses do for().

Substituiremos a palavra while() por for() e dentro dos parênteses faremos a declaração do contador: let contador = 0;. Depois do ponto e vírgula, temos a condição. Portanto, não precisamos mais ter a variável let declarada fora do nosso laço de repetição.

```JavaScript
// Código omitido. 
for (let contador = 0; contador < listaDeTeclas.length;) {
// Código omitido. 
```

A terceira vantagem do for() é que a incrementação que estamos fazendo no contador, que é "contador recebe contador mais 1" pode ser declarada nesse terceiro parâmetro do for() com uma sintaxe muito enxuta: contador++.

```JavaScript
// Código omitido. 
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
// Código omitido. 
```

Isso vai fazer exatamente o que a linha de código na linha 21 está fazendo:

```JavaScript
contador = contador + 1
```

Que é pegar o valor atual da variável contador, incrementar mais um e reatribuir esse novo valor. Sendo assim, não precisamos mais colocar esse código da linha 21. Vamos reorganizar nosso código e usar o console.log apenas para verificar o contador.

```JavaScript
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    // template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    console.log(contador);
}
```

Salvamos o nosso main.js, recarregamos o Chrome e o Firefox e verificamos que os botões ainda estão reproduzindo o som. Então, removeremos o console.log(contador) para o nosso código ficar mais limpo. É sempre bom deixar uma nova linha ao fim do código e não encerrar o final do arquivo com um final de código.

Isso é uma boa prática, pois se o nosso código vier a sofrer algum tipo de transformação por ferramentas que unem o código, que ofuscam o código, isso pode ser útil. É algo que vocês podem conhecer em cursos mais avançados.

Agora, o nosso código está um pouco mais bonito e funcional, pronto para receber novos instrumentos, caso queiramos. Até agora, realizamos uma melhoria em nosso código usando o for(). Agora, vamos continuar o nosso desenvolvimento do Alura Midi, fazendo algumas melhorias de acessibilidade e usabilidade, descobrindo como adicionar funcionalidades e interações usando as teclas do teclado.

### Aula 4 - Faça como eu fiz: Utilizando o For

Como vimos nesta aula, usamos a estrutura de repetição for, para percorrer uma lista de forma mais otimizada, onde em sua declaração criamos a variável contadora da repetição, a condição de interrupção das repetições e a condição de incrementação da variável contadora.

A partir deste código CodePen, faça:

Um script que percorra a lista de teclas do AluraFone, e ao clicar em qualquer tecla do teclado, imprima o valor no campo Digite seu telefone.
Como fazer:

- Abra o link do CodePen;
- Abra a aba JS e escreva seu código dentro dela;

Opinião do instrutor

Gabarito:

```JavaScript
const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  
  const tecla = listaDeTeclas[indice];
  
  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  }
}
```

Primeiro, você precisa criar uma referência para receber a lista com todas as teclas do AluraFone e uma outra para capturar o input Digite seu telefone, que no caso do código foi const listaDeTeclas e const inputTel, respectivamente.

O segundo passo é criar o laço de repetição for, que vai percorrer a lista de teclas, por esta razão, a condição do for é indice < listaDeTeclas.length, ou seja, enquanto o indice for menor que o tamanho de listaDeTeclas, executa um comando.

Dentro do for, é necessário que se crie uma referência constante const tecla para que a cada iteração, receba o valor correspondente da tecla listaDeTeclas[indice].

Após isto, adicione no onclick uma função anônima que receberá o valor do campo Digite seu telefone inputTel.value, e atribua a ela a soma entre o valor do campo Digite seu telefone e o valor da tecla clicada tecla.value, ficando inputTel.value = inputTel.value + tecla.value.

### Aula 4 - Lista de exercícios

Vamos praticar o que aprendemos até aqui?

1) Incrementando o contador no console  
Imagine que você está desenvolvendo um aplicativo web interativo e deseja implementar uma funcionalidade de contagem. Cada vez que um botão é clicado, um contador deve ser incrementado em 1, e o valor atualizado do contador deve ser exibido no console do navegador. Sua tarefa é criar esta funcionalidade utilizando JavaScript.

2) Criando um array de botões  
Crie uma variável que guarde a lista com todos os botões da página, depois printe essa lista no console do seu navegador. Para fazer essas ações, utilize um método do JavaScript que recebe como parâmetro a mesma classe de todos os botões.

3) Trabalhando com arrays para incrementar um contador  
Você está desenvolvendo um aplicativo de teclado MIDI virtual em JavaScript e já realizou o desafio de selecionar todos os botões de um array: utilizar um método para selecionar todos os botões de uma só vez no console. Sua tarefa é refatorar a função criada anteriormente para que ela seja capaz de incrementar o contador em 1, e o valor atualizado do contador deve ser exibido no console do navegador, sempre que o quarto elemento do array de botões for clicado.

4) Utilizando método while para aplicar contador  
No aplicativo de teclado MIDI virtual, você se deparou com um novo desafio: Utilize o método while para aplicar a funcionalidade de incrementar um contador em mais um, e o valor atualizado do contador deve ser exibido no console do navegador. Agora, isso deve acontecer cada vez que algum botão da lista de botões for clicado.

5) Utilizando método for para aplicar contador  
Chegaram nova demandas no aplicativo de teclado MIDI virtual: Refatore o código realizado anteriormente nesta lista de exercícios, utilizando o método for do JavaScript para realizar a mesma tarefa, incrementar o contador em mais um, e exibir o resultado no console do navegador, cada vez que algum botão da lista de botões for clicado.

Opinião do instrutor

Veja as soluções dos exercícios. Lembre-se de que há várias maneiras de solucionar um mesmo problema (e tudo bem caso seu código tenha saído diferente). O importante é que ele esteja organizado, bem escrito e funcione.

1) Incrementando o contador no console

- Adicione um botão HTML ao seu documento;
- Crie uma variável contador para manter o registro da contagem;
- Crie uma função que incrementa o contador e exibe o valor no console, exemplo incrementarContador;
- Adicione um ouvinte de evento ao botão para chamar a função incrementarContador ao ser clicado.  
Código HTML:

```html
        <button class="tecla tecla_pom">Pom</button>
```

Código JavaScript:

```JavaScript
let contador = 0;

function incrementarContador() {
  contador = contador + 1;
  console.log("Contador: " + contador);
}

const tecla = document.querySelector(".tecla_pom")
tecla.onclick = incrementarContador;
```

2) Criando um array de botões

- Utilize o método querySelectorAll para selecionar uma lista de elementos com a mesma classe;
- Crie uma variável e guarde nela essa lista;
- Printe no console a lista de botões através da variável.
- Veja como ficaria o código JavaScript:

```JavaScript
const listaDeTeclas = document.querySelectorAll('.tecla');
console.log(listaDeTeclas)
```

3) Trabalhando com arrays para incrementar um contador

- Defina a posição do quarto elemento do array, e aplique entre colchetes. Lembre-se de que a posição de um array se conta a partir de 0:

```JavaScript
let contador = 0;

const listaDeTeclas = document.querySelectorAll('.tecla')

function incrementarContador() {
  contador = contador + 1;
  console.log("Contador: " + contador);
}

listaDeTeclas[3].onclick = incrementarContador;
```

4) Utilizando método while para aplicar contador

- Utilize o método while para incrementar em + 1 o contador;
- Printe o resultado de cada iteração no console do navegador:

```JavaScript
let contador = 0;

const listaDeTeclas = document.querySelectorAll('.tecla');

function incrementarContador() {
  contador = contador + 1;
  console.log("Contador: " + contador);
}

let i = 0;

while (i < listaDeTeclas.length) {
  listaDeTeclas[i].onclick = incrementarContador;
  i++;
}
```

5) Utilizando método for para aplicar contador

- Utilize o método for para incrementar em + 1 o contador;
- Printe o resultado de cada iteração no console do navegador:

```JavaScript
let contador = 0;

const listaDeTeclas = document.querySelectorAll('.tecla');

function incrementarContador() {
  contador = contador + 1;
  console.log("Contador: " + contador);
}

for (let i = 0; i < listaDeTeclas.length; i++) {
  listaDeTeclas[i].onclick = incrementarContador;
}
```

Muito bom! Você chegou ao fim de mais uma lista de exercícios!

## Aula 5 - Eventos e Lógica

### Aula 5 - Eventos do teclado - Vídeo 1

Transcrição
Agora, nosso Midi está quase pronto. Se clicarmos com o mouse nas teclas, já conseguimos ouvir todos os instrumentos. Então, o que falta para a Alura Midi ficar sensacional?

Como utilizamos a tag button para cada botão do Alura Midi, ele já tem uma navegação via teclado por padrão. Se no site, pressionarmos a tecla "Tab" repare que uma luz amarela, que já foi adicionada pelo CSS, vai aparecer mostrando qual é o foco na navegação de tab da aplicação.

Se pressionarmos a tecla "Enter" ou a "Barra de espaço", o som será reproduzir oque foi programado para o evento de clique do mouse. Porém, quando pressionamos o "Enter", o sm é reproduzido, mas o fundo do botão não fica vermelho, não dá a impressão que o botão foi pressionado visualmente. Porém, isso acontece quando pressionamos "Espaço".

Fizemos essa análise no Chrome, testaremos agora no Firefox. Repare que ao testar o "Enter" e a "Barra de espaço", nenhum deles muda de cor indicando que foram pressionados. Em ambos os navegadores, quando clicamos com o mouse, o botão fica vermelho. Assim, percebemos que a navegação via teclado do Midi está inconsistente e precisamos arrumar.

Aprimorando a Navegação no Alura Midi  
Para começar, precisamos analisar nosso CSS. Para isso, abrimos o VS Code e o arquivo estilos.css. Na linha 49, notamos que já foram programados os estilos para o estado active do button, que é quando o botão está sendo pressionado. Ele é representado por essa pseudo classe active.

Porém, também foi destinada uma classe ativa para representar esse mesmo conjunto de estilos. Teremos que fazer a inserção dessa classe ativa pelo JavaScript nos botões que forem pressionador, por meio do teclado, com o Enter e com o espaço.

Se voltarmos no navegador e acessarmos a área de inspecionar, podemos abrir um botão e testar na aba Elements, adicionando uma classe manualmente dentro do atributo class. Se escrevermos ativa após tecla_tim, o botão já fica vermelho. Esses são os estilos de quando o botão está sendo pressionado.

Agora, precisamos saber como fazer isso com JavaScript. Vamos recarregar a página para remover essa classe ativa que adicionamos e vamos para o console para testar e tentar descobrir como fazemos isso via código.

Já sabemos como acessar um elemento que está no nosso teclado do Midi. Criamos uma referência, listaDeTeclas, com todas as teclas. Para acessar um elemento, usamos a notação de colchete e o número do índice, nesse caso será 2 para selecionar o botão Tim.

listaDeTeclas[2]

Ao pressionar "Enter" notamos que realmente é referência ao botão. Se digitarmos ponto . temos acesso a todos os atributos e funcionalidades de um elemento HTML. Já conhecemos o atributo classList, que armazena uma lista de todas as classes que usam aquele elemento. Vimos que existe a classe tecla e a classe tecla_tim.

Porém, é uma lista. Precisamos adicionar uma nova classe. Portanto, se colocarmos o ponto depois de classList, conseguimos ver também uma série de funcionalidades disponíveis para um classList.

Podemos notar que tem muitas coisas, inclusive algumas que já vimos em outros tipos de lista, como, por exemplo, o length, que é o tamanho.

Queremos adicionar, portanto, existe a função add(), que em português significa adicionar. Sabemos que é uma função, porque na tela aparece o símbolo f.

Nos parênteses, passamos uma string, ou seja, um texto. Então, entre de aspas simples, passamos o nome da classe que queremos adicionar, nesse caso ativa.

listaDeTeclas[2].classList.add('ativa')

Ao executarmos esse código, a tecla "Tim" fica vermelho. Agora, temos que reproduzir esse código no nosso main.js. Além disso, esse código de adicionar a tecla ativa, tem que ser no momento em que pressionamos uma tecla do teclado. Diferente do que trabalhamos, que foi com o clique do mouse.

Agora, voltamos para o main.js. Dentro do for, onde já temos eventos de clique destinado, na linha 18, adicionaremos mais um código. Chamamos a tecla do nosso loop, que está sendo acessado pelo for, a nossa lista de elementos. Em seguida, adicionamos ponto . para sabermos quais são as outras opções que existem de eventos.

Se passarmos .on conseguimos acessar vários tipos de eventos. O evento que queremos é um evento de teclado chamado onkeydown, então quando a tecla estiver abaixada, ou seja, pressionada.

Na mesma linha, adicionamos o sinal de igual = e atribuímos função anônima, assim como fizemos com o toca som, então, function () {}.

Nas chaves, colocaremos o código que testamos no Console, então, voltamos ao navegador e copiamos. Voltamos para o arquivo e colamos, ficando da seguinte forma:

```JavaScript
//Código omitido
tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }
```

Salvamos, agora testaremos no navegador. Recarregamos a página e começamos a navegar com o teclado. Ao pressionar "Enter" na tecla "Pom", ela fica vermelha. Testamos com "Espaço" e o mesmo acontece, assim como a tecla "Tab".

Porém, repare que o som não está sendo reproduzido e agora, todas as teclas estão ficando vermelhas, temos um problema. Quando começamos a trabalhar com inserção de classes no Java Script, precisamos isso é algo que precisamos prever.

Se na inspeção, abrirmos a aba Elements, notamos que todos os botões estão com a classe ativainserida via Java Script. Se pressionarmos "Tab", conseguimos notar visualmente a classe sendo adicionada.

Tudo que colocamos no JavaScript não vai automaticamente sumir. Ele é uma linguagem de programação que só faz o que pedimos para fazer e nesse caso, só pedimos para adicionar classes, não definimos o momento de remover.

Sendo assim, teremos que descobrir como remover uma classe de um elemento com JavaScript.

Te esperamos no vídeo seguinte!

### Aula 5 - Adicionando e removendo classes - Vídeo 2

Transcrição  
Voltaremos ao console para realizar o mesmo exercício. Acessaremos a lista de teclas, escolheremos o índice 4, que vai até a tecla splash no meio. Acessaremos o classList dela e, em seguida, adicionamos ponto .classlis. Feito isso, descobrimos que existe uma função chamada remove().

Como estamos acessando o classList, esse remove só poderia significar remover uma classe dessa lista de classes. Então, nos parênteses, passamos entre aspas simples o nome da classe que queremos remover.

Lembrando que, como já estamos trabalhando com classes, não há necessidade de colocar o ponto no início, pois já são classes e não estamos trabalhando com seletores, mas sim classes.

Após, escrevemos o nome da classe que queremos remover, ativa. Ao pressionar "Enter", a tecla "Splash" volta para a cor branca. Funcionou.

listaDeTeclas[4].classList.remove('ativa')

Agora, a mesma lógica que usamos para adicionar, teremos que usar para remover. Então, qual é o momento que identificamos, na ação do teclado, que precisamos remover essa classe?

Podemos usar outro evento do teclado, que é quando a pessoa usuária solta a tecla. Então, acessamos o arquivo main.js e criaremos um novo evento com uma nova função.

Na linha 22, escrevemos tecla.onkeyup, se é justamente quando soltamos a tecla. Passamos a function () {}. Dentro das chaves, na linha seguinte, escrevemos teclas.classList.remove() e nos parênteses, entre aspas simples, passamos ativa.

```JavaScript
//Código omitido
tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
}
```

Salvamos e recarregamos o navegador. Pressionamos a "Barra de espaço" a tecla "Pom", feito isso o som é reproduzido, a tecla fica vermelha quando pressionamos e volta para a cor branca quando soltamos.

Mas agora temos um problema. Se usarmos a tecla "Tab", as teclas vão mudar para cor vermelha, sem voltar para a branca e sem reproduzir o som. Então, temos mais um problema para resolver.

O desafio que temos agora é toda tecla pressionada está sendo válida. Então, se pressionarmos a tecla "H", "J", não reproduz o som e fica com a cor vermelha. Isso acontece, pois não é o comportamento padrão dos buttons, fazer o mesmo que um clique, como o Enter e o espaço fazem.

Porém, como abrimos as opções, qualquer tecla que for pressionada, coloca a tecla ativa, deixamos nossa lógica muito ampla. Sendo assim precisamos limitar, definir quando pressiona uma tecla, mas essa tecla tem que ser "Enter" ou "Barra de espaço", deve colocar a classe ativa.

Descobriremos como fazer isso no vídeo seguinte!

### Aula 5 - Faça como eu fiz: Modificando estilos com JavaScript

Como vimos nesta aula, é possível modificar a classe de um elemento com o JavaScript de uma forma simples.

A partir deste código [CodePen](https://codepen.io/vanessametonini/pen/eYEVEqR), faça:

Um JavaScript que percorra a lista de teclas do AluraFone, e ao clicar na tecla Enter ou Espaço, adicione a classe ativa no elemento e também resolva o momento de retirar a classe ativa do elemento.

Como fazer:

- Abra o link do CodePen;
- Abra a aba JS e escreva seu código dentro dela;

Opinião do instrutor

Gabarito:

```JavaScript
const listaDeTeclas = document.querySelectorAll('input[type=button]');

for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  const tecla = listaDeTeclas[indice];

  tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") {
    tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}
```

O primeiro passo é criar uma referência (const listaDeTeclas) para poder receber a lista com todas as teclas do Alura Fone, ficando const listaDeTeclas = document.querySelectorAll('input[type=button]').

O segundo passo é criar o laço de repetição for, que vai percorrer a lista de teclas, por esta razão, a condição do for é indice < listaDeTeclas.length, ou seja, enquanto o indice for menor que o tamanho de listaDeTeclas, executa um comando.

Dentro do for, para facilitar o entendimento, crie uma referência constante const tecla para que a cada iteração , receba o valor correspondente da tecla listaDeTeclas[indice], ficando const tecla = listaDeTeclas.

Após isto, adicione no evento de ao apertar uma tecla do teclado onkeydown uma função anônima que recebe como parâmetro um evento. Dentro do escopo da função, vamos criar um if com a condição: se evento.code (o código do evento onkeydown) for igual a "Enter" ou for igual a "Space", adicione a classe ativa no elemento tecla, ficando então assim tecla.classList.add(‘ativa’);

Como foi resolvido a adição da classe ativa a partir do clique da tecla Enter ou Space, é necessário remover essa classe logo após deixamos de pressionar a tecla. Para isso, você precisa adicionar na tecla o evento de onkeyup (quando o usuário solta a tecla) uma função anônima, e dentro do escopo desta função, vamos remover a classe ativa da classe, ficando assim: tecla.classList.remove(‘ativa’);

### Aula 5 - Condições no código - Vídeo 3

Transcrição  
Até o momento conseguimos adicionar a classe ativa utilizando teclas do nosso teclado. Ao navegar com o teclado no Alura Midi com o "Tab" e apertar o "Enter" do teclado, conseguimos acionar o som e também acionar o estado de tecla ativa, que é representado por essa cor vermelha e que já estava sendo representado com o clique do mouse pelo comportamento padrão do CSS, que aciona aquele estado active.

Porém, com o teclado isso não ocorria, portanto, foi necessário adicionar via JavaScript a classe ativa para que houvesse a consistência de estilos quando a pessoa usuária estivesse navegando via teclado e mouse.

Neste momento, qualquer tecla do teclado é capaz de adicionar essa classe ativa. Agora, precisamos resolver qual é o momento certo de adicionar a classe ativa, pois não deve ser ao pressionar qualquer tecla do teclado e, sim, apenas se for pressionado a tecla "Enter" ou a tecla "Barra de espaço" - que são as que já são programadas para acionar o som nativamente pelo navegador e reproduzir o som dos instrumentos.

Adicionando a condição if  
Para começarmos a solucionar esse problema, vamos voltar no main.js, no Visual Studio Code. Dentro do for, onde temos os eventos do teclado, especificamente no onkeydown, que é quando adicionamos a classe ativa, precisamos acionar esse código tecla.classList.add() de acordo com uma dada condição.

E qual é a condição? É se a "Barra de espaço" ou a tecla "Enter" do teclado do computador forem pressionada - e não a qualquer tecla, que é o que está acontecendo atualmente.

main.js:

```JavaScript
//Código omitido
tecla.onkeydown = function () {
        tecla.classList.add('ativa');
}
```

Atualmente, não estamos delimitando qual tecla do teclado. Apenas estamos dizendo para o JavaScript executar este código que está na função atrelada para o onkeydown para qualquer tecla que for apertada.

No nosso caso temos, uma condição para esse trecho de código a ser executado. E no JavaScript, assim como em qualquer linguagem de programação, temos uma estrutura condicional que pode nos ajudar a fazer esse tipo de situação em código, pois é comum que isso aconteça.

Como exemplo, podemos até escrever em português, por enquanto, se dada a condição que vamos informar para o JavaScript entre os parênteses for verdadeira, então faça o trecho de código que estará entre as chaves dessa condição.

Exemplo de como seria uma condição em português:

```JavaScript
//Código omitido
tecla.onkeydown = function () {
        se (dada condição for verdadeira) {
                tecla.classList.add('ativa');
        }
}
```

Mas sabemos que o JavaScript é uma linguagem de programação, então o código das estruturas precisa ser em inglês. Esse "se" em inglês é o famoso if, que existe em várias linguagens de programação.

Com isso, esse código só vai ser executado se a condição que informamos nos parâmetros for verdadeira. Agora precisamos descobrir como montar essa condição. Mas, já sabemos um pedaço dela, que é se a tecla do teclado for "Espaço" ou for "Enter", queremos que isso aconteça.

Precisaremos ter a informação dessa tecla e compará-la com o nome dessa tecla, por exemplo, "Espaço". Por enquanto, vamos colocar em português, porém logo vamos descobrir qual será o nome correto.

```JavaScript
//Código omitido
tecla.onkeydown = function () {
        if ('Espaço') {
                tecla.classList.add('ativa');
        }
}
```

Encontrando a tecla pressionada  
Agora, precisamos descobrir qual tecla a pessoa usuária apertou em seu teclado para conseguir terminar de montar essa condição.

No JavaScript, existe um recurso que a própria linguagem e o próprio navegador que executa o código JavaScript nos fornece para trabalhar com os eventos. Esse recurso está disponível para todas as funções que são diretamente atreladas a um evento.

Dentro dos parênteses dessa função, é fornecido para ela os detalhes do evento que foi acionado como primeiro parâmetro. Podemos dar um nome qualquer a este parâmetro que vai representar o evento que foi acionado.

Normalmente, você vai encontrá-lo em outros códigos como event, ou apenas como e. Nesse caso, vamos dar um nome significativo, por isso, escolheremos evento em português para que você saiba que escolhemos esse nome e que, dentro desse nome, o JavaScript vai fornecer todos os detalhes do evento que foi acionado.

Entre as chaves, vamos usar a função console.log() para entender o que tem dentro desse evento que foi fornecido pelo JavaScript. Desse modo, poderemos conhecer os detalhes do evento que está acontecendo ao clicar em uma tecla do Midi.

```JavaScript
//Código omitido
tecla.onkeydown = function (evento) {
        console.log(evento)
        
        if ('Espaço') {
                tecla.classList.add('ativa');
        }
}
```

Podemos salvar e voltar ao navegador Firefox. Recarregamos a página e apertamos a tecla "Tab" para focar na tecla Pom. Depois, apertamos de novo a tecla "Tab" para selecionar a tecla Pom. Foi impresso no console os detalhes desse evento keydown.

Vamos clicar nesse triângulo cinza para expandir todos os detalhes desse evento. Com isso, teremos o objeto desse evento, ou seja, uma série de propriedades com valores que guardam informações sobre esse evento. São muitos, mas conseguimos notar algumas propriedades que têm informação desse evento.

Por exemplo, pressionamos no teclado o "Tab", então ele nos informa que apertamos o "Tab" através da propriedade code. Também teremos outras propriedades que possuem essa informação como a key e também a keyCode, que dá um número para essa tecla que foi pressionada.

Também tem o tipo do evento que foi keydown na propriedade type, enquanto o which mostra o número da tecla. Mas, o melhor é usar nomes com significado.

Algumas propriedades do keydown ao apertar "Tab":

```JavaScript
code: "Tab"  
key: "Tab"  
keyCode: 9
```

Agora, vamos clicar no teclado uma das teclas que queremos usar no Midi. Para isso, voltamos no foco da tecla e apertamos o "Enter". Vai reproduzir o som e imprimir no console os detalhes do evento keydown novamente.

Na propriedade code tem o nome "Enter", no key também.

Algumas propriedades do keydown ao apertar "Enter":

```JavaScript
code: "Enter"
key: "Enter"
keyCode: 13
```

Vamos testar agora com a tecla de espaço? Reproduzimos o som ao clicar com "Barra de espaço".

Também tem code, agora como "Space", porém, no key a tecla de espaço é representada com aspas e um espaço vazio, o que pode ser um pouco complicado. E isso nos faz tomar a decisão correta de qual dessas propriedades podemos usar para trazer no JavaScript e montar a nossa lógica.

Algumas propriedades do keydown ao apertar "Espaço":

```JavaScript
code: "Space"
key: " "
keyCode: 32
```

A Vanessa prefere utilizar a propriedade code, porque tem um nome escrito da tecla que foi pressionada, ao contrário de ser o que a tecla faz mesmo, que é o que é essa propriedade key mostra, ela adiciona um espaço.

Podemos até testar com outras teclas do teclado, por exemplo, uma letra do alfabeto, como o "G". O code vai mostrar "KeyG", enquanto o key vai mostrar apenas "g".

Algumas propriedades do keydown ao apertar "G":

```JavaScript
code: "KeyG"
key: "g"
keyCode: 71
```

Com base nesse critério, escolhemos qual dessas propriedades do evento vamos utilizar.

Voltando ao console.log() do main.js, no Visual Studio Code, vamos entrar dentro do evento com o ponto e acessar a propriedade code. Assim, imprimiremos no console o evento.code.

main.js

```JavaScript
//Código omitido
tecla.onkeydown = function (evento) {
        console.log(evento.code)
        if ('Espaço') {
                tecla.classList.add('ativa');
        }
}
```

No navegador, recarregamos a página e pressionamos a tecla "Tab" para focar no botão. Agora, vamos pressional qualquer tecla para verificar o que acontece. Por exemplo, apertamos em sequência: "A", "B", "C, "D", "Enter", "Espaço" e "Tab".

Retorno no console:

```JavaScript
KeyA
KeyB
KeyC
Enter
Space
Tab
```

Em tempo real, no mesmo momento que pressionamos uma tecla do teclado, já é impressa a informação de qual tecla a pessoa usuária apertou. Isso significa que temos a informação necessária para criar a condição dentro do if.

Conhecendo o operador de igualdade no JavaScript  
Agora, dentro do if, vamos fazer evento.code, precisa ser igual à tecla espaço. Havíamos colocado o texto "Espaço", mas sabemos que em inglês é Space. Se essa condição for verdadeira, conseguiremos executar o código tecla.classList.add('ativa').

Mas falta colocar o operador de igualdade para fazer essa condição verdadeira. Normalmente, na Matemática, usamos o operador de igual (=). Só que sabemos que no JavaScript o igual não tem essa função de igualar, mas sim de atribuir, de adicionar o que tem do lado direito para dentro do lado esquerdo.

Nesse caso, precisamos usar o operador de igualdade, não de atribuição. O operador de igualdade é representado pelo igual igual (==). Só que existem dois operadores de comparação.

Esse operador de igualdade vai fazer essa conta e vai retornar verdadeiro ou falso, analisando a condição. Inclusive, podemos colocar essa operação no console.log() para eu ter certeza.

```JavaScript
//Código omitido
tecla.onkeydown = function (evento) {
        console.log(evento.code == 'Space')
        
        if (evento.code == 'Space') {
                tecla.classList.add('ativa');
        }
}
```

Vamos salvar o arquivo, recarregar o navegador, dar um foco em uma tecla do Midi e pressionar o "Espaço".

true

Tocou o som, a tecla ficou vermelha e retornou "verdadeiro", pois apertamos o "Espaço".

E se apertamos "Enter"?

false

Apesar de tocar o som, a tecla não fica vermelha, pois a condição foi falsa. Se apertamos qualquer tecla, que não seja o "Espaço", dará false novamente.

Antes de acrescentar a condição para a teclar "Enter", precisamos conhecer um pouco mais sobre esse tipo de operador.

Existem dois tipos de operadores de igualdade no JavaScript o == e o ===.

O === é o mais seguro para utilizarmos para nossas lógicas. Por quê? Vamos explicar a diferença entre eles no console do navegador.

```JavaScript
//Código omitido
tecla.onkeydown = function (evento) {
        console.log(evento.code === 'Space')
        
        if (evento.code === 'Space') {
                tecla.classList.add('ativa');
        }
}
```

Vamos usar como exemplo o número 1. Podemos escrevê-lo com ou sem aspas. Porém, qual é a diferença? Sem aspas ele é um número do tipo Number e com aspas ele vai ser um texto com o número 1 dentro.

Se usamos o operador de igual igual, ele vai comparar se o valor 1 é igual ao valor "1" que está dentro do texto e ele vai retornar true (verdadeiro), porque ele está comparando apenas valores.

1 == "1"

true

Mas, se comparamos o número 1 com o texto '1', usando o === , dará false (falso). Porque o número 1 é diferente de um texto que tem escrito dentro o número 1.

1 === "1"

false

O operador de três iguais, vai comprar não só o valor, mas também o tipo do dado. Nesse caso, se é um texto ou um número.

Então, se comparamos o número 1 com outro número 1, aí, sim, vai ser verdadeiro.

1 === 1

true

Por isso, o === é operador mais seguro para se usar em comparações de igualdade.

Próximos passos  
Agora que sabemos como criar uma condição no nosso código e ainda com base em uma informação que vem no evento do teclado, precisamos criar o código para a tecla "Enter" e entender como reduzir repetições do código com o operador lógico OU.

Até a próxima aula!

### Aula 5 - Operador lógico - Vídeo 4

Transcrição  
Anteriormente, criamos uma condição no código com um bloco if, para adicionar a classe ativa em um botão da aplicação Alura MIDI que for acionado por uma tecla do teclado do computador.

A tecla que escolhemos, por enquanto, foi a tecla "Space", ou "Barra de espaço". Agora, precisamos aplicar essa mesma lógica para a tecla "Enter".

Operador lógico

Programando a tecla "Enter"  
A primeira coisa que vamos fazer será usar a mesma estrutura que já conhecemos: a estrutura condicional if. Após o if na linha 26, abrimos os parênteses e depois as chaves.

Sempre recomendamos seguir essa ordem de escrita do if para não esquecer de nenhum detalhe.

Entre os parênteses, teremos a condição do if. Faremos da mesma forma que fizemos para o "Space": evento.code === 'Enter'. Na aula anterior, aprendemos que o nome da tecla começa com letra maiúscula.

Lembrando que o JavaScript é sensível a letras maiúsculas e minúsculas.

No escopo desse bloco if, vamos adicionar a classe ativa. Para isso, passamos tecla.classList.add(), e entre parênteses e aspas simples, adicionamos ativa.

main.js:

```JavaScript
tecla.onkeydown = function (evento) {

    console.log(evento.code == 'Space')

    if (evento.code === 'Space') {
        tecla.classList.add('ativa');
    }

    if (evento.code === 'Enter') {
        tecla.classList.add('ativa');
    }

}
```

Testando o código  
Feito isso, vamos salvar e voltar ao navegador. Com a página atualizada, vamos conferir se será acionada a classe ativa ao teclarmos "Enter" no teclado. Nesse caso, o botão deve ficar vermelho.

Inclusive, podemos depois verificar a inserção dessa classe usando o inspetor. Com a tecla "Pom" selecionada, vamos teclar "Enter" para conferir se o som é reproduzido e se o fundo fica vermelho.

Funcionou com o "Enter", assim como com a "Barra de espaço". Você deve ter notado que foi executado o console.log() no console do navegador, retornando true e false.

Esse console.log() vem da linha 20 do arquivo main.js, conforme indicado no próprio console do navegador. Portanto, vamos voltar ao arquivo main.js no Visual Studio Code e removê-lo.

```JavaScript
tecla.onkeydown = function (evento) {

    if (evento.code === 'Space') {
        tecla.classList.add('ativa');
    }

    if (evento.code === 'Enter') {
        tecla.classList.add('ativa');
    }

}
```

Feito isso, vamos recarregar a página e observar essa modificação na aba "Inspector" do DevTools. Com todas as teclas `<button>` exibidas no código HTML à direita, quando pressionarmos as teclas corretas no teclado, que são "Enter" e "Barra de espaço", deverá ser inserida a classe ativa no código. Da mesma forma, assim que soltarmos as teclas, ela deverá ser removida.

Com a tecla "Tim" selecionada, por exemplo, ao teclarmos "Enter" ou "Barra de espaço", a classe ativa aparece no código da seguinte maneira:

```html
<button class="tecla tecla_tim ativa">Tim</button>
```

Refatorando o código  
Entretanto, de volta ao Visual Studio Code, percebemos que ao resolver essa situação de programar para as duas teclas "Enter" e "Barra de espaço", temos duas vezes o mesmo código, o que não é legal.

Uma forma de resolver isso é usar um operador lógico do JavaScript que conseguirá fazer uma condição de verdadeiro ou falso um pouco mais abrangente para o nosso if, porque a ideia seria a seguinte: se a tecla clicada for igual a "Space" ou a "Enter", adicionar a classe ativa.

Portanto, basicamente, o que precisamos manter é a condição de "Enter", sem necessidade de repetir o if e o tecla.classList.add('ativa').

Nesse caso, usaremos a condição "ou" dentro do primeiro bloco if, utilizando a sintaxe || que representa o operador de alternância da condição lógica OR no JavaScript.

main.js:

```JavaScript
tecla.onkeydown = function (evento) {

    if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
    }

}
```

Dessa forma, temos a condição de que se a tecla do teclado for "Space" ou "Enter", será adicionada a classe ativa. Como OR não é uma palavra prevista na linguagem JavaScript, usamos o símbolo ||.

Com isso, qual lógica irá acontecer? O operador || indicará que se for verdadeira a tecla de "Barra de espaço" ou a de "Enter", então será condição suficiente para entrar nesse bloco if.

Nesse caso, precisamos ter apenas uma condição verdadeira para entrar no if. Obviamente, quando apertarmos a tecla "Barra de espaço", não apertaremos a tecla "Enter" junto.

Sendo assim, um desses lados sempre estará falso, mas o operador lógico || permitirá que essa condição seja verdadeira e adicionará a classe ativa para as duas teclas.

Com a aplicação atualizada no navegador, vamos focar no botão "Puff", por exemplo, e teclar "Enter" para testar. A classe aparece no código conforme esperado, e funciona também com "Barra de espaço".

Conclusão  
Agora que já aprendemos a criar estruturas condicionais, podemos explorar ainda mais as funcionalidades do nosso código e torná-lo mais seguro, conhecendo outras possibilidades do JavaScript.

Nos encontramos no próximo vídeo!

### Aula 5 - Mais condições - Vídeo 5

Transcrição  
O projeto Alura MIDI está completo, com todas as funcionalidades prontas. Todos os botões reproduzem o som dos seus respectivos instrumentos e a navegação está completa, podendo ser feita via mouse ou via teclado, com estilos consistentes.

Agora, precisamos melhorar um pequeno problema da nossa aplicação, que está na função tocaSom(). Para entender essa questão, vamos acessar o console no navegador.

Mais condições  
Podemos chamar essa função diretamente pelo seu nome, tocaSom(), e idealmente, passamos o ID de um elemento áudio. Porém, o que acontece se passarmos como parâmetro o ID ou a classe de um elemento não declarado no documento HTML? Por exemplo: a classe piano, que não existe no documento.

tocaSom('.piano')

Ao executar, é retornado um problema, dizendo que o document.querySelector() de piano é nulo (null). Isso significa que o seletor é passado para a função tocaSom(), na linha 1 do código de main.js. Recebemos um seletor, e passamos para querySelector() buscar o elemento e dar play().

main.js:

```JavaScript
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

// código omitido
```

Outro problema é justamente essa parte do play(). Vamos retornar ao console do navegador, chamar a função tocaSom e passar entre parênteses o seletor de um elemento que existe no documento HTML, porém, não é uma tag de áudio. Por exemplo, se passarmos button, o que acontece?

tocaSom('button')

É retornado um erro dizendo que o play desse elemento não é uma função. Ele vai dizer que o resultado do querySelector(), que é o botão, não tem uma função play().

Portanto, essa função precisa ser aprimorada e precisamos tratar esses problemas com algumas estruturas que já conhecemos anteriormente, mas agora aplicadas para tratar problemas de código.

Tratando os problemas do código  
De volta ao Visual Studio Code, algo que podemos arrumar é o nome do parâmetro, visto que não recebemos apenas IDs de elementos de áudio (idElementoAudio), mas sim seletores.

Nesse caso, podemos simplesmente renomear esse parâmetro da função tocaSom() para algo mais consistente. Recomendamos dar um nome que ajude a pessoa que usa a função tocaSom() a entender o que ela precisa passar, por exemplo, seletorAudio.

Além disso, vamos remover o método play() do querySelector() por enquanto.

main.js:

```JavaScript
function tocaSom (seletorAudio) {
    document.querySelector(seletorAudio);
}
```

Porém, alguém pode tentar trapacear e passar outro tipo de tag para tentar encontrar algum problema ou vulnerabilidade no código da nossa aplicação.

Sabemos que o código do document.querySelector() irá procurar um seletor (seletorAudio). A depender do que for passado, pode ser retornado null ou que não consegue dar o play(), ou seja, será retornado um elemento. Vamos guardar o retorno dessa busca em uma referência constante, criando uma const chamada elemento para armazenar o retorno e facilitar o trabalho no código mais adiante.

```JavaScript
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
}
```

Agora temos uma condição para executar o código. Nesse caso, queremos chamar o elemento e dar play() nele, mas só podemos fazer isso se o elemento realmente existir.

Caso ele não exista, sabemos que o valor será nulo. Portanto, antes de executar elemento.play(), podemos verificar se o elemento está nulo.

Adicionando um bloco if  
Se temos uma condição para fazer algo caso o elemento seja nulo ou não, podemos usar a estrutura do bloco if. Nesse caso, precisamos definir o que fazer se o elemento for estritamente igual (===) a nulo (null). Para não retornar um erro para a pessoa usuária, podemos enviar uma mensagem avisando do problema, por exemplo, usando o método alert() ou o console.log().

Vamos testar com o alert():

```JavaScript
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        alert('Elemento não encontrado');
    }
    // elemento.play();
}
```

Após salvar as alterações, podemos testar no navegador. Vamos recarregar a página e passar a função tocaSom() no console com um elemento que não existe, por exemplo, a classe piano.

tocaSom('.piano')

Ao executar a função com a classe piano, o alert() realmente funciona e exibe um pop-up com a mensagem "Elemento não encontrado". Conforme dito anteriormente, no lugar de alert(), podemos usar console.log(), se quisermos mais discrição, com a mesma mensagem "Elemento não encontrado".

Fica a seu critério qual será a melhor experiência para a pessoa usuária do Alura MIDI.

main.js:

```JavaScript
if (elemento === null) {
    // alert('Elemento não encontrado');
    console.log('Elemento não encontrado');
}
```

Criando a segunda condição  
Agora precisamos trabalhar no caso de quando o elemento é diferente do nulo, ou seja, quando o querySelector() retorna um elemento. Para isso, também podemos usar o bloco if na linha 9.

Para indicar "se o elemento for diferente de nulo", usaremos um operador novo que significa "diferente" ou NOT EQUALS em JavaScript: o !=. Após o operador, inserimos o que vamos comparar.

Portanto, if (elemento != null), será feito algo, por exemplo, elemento.play();

```JavaScript
if (elemento != null) {
    elemento.play();
}
```

Testando o código  
Feito isso, podemos testar a aplicação. Se o elemento não for nulo, queremos dar o play(), então vamos testar no console um elemento de áudio existente para testar a funcionalidade.

tocaSom('#som_tecla_tim')

Ao executar, é reproduzido o som correspondente. Porém, se passarmos um elemento que existe e for um elemento que não tem o play(), por exemplo, o button, ainda temos o problema de que elemento.play não é uma função. Sendo assim, precisamos nos certificar de que o elemento passado é uma tag de áudio para que possamos executar o play() nele.

tocaSom('button')

Explorando a estrutura de um elemento
Como podemos fazer isso, ou seja, descobrir qual elemento foi encontrado pelo querySelector()? Nesse caso, podemos usar o método console.log() para explorar a estrutura de um elemento.

Vamos passar console.log(elemento) na linha 11, dentro do segundo if, e comentar elemento.play() por enquanto, para evitar um erro. Feito isso, vamos explorar o que tem dentro de elemento.

main.js:

```JavaScript
if (elemento != null) {

    console.log(elemento);

    // elemento.play();
}
```

Com o console do navegador aberto, vamos chamar a função tocaSom('button').

tocaSom('button')

Retorno da função:

```html
<button class="tecla tecla_pom">
```

No Mozilla Firefox, quando damos o console.log() de um elemento, ele vem com uma seta à esquerda. Isso significa que podemos expandir essa tag e observá-la no formato de um objeto JavaScript, com todas as propriedades e funcionalidades possíveis de executar para um elemento ou consultar.

Por exemplo: as funcionalidades que colocamos nos nossos botões podem ser encontradas nos atributos. Temos a função onkeydown que fizemos anteriormente, a função onclick que também programamos.

Também conseguimos visualizar propriedades oferecidas pelo próprio JavaScript e HTML, por exemplo, uma propriedade chamada tagName, que recebe o nome "BUTTON", porém em maiúsculo.

Explorando mais a lista de propriedades e funcionalidades, temos o nodeName, também definido como "BUTTON" em maiúsculo, e o localName, que também tem o nome "button", mas em minúsculo.

Como o JavaScript é case-sensitive (sensível a maiúsculas e minúsculas), preferimos usar o localName, porque ele é todo minúsculo. Também podemos conferir no Chrome como fica isso.

No caso do Chrome, não é exibida a seta à esquerda, mas isso não significa que não conseguimos explorar o objeto. Ele está disponível para ser usado, porém, o Chrome não oferece a seta para expandir.

Essa é uma diferença entre o Chrome e o Firefox na hora de implementar códigos com JavaScript. O objeto do elemento é um conjunto de propriedades e funcionalidades que estão por trás dele.

Usando o método console.log()  
Agora vamos retornar ao arquivo main.js e usar o método console.log() em elemento.localName. Dessa forma, qualquer elemento que passarmos no console, precisa exibir o nome da tag desse elemento.

```JavaScript
if (elemento != null) {

    console.log(elemento.localName);

    // elemento.play();
}
```

Vamos recarregar a página no navegador e passar no console a função abaixo:

tocaSom('#som_tecla_tim')

Como retorno, temos o nome da tag "audio". Deve funcionar tanto no Firefox quanto no Chrome. Com isso, descobrimos onde o elemento guarda a informação do nome, e se for um elemento do tipo audio, queremos que dê o play(). Lembre-se de adicionar a comparação === 'audio'.

```JavaScript
if (elemento != null) {

    console.log(elemento.localName === 'audio');

    // elemento.play();
}
```

Estamos fazendo essa lógica dentro do console, então, nesse momento, vamos imprimir no console true ou false. Com a função tocaSom('button'), temos o retorno false. Por outro lado, executando no console a função tocaSom('#som_tecla_tim'), recebemos true.

No momento, temos a condição se o elemento não for nulo e for igual à tag audio. Podemos colocar isso dentro de outro bloco if. Ao final, teremos o seguinte código:

```JavaScript
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        // alert('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }

    if (elemento != null) {
        if (elemento.localName === 'audio') {
            elemento.play();
        }
    }
}
```

Para finalizar, vamos executar o som do tim para testar. Ao enviar a função tocaSom('#som_tecla_tim'), o som é reproduzido conforme esperado. Se testarmos com o piano (tocaSom('.piano')), recebemos a mensagem "Elemento não encontrado".

Conclusão  
Por último, podemos testar tocaSom('button'). Por enquanto, não colocamos nenhuma mensagem de erro caso seja um elemento inválido, mas ainda vamos chegar nesse ponto!

### Aula 5 - Estruturas condicionais

Você foi contratado por uma empresa de transporte de mercadorias para desenvolver um sistema de logística que otimiza a entrega de pacotes com base em critérios específicos. A empresa possui um grande volume de pacotes de diferentes cores e destinos, e precisa garantir que os pacotes vermelhos sejam entregues no Ceará e os pacotes azuis no Rio de Janeiro.

Para isso, qual função pode ser criada para direcionar cada pacote para o seu destino?

Resposta:  

```JavaScript
function entregaPacote(corDoPacote) {
  if (corDoPacote == 'vermelho') {
    mandaProCeara();
  }
  if (corDoPacote == 'azul') {
    mandaProRioDeJaneiro();
  }
}
```

> Alternativa correta! Utilizando a estrutura condicional ifconseguimos saber o destino correto para entrega dos pacotes a partir das cores.

### Aula 5 - Melhorando o código - Vídeo 6

Transcrição  
Neste vídeo, vamos melhorar nosso código!

Melhorando o código

Reduzindo os blocos if  
Temos muitos blocos if, como o da linha 9 à linha 13, que pode ser reduzido a um único if usando uma lógica semelhante à que aplicamos nos eventos de teclado, onde combinamos dois blocos if com o operador lógico que significa "ou" (||).

main.js:

```JavaScript
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }

    if (elemento != null) {
        if(elemento.localName === 'audio'){
            elemento.play();
        }
    }
}
// código omitido
```

Neste caso, em vez de usar ||, usaremos o operador lógico &&, que significa "e" em português. Portanto, se o elemento não for nulo e for igual a audio, daremos play (elemento.play()).

```JavaScript
if (elemento != null && elemento.localName === 'audio') {
    elemento.play();
}
```

Adicionando o bloco else  
Também notamos que o bloco if da linha 4 à 7 é a negação do bloco if que acabamos de melhorar. Ou seja, se o elemento for nulo, executamos outra ação. Se em algum momento o elemento não atender à condição do segundo bloco if, ou seja, se o elemento for falso, teremos outra condição falsa.

Para representar isso, podemos usar uma estrutura conjunta no bloco if: o else. O else significa "senão" e precisa ser invocado imediatamente após um if, pois será a função executada caso a condição seja falsa. Portanto, se o elemento não for nulo e for diferente de audio, cairá no bloco else.

Podemos mover a mensagem de console.log('Elemento não encontrado') para o escopo do bloco else deste if, e depois remover o if (elemento === null), pois o else substituirá isso na lógica.

```JavaScript
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }
}
```

Testando o código  
Com isso, a mensagem será exibida para ambos os erros: tanto para o button quanto para o piano. Vamos testar? Ao recarregar a página e testar tocaSom('.piano') e tocaSom('button') no console, notamos que a mesma mensagem é exibida para ambos: "Elemento não encontrado".

tocaSom('.piano')

tocaSom('button')

Ajustes finais  
Podemos tornar a mensagem um pouco mais detalhada, como "Elemento não encontrado ou seletor inválido". Usaremos a mesma mensagem para ambos os casos.

main.js:

```JavaScript
else {
    //alert('Elemento não encontrado');
    console.log('Elemento não encontrado ou seletor inválido');
}
```

Ao recarregar a página e testar novamente com tocaSom('.piano') e o tocaSom('button'), recebemos a mesma mensagem, mas uma mensagem mais significativa. Agora, se alguém usar a função tocaSom() de maneira inadequada, haverá detalhes sobre por que a função não funciona.

Um detalhe interessante: o JavaScript é inteligente o suficiente para quando o valor for nulo ou vazio em uma referência. Portanto, se o elemento for nulo, não precisamos compará-lo com nulo. Ou seja, podemos simplesmente remover != null da linha 4 e a condicional if fará a verificação.

```JavaScript
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
}
```

O JavaScript pensa o seguinte: se elemento existir, ou seja, se for um valor diferente de nulo, vazio, 0, falso, ou indefinido, será considerada uma condição verdadeira.

Conclusão  
Neste vídeo, trabalhamos com os blocos if e else, bem como os operadores && (AND) e != (NOT EQUALS). A partir disso, tornamos nossa lógica mais sucinta, e assim finalizamos nossa aula!

### Aula 5 - Projeto final do curso

Aqui você pode baixar o projeto final do curso:

[Baixe o zip](https://github.com/alura-cursos/aluramidi-curso/archive/refs/heads/aula5.zip) ou visualize os [arquivos no Github!](https://github.com/alura-cursos/aluramidi-curso/tree/aula5)

### Aula 5 - Lista de exercícios

Vamos praticar o que aprendemos até aqui?

1) Adicionando classe com clique  
Imagine que você está trabalhando em um projeto de um teclado virtual musical. Sua tarefa é fazer com que, ao clicar em uma tecla do teclado virtual, a classe "ativa" seja adicionada a essa tecla, alterando sua aparência para indicar que está sendo pressionada. Utilize JavaScript para adicionar essa funcionalidade. Considere que já existe um HTML com as teclas e cada uma tem sua própria classe ou id.

2) Removendo classe com clique  
Agora, o objetivo é remover a classe "ativa" de uma tecla do teclado virtual quando ela é clicada novamente. Isso indicará que a tecla foi "solta". Utilize JavaScript para implementar essa lógica, garantindo que a tecla volte ao seu estado original após o segundo clique. Assuma que o HTML e as classes das teclas já estão definidos.

Opinião do instrutor

Veja as soluções dos exercícios.

Lembre-se de que há várias maneiras de solucionar um mesmo problema (e tudo bem caso seu código tenha saído diferente). O importante é que ele esteja organizado, bem escrito e funcione.

1) Adicionando classe com clique

- Primeiro, selecione todas as teclas. Supondo que cada tecla tenha uma classe chamada tecla, você pode usar document.querySelectorAll('.tecla') para obter uma NodeList de todas as teclas;
- Em seguida, percorra cada tecla usando um loop forEach;
- Dentro do loop, adicione um event listener para o evento de clique em cada tecla;
- Na função do event listener, use classList.add('ativa') para adicionar a classe ativa à tecla clicada.

Veja como ficaria o código:

```JavaScript
document.querySelectorAll('.tecla').forEach(function(tecla) {
    tecla.addEventListener('click', function() {
        this.classList.add('ativa');
    });
});
```

2) Removendo classe com clique

- Adicione, ao código, a estrutura condicional if para executar a lógica de adicionar ou remover a classe ativa a partir do clique em cada um dos botões do projeto:

```JavaScript
document.querySelectorAll('.tecla').forEach(function(tecla) {
    tecla.addEventListener('click', function(event) {
        const elementoClicado = event.target;

        if (elementoClicado.classList.contains('ativa')) {
            elementoClicado.classList.remove('ativa');
        } else {
            elementoClicado.classList.add('ativa');
        }
    });
});
```

Muito bom! Você chegou ao fim de mais uma lista de exercícios!

### Aula 5 - O que aprendemos?

Nessa aula, você aprendeu:

- Eventos no teclado:  
O que são eventos do teclado e como usá-los: onkeydowne onkeyup. Como adicionar e remover classes em um elemento HTML através do JavaScript, com as funções add e remove do classList.

- Condições no código e operadores lógicos:  
O que é o objeto event, como declarar e acessar ele através do parâmetro de uma função atrelada a um evento. A estrutura condicional if e para que ele serve, além de conhecer o operador de igualdade ==, estritamente igual (===), e o operador or (||).

- Mais condições:  
A estruturas condicionais if e else juntas. O operador not equals (!=), operador lógico and (&&) e o valor null.

### Aula 5 - Carreira em Front-End - Vídeo (Especial)

Transcrição  
Este vídeo é oferecido pela FIAP, a faculdade do ecossistema da Alura.

Quer conhecer mais sobre a FIAP, cursos e graduações relacionadas à temática deste vídeo? Basta clicar nos links a seguir:

[FIAP](https://www.fiap.com.br/?utm_source=plataforma-alura&utm_content=%5BDesenvolva-aplica%C3%A7%C3%B5es-Web-com-JavaScript%5D&utm_campaign=connect-the-dots)  
[Pós Tech - Dev Foundations](https://postech.fiap.com.br/curso/dev-foundations/?utm_source=plataforma-alura&utm_content=%5BDesenvolva-aplica%C3%A7%C3%B5es-Web-com-JavaScript%5D&utm_campaign=connect-the-dots)  
[Gradução em Web Design](https://www.fiap.com.br/online/graduacao/tecnologo/web-design-user-experience-social-media-marketing-lowno-code-front-end-development/?utm_source=plataforma-alura&utm_content=%5BDesenvolva-aplica%C3%A7%C3%B5es-Web-com-JavaScript%5D&utm_campaign=connect-the-dots)

Fabrício: Olá, pessoal, tudo bem? Sou Fabrício Carraro, trabalho na Alura, e você deve estar se perguntando que vídeo é esse no meio do seu curso.

Audiodescrição: Fabrício é um homem de pele clara, olhos castanhos e cabelos pretos curtos. Veste uma camiseta azul-marinho escrito "Alura" e está sentado em uma cadeira preta.

Eu sei que você está fazendo uma formação de HTML, CSS e JavaScript. E, exatamente por isso, trouxemos duas pessoas especialistas nessa área, para conversarmos sobre o mercado e a carreira de uma pessoa desenvolvedora de front-end.

Vamos ter uma conversa bem informal para te informar melhor com Rubens Rodrigues, que é coordenador na FIAP, a universidade onde estamos gravando esses podcasts, e ele também é CTO na School Guardian. Tudo bem, Rubens?

Rubens: Tudo bem, e você, Fabrício? Prazer estar com vocês.

Audiodescrição: Rubens é um homem de pele clara, possui cabelos curtos e marrons. Veste uma camiseta preta com um escrito "Postech" em branco. Usa óculos de armação retangular transparente.

Fabrício: Também convidamos o João Marques, que também é professor na FIAP e arquiteto de software na GOP. Tudo bem, João?

João: Tudo bom, Fabrício?

Audiodescrição: João é um homem de pele clara, possui cabelos curtos e pretos. Veste uma camiseta preta com um escrito "Postech" em branco. Usa óculos de armação retangular transparente e está sentado em uma cadeira preta.

O que é front-end e back-end?  
Fabrício: Para começarmos essa conversa, imagino que a pessoa que está fazendo essa formação e que está nos assistindo seja alguém que esteja ainda no começo da carreira de front-end.

Por isso, talvez ela ainda não esteja acostumada com os jargões que usamos na programação e no desenvolvimento. Então, gostaria que vocês explicassem rapidamente o que é front-end e back-end.

Rubens: O front-end é a casca, é onde você interage com a pessoa usuária. Por exemplo, é onde essa pessoa vai digitar, clicar e tocar na interface que você está programando.

Fazendo uma analogia, o front-end é o garçom e o back-end é a cozinha onde os pratos são feitos. Geralmente, o front-end vai solicitar algo para a cozinha. A cozinha prepara a informação e a retorna para que o front-end a apresente.

Claro, o front-end tem um monte de informação, mas de uma maneira bem simplória, essa analogia facilita que você entenda qual a diferença dos dois.

Fabrício: E nas empresas, atualmente, vocês diriam que ainda existe essa diferenciação entre áreas de profissionais de front-end e back-end? Ou todo mundo é full-stack?

João: Acho que depende da empresa. Depende do tamanho da empresa, às vezes ela é dividida por squads (equipes). Então, você vai ter uma squad mais focada no front-end, outra mais focada no back-end, mas também existem profissionais full-stack.

Rubens: Normalmente, grandes empresas tem esse caminho bem separado. Agora se você já pensar nas empresas startups e inovadoras, o full-stack é bem valorizado.

Mas, o que é melhor: ser um generalista ou ser um especialista? Cada um tem os seus caminhos, mas tem mercado para todo mundo. A tecnologia é boa por causa disso. Existem oportunidades para todo mundo. Não tem uma resposta certa.

Óbvio que o caminho mais natural é você se especializar no front-end, depois se especializar no back-end, e aí você se tornar full-stack, agregando ambos conhecimentos. E, no final, você pode acabar tendo uma especialidade que gosta mais.

Fabrício: É interessante o ponto que você trouxe, Rubens.

Na Alura, criamos o TechGuide, um projeto gratuito que todos podem acessar, que brinca com a ideia de dev em T.

É uma pessoa que se tornará especialista em determinada área, mas que tem múltiplas qualificações.

Por exemplo, temos um guia sobre front-end. Ele mostra o que você precisa saber nos níveis 1, 2 e 3, sendo este último o nível mais sênior. Mas, também existem as partes laterais do T, que são conhecimentos que vão agregar à sua carreira, como back-end, cloud, GitHub, entre outros.

Rubens: Além disso, acrescentamos os soft skills (habilidades interpessoais), que são tão importantes hoje em dia. A aba lateral do T está ficando cada vez mais ampla, mas é super importante.

Não adianta ter uma profundidade de conhecimento, mas não ter uma amplitude de conhecimentos. Acho muito interessante essa forma de falar, pois dá uma visão real do que o mercado precisa.

HTML e CSS  
Fabrício: Agora, entrando na parte técnica, sempre falamos em desenvolvimento web como a base que você precisa conhecer. Isto é, você precisa saber HTML, CSS e JavaScript, que é a linguagem mais usada em todos os navegadores.

Para uma pessoa que está fazendo essa formação, qual o nível de especialização você acha que uma pessoa precisa ter em HTML? Ela precisa saber todas as tags de HTML? Ela precisa dominar o CSS antes de ir para o JavaScript? Ela aprende tudo junto e misturado? O que vocês recomendam?

João: Acredito que é importante saber um pouco de tudo, porque hoje em dia os frameworks entregam muitas coisas prontas. Então, você pode acabar menosprezando algo, pensando que não precisa aprender HTML, mas é importante saber o que está acontecendo. Afinal, quando surge um problema, quem tem o conhecimento base conseguirá resolvê-lo.

Rubens: O HTML e o CSS são a base de todos os frameworks. Vamos pensar em três frameworks importantes, como Angular, React e React Native (para mobile). Todos eles usam muito o HTML e o CSS como base.

Se você sabe bem HTML, você está preparado(a) para aprender esses frameworks, que é o próximo passo.

É importante você conhecer bem, principalmente o CSS. HTML é uma linguagem não tão "importante" entre aspas. Talvez não seja necessário saber todas as tags HTML, mas é essencial saber CSS, porque vai ser a base para todo o resto.

Fabrício: Nós fizemos uma imersão de front-end na Alura, onde tínhamos exatamente esse foco.

Não era para pessoas tão iniciantes. Começávamos com o HTML, relembrando conceitos como section, div e outros mais. Porém, de cinco aulas, três e meia tínham foco no CSS, porque tem muito detalhe.

Já ouvi pessoas falando para começar pelo front-end porque é mais fácil, mas quando você vê a profundidade do CSS, percebe que essa é uma visão errada.

Rubens: Atualmente, o front-end é tão robusto quanto o back-end. Vou até falar um monte de termos técnicos, me desculpem. Existe o conceito de micro serviços, mas também existe o micro front-end, que é bem robusto, onde você tem que usar vários frameworks e linguagens para entregar uma experiência mais coesa a pessoa usuária.

Além disso, existe um CSS mais "simples", mas também existe o CSS compilado, que é o Sass. Há muitas possibilidades com CSS, inclusive programar, inserir condicionais e mais. É um universo à parte, no qual é possível se aprofundar bastante.

João: Atualmente, acredito que o CSS está mais acessível, pois quando iniciamos um projeto, geralmente recorremos a ferramentas como o Bootstrap, que oferecem soluções mais prontas.

Rubens, com sua vasta experiência, certamente lembra das dificuldades com o IE6 (Internet Explorer 6), onde tínhamos que lidar com comportamentos distintos em cada navegador. Era um desafio, com testes específicos para cada navegador.

Hoje, tudo está mais simplificado, mas não podemos subestimar o CSS, como Rubens mencionou, é um universo à parte. Quando o Bootstrap não atende às necessidades, o que fazer? É necessário saber o que está sendo feito.

Fabrício: Já assisti pessoas realizando competições de CSS no YouTube, por exemplo, desenhando um Pokémon ou o símbolo do São Paulo Futebol Clube, apenas usando CSS.

Rubens: Um exercício muito bom, e que muitas pessoas fazem, é tentar recriar sites conhecidos, como o Netflix.

Fabrício: Foi o que fizemos na imersão com o Spotify.

Rubens: Você que está começando a desenvolver, é interessante pegar um site que você admira e tentar recriá-lo. Por exemplo, pode tentar criar um site igual ao da Alura.

Acredito que é um excelente exercício, tanto para uma imersão, quanto para o dia a dia. Se você vê algo interessante em um site e se pergunta como aquilo foi feito em CSS, você pode inspecionar o código ou tentar reproduzir.

Fabrício: A maioria das pessoas especialistas em front-end recomendam que, no início, para aprender, tente copiar um site. Aprenda os conceitos básicos ou principais e depois tente aplicá-los.

Se não souber algo, é possível pesquisar em sites como o Stack Overflow ou recorrer à Inteligência Artificial. Na formação que você está fazendo, por exemplo, no canto inferior direito temos a Luri, que é a Inteligência Artificial da Alura.

Se você não entendeu algo muito bem, você pode pedir um exemplo adicional para que ela te explique de uma maneira mais simples ou até te forneca um trecho de código. Claro, é importante que você entenda o que ela está fazendo, não é apenas copiar e colar. Mas, ela pode te ajudar muito nos estudos.

Isso é algo que não tínhamos antes, um professor virtual disponível 24 horas por dia. Antes, tínhamos que esperar por respostas no fórum, Discord da Alura ou Stack Overflow.

Rubens: Ou até mesmo esperar a aula presencial com o professor. Agora, temos o ensino sob demanda (on demand), o que é muito mais prático.

JavaScript  
Fabrício: Agora, saindo do HTML e CSS, que não são linguagens de programação, vamos para a linguagem de programação da web, que é o JavaScript.

Imagino que muitas pessoas estejam começando ou planejam começar o curso de Lógica de Programação e ainda não estão muito familiarizadas com isso. O que vocês recomendam para quem está começando a primeira linguagem de programação, no caso, o JavaScript?

João Acredito que o JavaScript seja uma excelente escolha. Nós, que somos um pouco mais experientes, tínhamos a visão de que o JavaScript era usado apenas para front-end.

No entanto, houve uma jogada sensacional de trazer todas as pessoas que já tinham conhecimento de JavaScript para o back-end. Com isso, hoje em dia, temos o Node, que também faz o JavaScript funcionar bem no back-end.

Acho que é uma linguagem muito interessante, pois você não fica limitado a um único mundo, você acaba expandindo seu leque para o front e back-end.

Rubens: Eu aprendi com o Pascal, que também é uma linguagem interessante. Mas, brincadeiras à parte, acredito que o JavaScript é uma linguagem incrível porque é uma linguagem simples. Você não precisa de nada no seu computador, basta abrir um HTML e começar a desenvolver e rodar no site.

Fabrício: Dá para usar até no bloco de notas!

Rubens: Exatamente, não precisa instalar nada. Claro que as IDEs (ambiente de desenvolvimento integrado) são muito úteis, mas você não são obrigatórias.

Partindo da premissa de que, para começar a desenvolver um aplicativo móvel, você precisa ter um celular, desenvolver no Xcode e tal. Com o JavaScript, você não precisa de nada disso.

É uma linguagem super simples e fácil de entender - não é como algumas linguagens que são fortemente tipadas e mais robustas. Apesar de ser uma linguagem um pouco verbosa, é verdade. Para quem não sabe, verbosa significa que você tem que escrever bastante. Existem linguagens em que você escreve menos, mas o JavaScript é muito fácil de aprender e entender.

Como o João disse muito bem, é uma linguagem que abre portas. Por quê? Porque você pode começar a construir um site apenas no bloco de notas. Depois, você pode ir para o back-end, mobile ou um framework que usa JavaScript, como o React.

Aí você pode dizer: "Mas Rubens, a linguagem JavaScript não é tão robusta". Tudo bem, use TypeScript.

O que é o TypeScript? É o JavaScript fortemente tipado, onde você tem algumas ferramentas que dão mais robustez ao JavaScript.

Então, é um caminho que está expandindo seu leque de oportunidades. Acredito que tudo isso faz do JavaScript uma linguagem essencial para você começar a desenvolver atualmente.

É por isso que o mercado muitas vezes está começando a ensinar com o JavaScript e não mais com o Pascal, como no meu tempo.

Fabrício: Imagine um primeiro emprego de analista júnior, o que uma pessoa desenvolvedora front-end estará fazendo no dia a dia com a linguagem JavaScript?

João: Se partirmos para um cenário sem framework, um cenário puro, todas as ações da tela estarão sendo coordenadas com o JavaScript.

Vamos exemplificar com uma ação de botão. Podemos tanto utilizar uma tag do HTML que já vai dar uma ação quanto simplesmente escutar um clique para aparecer um alerta na tela utilizando JavaScript. Se queremos que o clique no botão faça aparecer campo, também podemos usar JavaScript.

Conforme o professor Rubens comentou, o JavaScript é a cozinha. Ele vai estar preparando tudo e o front-end vai estar entregando a comida e tudo mais. Internamente, o JavaScript vai fazer tudo.

Rubens: Com HTML, CSS e JavaScript puros, fazemos páginas menos complexas. Para lidar com a complexidade de páginas de sistemas e tudo mais, você acaba utilizando um framework - que é o próximo passo.

Hoje o mercado está muito voltado para frameworks. Acho difícil encontrar uma empresa que tenha um sistema muito robusto em HTML e CSS.

Antigamente, juntávamos PHP com HTML e CSS, era uma loucura - o que não é mais comum. Atualmente, você tem um front-end com React, Angular, Flutter Web ou outros frameworks.

Entretanto, você começa do início. O WordPress, que é um PHP, mas muitas pessoas usam, ainda é o sistema de sites mais usado no mundo. Ele usa basicamente HTML, JavaScript e CSS.

Observe a quantidade de oportunidades que você tem, por exemplo, para começar a sua carreira criando um site WordPress para uma pessoa ou até mesmo para uma empresa. Se você deseja ser uma pessoa empreendedora, também existe uma grande oportunidade ali.

Portanto, esse é o início, mas você precisa estar preparado para dar o próximo passo. E o próximo passo é um framework, dentre os quais você pode escolher o que preferir.

Typescript  
Fabrício: Você mencionou corretamente que, atualmente, as empresas utilizam frameworks. Também mencionou anteriormente sobre o TypeScript.

Tenho visto a maioria, ou muitas empresas, abandonando o JavaScript como padrão e usando o TypeScript por ser fortemente tipado. Por que eles fazem isso? Seria por segurança?

Rubens: Bom, eu posso explicar porque tenho experiência. Primeiro, vamos explicar o que é fortemente tipado, porque as pessoas talvez não saibam o que é.

Uma linguagem fortemente tipada significa que você consegue definir um tipo fixo para determinada variável, como string, inteira, double, ou outros.

O JavaScript é uma linguagem que não é fortemente tipada. Ou seja, em uma variável chamada HTML, podemos adicionar uma string, um inteiro, um array, o que quisermos.

Quando você está em um site pequeno, isso é tranquilo. Contudo, quando o seu site começa a ficar mais robusto e com mais pessoas trabalhando e você tem uma função ou um método, você não saberá o tipo que suas variáveis vão receber.

Com isso, recorremos a uma velha brincadeira: quando comparamos 1 igual a 1, estamos comparando dois tipos numéricos? Duas strings? Uma string com um numérico? Se eles não forem do mesmo tipo, vira uma confusão.

Fabrício: Eu vi um caso clássico recentemente, ao somar um número 2 como inteiro e outro 2 como string em JavaScript. Qual é o resultado? A resposta é 22, porque ele converte o número inteiro para string, então exibe um elemento após o outro em vez de somar.

Rubens: Exatamente. E o TypeScript não tem isso, porque ele define que a função vai receber e retornar um único tipo. Isso evita erros que acontecem em tempo de execução no JavaScript.

Muitas vezes passamos um valor pensando em um tipo de variável sem conferir o que está dentro daquela função. Se a função estava esperando outro tipo, você toma um erro. E como o JavaScript é uma linguagem scriptada, ou seja, roda sem precisar ser compilada, recebemos esse erro diretamente no site.

Fabrício: Com isso, a sua empresa pode perder dinheiro, clientes, enfim.

Rubens: Pode acontecer um monte de coisa, e você pode até ser prejudicado, porque vão falar "você fez um site que está dando erro".

Já a linguagem TypeScript, além de ser fortemente tipada, é compilada. Isso quer dizer que, ao compilá-la, ele verifica, por exemplo, se estamos usando uma string em um inteiro.

Fabrício: E nos dá o erro antes.

Rubens: Exatamente. Só isso já ajuda bastante no dia a dia de organização. Por isso que as empresas acabam optando pelo TypeScript. E eu já tive vários problemas assim.

Fabrício: Todo mundo teve!

Entrevistas de Emprego  
Fabrício: Falando sobre o mercado, imaginem que uma pessoa vai fazer a nossa formação completa na Alura, talvez aprender um framework, como os que mencionamos, e vai querer a primeira vaga como profissional de front-end. O que essa pessoa deve esperar da entrevista de emprego? O que deve ser demonstrado nessa primeira entrevista para o estágio ou para uma vaga de analista júnior?

João: Acredito que o conhecimento deve ser demonstrado. Obviamente, para uma posição júnior, algumas empresas pedem certas experiências, o que é um pouco complicado, mas é necessário demonstrar conhecimento.

Não se deve esperar que a empresa te ensine. Claro, haverá aprendizado no dia a dia, pois não se tem o conhecimento total, mas é preciso ter a base para poder ampliá-la.

Ou seja, é necessário fazer exatamente isso: iniciar o curso da Alura, conhecer HTML, CSS, entrar no JavaScript e no TypeScript, e assim, conhecer a base.

Quando for necessário utilizar um framework, já saberemos que ele nada mais é que a junção dessas tecnologias que citamos antes. Ele só facilita e entrega o trabalho mais "mastigado" para você. Conhecendo bem a base, você vai longe.

Fabrício: Conectando com isso que você falou, talvez seja possível criar um pequeno portfólio, como um GitHub, demonstrando que conhece a base.

Rubens: O GitHub já é essencial. Hoje, acho que 90% dos recrutadores verificam e perguntam qual é o seu GitHub quando você faz uma seleção. Não em cargos de estágio ou júnior, mas quando você é um pouco mais pleno ou sênior, eles vão pedir. E isso é bem legal.

Comece aprendendo, fazendo os cursos aqui da Alura, os exercícios, e já vai colocando no seu GitHub e divulgando. Essa estratégia te dará um diferencial perante outras pessoas junior e estagiárias em relação à vaga que você está pleiteando.

Fabrício: Isso é sobre aquilo que falamos: copiar a página da Netflix, do Spotify, e jogar no GitHub. Eles vão ver e pensar "que bonito, ficou bem parecido".

Rubens: Perfeito. No GitHub dá para jogar um HTML. Se você fizer o HTML e o CSS, já dá para colocar a página lá. Isso é uma boa dica.

Fabrício: Sim, é verdade.

Rubens: Eu, como empreendedor, fiz uma seleção de pessoas estagiárias e, nesse caso, não posso pedir experiência. Aí, chega um monte de currículo e eu penso "Qual é a diferença entre eles?"

A primeira diferença são os cursos. Se em seu currículo conta que você fez Alura, o curso tal ou a imersão tal, já detectamos um diferencial.

Portanto, é importante mostrar todos os cursos que você aprender. Quando você for mais experiente, não será capaz de mostrar todos, mas no começo da carreira, deve evidenciar qualquer curso que você vai fazendo, pois isso fornecerá um diferencial.

É importante você pensar no outro lado. Por exemplo, você mandou uma vaga para a empresa School Guardian. Você deve pensar "O que o Rubens vai olhar no meu currículo que vai chamar a atenção dele? Como vou me diferenciar dos outros currículos que vão chegar lá?"

É interessante se atentar a isso. Se você adicionar o GitHub, já faz diferença. Se a pessoa recrutadora ver uns cursos bacanas, com certeza vai se interessar. Se tem GitHub, ela vai olhar. Essas coisas são bem interessantes de adicionar.

Também é interessante pensar em qual desafio que eu, como pessoa empreendedora, coloquei para as pessoas candidatas e falei: "Galera, eu quero que vocês façam isso". Eu sabia que eles não sabiam fazer a tarefa, mas queria saber quem iria atrás e procuraria saber. Quais delas acessou a internet em busca da resposta? A internet estava liberada.

Busque respostas, porque é isso que nós queremos. Atualmente, com as Inteligências Artificiais (IA) e tudo que temos, precisamos decorar menos. Em vez disso, precisamos conhecer a essência e saber procurar.

Às vezes, digo que a pessoa desenvolvedora é uma grande usuária do Google e do Stack Overflow. Não sabemos quais serão os desafios que teremos. E quando chegamos a um desafio, devemos pensar "O que vou fazer para aprender?"

Estou com um desafio agora na minha empresa. Preciso fazer algo lá que não sei fazer. Para resolver o problema, comecei a procurar. Fui ao site Medium e vi exemplos na internet, porque é isso que fará a diferença. Tanto para quem está começando, quanto para as pessoas que têm mais experiência.

Uma coisa que aprendi no mercado de desenvolvimento de software é que um desafio nunca é igual ao outro. Cada hora é algo diferente. Então, é dessa habilidade que precisamos.

Quando procuro uma pessoa estagiária ou júnior, procuro alguém que vai "correr atrás". Acho que esse é o grande diferencial: você mostrar que busca as respostas.

Por isso, quando você coloca um curso ou um GitHub à disposição, está mostrando para a pessoa do outro lado que sabe "correr atrás" e não está parado, esperando alguém lhe dizer o que deve fazer. Hoje em dia, o mercado de trabalho está assim.

Portanto, acho que essa é a grande dica: mostrar que sabe buscar soluções.

Fabrício: Excelente. Vamos finalizar essa conversa com a última pergunta, porque as pessoas em casa querem continuar estudando e continuar a formação.

Faculdade e Diploma  
A última pergunta que vou fazer aqui é sobre faculdade e o diploma.

Estamos na FIAP, onde estamos gravando esse podcast. Existe a graduação de Web Design. Além dela, temos a pós-tech para alguém que fez, por exemplo, um curso em outra área e quer fazer a pós-tech de Dev Foundations para consolidar a base do desenvolvimento. Nela, falamos de HTML, CSS e JavaScript.

Com isso em mente, quero saber se, ao buscar a primeira vaga, as empresas veem como obrigatório ter um diploma de formação nessa área de TI.

Fabrício: Depende. Na nossa área, a resposta para quase tudo e "depende".

Existem empresas que exigem o diploma. Nestas, não importa o quão competente você seja, sofrerá impedimentos em algum processo se não tiver o diploma. Por outro lado, existem empresas que só vão olhar seu GitHub, sua experiência e permitir sua aprovação.

O Rubens, como empresário, também pode abordar esse tema.

Rubens: Bom, posso falar, e tenho uma história interessante sobre isso. Vou estender um pouco a conversa, mas que acho que vale a pena.

Eu comecei fazendo um curso técnico de processamento de dados e não queria fazer faculdade, porque achava perda de tempo. Já a minha mãe disse que eu devia fazer uma faculdade e insistiu por muitos anos.

Por insistência da minha mãe, concluí uma faculdade. Você pode pensar "Rubens, hoje você é coordenador de uma pós-graduação. Como assim, você está falando isso?"

Eu aprendi que o mercado de tecnologia é diferente da medicina, na qual precisamos ter o diploma para exercer. Ou seja, você pode trabalhar sem o diploma.

Mas qual é o ponto interessante da faculdade? Primeiramente, o networking. Você vai conhecer pessoas, e isso é super importante. Você não deve ficar no seu mundo fechado, só programando. Estamos valorizando cada vez mais o aprendizado em T.

Há também a questão de aprender a ser uma pessoa desenvolvedora. Muitas vezes, encontramos pessoas programadoras que não possuem tanta técnica, não conhecem arquiteturas, e não têm base para desenvolvimento. Quando você participa de cursos, como uma graduação ou o pós-tech de Dev Foundation, nós fornecemos essa base, ensinamos arquitetura.

Desenvolver não se resume a criar uma variável ou fazer um for com ifs no meio. Há toda uma arquitetura envolvida. Quando os projetos se tornam mais complexos, se não forem construídos com uma arquitetura sólida, podem se tornar um caos.

Boas faculdades, como a FIAP, por exemplo, fornecem essa base. A academia vai discutir sobre assuntos como Clean Architecture, Arquitetura hexagonal e Arquitetura Onion, por exemplo, e entender por que nós as utilizamos.

Para quem está começando agora, pode parecer uma perda de tempo. Eu também pensei assim no passado. Mas hoje, com minha experiência, vejo o quanto isso é importante e o quanto eu perdi por não ter buscado isso antes.

Ou seja, o mercado permite a falta de diploma, mas ele vai te dar mais oportunidades e te respeitar mais quando você apresentar diplomas e certificações adquiridos na academia.

João: Como Rubens comentou, hoje em dia temos muitas pessoas replicadoras que não sabem nem o que estão fazendo, mas conseguem fazer o código funcionar. Contudo, se você pedir para explicar, eles dirão: "eu copiei".

A faculdade vai ajudar muito na base, permitindo que você realmente entenda o que está acontecendo no código. Tudo tem um motivo. A pessoa arquiteta ou tech lead escolheu determinada arquitetura por um motivo específico. Às vezes você só copia uma pasta e se engana pensando que está usando aquela arquitetura.

Fabrício: Perfeito, pessoal. Muito obrigado pela participação de vocês. Espero que as pessoas que assistiram tenha gostado desse bate-papo. Nos veremos nos próximos vídeos!

Continue sua formação, estude, faça os projetos que mencionamos aqui, publique no seu GitHub e compartilhe conosco. Poste, por exemplo, no nosso LinkedIn, nós vamos adorar ver.

LinkedIn do Rubens  
LinkedIn do João  
LinkedIn do Fabrício  
Quando conseguir seu primeiro emprego, nos conte! Ficaremos muito felizes por você.

Até o próximo vídeo!

### Aula 5 - Conclusão - Vídeo 8

Transcrição  
Parabéns! Você acaba de chegar ao fim deste curso de JavaScript. Neste curso, aprendemos a implementar uma série de funcionalidades iniciais com JavaScript. Vamos recordá-las?

O que aprendemos?  
Criamos uma função que reproduz o som dos instrumentos musicais armazenados dentro de um elemento de áudio do código HTML, e fizemos com que esses sons, que foram reproduzidos na interface gráfica da aplicação Alura MIDI, fossem controlados pelos botões que desenhamos com HTML e CSS. Esses botões já estavam prontos e apenas fizemos com que funcionassem, reproduzindo o som do instrumento desejado.

Agora, por exemplo, se clicarmos em uma tecla do Alura MIDI, será reproduzido um som. Da mesma forma, podemos usar a navegação via teclado. Se pressionarmos "Enter" ou "Barra de espaço", o som da tecla selecionada também é reproduzido.

Aprendemos a fazer um código otimizado, percorrendo todos os botões, reduzindo a repetição de código, e aumentando o reaproveitamento e a manutenção desse código.

Conclusão  
Com isso, você já tem aptidão para fazer sua primeira página dinâmica com JavaScript! Recomendamos fazer os exercícios do curso, participar do fórum, e ajudar outras pessoas que estão fazendo esse mesmo curso para fixar o conhecimento obtido.

Por fim, te convidamos a avaliar o curso e compartilhar o que mais gostou, qual atividade achou mais interessante, e o que poderíamos melhorar. Também convidamos você para bons estudos em nossos próximos cursos. Até logo!
