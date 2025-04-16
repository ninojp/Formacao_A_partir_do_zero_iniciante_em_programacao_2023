# Cruso Alura - HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags

## Aula 1 - Editor de código VSCode

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Guilherme: Olá! Meu nome é Guilherme Lima.

Rafaella: E eu sou Rafaella Ballerini.

Guilherme: Estamos muito felizes em te acompanhar no curso HTML e CSS: Desenvolvendo uma página.

Rafaella: Afinal, o que é HTML? O que é CSS? São linguagens de programação? Como conseguimos transformar esses códigos em uma página web?

Guilherme: Aprenderemos do zero a:

- utilizar páginas HTML;
- onde escrever nossos arquivos HTML e CSS;
- para que servem essas duas linguagens.

Este curso é indicado para pessoas que nunca utilizaram HTML e CSS na vida. Se você se encaixa nessa descrição, te convidamos para mergulhar juntos!

HTML e CSS com Gui Lima e Rafa Ballerini aqui na Alura!

### Aula 1 - Criando um arquivo - Vídeo 2

Transcrição  
Rafaella: Antes de começar a codar, criaremos um arquivo com outro tipo de extensão, a qual estamos mais acostumados, para entendermos como este arquivo é criado. A primeira etapa será abrir um editor de texto — pode ser o Docs do Google, o Word ou mesmo um bloco de notas. Vamos escrever neste documento.

Guilherme: A ideia é entender que a criação de um código HTML ou CSS é similar à criação de um documento de texto. A diferença é que, no arquivo do Docs, existem elementos que nos auxiliam nessa criação.

Rafaella: Exato, elementos visuais.

Guilherme: Até de interface. Todo texto que lemos — como por exemplo um livro — possui um título. Vamos criar um título?

Rafaella: Sim. Se abrirmos o Docs do Google, veremos no topo da página uma barra de menus. Abaixo do menu "Formatar" temos uma lista de submenus de estilo que nos permite modificar automaticamente a configuração da fonte, sem precisar realizar modificações manualmente. Vamos abrir esse submenu e selecionar a opção "Título". No corpo do documento escreveremos "Isso é um título".

Guilherme: Temos um título. Pressionaremos "Enter" no final dessa linha e veremos que o tamanho do nosso cursor diminuiu. Na nova linha, o documento espera o formato "parágrafo", que consiste em um texto menor.

Rafaella: Este formato "parágrafo" é o padrão do Docs do Google. Nessa linha escreveremos "isso é um parágrafo". Podemos ver como é diferente a formatação entre o título e o parágrafo.

Guilherme: Este exemplo parece muito simples, mas explicaremos a ideia posteriormente. Os livros, geralmente, possuem imagens. Vamos acrescentar uma imagem do HTML 5?

Rafaella: Vamos. Buscaremos no google por "html 5" e clicaremos na aba "Imagens", na qual salvaremos uma imagem da logo do HTML 5. O nome do arquivo será html 5. Retornaremos ao Docs do Google, abriremos a nossa imagem e a arrastaremos para o documento que estamos editando.

Guilherme: Foram criados um título, um parágrafo e uma imagem. Você não deve estar entendendo nada. Contudo, a ideia é a seguinte: definimos que o título é um título clicando nos estilos e aplicando-os ao texto. No HTML fazemos algo parecido, porém sem clicar em menus.

Rafaella: Exatamente. As nossas páginas web também utilizam títulos, assim como os livros. Por exemplo, quando entramos em páginas de notícias percebemos um título grande, vários parágrafos com notícias e imagens embutidas. Precisamos pensar como uma página web funciona. Ela também possui esses elementos. Entretanto, para desenvolvermos um HTML não temos menus de estilização prontos, em vez disso utilizaremos códigos.

No caso do HTML, utilizaremos as tags. Elas serão responsáveis por informar quais trechos serão títulos, por exemplo.

Guilherme: Boa. Precisamos aprender todas as tags de uma só vez?

Rafaella: Não.

Guilherme: Não façam isso, por favor.

Rafaella: É uma questão de prática. Devemos analisar o que se encaixa melhor em cada contexto. Não adianta simplesmente decorar.

Guilherme: É isso aí. Vamos prestar atenção em um detalhe interessante, que é a extensão. Vamos dar um nome para esse documento?

Rafaella: Vamos. O nome será "Exemplo".

Guilherme: Baixaremos este arquivo. Quando clicamos no menu "Arquivo" localizado na barra de menus, uma lista de submenus é exibida. Selecionaremos o submenu "Fazer download" e nele veremos uma lista com vários tipos de extensão. Elas são formas com as quais esse arquivo será representado, ou seja, como ele vai funcionar. Pode ser um arquivo DOCX, um PDF, um TXT, e até mesmo um HTML compactado!

Podemos codar a partir de um editor de texto como o Docs Google ou o Word?

Rafaella: Não recomendamos.

Guilherme: Não conhecemos ninguém que faz isso.

Rafaella: Como pessoas desenvolvedoras, utilizamos na prática ferramentas específicas para essas tecnologias: os editores de código, algo como ambientes ou IDEs.

Neste curso utilizaremos um editor muito bom para códigos HTML e CSS: o Visual Studio Code, ou VS Code.

Guilherme: A seguir, aprenderemos como baixar e instalar o VS Code na nossa máquina para criarmos nosso arquivo HTML e desenvolver as nossas páginas.

### Aula 1 - Preparando o ambiente

No curso, usaremos uma ferramenta chamada [Visual Studio Code](https://code.visualstudio.com/), que é um editor de código desenvolvido pela Microsoft para Windows, Linux e macOS. Caso queira acompanhar os instrutores com as mesmas configurações, reserve um tempinho para a instalação do mesmo.

Para baixar o VSCODE, você pode procurar no Google por Visual Studio Code e clicar no primeiro link que aparece:

Tela do Google com o resultado da busca sobre Visual Studio Code

Se o seu sistema operacional for Windows você pode clicar para baixar no botão Download for Windows:

Tela da página de download do Visual Studio Code

Senão você pode clicar logo abaixo em other platforms que irá abrir uma página com opção de download para Linux e macOS também:

Tela da página de download do Visual Studio Code com foco em other platforms

Tela da página de download do Visual Studio Code para Linux e macOS

Se o seu sistema operacional for o Windows 8, 10 ou 11, siga os seguintes passos para instalação:

Tela da página de download do Visual Studio Code mostrando a opção do Windows destacada

Após clicar na opção de baixar para Windows, o instalador do Visual Studio Code vai para a pasta de Downloads do seu computador. Acesse a pasta, localize o arquivo de instalação, clique com o botão direito sobre ele e “Execute como administrador”.

Tela da pasta que contém o arquivo de instalação do Visual Studio Code, na qual mostra destacada a opção de Executar como administrador, que aparece após clicar com o botão direito do mouse sobre o arquivo, para iniciar a instalação

Após aceitar as permissões do Windows para a instalação, o instalador será iniciado e nessa etapa você deve aceitar o acordo de licença para poder prosseguir.

Tela inicial do instalador que requer marcar a opção de Eu aceito o acordo antes de poder prosseguir com o botão Próximo destacado no canto inferior direito

A próxima tela é para você selecionar o local de destino, ou seja, onde o Visual Studio Code será instalado no seu computador. Caso prefira, pode deixar como está sem alterar nada e clique em “Próximo”. Antes de prosseguir com a instalação, é importante lembrar que para poder instalar o Visual Studio Code o seu computador tem que ter o espaço necessário livre.

Tela do instalador para selecionar o local de destino onde o editor será instalado.

A tela seguinte serve apenas para você decidir se o Windows criará ou não uma pasta do Visual Studio Code no Menu Iniciar, ou seja, no menu que encontramos quando clicamos no símbolo do Windows na barra de tarefas do computador ou até mesmo no nosso teclado. Você pode renomear a pasta se quiser e prosseguir.

Tela do instalador para selecionar se será criada ou não a pasta do menu iniciar do Windows, bem como o nome dessa pasta caso ela seja criada.

Essa próxima etapa é a seleção de tarefas adicionais que o Visual Studio Code será responsável ou capaz de fazer em seu computador. Recomendamos que marque todas as opções para poder desfrutar das diversas funcionalidades da ferramenta.

Tela do instalador para selecionar as tarefas adicionais que o Visual Studio Code será capaz de realizar.

Pronto, chegamos no final da configuração de instalação e agora podemos clicar na opção “Instalar” para executar a última etapa do processo, a instalação de fato.

Tela do instalador que exibe as configurações de instalação que selecionamos e dá a opção de Instalar de fato o editor.

Na próxima tela podemos ver o progresso da instalação, ou seja, da extração dos arquivos baixados para a pasta de destino que selecionamos. Após a barra de extração se completar, podemos prosseguir para a última tela.

Tela do instalador que mostra visualmente o progresso da instalação.

Chegamos na última tela, essa é apenas para informar se o Visual Studio Code foi instalado com sucesso. Você pode marcar a opção “Iniciar o Visual Studio Code” para abri-lo após o fechamento do instalador. Finalmente, ao clicar em “Concluir” o instalador será fechado e todo o processo finalizado. A partir disso você pode usar o VSCode normalmente.

Tela final do instalador que exibe o sucesso da instalação

Caso seu ambiente não seja Windows e tenha dúvidas durante a instalação ou no decorrer do curso, pode contar conosco criando um tópico no fórum ou interagindo no nosso servidor do servidor do Discord. Também não deixe de ajudar outros colegas. Vamos construir juntos essa grande comunidade da Alura? :)

