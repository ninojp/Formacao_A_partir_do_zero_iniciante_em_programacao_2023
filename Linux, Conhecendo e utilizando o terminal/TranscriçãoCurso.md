# Curso Alura - Linux I: conhecendo e utilizando o terminal

## Aula 1 - Trabalhando com arquivos e diretórios

### Aula 1 - Introdução - Vídeo 1

Transcrição  
Bem-vindo ao nosso curso de Linux: Conhecendo e utilizando o terminal, onde aprenderemos a utilizar o terminal para manipulação de arquivos e diretórios, além disso, aprenderemos um pouco sobre o editor de textos disponível no terminal, o Vi.

Neste curso, focaremos principalmente no terminal e em suas ferramentas por que esta é uma atividade bem comum na área de desenvolvimento de software, onde o desenvolvedor utiliza ferramentas de linha de comando e também o utiliza para manipulação de arquivos e diretórios com bastante frequência.

Caso já tenha familiaridade com o terminal, recomendamos que faça a segunda parte desse curso, onde abordamos mais as questões de gerenciamento de processos, instalação de pacotes e muito mais. Caso já tenha bastante conhecimento sobre o terminal linux e deseje se aprofundar mais ainda em cada uma das partes do linux ou ainda, estudar para tirar a Certificação Linux LPI Essentials, saiba que há uma sequência de vários cursos para te ajudar com este objetivo também, conheça a primeira parte dos cursos para certificação aqui.

Nestes dois primeiros cursos, focaremos mais no terminal e utilizaremos o Ubuntu, mas sinta-se a vontade para utilizar outro linux de preferência, pois a única ferramenta utilizada será o terminal.

### Aula 1 - Preparando o Ambiente

Para iniciar nosso curso... Vamos precisar, claro, de um Linux para usar.