### Aula 1 - Instalando o VS Code - Vídeo 3

Transcrição  
Rafaella: Instalaremos o VS Code para criar nosso primeiro arquivo do projeto.

Guilherme: Vamos lá. Abriremos uma aba no navegador e pesquisaremos Vs Code.

Rafaella: Ou Visual Studio Code. Clicaremos sempre no primeiro link retornado pelo buscador. Deixaremos disponível aqui o link do site do VS Code. Em seu interior, alinhado à esquerda, temos um botão denominado "Download for Windows". Vamos clicar nele.

Caso a plataforma utilizada não seja o Windows, basta clicar no botão à direita de "Download Windows", o qual abrirá um submenu para escolher entre baixar Stables ou Insiders, sendo possível escolher, para as duas opções, entre as plataformas macOS, Windows x64 e Linux x64.

Após baixarmos o editor de código, vamos clicar no arquivo e seguir os passos de instalação. Na etapa "Selecione o Local de Destino" é possível escolher o local de instalação. Podemos deixar na pasta padrão ou escolher outra. Na etapa "Selecionar Tarefas Adicionais" podemos instalar configurações. Marcaremos a checkbox da opção "Criar um atalho na área de trabalho" para que seja criado um ícone do VS Code em área de trabalho. No fim das etapas, clicaremos em "Instalar".

Guilherme: A instalação é bem simples.

Rafaella: Sim. Este é um dos motivos pelos quais decidimos utilizar esse editor no curso.

No fim da instalação, marcaremos a checkbox da opção "Iniciar o Visual Studio Code" e clicaremos em "Concluir". Neste momento o Visual Studio Code será aberto na tela, na primeira página: o Get Started (ou "Vamos começar"). Caso queiramos entender o funcionamento, podemos clicar nos links "Get Started with VS Code" ("Comece com VS Code") e "Learn the Fundamentals" ("Aprenda os Fundamentos").

Já que faremos juntos, não será necessário acessar esses links.

Criaremos o projeto em si. Que tal criarmos nossa pasta na área de trabalho para facilitar?

Guilherme: Sim.

Importante: Geralmente um projeto possui diversos arquivos, seja ele HTML, CSS, Python ou Java. Por isso, colocamos todos os arquivos deste projeto em uma pasta.

Vamos dar um nome para nossa pasta?

Rafaella: Vamos. Ela se chamará "Portfólio". Se clicarmos dentro dela veremos que ela está vazia.

Guilherme: O nosso desafio é abrir essa pasta no VS Code.

Rafaella: Exatamente. Abriremos novamente o VS Code, e na página inicial "Get Started", à direita, clicaremos na opção "Open Folder".

Caso você não possua mais a tela "Get Started" aberta, basta acessar a barra de menus no topo da aplicação e clicar em "File" (ou "Arquivo"). Com esse menu aberto, clicaremos no submenu "Open Folder" (ou atalho "Ctrl + K + Ctrl + O").

Após selecionarmos "Open Folder", uma janela será aberta, onde devemos procurar a nossa pasta "Portfólio" através do explorador e selecioná-la. Em seguida clicaremos em "Selecionar Pasta". Neste momento o editor vai abri-la automaticamente.

Guilherme: Antes de abrir a pasta, surgirá uma janela perguntando se a gente confia nos autores que criaram essa pasta.

Rafaella: Basta clicar na opção "Yes, I trust the authors" ("Sim, eu confio nos autores", em português).

Guilherme: A gente criou a pasta e ela está aparecendo no explorador do VS Code, localizado em uma coluna na lateral esquerda da tela. Por enquanto essa pasta não tem nada.

Rafaella: Nada. Ainda estamos com a tela principal do aplicativo exibindo o "Get Started".

Guilherme: Vamos fechar essa aba clicando no X acima dela, no canto superior esquerdo. No explorador vamos ser capazes de visualizar todo os nossos arquivos e documentos que temos na pasta "Portfólio".

Criaremos o primeiro arquivo HTML. Geralmente ele possui um nome padrão.

Rafaella: Sim. Quando precisamos encontrar o HTML principal da página, procuramos por "index.html" — o nosso índice.

Guilherme: Quando falamos do Word, vimos as extensões .docx, .txt e .pdf. O nosso HTML possui a extensão que é o .html. Portanto, criaremos o nome padrão que incide na maioria dos projetos: index.html.

Rafaella: Acessaremos o explorador e, ao lado do nome da nossa pasta, clicaremos no ícone de uma página com um símbolo de + embaixo, que corresponde à opção "New File". É possível também realizar esta ação através da barra de menus, clicando em "File > New File" (ou atalho "Ctrl + Alt + Windows + N").

Após clicarmos nessa opção, um campo de texto vazio será exibido abaixo do nome da nossa pasta. Em seu interior digitaremos o nome do novo arquivo: "index.html" e daremos "Enter".

Guilherme: Uma curiosidade: se clicarmos em "Ctrl + N", o sistema cria uma aba na tela principal denominada "Untitled-1" e com a extensão indefinida. No corpo da tela, será exibida a opção "Select a language" ("Selecionar a linguagem"). Após clicar nessa opção, será aberto um campo de texto vazio no qual digitaremos "html" e daremos "Enter". Desta forma será criado um novo arquivo HTML denominado "Untitled-1".

Para salvá-lo, basta digitar "Ctrl + S" para abrir uma janela de salvamento. Vamos selecionar a pasta "Portfólio", digitar no campo de texto o nome "index2.html" e clicar em "Salvar". Neste momento, ele surgirá no explorador do VS Code, logo abaixo do nosso index.html.

Rafaella: Legal, ele já fica dentro da pasta.

Guilherme: Vamos deletar esse arquivo index2.html, pois o criamos somente para explicação do atalho.

Rafaella: Vamos fechá-lo primeiro.

É importante perceber que quando fechamos a aba do arquivo, nós não estamos deletando-o do projeto. Sempre que quisermos deletar, iremos até o explorador e clicaremos no arquivo com o botão direito, selecionando a opção "Delete".

Guilherme: Instalamos o VS Code, criamos o arquivo index.html e abrimos a pasta do projeto. Nosso próximo desafio será codar o conteúdo.

Vamos voltar no modelo que criamos acessando o nosso arquivo do Google Docs para relembrar o conteúdo que precisamos implementar em nosso projeto. Precisamos criar um título, um parágrafo e uma imagem com HTML.

### Aula 1 - Iniciando o projeto

As boas práticas na organização de um projeto podem ser consideradas um dos pilares fundamentais nas etapas iniciais do desenvolvimento. É muito importante iniciarmos da forma correta. Levando em consideração o que vimos anteriormente, podemos afirmar que:

Resposta:  
É uma boa prática criarmos pastas e subpastas que explicitem e organizem os arquivos de código de forma lógica.

> Nem sempre seus projetos terão apenas dois ou três arquivos, a depender do nível de complexidade, podemos chegar na casa das centenas de arquivos. Portanto, é uma boa prática separarmos arquivos por categorias claras e objetivas fazendo uso de pastas e subpastas.

### Aula 1 - Nome do arquivo

No mundo fantasia do Pokemon, treinadores pokemon decidem criar um site eletrônico, o Pokémart.com: um site de comércio eletrônico onde os treinadores poderiam comprar e vender itens, como Pokébolas, Potions e Berries. Para começar, por enquanto, seguindo nosso padrão eles precisam criar um arquivo chamado:

Resposta:  
index.html

> É a página principal que o navegador carrega ao visitar o site.

### Aula 1 - Criando seu arquivo HTML principal

Seu amigo está construindo um site utilizando HTML e pediu que você analisasse o projeto que ele desenvolveu.

Ao explorar os arquivos do projeto, você percebeu que o nome da página HTML principal é “teste123.html”. Isso pode gerar algum problema?

Resposta:  
Não afeta o funcionamento, mas o ideal é nomear como "index.html", pois é o padrão utilizado para a página principal.

> É um padrão nomearmos nossa página principal como "index.html", essa prática pode ajudar futuramente na comunicação com um servidor.

### Aula 1 - Para saber mais: criação de pastas

Geralmente um projeto de Front-end possui vários arquivos sendo eles HTML, CSS, Javascript, etc. Quando iniciamos, precisamos criar uma pasta para organizar os nossos arquivos pois não queremos que nenhum se perca, não é mesmo?

Vamos lá:

Para criar o projeto basta criarmos uma pasta no computador, pode ser na área de trabalho mesmo:

Na área de trabalho clique com o botão direito do mouse na parte vazia da tela, nas opções clique em novo depois em pasta para criar uma nova pasta projeto:

Tela da área de trabalho criando nova pasta

Depois definimos o nome da pasta que vai ser o mesmo nome do nosso projeto:

Tela da área de trabalho inserindo nome na pasta

E agora basta abrir essa pasta dentro do VSCode para criar os arquivos nela e começar a codificar:

Tela do Visual Studio Code abrindo a pasta

No VSCode podemos visualizar a pasta com o nome do projeto e os arquivos do projeto:

### Aula 1 - O que aprendemos?

- Nessa aula, você aprendeu como:
- Diferenciar a criação de um arquivo no Google Docs e no HTML;
- Fazer download e instalar o Visual Studio Code;
- Criar pasta e abrir no editor de código.

## Aula 2 - Documentação e HTML

### Aula 2 - Preparando o ambiente - Vídeo 1