Existem vários sabores do Linux no mercado. Nas aulas, usamos o [Ubuntu Linux](https://www.ubuntu.com/download/desktop). Se você não tem um Linux instalado, recomendamos o Ubuntu. Mas você pode usar qualquer outra versão.

Se o seu Desktop principal não é Linux, recomendamos que você use uma máquina virtual para instalar o Ubuntu e usar dentro do seu Windows ou Mac. Uma opção é instalar o [VirtualBox](https://www.virtualbox.org/) e aí instalar o [Ubuntu](https://www.ubuntu.com/download/desktop) nele.

Há ainda a opção de usar o [Git Bash](https://gitforwindows.org/), uma linha de comando para rodar a linguagem Git que oferece ainda um terminal Linux para o computador.

Uma última opção possível é apenas conectar remotamente com ssh em uma máquina Linux que você tenha a disposição. Pode ser um servidor remoto, outra máquina na empresa, ou até usar algum serviço de nuvem para subir uma nova máquina.

### Aula 1 - Comandos de arquivos - Vídeo 2

Transcrição  
Como já comentamos, ao longo curso veremos como utilizar o Terminal do Ubuntu para aprender os comandos e programas para tirar o melhor proveito desse Sistema Operacional no nosso dia-a-dia. O primeiro passo é abrirmos o Terminal pelo menu de início do Ubuntu:

Quando abrimos o Terminal, nós estamos em algum diretório do sistema operacional e para descobrirmos em qual estamos, digitamos o comando pwd. A saída do comando será algo como:

> /home/guilherme

Lembrando que o nome depois de /home mudará de acordo com o usuário atual logado no sistema operacional. O /guilherme é o diretório base para o usuário Guilherme. Agora se quisermos saber os arquivos e diretórios dentro deste diretório base, ou seja, a lista deles, basta utilizarmos o comando ls. O resultado será algo como:

Note que o Terminal do Ubuntu diferencia por meio de cores aquilo que é diretório e aquilo que é arquivo, outros terminais podem não fazer essa diferenciação.

Agora vamos criar um arquivo. Primeiramente vamos escolher um texto de exemplo que irá dentro desse arquivo. Para que o terminal imprima a mensagem "Bem vindo" podemos utilizar o comando echo, que irá imprimir esses dois argumentos ("Bem" e "vindo"):

> echo Bem vindo

O resultado será a mensagem impressa no terminal.

Enquanto digitamos comandos no terminal, uma espécie de histórico está sendo criada, se clicarmos no botão de seta para cima, voltamos ao comando anterior que foi executado. Usamos esse atalho para navegarmos pelos comandos, clicando mais vezes a seta pra cima, chegaremos a comandos digitados a mais tempo, a seta para baixo também funciona para voltar para os comandos mais atuais no histórico.

Vamos usá-lo para voltar ao echo e passarmos apenas um argumento, colocando aspas duplas na mensagem que queremos imprimir:

> echo "Bem vindo"

Mas o que queremos é executar esse comando redirecionando sua saída para um arquivo, para isso, utilizamos o caractere > depois da mensagem seguido pelo nome do arquivo que queremos salvar a mensagem:

> echo "Bem vindo" > bemvindo.txt

O terminal já não imprime mais a mensagem, ela foi redirecionada para o arquivo, veja que se buscarmos novamente a lista de arquivos e diretórios usando o ls, teremos nosso arquivo bemvindo.txt listado:

Experimente abrir o explorador de arquivos e verificar os arquivos que criamos e listamos. Experimente também abrir os arquivos de texto criados em um editor de texto visual para garantir que as mensagens realmente estão nos arquivos.

Também podemos ler o conteúdo de arquivos no Terminal usando o comando cat:

> cat bemvindo.txt

A saída do comando cat será o texto presente dentro do arquivo bemvindo.txt.

Para todos os comandos envolvendo arquivos ou diretórios existe a possibilidade de escrevermos apenas uma parte do nome deles e buscar um específico utilizando a tecla TAB. Se houver apenas um arquivo com o inicio do nome digitado, o terminal o preenche automaticamente ao apertarmos a tecla.

Para limparmos a tela do terminal usamos o comando clear.

Já sabemos que com o comando ls conseguimos visualizar os arquivos e diretórios, porém o terminal não mostra muita informação sobre eles. Para isso podemos utilizar o comando ls -l, que listará seus tamanhos, datas de modificação e os tipos. Se for diretório, as informações começarão com a letra "d".

Note que além das informações que já comentamos antes sobre os detalhes dos arquivos e diretórios, são exibidas também os nomes do grupos e usuários a quem o arquivo ou diretório pertence. Veremos mais sobre essas informações mais adiante.

Contudo, esses não são todos os arquivos e diretórios que temos. No Linux existem alguns arquivos e diretórios invisíveis. Para listá-los usamos o comando ls -la. Note que arquivos e diretórios invisíveis no Linux são precedidos pelo caractere ponto(.) e há vários desses diretórios, dentre eles os de cache e de configurações.

Para aprendermos sobre um determinado comando podemos utilizar o comando man + [comando sobre o qual queremos aprender]. Ele retornará toda a documentação do comando, seu manual. Podemos utilizar as setas para cima e para baixo para navegarmos nessa documentação e a tecla q para sairmos dela. Exemplo de uso do man:

> man ls

Vimos nesta primeira aula diversos comandos simples para começarmos a navegar mais profundamente com o terminal, dentre eles aprendemos:

- pwd: para descobrir o diretório atual.
- ls: para listar arquivos e diretórios, vimos as opções -l e -la, que listam além dos arquivos e diretórios ocultos, informações extras sobre cada um deles.
- echo para imprimir mensagens e o operador > para modificar o destino da mensagem.
- clear para limparmos o terminal.
- man para consultar o manual sobre determinado comando.
- setas para cima e para baixo para navegador no histórico de comandos do terminal.

### Aula 1 - O pwd

Para quê usamos o comando pwd?

Para descobrir o diretório em que estamos atualmente

> Correto. No meu caso estou no diretório base do usuário lucas. Então:

```linux
$ pwd
/home/lucas
```

### Aula 1 - O whoami

Execute o comando whoami no seu terminal. O que ele faz? Qual a saída?

Resposta:

O nome do usuário no Linux

> O comando whoami, retorna o nome do usuário que está sendo usado. No meu caso, o nome do usuário é lucas então o retorno é:

```Linux
$ whoami
lucas
```

### Aula 1 - Listagem de arquivos

Não basta saber o diretório que estamos atualmente para o terminal. É importante conhecer o conteúdo do diretório atual, ou seja, quais arquivos e diretórios estão dentro da pasta atual.

Como a gente consegue listar o conteúdo de um diretório no terminal do Ubuntu?

Resposta:

ls

> O comando ls nos retorna o conteúdo do diretório atual. No terminal do Ubuntu, ele separa o tipo do conteúdo (arquivo ou diretório) pela cor.

### Aula 1 - ls com parâmetros

Quais parâmetros passamos para o comando ls para listar todos os arquivos e diretórios, incluindo os ocultos, de uma forma mais detalhada?

Alternativas corretas:

-a

> Para listar os arquivos e diretórios incluindo arquivos ocultos passamos o parâmetro -a para o comando ls.

-l

> Para listar de forma detalha usamos o parâmetro -l.

Para listarmos os arquivos e diretórios do diretório atual, utilizamos o comando ls:

```Linux
$ ls
bemvindo.txt
```

O retorno do comando ls pode ser diferente na sua instalação, algo que é normal.

Podemos combinar os parâmetros e listar todos os arquivos de forma detalhada:

```Linux
$ ls -la
total 36
drwxr-xr-x 4 vagrant vagrant 4096 Jan 13 19:00 .
drwxr-xr-x 4 root    root    4096 Jan  6 12:19 ..
-rw------- 1 vagrant vagrant  184 Jan  6 13:29 .bash_history
-rw-r--r-- 1 vagrant vagrant  220 Apr  9  2014 .bash_logout
-rw-r--r-- 1 vagrant vagrant 3637 Apr  9  2014 .bashrc
drwx------ 2 vagrant vagrant 4096 Jan  6 12:19 .cache
-rw-rw-r-- 1 vagrant vagrant    0 Jan  6 13:06 .cloud-locale-test.skip
-rw-r--r-- 1 vagrant vagrant  675 Apr  9  2014 .profile
drwx------ 2 vagrant vagrant 4096 Jan  6 12:19 .ssh
-rw-rw-r-- 1 vagrant vagrant   37 Jan 13 19:00 bemvindo.txt
```

### Aula 1 - Manipulando arquivos

1 - Utilize o comando necessário para exibir, no terminal, a mensagem "Bem vindo ao curso de Linux da Alura".

2 - Agora escreva a mensagem acima em um arquivo chamado bemvindo.txt, utilizando o comando necessário.

Aproveite para verificar se o arquivo foi criado, utilizando o comando ls.

Dica: Lembre-se que podemos navegar entre os comandos já digitados utilizando as teclas direcionais para cima e para baixo.

Opinião do instrutor

Para imprimir a mensagem "Bem vindo ao curso de Linux da Alura" no terminal, utilizamos o comando echo:

$ echo "Bem vindo ao curso de Linux da Alura"

Para direcionar a saída do comando echo para o arquivo bemvindo.txt:

$ echo "Bem vindo ao curso de Linux da Alura" > bemvindo.txt

Podemos verificar se o arquivo foi criado utilizando o comando ls:

> $ ls  
> bemvindo.txt

### Aula 1 - Imprimindo conteúdo de um arquivo

Qual o comando necessário para imprimir no terminal o conteúdo do arquivo bemvindo.txt?

Alternativa correta:

cat bemvindo.txt

> Correta! O cat recebe o nome do arquivo como argumento e imprime seu conteúdo.

### Aula 1 - Limpando a tela

Em alguns momentos nós acabamos com o terminal cheio com os comandos que digitamos e seus retornos. Qual comando podemos utilizar para limpar a tela do nosso terminal?

Alternativa correta:

clear

> Utilizamos o comando clear para limpar a tela do terminal. O atalho Ctrl + L tem a mesma função.

### Aula 1 - Manual do comando

Muitos dos comandos que você verá nesse curso possuem várias opções que alteram o comportamento de um comando. Para saber as possíveis opções de um comando e o que cada uma das opções faz, você pode verificar o manual do comando. Isso é feito digitando man seguido do nome comando que você deseja estudar.

Olhe o manual do comando cat e diga qual a opção que deve ser usada para além de mostrar o conteúdo do arquivo mostrar também os números das linhas:

cat -n

> A opção -n mostra as linhas além de mostrar o conteúdo de um arquivo.

## Aula 2 - Mais sobre redirecionamento e caracteres coringa

### Aula 2 - Redirecionamento e diretórios - Vídeo 1

Transcrição  
Como vimos na aula passada, o comando ls nos lista os arquivos e diretórios no diretório atual.

Vimos também que o comando pwd nos informa o diretório atual, algo como /home/guilherme, mas e se quiséssemos mudar de diretório? Para mudarmos de diretório, podemos utilizar o comando cd - Change Directory:

> cd Desktop

O comando pwd agora nos trará um resultado diferente. Algo como /home/guilherme/Desktop. Vamos exercitar a criação de arquivos novamente com o comando echo, lembra dele? Vamos criar um arquivo que lista algumas músicas. Por exemplo:

No Ubuntu, Fedora e talvez em outras distros Linux que suportam o nosso português (pt_BR), a tradicional pasta "Desktop" foi renomeada para "Área de Trabalho" e, como os iniciados sabem, ela precisa ser acessada pelo terminal com o uso de barras invertidas ("") para designar os espaços, ou seja:

> cd Área\ de\ Trabalho/

Os iniciantes muitas vezes esquecem ou não sabem disso, sem falar que eles podem vir a executar scripts que ainda usam a designação tradicional para essa pasta, ou seja, "Desktop".

> echo "Faithless" > musicas-favoritas.txt

Lembre-se de verificar a criação de arquivos e diretórios pelo explorador de arquivos. Só por questões de confirmação.

Criamos o arquivo musicas-favoritas.txt com o texto Faithless dentro do diretório Desktop. Vamos tentar colocar mais uma música dentro desse arquivo utilizando o comando echo da mesma maneira:

> echo "REM" > musicas-favoritas.txt

Se utilizarmos o comando cat para ver o conteúdo do arquivo, teremos uma surpresa: Apenas a música REM estará listada no arquivo. Isso por que o comando echo escreve no arquivo, criando o arquivo caso não exista. Caso exista, o conteúdo do arquivo será sobrescrito. Não queremos sobrescrever, queremos adicionar um texto, concatená-lo com o que já está inserido no arquivo. Para tal usamos >> em vez de apenas um >:

> echo "Faithless" >> musicas-favoritas.txt

Para confirmar a adição da segunda música, podemos ler o arquivo com o comando cat.

> cat musicas-favoritas.txt

E teremos como resultado a saída:

> REM  
> Faithless

Até este ponto, criamos arquivos, listamos, entramos em um diretório, mas como voltamos para o diretório anterior? Para voltarmos para o diretório anterior usamos o comando cd ... Existem também o diretório ., que referência o diretório atual.

Podemos sempre confirmar o diretório atual usando o comando pwd. Utilize-o para confirmar a troca de diretórios.

Já sabemos como navegar entre diretórios. Vamos aprender agora a criar um diretório, para isso utilizamos o comando mkdir seguido do nome do diretório que queremos criar:

> mkdir workspace

Criamos o diretório workspace dentro do diretório /home/guilherme. Perceba que os mesmos comandos utilizados anteriormente para criação e leitura de arquivos e diretórios também funcionam em subdiretórios. Experimente criar outros arquivos e subdiretórios dentro do workspace, como por exemplo: projetos-java e projetos-php.

echo "meu primeiro teste" > arquivo1.txt
echo "meu primeiro teste" > arquivo2.txt
echo "meu primeiro teste" > arquivo3.txt

mkdir projetos-java
mkdir projetos-php

Navegue por esses subdiretórios usando o comand cd. Use o atalho do TAB para não precisar digitar o nome completo dos diretórios na navegação, mas note que o TAB não irá completar o nome do diretório totalmente, por que depois do traço, os nomes são diferentes, então você precisa digitar manualmente pelo menos as primeiras letras depois de projetos- para poder usar o TAB novamente.

Depois de entrar no diretório projetos-java, o comando pwd nos trará o seguinte retorno:

> /home/guilherme/workspaces/projetos-java

Agora, se estivéssemos dentro de um subdiretório que, por sua vez, estivesse dentro de outro (como fizemos agora), e quiséssemos ir para o diretório base, como faríamos? O comando cd, sozinho, sem pontos, fará isso. Não importa onde estejamos, com o comando cd sempre voltamos para o diretório base. Que neste caso é:

> /home/guilherme/

O diretório base não é a raiz de tudo. Para visualizarmos a raiz do HD digitamos ls /. O / possui diversos outros diretórios úteis para o funcionamento do Linux. O diretório home por exemplo, é onde estão os diretórios de cada um dos usuários que utilizam a máquina.

Nesta aula aprendemos a criar diretórios, concatenar textos dentro de um arquivo e navegar entre diretórios.

### Aula 2 - Caracteres coringas no bash - Vídeo 2

Transcrição  
Aprendemos a criar um diretório com o comando mkdir, mas como podemos apagar um diretório? E um arquivo? Removemos um diretório usando o comando rmdir e para remover um arquivo utilizamos o comando rm, dentro de workspace por exemplo podemos fazer:

> rmdir projetos-java  
> rm arquivo3.txt

Removemos/Apagamos o diretório projetos-java e o arquivo arquivo3.txt. Uma observação interessante é que o comando para remover diretórios só irá funcionar para aqueles diretórios que estiverem vazios. Ele não apaga os arquivos dentro do diretório automaticamente.

Dentro do diretório workspace atualmente há três arquivos e um diretório (use o comando ls para listar os arquivos):

> arquivo10.txt arquivo1.txt  arquivo2.txt  projetos-php

No arquivo10.txt temos a frase "Bem vindo" e nos outros dois a frase "meu primeiro teste". Para que o terminal imprima os textos de todos os arquivos com um determinado nome, por exemplo, "arquivo...txt" podemos faz:

> cat arquivo?.txt

O resultado será:

meu primeiro teste  
meu primeiro teste  

Também podemos usar o caractere *:

> cat arquivo*.txt

Mas o resultado será um pouco diferente do primeiro caso:

Bem vindo  
meu primeiro teste  
meu primeiro teste  

Esses caracteres de ? e * são utilizados para que sejam buscados mais de um arquivo que tenham o mesmo nome base, porém existe uma pequena diferença: O ? só encontra os arquivos que tenham apenas UM caractere diferente do nome base, enquanto o * busca quaisquer números de caracteres.

Por isso que o arquivo arquivo10.txt é encontrado no segundo exemplo, mas não no primeiro. O * consegue lidar com o 10 depois do trecho arquivo no nome do arquivo, enquanto o ? não consegue, pois são dois caracteres em 10.

Atenção: se buscarmos o arquivo como "*.txt", ou seja, com aspas, o terminal interpreta o asterisco como se o mesmo fosse parte do nome do arquivo:

> cat "*.txt"

O comando acima nos trará uma mensagem de erro como a seguinte:

> cat: *.txt: No such file or diretory

Comentamos anteriormente que não podíamos apagar um diretório que possuía outros subdiretórios ou arquivos. Na verdade podemos, com o comando rm -r isto é possível. Ele remove Recursivamente, ou seja, apaga o diretório e tudo que está dentro dele. Podemos fazer por exemplo:

> rm -r workspace/

Dessa forma apagamos todo o diretório workspace e tudo que havia dentro dele. Muito cuidado na hora de utilizar este comando para não apagar diretórios importantes.

### Aula 2 - Mudando de diretório

Se você já estiver no diretório base de um usuário, qual das alternativas apresenta o comando correto para mudar para o diretório workspace, que está dentro do diretório do usuário?

Alternativa correta:  
cd workspace

> Correto! Podemos também passar para o comando cd o caminho absoluto. Nesse caso iniciamos a partir da raiz(/). Se quisermos, por exemplo, acessar o diretório workspace dentro do diretório do usuário lucas, podemos fazer: $ cd /home/lucas/workspace. Ou, neste caso, podemos usar um atalho para a home do usuário e fazer cd ~/workspace.

### Aula 2 - Mais sobre manipulação de arquivos

Dentro do diretório Desktop do seu usuário, utilize o comando echo para criar o arquivo musicas-favoritas.txt, com a palavra "Faithless".

Execute o comando necessário para escrever a palavra "REM" no arquivo musicas-favoritas.txt de forma que o conteúdo antigo do arquivo seja mantido.

Utilize o cat para verificar se o conteúdo do arquivo está correto.

Opinião do instrutor

Primeiro utilizamos o comando cd para acessar o Desktop:

> $ cd Desktop

Para criar o arquivo podemos utilizar o echo passando apenas um >:

> $ echo "Faithless" > musicas-favoritas.txt

Para escrever no arquivo sem apagar o conteúdo que já se encontra, fazemos:

> $ echo "REM" >> musicas-favoritas.txt

Podemos verificar o conteúdo do arquivo com o cat:

> $ cat musicas-favoritas.txt  
> Faithless  
> REM

### Aula 2 - Criando diretórios

Crie um diretório chamado workspace dentro do diretório base do usuário. Acesse o diretório workspace.

Dentro da pasta workspace, aproveite para criar as pastas: projetos-java e projetos-php.

Crie também os arquivos: arquivo1.txt, arquivo2.txt e arquivo3.txt, todos com o conteúdo: "meu primeiro teste".

Por fim, retorne para o diretório em que workspace se encontra.

Opinião do instrutor

Para criar um diretório utilizamos o comando mkdir. Para acessar o diretório workspace utilizamos o comando cd:

$ mkdir workspace
$ cd workspace

Vamos criar as pastas e os arquivos solicitados:

$ mkdir projetos-java
$ mkdir projetos-php
$ echo "meu primeiro teste" > arquivo1.txt
$ echo "meu primeiro teste" > arquivo2.txt
$ echo "meu primeiro teste" > arquivo3.txt

Lembre-se que o . representa o próprio diretório, enquanto o .. representa o diretório que é o pai do diretório atual.

Para retornarmos para o diretório anterior, que no nosso caso o diretório que é pai de workspace:

> $ cd ..

### Aula 2 - Removendo diretórios vazios

Qual dos comandos abaixo podemos utilizar no Linux para remover o diretório projetos-java, que está dentro do diretório atual, e está vazio?

Alternativa correta:  
rmdir projetos-java

> Utilizamos o comando rmdir para remover um diretório se ele estiver vazio.

### Aula 2 - Caracteres coringa

Crie um novo arquivo dentro do diretório workspace:

> $ echo "bem vindo" > arquivo10.txt

Execute o comando necessário para ler todos os arquivos que contenham apenas um caractere após o nome "arquivo" e antes da extensão ".txt".

Opinião do instrutor

Para ler os arquivos que possuem apenas um caracter após o nome "arquivo" e antes da extensão ".txt", fazemos:

```linux
$ cat arquivo?.txt  
meu primeiro teste  
meu primeiro teste  
meu primeiro teste
```

O retorno do comando cat foi o conteúdo dos arquivo arquivo1.txt, arquivo2.txt e arquivo3.txt.

Para retornar os arquivos que possuem qualquer quantidade de caracteres após o nome "arquivo" e antes da extensão ".txt":

```linux
$ cat arquivo*.txt  
bem vindo  
meu primeiro teste  
meu primeiro teste  
meu primeiro teste
```

Nesse caso, o cat imprimiu o conteúdo de todos os arquivos presentes no nosso diretório. Alternativamente, poderíamos imprimir o conteúdo de todos os arquivos com extensão .txt, que, neste exemplo, teria o mesmo efeito do comando anterior:

```linux
$ cat *.txt  
bem vindo  
meu primeiro teste  
meu primeiro teste  
meu primeiro teste
```

### Aula 2 - Removendo diretórios e arquivos

Execute o comando necessário para excluir o arquivo arquivo3.txt.

E se quisermos excluir o diretório workspace, como podemos fazer? Execute o comando necessário.

Opinião do instrutor

Para excluir o arquivo3.txt utilizamos o comando rm. Utilizamos o comando ls para verificar que o arquivo foi excluído:

```linux
$ rm arquivo3.txt
$ ls
arquivo1.txt  arquivo10.txt  arquivo2.txt  projetos-php
```

Para excluir o diretório workspace retornamos para o diretório pai e utilizamos o comando rm passando o parâmetro -r, pois o diretório não está vazio:

```linux
$ cd ..
$ rm -r workspace
```

## Aula 3 - Manipulando, compactando e descompactando arquivos

### Aula 3 - Copiando, movendo e renomeando - Vídeo 1

Transcrição  
Vamos criar novamente o diretório workspace - para não trabalharmos na raiz do HD:

mkdir workspace  
cd workspace/

Vamos colocar uma mensagem em um arquivo qualquer dentro do diretório criado:

echo "bem vindo" > mensagem.txt

Vamos copiar o texto do arquivo que acabamos de criar para um outro de nome "bemvindo.txt" com o comando cp:

cp mensagem.txt bemvindo.txt

O texto agora está nos dois arquivos:

cat bemvindo.txt  
bem vindo  
cat mensagem.txt  
bem vindo

Podemos também mover o arquivo "mensagem.txt" para outro com o comando mv:

mv mensagem.txt bemvindo2.txt

ls  
bemvindo2.txt   bemvindo.txt

Perceba que o arquivo mudou de nome.

Criemos agora mais dois diretórios:

mkdir projetos-java  
mkdir projetos-php

Queremos mover o arquivo "bemvindo.txt" para dentro do diretório "projetos-java":

mv bemvindo.txt projetos-java/

Se quiséssemos além de movê-lo, mudar seu nome, faríamos, por exemplo:

mv bemvindo.txt projetos-java/bemvindo-novo-nome.txt

Vamos verificar se ele foi realmente movido para o diretório que queríamos:

ls workspace/  
bemvindo2.txt   projetos-java   projetos-php

ls projetos-java/  
bemvindo.txt

De fato, o arquivo "bemvindo.txt" saiu do workspace e foi para o projetos-java. Vamos copiar "bemvindo2.txt" com o nome "bemvindo.txt" para manter este nos dois diretórios:

cp bemvindo2.txt bemvindo.txt

ls workspace/  
bemvindo2.txt   bemvindo.txt   projetos-java   projetos-php

Se quisermos buscar os dois arquivos "bemvindos" dentro do diretório workspace, fazemos:

ls bemvindo*  
bemvindo2.txt   bemvindo.txt

Perceba que quando usamos o comando ls para arquivos, o terminal retorna tais arquivos. Se fizermos o mesmo para diretórios, ele retorna o que estiver dentro deles. E, ainda, se fizermos ls *, o terminal retorna:

bemvindo2.txt   bemvindo.txt

projetos-java:  
bemvindo.txt

projetos-php:

Ou seja, mostra tanto os diretórios dentro daquele em que estamos trabalhando e seus respectivos arquivos.

Assim como utilizamos o -r para conseguirmos apagar diretórios, do mesmo jeito fazemos para copiá-los, como por exemplo:

cp -r projetos-java projetos-c#

Nesta aula aprendemos a mover, renomear e copiar arquivos e diretórios.

### Aula 3 - Criando e abrindo ZIP - Vídeo 2

Transcrição  
Agora que já sabemos como trabalhar com arquivos e diretórios, copiá-los, movê-los, etc, vamos ver como compactá-los. Queremos, por exemplo, compactar o workspace, cujo conteúdo podemos conferir utilizando o comando ls:

bemvindo2.txt  bemvindo.txt  projetos-c#  projetos-java  projetos-php

Primeiramente precisamos estar no diretório ao qual ele pertence com o comando cd .. para subir um diretório acima e depois usamos o comando zip informando o nome do arquivo que será gerado e o que o comando deve compactar:

zip work.zip workspace/

A mensagem adding: workspace/ (stored 0%) será exibida. Lembre-se que work.zip é o nome que demos para o arquivo de compactação. Podemos verificar rapidamente o conteúdo do arquivo compactado utilizando o comando unzip -l work.zip (o comando após unzip é a letra L minúscula, e não o número 1) dessa forma conseguimos observar quais arquivos e diretórios foram compactados.

É importante observar que, da mesma forma que os comandos para apagar e copiar, o comando zip não é suficiente para compactar todos os arquivos e diretórios dentro de workspace. Se você conferiu o conteúdo do zip, percebeu que apenas o diretório workspace foi compactado, mas nenhum dos seus arquivos e subdiretórios estava presente no zip final. Para isso precisamos usar a ferramenta de recursividade aqui também, ou seja, o -r em conjunto com o comando zip:

zip -r work.zip workspace/

Esse comando apresentará uma saída diferente, informando os arquivos encontrados e adicionados ao zip final.

updating: workspace/ (stored 0%)  
  adding: workspace/bemvindo2.txt (stored 0%)  
  adding: workspace/projetos-php/ (stored 0%)  
  adding: workspace/projetos-java/ (stored 0%)  
  adding: workspace/projetos-java/bemvindo.txt (stored 0%)  
  adding: workspace/bemvindo.txt (stored 0%)  
  adding: workspace/projetos-c#/ (stored 0%)  
  adding: workspace/projetos-c#/bemvindo.txt (stored 0%)  
  
Para descompactar o arquivo zip utilizamos o comando unzip, informando o nome do arquivo work.zip.

Archive: work.zip  
    creating: workspace/  
  extracting: workspace/bemvindo2.txt  
    creating: workspace/projetos-php/  
    creating: workspace/projetos-java/  
  extracting: workspace/projetos-java/bemvindo.txt  
  extracting: workspace/bemvindo.txt  
    creating: workspace/projetos-c#/  
  extracting: workspace/projetos-c#/bemvindo.txt
  
Descompactar os arquivos do zip no mesmo diretório irá sobrescrever os arquivos já existentes. Experimente remover o diretório workspace com o comando rm antes de descompactar o arquivo work.zip. Utilize também o comando ls para verificar o resultado de cada comando.

Perceba que tanto o zip quanto o unzip são comandos muito verborrágicos, ou seja, imprimem muita informação. O modificador -q permite que o retorno seja vazio (apesar de o resto funcionar perfeitamente):

unzip -q work.zip

E para zip:

zip -rq work.zip workspace

Podemos deixar juntos o -q e o comando de recursividade -r formando o -rq.

Nesta aula aprendemos os comandos para compactar e descompactar arquivos, além de esconder as informações que eles retornam, com o comando -q.

### Aula 3 - Copiando arquivos

Qual o comando necessário no Linux para realizar a cópia do arquivo bemvindo.txt para um novo arquivo chamado mensagem.txt?

Resposta:  
cp bemvindo.txt mensagem.txt

> Para copiar um arquivo no Linux, utilizamos o comando cp passando o nome do arquivo que desejamos copiar, e o nome do novo arquivo que será criado após a cópia.

### Aula 3 - Manipulando arquivos e diretórios

Crie novamente a pasta workspace dentro do diretório base do usuário.

Dentro do diretório workspace, crie um arquivo chamado mensagem.txt com a mensagem "bem vindo". Copie o arquivo mensagem.txt para o arquivo bemvindo.txt.

Aproveite para renomear o arquivo mensagem.txt para bemvindo2.txt.

Crie agora, dentro de workspace os subdiretórios projetos-java e projetos-php.

Mova o arquivo bemvindo.txt para o diretório projetos-java, mantendo o mesmo nome. Após mover, copie agora o bemvindo2.txt para o arquivo bemvindo.txt.

Por fim, copie o diretório projetos-java para o diretório projetos-c#.

Opinião do instrutor

Primeiro, vamos criar o diretório, o arquivo e realizar a cópia:

$ mkdir workspace  
$ cd workspace/  
$ echo "bem vindo" > mensagem.txt  
$ cp mensagem.txt bemvindo.txt

Para renomear utilizamos o comando mv, que move o arquivo. Quando passamos um novo nome, conseguimos renomear:

$ mv mensagem.txt bemvindo2.txt

Vamos criar os diretórios, mover o arquivo bemvindo.txt e realizar a cópia:

$ mkdir projetos-java  
$ mkdir projetos-php  
$ mv bemvindo.txt projetos-java/  
$ cp bemvindo2.txt bemvindo.txt

Para copiar o diretório projetos-java para o diretório projetos-c#, passamos o -r como argumento para o cp, para que ele possa copiar os diretórios de maneira recursiva:

$ cp -r projetos-java/ projetos-c#/

### Aula 3 - Comando ls

Liste os arquivos que começam com o nome bemvindo, dentro de workspace.

Execute apenas o comando ls e depois execute ls *. Reflita sobre as diferenças entre eles.

Opinião do instrutor

No nosso exemplo, uma das opções para listar os arquivos que começam com o nome bemvindo, é fazer:

$ ls bemvindo*  
bemvindo.txt  bemvindo2.txt

A diferença entre os dois comandos, é que quando fazemos apenas ls, estamos listando todos os arquivos e diretórios do diretório atual (o mesmo que fazer ls .). Quando executamos o ls *, o * será interpretado e todos os arquivos e diretórios do meu diretório atual serão passados como argumento, o que irá fazer com que, quando o argumento for um diretório, o ls liste tudo que existe dentro do diretório:

$ ls *  
bemvindo.txt  bemvindo2.txt

projetos-c#:  
bemvindo.txt

projetos-java:  
bemvindo.txt

projetos-php:

### Aula 3 - Compactando os arquivos txt

Qual das alternativas a seguir contém o comando correto, no Linux, para que seja possível compactar todos os arquivos com extensão .txt que estão dentro do diretório workspace, para um arquivo chamado bemvindo.zip. Considere que workspace é o nosso diretório atual.

zip bemvindo.zip *.txt

> Para criar um arquivo no formato .zip utilizamos o commando zip passando o nome do arquivo que desejamos criar e os arquivos que desejamos incluir. No nosso caso todos que possuem extensão .txt.

### Aula 3 - Compactando e descompactando

Vamos agora sair do diretório workspace e trabalhar no seu diretório pai, que é o diretório base do usuário:

$ cd ..  
$ pwd  
/home/lucas

Utilize o comando necessário para compactar todos os arquivos e diretórios que estão dentro de workspace para o arquivo work.zip.

Por fim, remova o diretório workspace e descompacte o arquivo work.zip.

Opinião do instrutor

Para compactar todos os arquivos e diretórios utilizamos o comando zip, e passamos o parâmetro -r para indicar que queremos compactar de forma recursiva, incluindo diretórios e subdiretórios:

$ zip -r work.zip workspace/

Vamos remover o diretório workspace utilizando o rm -r e para descompactar, utilizamos o comando unzip. Podemos utilizar o ls e verificar que o diretório workspace foi descompactado.

$ rm -r workspace/  
$ unzip work.zip  
$ ls workspace/  
bemvindo2.txt  bemvindo.txt  projetos-c#  projetos-java  projetos-php

### Aula 3 - Listando os arquivos dentro do .zip

Qual das alternativas a seguir contém o comando necessário para listar os arquivos e diretórios que se encontram compactados dentro de um arquivo .zip?

unzip -l work.zip

Para listar os arquivos dentro do arquivo .zip utilizamos o comando unzip passando o parâmetro -l:

```linux
$ unzip -l work.zip
Archive:  work.zip
  Length      Date    Time    Name
---------  ---------- -----   ----
        0  2016-01-16 19:36   workspace/
        0  2016-01-16 20:34   workspace/projetos-c#/
       10  2016-01-16 19:08   workspace/projetos-c#/bemvindo.txt
        0  2016-01-16 20:34   workspace/projetos-php/
       10  2016-01-16 19:08   workspace/projetos-php/bemvindo.txt
        0  2016-01-16 20:34   workspace/projetos-java/
       10  2016-01-16 19:08   workspace/projetos-java/bemvindo.txt
       10  2016-01-16 19:08   workspace/bemvindo.txt
       10  2016-01-16 19:07   workspace/bemvindo2.txt
---------                     -------
       50                     9 files
```

## Aula 4 - Mais sobre compactação e descompactação e Comandos do terminal

### Aula 4 - Compactação e descompactação tar - Vídeo 1

Transcrição  
Aprendemos a compactar arquivos e diretórios utilizando a extensão zip, com o comando zip, que é uma extensão muito famosa no sistema operacional Windows. No Linux, uma outra extensão é mais convencional de se utilizar, a extensão tar. Vamos, então, fazer o mesmo trabalho da aula passada mas utilizando o comando tar. Para compactar o diretório workspace fazemos:

> tar -cz workspace > work.tar.gz

O tar sozinho não serve para compactar arquivos. Na verdade o tar serve para empacotar vários diretórios e arquivos em um único arquivo, facilitando a transferência. Para compactar usaremos o tar combinado com o zip, o primeiro empacota e o segundo compacta.

O modificador -cz indica que o arquivo tar será criado (-c) e será compactado pelo zip(-z) usando o redirecionamento >. Uma observação interessante é que comando tar já é automaticamente recursivo.

Lembre-se de utilizar o comando ls para verificar o arquivo criado e de remover o diretório workspace antes de descompactar os arquivos com o comando rm.

Para descompactar o arquivo .tar.gz que criamos, fazemos:

> tar -xz < work.tar.gz

Perceba que houveram apenas duas diferenças em relação ao comando de compactação, a presença -x de "extract", para extrair os arquivos e a direção do redirecionamento < que agora em vez de indicar saída de dados, indica entrada de dados.

Mas não é muito bom ficarmos o tempo todo trabalhando com redirecionamento, é meio chato. Para isso o comando tar possui o modificador -f para podermos passar o nome do arquivo que queremos criar:

> tar -czf work.tar.gz workspace/

Note que inversão no nome do arquivo e diretório a ser compactado, com redirecionamento, o nome do arquivo final vem depois, agora ele está vindo antes. Agora para descompactar fazemos:

> tar -xzf work.tar.gz

Uma outra característica que faz o comando tar diferente do zip é que ele não é verborrágico por padrão. Consequentemente não precisamos dar comandos para que as informações de compactação não apareçam. Pelo contrário, para que as informações apareçam, usamos o modificador -v (de "verbose"):

> tar -vxzf work.tar.gz

A saída será semelhante a mostrada abaixo:

```linux
workspace/
workspace/bemvindo2.txt
workspace/projetos-php/
workspace/projetos-java/
workspace/projetos-java/bemvindo.txt
workspace/bemvindo.txt
workspace/projetos-c#/
workspace/projetos-c#/bemvindo.txt
```

Existem muitos modificadores para compactar e descompactar diretórios, tanto em zip quanto em tar. Por isso podemos recorrer sempre que necessário à documentação usando o comando man. Como por exemplo: man tar para sabermos sobre outras opções de modificadores disponíveis para o comando tar.

### Aula 4 - Saiba mais sobre como compactar e descompactar arquivos no Linux

Indicamos a leitura de um breve artigo, bem prático, sobre o processo de compactação e descompactação de arquivos com o tar no ambiente Linux. Assim, você poderá entender melhor e praticar o conteúdo da nossa aula.

Link do artigo: https://www.alura.com.br/artigos/linux-compactando-e-descompactando-arquivos-com-o-tar

### Aula 4 - Compactando com o tar

Qual das alternativas a seguir contém o comando necessário para compactar o diretório workspace, utilizando o comando tar, para o arquivo do tipo .tar.gz?

Resposta:  
tar -czf work.tar.gz workspace/

> O parâmetro -c indica ao comando tar que desejamos criar um novo arquivo.

O comando tar apenas empacota vários arquivos em um único arquivo, sem realizar compactação, e por isso passamos o parâmetro -z para indicar que queremos, além de criar um único arquivo, realizar um processo de compactação utilizando o formato .gz. Quando compactamos podemos reduzir o tamanho.

O parâmetro -f indica que compactaremos para um arquivo.

### Aula 4 - Descompactando com o tar

Qual das alternativas a seguir contém o comando necessário para descompactar o arquivo work.tar.gz?

Resposta:  
tar -xzf work.tar.gz

Para descompactar o arquivo .tar.gz, substituímos o -c que usamos antes por -x, para indicar que iremos extrair os arquivos.

O f indica que lemos de um arquivo. E o z, que o arquivo está compactado.

O parâmetro z na verdade é ignorado na extração, no man fala que só funciona no creation mode.

Logo poderíamos fazer: tar -xf work.tar.gz.

### Aula 4 - touch, data da última modificação e data do sistema - Vídeo 2

Transcrição  
Se entrarmos dentro do diretório workspace e observarmos os detalhes do arquivo bemvindo.txt com a ajuda do comando ls -la veremos a algo como seguinte saída para este arquivo:

[...]
-rw-rw-r-- 1 user user 10 Jun 11 15:42 bemvindo.txt
[...]

Repare que a data da última atualização dele é de 11 de Junho às 15:42. Se quisermos apenas que essa data modifique-se para a data e hora atual, isto é, apenas encostar nesse arquivo sem modificá-lo, usamos o comando touch:

touch bemvindo.txt

Após isso, se verificarmos seus detalhes novamente com o comando ls -la, veremos que a data e hora de modificação foram alterados para as mais atuais:

[...]
-rw-rw-r-- 1 user user 10 Jun 11 22:15 bemvindo.txt
[...]

O arquivo em si não altera-se, mas sua data de modificação sim. Para provar que realmente houve essa mudança, podemos ver o horário do sistema com o comando date e comparar com as informações do arquivo. A saída do comando date é semelhante a encontrada abaixo:

Tue Jun 11 22:15:33 BRT 2013

De fato, acabamos de "modificar" o arquivo, não seu conteúdo, mas sua data de última modificação.

### Aula 4 - Para saber mais: obtendo ajuda e formatando datas

Já vimos que podemos obter ajuda na documentação do Linux, as man pages, através do comando man. Uma outra forma de obter ajuda sobre a utilização do comando, de uma forma mais resumida, é utilizando o parâmetro --help suportado por alguns comandos, ou utilizando o comando help.

O help é um comando interno do interpretador bash, que, quando executado sem parâmetros, retorna uma lista com todos os demais comandos internos do shell bash. Quando executado com parâmetro, o comando help retorna a sintaxe de utilização e uma descrição do comando interno que estamos interessados.

$ help pwd  
$ date --help

Quando fazemos date --help, encontramos, dentre outras coisas, ajuda sobre como formatar a nossa data. Podemos imprimir, por exemplo, a data no formato dia/mes/ano:

```linux
$ date "+%d/%m/%Y"
23/01/2016
```

Aproveite para testar esses comandos no seu Linux!

Sempre que precisar consultar os parâmetros que um comando suporta, você pode pedir ajuda através do help ou --help.

### Aula 4 - Mais sobre formatação de datas

Vimos como obter ajuda e um pouco sobre formatação de datas. Verifique as opções de formatação apresentadas na man page do date ou com o date --help, e marque a alternativa que contém o comando que retorna a data atual no formato parecido com "19 de janeiro de 2016" (dia de nome_do_mes de ano).

Resposta:  
date "+%d de %B de %Y"

> Vimos que podemos mostrar o dia com %d e o ano com %Y. Para mostrar o nome completo do mês, utilizamos %B. O nome do mês pode estar em um idioma diferente, dependendo da sua configuração de local.

### Aula 4 - Less, head, tail - Vídeo 3

Transcrição  
Continuando nossos estudos sobre manipulação de arquivos, vamos primeiramente, criar um da maneira visual, por meio do navegador de pastas um arquivo de texto chamado google.txt dentro do diretório workspace:

Vamos adicionar conteúdo nesse arquivo. Para isso entremos no site da Wikipedia na página que fala sobre o Google e vamos copiar uma parte considerável do texto para o arquivo.

No terminal, sabemos que podemos utilizar o comando cat para ler o arquivo criado, ele nos retornará todo o texto:

> cat google.txt

Porém é muito texto. Se quisermos ler apenas o começo do arquivo, usamos o comando head. Ele retorna apenas as dez primeiras linhas do arquivo:

> head google.txt

Para especificarmos a quantidade de linhas que queremos retornar, podemos usar a opção -n informando o número de linha queremos:

> head -n 3 google.txt

Dessa maneira o Terminal retorna apenas as três primeiras linhas do começo do arquivo. O inverso também é possível, ler as últimas linhas do arquivo. Para lermos as últimas linhas usamos o comando tail:

> tail google.txt

O tail por padrão retorna as dez últimas linhas, assim como o head, para alterar esse limite, podemos usar o -n assim como fizemos no comando anterior:

> tail -n 3 google.txt

Além do head e do tail, ainda temos o comando less, que nos permite abrir e navegar pelo texto do arquivo no Terminal utilizando as setas para cima e para baixo do teclado:

> less google.txt

E podemos fechar o arquivo utilizando a tecla q do teclado.

### Aula 4 - Imprimindo as primeiras linhas

Qual das alternativas a seguir contém o comando que imprime, no terminal, as 6 primeiras linhas do arquivo google.txt?

Resposta:  
head -n 6 google.txt

> O comando head, por padrão imprime as 10 primeiras linhas de um arquivo. Para imprimir o número de linhas que desejamos, utilizamos o parâmetro -n.

### Aula 4 - Imprimindo as últimas linhas

Qual das alternativas a seguir contém o comando que imprime, no terminal, as 3 últimas linhas do arquivo google.txt?

Resposta:  
tail -n 3 google.txt

> O comando tail, por padrão imprime as 10 últimas linhas de um arquivo. Para imprimir o número de linhas que desejamos, utilizamos o parâmetro -n.

## Aula 5 - Edição de arquivos com o VI: inclusão, alteração, exclusão, repetição

### Aula 5 - Edição de arquivos com vi - Vídeo 1

Transcrição  
Na aula passada nós editamos um arquivo .txt via um editor de textos visual, vimos também como escrever em arquivos utilizando o comando echo, mas nesta aula veremos como editar arquivos de texto através do Terminal, usando um editor próprio dele. Este editor é o VI. Para abrir o arquivo google.txt no VI fazemos:

vi google.txt

O texto do arquivo aparece para nós e podemos navegar por ele utilizando as setas do teclado. Para sairmos do modo de navegação e entrarmos no modo de inclusão, apertamos a tecla i, assim podemos inserir textos no arquivo exatamente no lugar onde pressionamos o i. Para voltarmos à navegação e saírmos do modo de inclusão, pressionamos a tecla ESC. Para salvarmos essas alterações usamos o comando :w e para sair do VI, digitamos :q.

Experimente editar algumas linhas no começo do arquivo, insira algumas linhas de texto, salve, saia do editor e para verificar as alterações, experimente utilizar o comando head que você aprendeu na aula anterior.

Vimos que para inserir textos na posição onde o cursor se encontra, pressionamos a tecla i, mas podemos inserir textos usando também a tecla a, neste caso inclusão de texto será feita na posição seguinte de onde estiver o cursor.

Sabemos como inserir texto, mas e para excluir? Para excluir caracteres usamos a tecla x, ela funciona como o delete do teclado. Porém esse comando tem algo diferente: se digitarmos o número de caracteres que queremos apagar e logo depois a tecla x, serão apagados a quantidade digitada, é como se tivéssemos apertado o x várias vezes, algo como 11 x, apagará 11 caracteres de texto. O x já ajuda bastante, mas caso queiramos excluir uma linha inteira, ele pode não ajudar muito, porém, para deletarmos uma linha inteira podemos simplesmente digitar a tecla d duas vezes (dd), digitar uma quantidade antes do dd funciona da mesma forma que no comando x.

Tente sair do editor sem salvar o arquivo. Dará erro, isso porque temos que salvar o arquivo para podermos sair. Podemos juntar os comandos de salvar e sair em apenas um comando: :wq. Se quisermos sair sem salvar, precisamos usar o comando :q!.

Vimos bastantes comandos do VI até aqui, mas todos eles são teclas de letras em minúsculo, isso porque letras em maiúsculas possuem um comportamento diferente, o A (shift + a) por exemplo, também é um comando para edição de texto, mas ao contrário da i e a, o A insere texto no final da linha atual.

Resumindo os comandos que vimos do VI, até agora temos:

- Setas: para navegação
- i: inclui (na posição atual)
- a: adiciona (na posição posterior)
- Shift+A: adiciona (fim da linha)
- x: remove caracteres (n* x remove *n caracteres)
- dd: remove uma linha (n* dd remove *n linhas)

### Aula 5 - Salvando e saindo

Qual das alternativas a seguir contém o comando correto que podemos utilizar no modo de comandos do vi para salvar as alterações feitas e sair?

Resposta:  
:wq

> Para salvar as alteração e sair do editor podemos combinar os comando :w (salvar alterações) e :q (sair do editor): :wq.

### Aula 5 - Saindo sem salvar

Qual das alternativas a seguir contém o comando correto que podemos utilizar no modo de comandos do vi para sair sem salvar as alterações realizadas?

Resposta:  
:q!

> Correto. O q sai e a exclamação indica para ignorar alterações.

### Aula 5 - Utilizando o vi

Vamos agora utilizar o vi e abrir o arquivo google.txt:

vi google.txt

Na segunda linha do arquivo, insira o seguinte texto:

Da wikipedia, Da wikipedia, a enciclopédia aberta

Apague o texto "Da wikipedia, ". Faça isso com um único comando.

Por fim, remova a linha que você acabou de inserir, salve as alterações e saia do editor.

Opinião do instrutor

Para inserir o texto, podemos navegar até o início da segunda linha e digitar i, dessa forma entramos no modo de inserção e somos capazes de inserir texto no arquivo. Digite o texto e aperte enter no final para quebrar a linha.

Para apagar o texto "Da wikipédia, ", precisamos primeiro entrar no modo de comandos. Para isto apertamos a tecla Esc. Temos que navegar até o início da segunda linha e digitar o número de caracteres que desejamos remover, no caso 14, e pressionar a tecla x.

Para remover a linha inteira, precisamos navegar até a linha que desejamos remover e utilizamos o comando dd no modo de comandos. Para salvar e sair do editor utilizamos :wq.

### Aula 5 - Navegação no vi - Vídeo 2

Transcrição  
Continuando nossos estudos com o VI, aprenderemos mais sobre navegação, muito mais além das setas do teclado.

Se quisermos ir para a última linha do texto por exemplo, basta apertarmos Shift + g. Se quisermos pular para a linha n, apertamos o número correspondente e depois Shift + g. Então se, por exemplo, quisermos ir para a linha 5, fazemos 5 e depois Shift + g, para a primeira linha a combinação também é válida: 1 e depois Shift + g, sempre com Shift para que o g seja maiúsculo.

Se quisermos ir para o final da linha atual usamos a tecla $, ou seja, Shift + 4 e para ir ao início da linha digitamos 0.

Algo bem comum ligado à navegação de um arquivo é a procura de palavras. Para buscarmos palavras no texto usando o VI, digitamos "/" + o texto que procuramos, algo como:

/California

Se digitarmos isso, o cursor vai para a primeira ocorrência da palavra California. Se apertarmos a tecla n, ele irá para a próxima ocorrência e com Shift + n, podemos voltar para a anterior.

### Aula 5 - Início e final do arquivo

Qual das alternativas a seguir contém, respectivamente, os comandos que utilizamos para ir até o final do arquivo e até o início do arquivo?

Alternativa correta:  
G(Shift + g) e 1G (Shift + g)

> Para conseguir navegar até o fim do arquivo, utilizamos o comando G (Shift + g). Para navegar até o início do arquivo, utilizamos o comando 1G (Shift + g).

Para ir até o início do arquivo, podemos utilizar também o comando gg.

### Aula 5 - Pesquisando no arquivo

Vamos agora utilizar o vi e abrir o arquivo google.txt:

vi google.txt

Utilize o comando necessário para navegar até a linha 30.

Pesquise pelo termo "Yahoo!". Navegue nas ocorrências, utilizando também o comando necessário para voltar até uma ocorrência anterior.

Opinião do instrutor

Se quisermos navegar até a linha de número 30, utilizamos o comando 30G (Shift + g). Podemos também utilizar o comando 30gg.

Para pesquisar o termo "Yahoo!", utilizamos o comando /Yahoo!. Para navegar até a próxima ocorrência podemos utilizar n. Utilizamos N (Shift + n) se quisermos navegar para uma ocorrência anterior.

### Aula 5 - Copy e paste no vi - Vídeo 3

Transcrição  
Um recurso muito comum de ser utilizado nas edições de texto são o copiar e colar, os quais veremos como fazer no VI. Para copiarmos uma linha do texto apertamos a tecla y duas vezes e para colar o que foi copiado, basta usar a tecla p.

Também podemos usar a ideia de quantidade de linhas com os números para copiar e colar. Se quisermos copiar a linha atual e mais as duas linhas abaixo podemos fazer 3 e yy - três linhas foram copiadas. O mesmo serve para o comando de colar: 3 e p cola três vezes o conteúdo copiado anteriormente.

### Aula 5 - Copiando

Qual das alternativas a seguir contém o comando do VI que copia 6 linhas?

Resposta:
6yy

> Para copiar a linha onde está o cursor utilizamos o comando yy. Para copiar 6 linhas fazemos 6yy.

### Aula 5 - Colando

Qual das alternativas a seguir contém o comando do VI que cola 2 vezes o conteúdo que foi copiado?

Resposta:  
2p

> Para colar o conteúdo copiado utilizamos o comando p. Para colar 2 vezes fazemos 2p.

### Aula 5 - Copiar e colar

Vamos agora utilizar o vi e abrir o arquivo google.txt:

vi google.txt

Copie as três primeiras linhas do arquivo, salte para a linha 40 do arquivo e cole cinco vezes o conteúdo que foi copiado.

Opinião do instrutor

Para copiar as três primeiras linhas utilizamos o comando 3yy. Para ir até a linha de número 40 podemos executar o comando 40G (Shift + g). Por fim, para colar cinco vezes utilizamos o comando 5p.

### Aula 5 - Conclusão - Vídeo 4

Transcrição  
Aprendemos o básico sobre Linux e terminal neste curso. A continuação deste curso está disponível no curso de Linux II: Programas, processos e pacotes onde aprendemos sobre muitos outros programas e como eles funcionam por trás, ou seja, os processos. Além disso lidaremos com instalação e gerenciamento de pacotes.