Nos próximos vídeos, os instrutores irão utilizar uma imagem de exemplo. Você pode [baixar essa imagem aqui](https://github.com/alura-cursos/html-logo/archive/refs/heads/main.zip).

### Aula 2 - Documentação e estrutura básica do HTML - Vídeo 2

Transcrição  
Rafaella: Criamos nosso primeiro arquivo HTML. Agora vamos aprender a escrever o texto em HTML.

Guilherme: Isso. O que geralmente acontece quando queremos aprender uma linguagem de programação ou uma tecnologia nova? Procuramos o manual. No nosso caso, procuramos a documentação da linguagem.

Rafaella: Exatamente. Temos manuais de diversas tecnologias. Se quisermos aprender Javascript, procuraremos a documentação. Isso é muito importante.

Guilherme: Vamos abrir a documentação. Recomendamos, inicialmente, a w3s html intro. Vamos digitar esse nome na barra de pesquisa do Google.

Clicaremos no primeiro link retornado na pesquisa, o qual nos direcionará para a página de introdução do HTML no site W3Schools. Essa página nos mostra o conteúdo em inglês. Vamos colocá-la em português.

No topo da tela há uma barra de menus branca. Abaixo desta, há uma barra secundária de menus na cor preta, onde clicaremos no ícone de planeta denominado "Translate W3Schools", localizado à direita. Neste momento, à esquerda desse ícone, veremos um botão denominado "selecione o idioma", no qual clicaremos e selecionaremos a opção "Português". Após esse procedimento, a página será exibida em português.

Afinal, o que é HTML?

Rafaella: Encontraremos a resposta na página que abrimos. Nela há a seção "O que é HTML?", onde encontramos o seguinte tópico:

HTML significa Hyper Text Markup Language (ou "linguagem de marcação de hiper texto").
Ou seja, o HTML é uma linguagem de marcação. Existe uma polêmica envolvendo o HTML e que alimenta dúvidas sobre o HTML ser uma linguagem de programação ou não. De fato, o HTML é uma linguagem de marcação, e por isso, não se trata de uma linguagem de programação. Utilizamos o HTML para designar as partes do texto.

Retornando ao nosso documento de texto, podemos ver que marcamos a frase "Isso é um título" como um título. No caso do Docs Google, não precisamos escrever tags ou códigos para marcação, pois o programa utilizado facilita esse processo. Já no HTML utilizaremos tags para marcar títulos, parágrafos e imagens.

Guilherme: Voltando à página do HTML, ainda na seção "O que é HTML?" encontramos os dois tópicos abaixo:

HTML descreve a estrutura de uma página da Web.  
Os elementos HTML rotulam partes do conteúdo como "isto é um título", "isto é um parágrafo", "isto é um link", etc.
Isso significa que teremos um local onde rotularemos cada elemento da página: é como se indicássemos "isto será um título", "isto será uma imagem","estes serão dois parágrafos". O objetivo do HTML é marcar toda a página Web.

É interessante notar que existe um código por trás das páginas com as quais interagimos indicando a função de cada elemento.

Rafaella: Abaixo da seção "O que é HTML?" temos a seção "Um Documento HTML Simples" no qual é possível ver um spoiler do que seriam as tags:

```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
```

Guilherme: Se olharmos este trecho não vamos entender muita coisa. A melhor forma para aprendermos uma técnica ou linguagem relacionada à tecnologia é praticando. Não existe outro jeito.

Rafaella: Exatamente.

Guilherme: Nós criamos um arquivo simples no Docs Google, indicando um título, um parágrafo e uma imagem. Conforme praticamos o HTML, essa tarefa se tornará comum.

Conforme podemos ver no trecho de exemplo, toda propriedade do HTML começa com o sinal < e termina com o sinal >.

Rafaella: No interior destes sinais, temos o rótulo daquela porção da página Web.

Rafaella: Exatamente. Vamos criar esse código no VS Code. Criaremos uma tag por vez e entenderemos o que cada uma significa.

Rafaella: Perfeito.

A primeira se chama `<!DOCTYPE html>`. Conforme a própria página do HTML define, se trata de uma declaração que define o documento como um documento HTML5. Mesmo que criemos a extensão .html, é importante declarar esta tag pois ela define a versão. É possível copiá-la e colar no VS Code, mas vamos escrever do zero para que entendamos melhor.

Retornaremos ao VS Code, criaremos nossos sinais < e >. Entre eles escreveremos um !DOCTYPE em letras maiúsculas, daremos um espaço e escreveremos html em letras minúsculas.

`<!DOCTYPE html>`

Guilherme: O que a Rafa comentou é interessante. Essa tag serve para identificar que estamos trabalhando nesse arquivo HTML com a versão 5. Esta será a versão utilizada quando abrirmos este projeto no navegador. Se estamos falando da versão 5, significa que existiram versões diferentes? A resposta é sim. Faremos um teste sobre isso depois.

Rafaella: Retornando à página do HTML, a próxima tag a ser copiada será a `<html>`. Esta tag indica que tudo o que existir dentro dela será o documento HTML.

Guilherme: A documentação nos informa que o `<html>` é o elemento raiz de uma página HTML, ou seja, este elemento será a base para tudo o que existir na página.

Vamos retornar ao VS Code e adicioná-la abaixo de `<!DOCTYPE html>`.

```html
<!DOCTYPE html>
<html>
```

Neste momento, o Visual Studio Code completará automaticamente a tag que abrimos com a tag posterior, ou seja, de fechamento.

```html
<!DOCTYPE html>
<html></html>
```

O que seria a tag posterior? Temos algumas tags que, para serem implementadas, precisam de uma abertura e de um fechamento.

Se voltarmos à página do HTML no navegador, veremos que existe a tag de fechamento `</html>` no final do trecho, precedida por vários outros elementos. Isso significa que todos os elementos entre `<html>` e `</html>` farão parte desta tag.

Toda tag de fechamento possui uma barra (/) após o sinal <.

Caso o VS Code não preencha a tag automaticamente, basta escrevê-la manualmente.

Posicionaremos o cursor no meio das tags `<html>` e `</html>` e pressionaremos "Enter" para abrir um espaço onde começaremos a escrever nosso documento.

```html
<!DOCTYPE html>
<html>

</html>
```

Guilherme: Já temos a nossa tag HTML. No caso do `<!DOCTYPE html>` não existe uma tag de fechamento. Isso é um padrão. Não sabemos o motivo exato disso.

Rafaella: Exato. Existem tags com fechamento e outras sem. Neste curso veremos todos os tipos de tags.

Antes de continuar, salvaremos o código com o atalho "Ctrl + S".

Guilherme: O HTML indica que a nossa página abriu. Voltaremos ao navegador e veremos nossa próxima tag: `<head>`, a qual, segundo a documentação, contém meta informações sobre a página HTML.

Rafaella: O que seriam meta informações? São as informações sobre o próprio documento. São metatags. Vamos adicioná-las dentro do tal `<head>`.

Vamos retornar ao VS Code, e entre as tags de abertura e fechamento do html adicionaremos a `<head>`.

Importante: Para indentarmos o código — ou seja, para mantê-lo organizado visualmente — devemos pressionar "Tab" a cada tag que abrirmos no interior de outra, criando dessa forma uma distância entre as tags e impedindo que todo o código fique "reto". Após a abertura e o fechamento da head pressionaremos "Enter". Dentro do espaço criado da <head> escreveremos as meta informações da nossa página.

```html
<!DOCTYPE html>
<html>
    <head></head>
</html>
```

Guilherme: Temos conteúdos na página que podemos visualizar e outros que não vemos diretamente.

Rafaella: Exato. Consultando a página do HTML, veremos que a primeira tag de metainformação é o `<title>`. No VS Code, vamos adicioná-la entre as tags do `<head>`, sem esquecer de pressionar "Tab" antes.

```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>
</html>
```

Guilherme: Vamos dar um título para a página entre as tags do title?

Rafaella: Vamos. Pode ser "Portfolio"?

Guilherme: Pode.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Portfolio</title>
    </head>
</html>
```

Rafaella: Salvaremos o arquivo e abriremos no navegador. Para abri-lo, acessaremos o explorador de arquivos do computador, acessaremos o local em que salvamos a pasta do projeto. Abriremos essa pasta e clicaremos duas vezes no arquivo que estamos escrevendo: o index.html. Podemos abri-lo com qualquer navegador disponível. Neste caso, abriremos no mesmo navegador que estamos usando.

Guilherme: Neste momento o navegador abrirá uma tela em branco. No corpo não tem nada, mas a metainformação que passamos no <head> deu um nome para a nossa aba: a aba se chama Portfolio. Ou seja, criamos um arquivo HTML e demos a ele um title denominado Portfolio.

A seguir, abordaremos de fato o conteúdo que queremos criar

### Aula 2 - Para saber mais: documentação do HTML

A importância da documentação

Ao começar a aprender HTML, uma dúvida comum é: "Como saber o que escrever e quais são as regras dessa linguagem?" Em outras palavras, onde encontrar informações confiáveis para aprender? A resposta é: na documentação oficial ou em sites de referência. Mas mesmo lendo a documentação, quem está começando pode se sentir perdido ao ver tantos códigos e termos. Como podemos aprender de forma prática e clara? Consultando sempre a documentação.

O que é:

A documentação é um guia que toda pessoa desenvolvedora deve levar a sério no dia a dia, é através dela que aprendemos como funcionam as linguagens de programação e também ferramentas e bibliotecas no mundo da tecnologia.

Sua importância:

A documentação é muito importante no aprendizado e no desenvolvimento de aplicações. Afinal quem melhor que a pessoa que criou a ferramenta para nos orientar sobre as suas funcionalidades, não é mesmo?

Quando devemos utilizar:

Devemos ler a documentação sempre que precisamos saber a estrutura de um método, ou quando queremos saber algum comando ou recurso de uma biblioteca, ou até mesmo quando esquecemos certa funcionalidade e precisamos relembrar.

Outra forma de ajuda:

Existem também as comunidades de tecnologia e programação que são bem úteis para tirarmos nossas dúvidas e aprendermos mais, como por exemplo a Stackoverflow que é uma das maiores comunidades de ajuda sobre programação e tecnologia atualmente. É uma comunidade onde você vai encontrar dúvidas sobre quase todas as linguagens de programação, entre outras ferramentas. Super recomendável acessá-la.

Aqui na Alura tem um artigo muito legal sobre comunidades, você pode conferir acessando Comunidades Front-End. Você pode acessar também a documentação do HTML que foi apresentada na aula através do link da w3schools. A w3schools também é uma ótima opção para quem precisa aprender algum método novo ou consultar exemplos sobre determinada linguagem. É um site bem completo e de fácil compreensão.

A importância da prática:

HTML é simples de começar, mas exige prática para entender como as tags funcionam juntas. Assim como aprendemos a formatar um texto no Word com o tempo, escrever HTML se torna natural conforme praticamos.

Próximos passos:

Agora que aprendemos a criar a estrutura básica e adicionamos um título à página, o próximo passo será incluir elementos visíveis no corpo da página, como títulos, parágrafos e imagens. Vamos construir isso juntos no VS Code!

### Aula 2 - Criando o corpo da página - Vídeo 2

Transcrição  
Rafaella: Temos o início da nossa página Web. Já adicionamos a metainformação title a qual aparece na aba da nossa página. Ainda não escrevemos nada da estrutura, do corpo da página. Faremos isso agora.

Guilherme: Vamos retornar à documentação do HTML para ver o próximo passo.

```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
```

Rafaella: Já escrevemos tudo até a tag de fechamento `</head>`.

Guilherme: Entraremos na tag `<body>`. A documentação nos informa que ele define o corpo do documento e é um recipiente para todos os conteúdos visíveis, como cabeçalhos, parágrafos, imagens, hiperlinks, tabelas e listas. Vamos criar nossa tag retornando ao VS Code.

Rafaella: A tag `<body>` não ficará dentro do `<head>`. A palavra "head" significa cabeça, e "body" significa corpo. Se pensarmos bem, o corpo fica abaixo da cabeça.

Vamos criar o `<body>` abaixo do `<head>`, mas ainda dentro da tag `<html>`. Já que ambas estarão no mesmo nível em relação ao html, não pressionaremos "Tab".

Entre as tags de abertura e fechamento do body, pressionaremos "Enter" para abrir um espaço onde iremos escrever.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Portfolio</title>
    </head>
    <body>
    
    </body>
</html>
```

O que adicionaremos neste espaço?

Guilherme: Vamos voltar para o nosso documento do Google Docs para ver o que escrevemos. Lá encontraremos, em primeiro lugar, o nosso título. Precisamos escrever "Isso é um título" lá no HTML.

Voltaremos ao VS Code e escreveremos dentro do `<body>` a frase "Isso é um título".

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Portfolio</title>
    </head>
    <body>
        Isso é um título
    </body>
</html>
```

Salvaremos o código e voltaremos à nossa página por meio do navegador, onde veremos o resultado. No canto superior esquerdo vemos a frase "Isso é um título" bem pequena. Ela não se parece com um título.

Rafaella: Não é só porque escrevemos "título" que o HTML entenderá que queremos um título. Ele não entende português. Nós, pessoas programadoras, precisamos rotular esse texto como um título de fato. Fazemos isso com o uso de tags.

Já vimos que o `<title>` se trata de uma meta informação do nome da página, que é inserida na aba. Existe uma outra tag denominada heading, a qual declaramos somente com `<h>`, o qual é acompanhado de um número que designa o peso daquele título. Podemos utilizá-la tanto para títulos quanto para subtítulos. Vamos envolver o nosso título com a heading no tamanho 1 — digitaremos portanto o comando `<h1>` à esquerda, e fecharemos com `</h1>` no final do texto.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Portfolio</title>
    </head>
    <body>
        <h1>Isso é um título</h1>
    </body>
</html>
```

Guilherme: Temos o `<html>` aberto, todo o seu conteúdo e em seguida o seu fechamento. Abrimos e fechamos a tag `<h1>`, e tudo que escrevemos no espaço entre essas tags será o heading 1.

Rafaella: Exato.

Guilherme: Alguma coisa mudou no código?

Rafaella: Vamos ver. Salvaremos o código, retornaremos ao navegador e atualizaremos a página. Ainda vemos a frase "Isso é um título", mas agora ela possui um tamanho maior, mais compatível com um título.

Guilherme: Visualmente já está diferente.

Rafaella: Seria interessante entendermos como seriam os headings de tamanho 2, para o subtítulo, e de tamanho 3. O h2 é maior do que o parágrafo padrão, mas é menor do que nosso h1. As headings diminuem de tamanho conforme aumentamos o número.

Guilherme: Muito bom. Nossos títulos geralmente possuem uma única tag de heading. E devemos manter essa ordem, de cima para baixo: h1, depois h2, e assim por diante.

Rafaella: Exato.

Guilherme: As headings vão até qual número?

Rafaella: Até h6.

Guilherme: Vamos tomar cuidado com isso.

E para o nosso parágrafo, Rafa?

Rafaella: Se escrevermos o parágrafo sem uma tag, o conteúdo será exibido. Contudo, o ideal é sempre adicioná-las, pois a página, por vezes, pode interpretar aquele texto de uma forma errada.

Acessibilidade: O uso das tags é essencial para pessoas que utilizam leitores de tela. Sem esse mecanismo, a navegação se torna muito difícil para esse público.

Abaixo do `<h1>` vamos adicionar a tag `<p>`, de parágrafo, com abertura e fechamento. Entre elas adicionaremos o texto "Isso é um parágrafo".

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Portfolio</title>
    </head>
    <body>
        <h1>Isso é um título</h1>
        <p>Isso é um parágrafo</p>
    </body>
</html>
```

Salvaremos o código e retornaremos ao navegador. Atualizaremos a página e veremos o texto "Isso é um título". e logo abaixo dele vemos o texto "Isso é um parágrafo", em fonte menor. Agora temos nosso parágrafo.

Guilherme: Mesmo que não tenhamos alterado o tamanho do texto, o navegador agora sabe que se trata de um parágrafo. Se não escrevêssemos nada, não seria uma boa prática, por conta da acessibilidade. Precisamos entender desde o começo que as tags auxiliam o navegador a entender nossa página.

Rafaella: Exatamente.

Guilherme: Temos um desafio final: precisamos inserir a imagem. Se retornarmos ao nosso documento no Docs Google, veremos a imagem escolhida — o ícone do HTML5. Vamos adicioná-la ao nosso código.

Rafaella: Nós já havíamos salvado essa imagem em nosso computador, portanto vamos buscá-la através do explorador. Em seguida, vamos simplesmente arrastá-la para o explorador do VS Code.

Dica: É possível também inserir a imagem no projeto através da barra de menus do VS Code, através do caminho "File > Open File" e em seguida arrastá-la da tela para o explorador.

Guilherme: Você não precisa utilizar essa mesma imagem no seu projeto, pode escolher uma que você quiser! Mesmo assim, disponibilizaremos esta imagem nas atividades do curso.

Rafaella: Pode ser um gatinho, uma calopsita, qualquer coisa.

Neste momento, uma aba da imagem estará aberta na tela principal do VS Code. Vamos fechá-la clicando no X localizado nessa aba. Para trazer essa imagem para nosso HTML utilizaremos a tag `<img>`, que vem da palavra "image" (ou "imagem"). Vamos adicioná-la abaixo do parágrafo e dentro do `<body>`, pois este é o local onde adicionaremos tudo o que é visível.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Portfolio</title>
    </head>
    <body>
        <h1>Isso é um título</h1>
        <p>Isso é um parágrafo</p>
        <img >
    </body>
</html>
```

A `<img>` é uma tag que não possui fechamento. Para adicionar a imagem nesta tag não vamos arrastá-la, copiá-la ou colá-la, mas sim escrever o seu endereço. Com este endereço, a tag buscará a imagem e a exibirá em nossa tela.

Guilherme: Por enquanto, a aplicação não sabe que imagem é. Precisamos informar a ela.

Rafaella: Isso mesmo. Informaremos onde está a imagem através da propriedade src. As propriedades ficam dentro dos sinais de maior e menor da nossa tag. Quando digitarmos "src" e pressionarmos "Enter", o próprio VS Code deverá completar o comando adicionando o sinal de igual = e duas aspas duplas "". Caso não tenha ocorrido o autopreenchimento, podemos digitar manualmente.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Portfolio</title>
    </head>
    <body>
        <h1>Isso é um título</h1>
        <p>Isso é um parágrafo</p>
        <img src="">
    </body>
</html>
```

Inserimos o src que vem de "source" ("fonte", em português), adicionamos o sinal de igual e abrimos aspas para escrever entre elas onde está o endereço da imagem. Neste caso, nossa imagem possui o nome que demos anteriormente: html.png, e se encontra na mesma pasta do nosso arquivo index.html: a pasta "Portfolio". Já que ambos estão na mesma pasta, basta adicionarmos html.png entre as aspas de nosso src.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Portfolio</title>
    </head>
    <body>
        <h1>Isso é um título</h1>
        <p>Isso é um parágrafo</p>
        <img src="html.png">
    </body>
</html>
```

Salvaremos o código e retornaremos ao navegador. Atualizaremos a página e veremos o Título, o parágrafo, e logo abaixo deste último veremos a nossa imagem.

Guilherme: Nosso projeto está bem mais próximo da expectativa!

Agora vamos abordar um aspecto muito importante da nossa página: não é só o `<head>` que carrega as meta informações relevantes para a nossa página. No <body> também temos informações muito relevantes para a página e que não são visíveis. Essas informações são utilizadas por pessoas que utilizam leitores de tela.

Rafaella: Exato. O navegador quando utiliza leitores de tela sabe identificar o que são títulos, subtítulos, e consegue lê-los na ordem correta.

Como o navegador lê uma imagem e a exibe para as pessoas que utilizam leitores de tela? Nós precisamos descrever essa imagem, e para isso utilizamos dentro de <img> a propriedade alt. Após digitá-la, daremos "Enter" e o sistema completará a estrutura com o sinal de igual e as aspas duplas.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Portfolio</title>
    </head>
    <body>
        <h1>Isso é um título</h1>
        <p>Isso é um parágrafo</p>
        <img src="html.png" alt="">
    </body>
</html>
```

O alt permite que adicionemos um texto alternativo para nossa imagem. Qual texto digitaremos para a imagem do HTML5?

Guilherme: Podemos descrevê-la como "Logo do HTML 5".

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Portfolio</title>
    </head>
    <body>
        <h1>Isso é um título</h1>
        <p>Isso é um parágrafo</p>
        <img src="html.png" alt="Logo do HTML 5">
    </body>
</html>
```

Isso muda algo na nossa página?

Rafaella: Na página não há nenhuma mudança. O texto alternativo será lido somente por leitores de tela que passarem por essa imagem. Entretanto, em casos de quebra de imagem, o texto alternativo será exibido no lugar dela.

Para aumentar a acessibilidade e para nos prepararmos melhor em casos de erro na aplicação, é muito importante adicionar um bom texto alternativo em todas as nossas imagens.

### Aula 2 - Adicionando uma imagem

Nessa aula, aprendemos que para inserir uma imagem em sua página é necessário utilizar a tag `<img>`. Pensando nisso, considere o código a seguir:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Portfólio</title>
    </head>
    <body>
        <h1>Isso é um título</h1>
        <p>Isso é um parágrafo</p>
        <img scr="html.png" alt="Logo do HTML 5">
    </body>
</html>
```

Assinale as alternativas corretas a respeito do código acima:

Resposta:  
Apenas o texto alternativo será exibido e a imagem estará indisponível, porque o atributo src da tag `<img>` foi escrito incorretamente.

> A imagem não será localizada e não conseguiremos visualizá-la na página, pois escrevemos scr ao invés de src no atributo da tag . A página aparecerá da seguinte forma:

Captura de tela da parte superior de uma página HTML, exibindo um título principal, um parágrafo de texto e um espaço reservado para o logo do HTML5 que não é mostrada, apenas o alt da imagem aparece. O atributo src vem do termo em inglês “source”, que significa fonte, pois indica o caminho onde a imagem está localizada.

### Aula 2 - Quirks Mode e Live Server - Vídeo 5

Transcrição  
Rafaela: Temos uma página Web mais bonita, com todos os nossos elementos. Porém, ainda podemos brincar com esse código.

Guilherme: Exatamente. Quando seguimos a documentação de uma linguagem, sentimos uma certa desconfiança: será que se tirarmos uma propriedade indicada, conseguiremos ter o mesmo resultado?

Vamos alimentar a nossa curiosidade e mexer no código, tirando e colocando elementos de volta no lugar. Por exemplo, vamos retirar a primeira linha: o `<!DOCTYPE html>`.

Rafaela: Vamos. Esta linha foi indicada como importante para indicar a versão do HTML.

Guilherme: Isso. Vamos retirá-la e salvar o código.

```html
<html>
    <head>
        <title>Portfolio</title>
    </head>
    <body>
        <h1>Isso é um título</h1>
        <p>Isso é um parágrafo</p>
        <img src="html.png" alt="Logo do HTML 5">
    </body>
</html>
```

Rafaela: Retornaremos ao navegador e atualizaremos a nossa página. Veremos que nada foi alterado. Aparentemente tudo está funcionando.

Guilherme: Aparentemente, contudo, houve sim uma alteração.

Existe uma forma de verificar o código HTML e CSS de qualquer página da internet. Para isso, na tela do navegador, clicaremos com o botão direito e selecionaremos a opção "Inspecionar". Neste instante, será aberta uma aba à direita da página Web, onde existe uma barra de menus superior. Nela, selecionaremos o menu "Elements". No interior deste menu será exibido o código-fonte da nossa página index.html.

Vamos acessar esse código-fonte e perceber que, quando passamos o cursor por cima de uma tag, o navegador realça o elemento correspondente diretamente na página Web. Vamos conferir se todos os elementos que codamos estão na página: `<html>`, `<head>`, `<title>`, `<body>`, `<h1>`, `<p>` e `<img>`.

Aparentemente, está tudo igual. Ou seja, a retirada do `<!DOCTYPE html>` não mudou a parte visual da nossa página. Contudo, houve uma alteração na forma como o navegador enxerga essa página. Podemos ver a alteração dentro da própria aba "Inspecionar", selecionando o ícone de balão de comentário, localizado à direita da barra de menus superior. Este ícone aponta as issues da página. Após a seleção, será aberta uma aba secundária denominada "Issues", na parte inferior da aba "Inspecionar", a qual exibirá a seguinte mensagem:

Page layout may be unexpected due to Quirks Mode

Podemos traduzi-la como "O layout da página pode ser inesperado devido ao Modo Quirks". Ou seja, a página está em "modo peculiaridades". Não sabemos o que isso significa. Vamos clicar nesta mensagem para entender mais a fundo.

Abaixo da mensagem será exibida uma explicação mais detalhada do problema apontado,a qual apresentaremos uma versão resumida e traduzida:

Um ou mais documentos desta página foram abertos em um modo diferente do esperado. O Modo Quirks existe por razões históricas. Caso ele tenha sido acionado de forma não intencional, adicione o `<!DOCTYPE html>` para renderizá-la sem o Modo Quirks.

Afinal, o que é o Modo Quirks? Vamos acessar o link disponibilizado acima, o qual nos direcionará para uma nova página. Na parte superior dela veremos o título "A página não tem o doctype HTML, acionando assim o Modo Quirks". Esta página possui várias informações e links sobre o Modo Quirk, o modo Standards, códigos-fonte, etc. Recomendamos que você a leia posteriormente.

Vamos resumir o problema: antigamente existiam dois grandes navegadores, o NetScape e o Internet Explorer. Quando codávamos, precisávamos informar para qual navegador a página estava sendo construída. Hoje em dia isso não é mais necessário, a não ser que seja algo intencional — como em casos de projetos antigos.

Na página sobre Quirks Mode e Standards Mode existe a seção "Como os navegadores determinam qual modo usar?", onde há uma explicação sobre a questão da determinação de modos. Nela veremos que, para informarmos ao navegador que utilizaremos o HTML5, precisamos adicionar o `<!DOCTYPE html>`.

Rafaela: Atualmente, todos os navegadores sabem utilizar o HTML5.

Guilherme: Isso mesmo. Vamos sair do modo peculiaridades.

Rafaela: Vamos fechar as abas de explicação e a aba "Inspecionar". Em seguida retornaremos ao VS Code.

Guilherme: Para sair desse modo, pressionaremos "Ctrl + Z" para recuperar o DOCTYPE que havíamos deletado.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Portfolio</title>
    </head>
    <body>
        <h1>Isso é um título</h1>
        <p>Isso é um parágrafo</p>
        <img src="html.png" alt="Logo do HTML 5">
    </body>
</html>
```

Salvaremos esse código e voltaremos ao nosso projeto aberto no navegador. Nele pressionaremos "F5" para atualizar a página e abriremos novamente a aba "Inspecionar". Veremos que, à direita da barra de menus, não existe mais o ícone de issues.

Existe um ponto que incomoda em nossa página: a necessidade de atualizá-la sempre que alteramos o código.

Rafaela: Vamos adicionar uma extensão ao nosso editor de código para que ocorram atualizações automáticas na nossa página a cada salvamento. Acessaremos a coluna lateral esquerda do nosso VS Code, onde selecionaremos o ícone "Extensions" ("Extensões"). Podemos acessá-lo também por meio do atalho "Ctrl + Shift + X".

Neste momento, o explorador de arquivos será substituído por um campo de busca. Nele digitaremos "live server" e faremos a busca. Nos resultados abaixo do campo, buscaremos a opção "Live Server", a qual possui milhões de downloads.

Guilherme: Muitas pessoas a utilizam.

Rafaela: Nós, inclusive. Após a seleção, essa extensão será aberta na tela principal do VS Code, onde clicaremos no botão "Install". Após o término da instalação, Ela será habilitada automaticamente. Caso contrário, basta clicar no botão "Enable". Em seguida fecharemos a aba dessa extensão.

Existem extensões para milhares de tarefas, inclusive para embelezar sintaxes de linguagens específicas. Podemos explorá-las e utilizá-las sempre que quisermos.

Guilherme: Como a extensão funciona?

Rafaela: Agora temos um botão na barra inferior do VS Code denominado "Go Live". Como o arquivo HTML selecionado, clicaremos neste botão. Uma aba de Alerta de Segurança será aberta pelo nosso sistema, na qual selecionaremos a opção "Permitir acesso". Neste momento será aberta uma aba com a nossa página HTML no nosso navegador.

Guilherme: Vamos manter as duas abas abertas. Veremos que ambas estão rodando de locais diferentes: a antiga está rodando no local do arquivo, enquanto a nova (com live server ativo) exibe a URL com um número constituído de 10 dígitos.

Retornando ao VS Code, alteraremos o parágrafo adicionando "interessante" ao final da frase.

`<p>`Isso é um parágrafo interessante`</p>`

Salvaremos esse código e voltaremos ao navegador. Na aba nova, veremos a nossa alteração.

Rafaela: Na aba antiga, a mudança só aparecerá se atualizarmos a página.

Guilherme: A principal vantagem do live server é não precisar atualizar a página a todo momento.

Rafaela: O único passo necessário é salvar o arquivo no editor.

### Aula 2 - Para saber mais: extensões do VSCode

Agora que você conheceu o Live Server, que tal explorar mais algumas extensões que podem facilitar seu dia a dia no desenvolvimento com o VSCode?

Para isso, preparamos o artigo Extensões VS Code: descubra quais são as mais usadas, para que você conheça outras extensões e escolha aquelas que preferir para auxiliar em seus estudos!

### Aula 2 - Para saber mais: estruturando uma página HTML

A estrutura básica do HTML

Para criar um arquivo HTML funcional devemos seguir um padrão de construção, utilizando um conjunto de elementos, ou seja, os hipertextos, que se conectam entre si formando a página. Como já visto anteriormente, os elementos HTML ou também chamados de tags HTML, são utilizados para informar ao navegador que tipo de estrutura é essa que está sendo construída, podendo ser títulos, parágrafos, imagens, links, entre outros.

Um exemplo prático dessa estrutura básica seria:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

É importante entender como funciona e o que faz cada elemento dentro da estrutura básica do HTML, e para isso deixamos como recomendação o artigo O que é o HTML e suas tags? Parte 1: estrutura básica. Lembrando que esse artigo compõe uma série de cinco artigos sobre o que é HTML e suas tags, os quais podem ser encontrados aqui na plataforma da Alura e são perfeitos para desenvolvedores HTML de primeira viagem.

### Aula 2 - Lista de exercícios

O que é:  
Boas-vindas à nossa lista de exercícios "Mão na massa", um caminho prático e envolvente para aprender e aprimorar suas habilidades em tecnologia. Aqui, você não encontrará longas leituras teóricas ou explicações abstratas. Em vez disso, nossos exercícios são projetados para colocar você no centro do processo de aprendizado, permitindo que você construa, experimente e explore conceitos tecnológicos de forma direta e aplicada.

Para que serve:  
Esta lista é uma ferramenta dinâmica para aprender, reforçar e aprimorar habilidades práticas em programação e desenvolvimento web. Cada exercício é uma oportunidade de aplicar conhecimentos teóricos em cenários reais, preparando você não apenas para entender a tecnologia, mas para utilizá-la de maneira eficaz e criativa em seus próprios projetos ou no ambiente de trabalho.

Como fazer:  
Leia cada exercício com atenção: comece entendendo o cenário proposto e o que se espera como resultado.
Escreva o código: utilize o ambiente de codificação de sua escolha para escrever e testar o seu código. Não se preocupe em acertar de primeira, a prática leva à perfeição.
Verifique o gabarito: após tentar resolver o exercício, compare seu código com o gabarito fornecido em “Opinião do instrutor”. Isso ajudará a identificar áreas de melhoria e consolidar o aprendizado.
Repita: a repetição é chave para o aprendizado. Tente fazer os exercícios mais de uma vez, aplicando melhorias e variantes.
Lembre-se, cada desafio é uma chance de crescer. Não se desanime com os erros, eles são degraus no caminho do aprendizado. E acima de tudo, divirta-se! O aprendizado mais eficaz acontece quando nos engajamos e nos interessamos pelo que estamos fazendo.

Não se esqueça que estamos no Fórum e no Discord para te ajudar!

Bons estudos!

1) Construindo a estrutura básica do HTML  
Você acabou de iniciar um estágio em uma empresa de desenvolvimento web e sua primeira tarefa é criar um documento HTML básico para um novo projeto. O objetivo é construir a estrutura fundamental de um arquivo HTML, incluindo as tags essenciais: `<!DOCTYPE html>, <html>, <head>, e <body>`. Além disso, dentro da tag `<head>`, adicione uma tag `<title>` com um título de sua escolha para a página. Lembre-se de seguir as práticas de indentação corretas para manter o código organizado.

2) Adicionando conteúdo ao HTML
Agora que a estrutura básica do seu documento HTML está pronta, seu supervisor pediu para adicionar um cabeçalho e um parágrafo ao corpo do documento. Use as tags <h1> para o cabeçalho e `<p>` para o parágrafo. Escolha um tema para o cabeçalho e escreva um breve parágrafo relacionado a esse tema.

3) Trabalhando com meta tags e título
Você precisa otimizar a seção `<head>` da página HTML existente. Adicione uma meta tag para definir a codificação de caracteres como UTF-8 e altere o título da página para algo mais descritivo e apropriado para o conteúdo do site.

4) Organizando conteúdo com tags HTML
Você está desenvolvendo a página inicial de um site para um projeto pessoal. Você precisa criar um título principal e um subtítulo, seguidos por um breve parágrafo explicativo. Utilize HTML para estruturar esses elementos. Crie um arquivo HTML e adicione um título principal com a tag `<h1>`, um subtítulo com a tag `<h2>`, e um parágrafo com a tag `<p>`. Use textos de sua escolha para cada um destes. Lembre-se de seguir a hierarquia correta das tags e verificar o resultado no navegador.

5) Adicionando imagens com acessibilidade
Neste desafio, você vai adicionar uma imagem ao seu projeto de site pessoal. Escolha uma imagem de sua preferência (pode ser um logo ou uma foto relacionada ao tema do site). Utilize a tag `<img>` para inserir a imagem no corpo do documento HTML, e não se esqueça de incluir o atributo alt para descrever a imagem, melhorando a acessibilidade do site. Verifique o resultado no navegador.

6) Listando Itens em HTML
Agora, adicione uma lista de itens ao seu site. Esta lista pode ser de características do projeto, etapas de desenvolvimento, ou qualquer outra informação relevante. Utilize a tag `<ul>` para uma lista não ordenada ou `<ol>` para uma lista ordenada, e `<li>`para cada item da lista. Verifique o layout no navegador após a inserção.

7) Explorando o impacto do DOCTYPE no HTML
A sua tarefa é explorar o impacto da declaração `<!DOCTYPE html>` em um documento HTML. Crie um arquivo HTML básico com a estrutura apresentada no relato, incluindo elementos como `<head>`, `<title>`, `<body>`, `<h1>`, `<p>`, e `<img>`. Primeiro, visualize a página com a declaração `<!DOCTYPE html>`. Em seguida, remova a declaração e visualize novamente. Use a ferramenta de inspeção do navegador para explorar as diferenças no modo de renderização da página, focando na presença ou ausência do "Modo Quirks".

8) Automatizando a atualização da página com Live Server
Instale e utilize a extensão "Live Server" no Visual Studio Code para automatizar a atualização da sua página HTML. Faça alterações no código HTML, como adicionar um texto ao parágrafo, e observe as mudanças sendo refletidas automaticamente no navegador.

Ver opinião do instrutor
Opinião do instrutor

1) Construindo a estrutura básica do HTML
Abra um editor de código como o VS Code.
Comece o documento com a declaração `<!DOCTYPE html>` para especificar que você está usando HTML5.
Abra a tag `<html>` para definir o início do documento HTML.
Adicione a tag `<head>`dentro da tag `<html>`. A tag `<head>` contém informações sobre o documento.
Dentro de `<head>`, inclua a tag `<title>` e dê um título à sua página, como `<title>`Meu primeiro projeto`</title>`.
Após `<head>`, adicione a tag `<body>`, que conterá o conteúdo visível da sua página.
Feche as tags `</body>` e `</html>` em ordem.
Código:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Meu primeiro projeto</title>
    </head>
    <body>
        <!-- Conteúdo da página vai aqui -->
    </body>
</html>
```

2) Adicionando conteúdo ao HTML
No editor de código, localize a tag `<body>` no seu documento HTML.
Adicione a tag `<h1>`com um texto de cabeçalho relevante, como `<h1>`Boas-vindas ao meu site`</h1>`.
Abaixo da tag `<h1>`, adicione a tag `<p>`e escreva um parágrafo, como `<p>`Este é um exemplo de um parágrafo em HTML.`</p>`.
Salve as alterações e visualize o arquivo em um navegador para ver o cabeçalho e o parágrafo exibidos.
Código:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Meu primeiro projeto</title>
    </head>
    <body>
        <h1>Boas-vindas ao meu site</h1>
        <p>Este é um exemplo de um parágrafo em HTML.</p>
    </body>
</html>
```

3) Trabalhando com meta tags e título
Abra o documento HTML no editor de código.
Na seção `<head>`, adicione a meta tag `<meta charset="UTF-8">`. Isso define a codificação de caracteres para UTF-8, o que é essencial para exibir caracteres especiais corretamente.
Altere o conteúdo da tag `<title>` para algo que descreva melhor o site, como `<title>`Aventuras em HTML`</title>`.
Salve o documento e abra-o em um navegador para verificar as mudanças.
Código:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Aventuras em HTML</title>
    </head>
    <body>
        <h1>Boas-vindas ao meu site</h1>
        <p>Este é um exemplo de um parágrafo em HTML.</p>
    </body>
</html>
```

4) Organizando conteúdo com tags HTML
Crie um arquivo HTML.
Adicione a estrutura básica do HTML (`<!DOCTYPE html>, <html>, <head>, e <body>`).
Dentro da tag `<body>`, adicione a tag `<h1>` para o título principal. Exemplo: `<h1>`Meu projeto pessoal`</h1>`.
Adicione a tag `<h2>` para o subtítulo. Exemplo: `<h2>`Uma breve introdução`</h2>`.
Adicione a tag `<p>` para um parágrafo explicativo. Exemplo: `<p>`Este é um projeto que visa... `</p>`.
Salve o arquivo e abra-o no navegador para visualizar o resultado.
Código:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Meu projeto</title>
    </head>
    <body>
        <h1>Meu projeto pessoal</h1>
        <h2>Uma breve introdução</h2>
        <p>Este é um projeto que visa...</p>
    </body>
</html>
```

5) Adicionando imagens com acessibilidade
Escolha uma imagem e salve-a na mesma pasta do seu arquivo HTML.
No seu arquivo HTML, abaixo do parágrafo, adicione a tag `<img>`. Use o atributo src para especificar o caminho da imagem. Exemplo: `<img src="imagem.jpg">`.
Adicione o atributo alt para descrever a imagem. Exemplo: `<img src="imagem.jpg" alt="Descrição da imagem">`.
Salve o arquivo e abra-o no navegador para visualizar a imagem inserida.
Código:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Meu projeto</title>
    </head>
    <body>
        <h1>Meu projeto pessoal</h1>
        <h2>Uma breve introdução</h2>
        <p>Este é um projeto que visa...</p>
        <img src="imagem.jpg" alt="Descrição da imagem">
    </body>
</html>
```

6) Listando Itens em HTML
Decida se a lista será ordenada (`<ol>`) ou não ordenada (`<ul>`).
Após o último elemento inserido no corpo do documento, adicione a tag escolhida (`<ul>` ou `<ol>`).
Dentro desta tag, adicione várias tags `<li>`, cada uma contendo um item da lista. Exemplo: `<li>`Item 1`</li>`.
Salve e abra o arquivo no navegador para visualizar a lista.
Código:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Meu projeto</title>
    </head>
    <body>
        <h1>Meu projeto pessoal</h1>
        <h2>Uma breve introdução</h2>
        <p>Este é um projeto que visa...</p>
        <img src="imagem.jpg" alt="Descrição da imagem">
        <ul>
            <li>Característica 1</li>
            <li>Característica 2</li>
            <li>Característica 3</li>
        </ul>
    </body>
</html>
```

7) Explorando o impacto do DOCTYPE no HTML

- Crie um arquivo HTML e adicione a estrutura básica com a declaração `<!DOCTYPE html>`.
- Visualize a página no navegador e observe sua aparência.
- Remova a declaração `<!DOCTYPE html>` e visualize a página novamente.
- Abra a ferramenta de inspeção do navegador e verifique se o "Modo Quirks" foi ativado, observando as diferenças de renderização.
- Adicione novamente a declaração `<!DOCTYPE html>` e note as mudanças no modo de renderização da página ao atualizar.

8) Automatizando a atualização da página com Live Server

- Abra o VS Code e acesse a seção "Extensions".
- Pesquise por "Live Server" e instale a extensão.
- Abra seu arquivo HTML e clique em "Go Live" na barra inferior do VS Code.
- Faça uma alteração no código, como adicionar uma palavra ao parágrafo.
- Observe a atualização automática na página do navegador, sem a necessidade de recarregar manualmente.

### Aula 2 - O que aprendemos?

Nessa aula, você aprendeu:

- A importância da documentação W3S;
- O que é HTML e porque é considerada uma linguagem de marcação;
- Estruturar um documento HTML com tags e elementos;
- A utilidade da introdução `<!DOCTYPE html>`;
- Diferença entre a metainformação presente no `<head>` e o conteúdo presente no `<body>` de uma página HTML;
- Criar textos alternativos (alts) para uma imagem;
- Acessar a Developer Tools (Ferramentas para Desenvolvedores) de um navegador;
- Quirks mode (modo peculiaridade);
- Utilizar extensões no Visual Studio Code (Live Server por exemplo).

## Aula 3 - Layout e Tags semânticas

### Aula 3 - Projeto da aula anterior
 Próxima Atividade

Aqui você pode [baixar os arquivos](https://github.com/alura-cursos/Portifolio-HTML-e-CSS/archive/refs/heads/aula_2.zip) da aula 02 ou acessar os arquivos no Github!

### Aula 3 - Preparando o ambiente
 Próxima Atividade

As próximas aulas serão baseadas no Figma, que é uma ferramenta de prototipagem de interfaces, onde vamos construir o layout da página do Portfólio. Para acessá-lo, clique aqui.

Para ter a mesma visualização que a da aula, primeiramente é necessário criar uma conta ou fazer login em uma existente. Para isso, entre no site do Figma e clique em Log In (caso já tenha conta) ou em Sign Up (para cadastrar nova conta). Depois de estar com uma conta conectada, acesse o projeto no Figma.

Atenção: Observe que as abas Design e Inspect demonstradas no curso passaram por atualizações recentes no figma e hoje são opções premium, ou seja, pagas. Mas não se preocupe, no figma fornecido você pode pegar as informações dos elementos através da aba Properties! Basta clicar nos componentes e verificar suas propriedades na aba, como demonstrado abaixo:

Tela do Figma com uma lista de opções aparecendo no topo

Caso queira criar uma cópia do layout para a sua conta do Figma, assim garantindo o acesso de edição, entre no link do layout original que está acima e no menu superior da plataforma, clique no nome do arquivo: Portfolio - Curso 1. Irão abrir algumas opções, clique em “Duplicate to your drafts” e o arquivo do projeto estará duplicado para uso próprio.

Tela inicial do Figma ao entrar com a conta conectada

E para demonstrar como uma pessoa desenvolvedora Front-end utiliza o Figma, separamos esse Alura+ com a Rafa Ballerini onde você aprenderá tudo o que é necessário para analisar um documento do Figma para transformá-lo em código, desde a exportação de imagens e ícones até a estilização com CSS.

Ativando o WebGL
Caso apareça a mensagem: "we can't open that file. We can't open this file because WebGL isn't supported, or is disabled, in your browser. If your browser supports WebGL, check out this help article to find out how to enable it", significa que o WebGl do seu navegador está desativado e você precisa ativá-lo.

No Google Chrome, digite o seguinte na barra de pesquisa: chrome://flags/. Em seguida, pesquise por "WebGL" na lista e ative-o, trocando de Disabled para Enabled. Depois disso, aparecerá um botão para reiniciar o Google Chrome. Reinicie o navegador e pronto.

Se por acaso o seu navegador não for o Google Chrome, o procedimento é semelhante. O WebGL está desativado e precisa ser ativado.
### Aula 3 -  - Vídeo 1
### Aula 3 -  - Vídeo 2
### Aula 3 -  - Vídeo 3
### Aula 3 -  - Vídeo 4
### Aula 3 -  - Vídeo 5
### Aula 3 -  - Vídeo 6
### Aula 3 -  - Vídeo 7
### Aula 3 -  - Vídeo 8
### Aula 3 -  - Vídeo 9
