# Curso Alura - Arquitetura de computadores: por trás de como seu programa funciona

## Aula 1 - Como o Computador lê seu código

### Aula 1 - Apresentação - Vídeo 1

Transcrição
Olá! É um prazer tê-lo neste curso.

Audiodescrição: Andrew Ijano é uma pessoa de pele clara, olhos e cabelos castanhos.

Meu nome é Andrew Ijano e quero indagar algo:

Você já se perguntou como o computador interpreta as instruções que passamos por meio de linguagens de programação? Ou como os componentes internos do computador comunicam-se para funcionar em harmonia? Ou até mesmo, o que está ocorrendo entre a linguagem de programação que escrevemos e aquele emaranhado de fios e eletricidade que existe dentro do computador?

A resposta para essas e várias outras perguntas será encontrada neste curso sobre o funcionamento dos computadores. E você perceberá que, ao contrário do que muitas pessoas pensam, os computadores não têm nada de mágico.

O que vamos aprender?
Como o computador lê o seu programa
Como o computador executa um programa
Como dados são armazenados
Neste curso, veremos como o computador lê o nosso programa e como ele transforma vários símbolos que escrevemos em editores de texto em algo que o computador compreende de verdade.

Entenderemos por que programas escritos em C são mais rápidos do que programas escritos em Python e por que, ainda assim, Python pode ser a melhor escolha em determinadas situações.

Também vamos compreender o processo de execução de um programa em um computador. Para isso, atravessaremos diversos componentes internos do computador, como SSD, HD, memória RAM e CPU.

Explicaremos o significado desses termos, suas diferenças e como eles se comunicam para executar o programa.

Também abordaremos termos como multi-core, dispositivos de I/O e memória cache. Finalmente, veremos como os dados são armazenados, como números inteiros (10), caracteres (A), listas ([1,2,3]) e números decimais (0,25) são representados internamente no computador e por que isso é relevante na programação.

Para quem é este curso?
Para quem é direcionado este curso? Este curso se destina a pessoas que possuem algum conhecimento em programação ou têm grande interesse em tecnologia e desejam aprender mais sobre o funcionamento interno de um computador.

Por quê? Porque, para programar de forma eficaz, é essencial compreender o que ocorre dentro do seu programa, permitindo tomar decisões mais informadas para seu projeto.

Então, prontos para começar?

Vejo você no curso!

### Aula 1 - O código de máquina - Vídeo 2

Transcrição
Atualmente, vivemos em um mundo que está cercado de computadores. Temos um computador em nossa mesa, um computador portátil que podemos levar para vários lugares, um computador em uma sala isolada do outro lado do mundo encarregado apenas com cálculos e até mesmo um computador em nossa cozinha, na geladeira que auxilia nosso cotidiano.

E o que esperamos que todos esses computadores façam? Desejamos que, sempre que interagimos com eles, executem ações ou programas. Porém, para que esses computadores executem os programas, precisam ter sido escritos por alguém.

Contextualizando
Por exemplo, se desejarmos fazer ligações no celular, alguém precisou programar para que ao clicarmos no ícone de ligação, o celular passe a ligar para alguém. Então, se você já teve algum contato com linguagem de programação, deve ter aprendido a fazer esse tipo de programa.

Para executar e escrever esses programas, provavelmente utilizou ferramentas como o navegador, editores de texto online como o P5 ou o Scratch, ou IDEs como o IntelliJ ou o Eclipse. Nesse processo, geralmente se escreve o código usando esses editores e ao executá-lo, o computador interpreta o código e entrega o resultado.

No entanto, o computador está longe de ser mágico. Ele executa ações bem definidas e algo muito real e factível.

Para desmistificar a ideia de que o computador é mágico e totalmente abstrato, e para entendermos melhor o que estamos escrevendo e o que está acontecendo abaixo daquele emaranhado de circuitos elétricos, vamos entender como o computador funciona.

Como o computador funciona
Quando escrevemos um código, escrevemos algo em uma linguagem que chamamos de alto nível, uma linguagem que nós, humanos, conseguimos entender. É uma linguagem, por exemplo, como JavaScript, onde podemos escrever palavras em inglês como function e, por exemplo, let.

Escrevemos nomes de variáveis com palavras que entendemos, conseguimos escrever os textos que queremos que o computador exiba na tela. É algo muito próximo da nossa linguagem cotidiana.

No entanto, há um problema. O computador não entende esse tipo de linguagem. Ele utiliza um tipo de linguagem bastante restrito, conseguindo apenas realizar operações aritméticas como adição, subtração, multiplicação, algumas operações para armazenar e recuperar coisas da memória, e fazer comparações para verificar se dois elementos são iguais ou diferentes.

Esse conjunto de instruções é chamado de código de máquina.

Temos o código de alto nível e o código de máquina.

O Código de Máquina e Linguagem de Alto Nível
Alto nível
Para entendermos a diferença desses dois tipos de linguagem, vamos pegar um pequeno exemplo.

let a = 7;
let b = 2;
let c = a + b;
if (c !== 0) { 
    C++;
}
Copiar código
Temos um código em JavaScript que executa uma sequência de operações, embora não tenha muita aplicação prática. Criamos duas variáveis, a e a. A variável a recebe o valor 7 e b recebe o valor 2. Em seguida, criamos uma terceira variável, a variável c, que receberá a soma de a e b.

Em seguida, verificamos uma condição. Se c for diferente de 0, entramos dentro da condicional (if) e incrementamos c (C++). Esse é o código em JavaScript, código em linguagem de alto nível.

Código de Máquina
E para mostrar o que seria o código de máquina, vamos usar uma notação simplificada de algo chamado linguagem de montagem, ou assembly.

guarda 7 em a
guarda 2 em b
pega a
soma b
guarda em c
compara ce 0
se_igual_pula 1 linha
incrementa c
Copiar código
A linguagem de montagem, que está representando o código de máquina, possuiria uma sequência de instruções muito mais extensa, com significados específicos.

A primeira instrução, por exemplo, guardaria o valor 7 dentro de uma posição específica do computador, que representaria a variável a.

No próximo passo, fazemos o mesmo para o valor b: pegamos o valor 2 e armazenamos em algum lugar da memória do computador. Em seguida, precisamos inicializar o c, que será a soma de a e b.

Primeiro, pegamos o valor de a já armazenado. O computador encontra onde esse valor está e armazena ele para realizar as próximas operações. Logo depois, ele soma o valor que está armazenado na posição de b.

Sendo mais específico, se pegarmos o valor de a como 7, o computador encontrou o valor de b, que é 2, e somou. Ele somou 2 e agora temos 9. Em seguida, ele pega o resultado dessa operação de soma, que é 9, e armazena esse valor em c. Assim, ele guarda esse valor em algum ponto do computador.

Então ocorre uma operação de comparação: é verificado se c e 0 são iguais. Se forem, seguindo a lógica do código JavaScript, não executará o código dentro da condicional, dentro do if. Portanto, não queremos que c seja incrementado se for igual a 0. Se for igual, pulamos uma linha e não se executa a instrução de incrementar c.

Caso seja diferente, c será incrementado. Agora, é possível comparar esses dois tipos de linguagem e ver que o código da máquina é um pouco mais granular e um pouco mais limitado na expressividade que podemos usar.

Não precisa entender o código da máquina para programar, mas é interessante conhecer os processos que ocorrem por trás.

Código Binário
Mesmo assim, o computador não usa essa anotação para fazer ou representar comandos. Na realidade, o computador usa uma sequência de zeros e uns, o que chamamos de código binário. Você pode até ter ouvido falar que o computador comunica-se apenas com zeros e uns.

Isso acontece porque o computador é formado internamente por um conjunto de fios e circuitos pelos quais a eletricidade passa. Se um fio está transmitindo eletricidade, o computador interpreta como um; e se um fio não está transmitindo eletricidade, é interpretado como zero.

Essa lógica de estar ligado ou desligado estende-se a todos os componentes do computador, com isso, surge o código binário. Por meio dessa sequência de ligado e desligado, conseguimos representar a informação.

Temos nosso código-fonte em linguagem de alto nível, código-fonte que entendemos. Nós compreendemos o que significa imprimir 2 mais 2.

imprimir (2 + 2)
Copiar código
O que precisamos fazer é transformar esse código-fonte em código para a máquina, que é um conjunto de zeros e uns, ligado e desligado dentro do circuito. Portanto, precisamos encontrar uma forma de converter este código-fonte em um código compreensível para a máquina.

Conclusão
Para isso, precisamos de uma espécie de tradutor que pega o código que conhecemos e o transforma em um código que o computador entenda.

Vamos ver como funciona esse tipo de tradutor no próximo vídeo!

### Aula 1 - Para saber mais: bits e bytes
 Próxima Atividade

Em um computador, cada um desses 0s e 1s é chamado de bit, que vem do inglês Binary Digit ou dígito binário. Essa é a menor unidade possível para o armazenamento de informação.

Como bit é uma unidade muito pequena, costuma-se trabalhar com grupos de 8 bits, essa quantidade agrupada de bits é chamada de byte. Por convenção, quando medimos o armazenamento em um computador usamos o byte.

Para representar essas unidades, utilizamos b (“b” minúsculo) para o bit e B (“B” maiúsculo) para byte. Ou seja, 1B = 8b.

Você pode encontrar essas unidades em conjunto com prefixos SI como kg(quilograma, ou mil unidades de gramas), M(mega, ou 1 milhão de unidades), G (giga, ou 1 bilhão de unidades) e assim por diante. Por exemplo:

Um arquivo de 200 MB é um arquivo com 200 milhões de bytes.
Uma internet com velocidade de 20 Mbps transfere 20 milhões de bits por segundo ou 2,5 milhões de bytes por segundo.
A diferença entre maiúsculas e minúsculas pode passar despercebida, mas é algo bem importante!

### Aula 1 - O tradutor do computador - Vídeo 3

Transcrição
Para executarmos o código que escrevemos, necessitamos de um tradutor que converta o código-fonte em código de máquina e posteriormente o envie para a máquina executar.

Mas, como o tradutor funciona? Como é o processo de tradução? Para ilustrar, usaremos um exemplo.

O tradutor do computador
Exemplo:

let c = a + b;
Copiar código
Digamos que temos esse trecho de código: let c recebe a mais b, acima.

Neste caso, estamos criando uma nova variável, a variável c, que irá receber o valor das variáveis a mais b.

Processo de tradução
Durante o processo de tradução, o tradutor interpreta esse código que escrevemos, como um texto puro, uma sequência de caracteres.

Ele examinará individualmente cada caractere, incluindo espaços, letras, símbolos especiais e até caracteres invisíveis de quebra de linha. Em seguida, ao ler um caractere por vez, ao identificar o texto, o tradutor reconhecerá as palavras e agrupar conjuntos de caracteres, como let, a fim de compreender seus significados e a relação entre eles.

Nesse momento, ele vai identificar, por exemplo, os nomes de variáveis, analisando que c, a e b são nomes de variáveis. Ele vai identificar que let, a sequência l, e, t, indica que estamos declarando uma nova variável.

Por exemplo, quando encontramos os símbolos igual e mais, o intérprete compreende que estamos realizando uma atribuição a uma variável e uma adição de dois valores. Assim, ele deduz o significado dessas combinações de símbolos e, ao fazer isso, identifica possíveis erros, verifica a declaração prévia das variáveis que estamos utilizando e determina os tipos das variáveis em questão.

Portanto, se a, por exemplo, é um texto ou é um número, coisas desse tipo. Ele realiza todo esse processo de verificação, tentando entender o que essa combinação de caracteres significa e, a partir disso, começa a gerar o código de máquina.

A primeira ação que ele executará é a identificação do uso da variável a. Para tal, ele requer um código de máquina que permita a captura do valor de a. Dessa forma, ao executar posteriormente e capturar o valor de a, ele associa a ligação que, no nosso exemplo, define que a terá o valor de 7.

Em seguida, quando percebe que também vai usar o b e somar o valor de a com o valor de b, ele usa o comando no código de máquina para adicionar o valor de b a esse bound que está armazenando no computador. No nosso exemplo, b vale 2, então a soma deles, no momento da execução, será de 9.

Em seguida, ele reconhece que após a adição dos valores de a e b, deve criar uma nova variável chamada c para armazenar o resultado dessa soma. Assim, ele utiliza o terceiro comando de código de máquina, denominado guarda c. Dessa maneira, ele armazena o resultado contido nesse bound fictícia na variável c.

Dessa forma, temos esses três comandos em código de máquina que correspondem àquela linha do código-fonte:

pega a
soma b
guarda c
Copiar código
E esses códigos de máquina serão convertidos em código binário:

11011001  10110011
11001101  1011000
11000001  1001001
Copiar código
Portanto, tanto as instruções quanto o destinatário dessas instruções serão convertidos em uma sequência de zeros e uns. Esses zeros e uns serão consolidados em um único código de máquina, que poderá ser fornecido à máquina para execução posterior.

1101100110110011110011011011000110000011001001
Copiar código
Assim, esse é o funcionamento fundamental da tradução. Na prática, há uma série adicional de etapas envolvendo cálculos complexos e conceitos avançados. No entanto, a ideia central permanece a mesma: o código que você escreve é interpretado por esse tradutor como um texto simples.

O tradutor tentará identificar as palavras-chave e o que elas significam dentro desse texto. Transformará em código de máquina em zeros e uns. E os zeros e uns serão então enviados para a máquina executar.

Entendemos o procedimento de traduzir um trecho de código, mas como o código fonte completo, com várias linhas e comandos, é convertido para código de máquina? Esse processo pode ocorrer de duas formas.

Primeira abordagem para realizar a tradução
A primeira abordagem consiste em simplesmente tomar o código fonte, onde o tradutor lê o código fonte por completo e o traduz integralmente. Ele coleta todos os comandos em um único arquivo, gerando assim o código de máquina.

Uma vez concluída essa conversão, o tradutor não é mais necessário. Subsequentemente, podemos enviar esse código de máquina para o computador executar.

Assim, é importante notar que existem dois passos envolvidos: primeiro, a tradução completa do código fonte, e depois a execução. Esse processo é bastante semelhante ao que ocorre, por exemplo, na tradução de um livro.

Suponhamos que tenhamos um livro em inglês. O tradutor desse livro lê o livro inteiro, traduz o livro por completo para o português e gera uma nova versão em português. Após concluir a tradução, o tradutor não é mais necessário.

Quando a pessoa que comprou esse livro for lê-lo, ela não precisa do tradutor ao lado para conseguir ler esse livro, porque ela consegue entender o significado dele diretamente. É basicamente o mesmo processo.

Essa lógica de processo é análoga: o tradutor lê o livro inteiro em inglês, traduz para o português e, posteriormente, quando a leitora ou leitor deseja ler, não é mais necessário o tradutor para possibilitar a leitura. Da mesma maneira, no contexto computacional, não precisamos do tradutor para executar o código.

Tipo de tradutor Compilador
A prática de compilar todos os códigos de uma vez, agrupando e traduzindo cada instrução em um único arquivo, é conhecida como compilação e o tradutor responsável por isso é chamado de compilador.

Segunda abordagem para realizar a tradução
No entanto, existe uma segunda abordagem para realizar essa tradução. Podemos adquirir o código-fonte e permitir que o tradutor converta um segmento do código e envie-o para a execução no computador. Traduz um trecho de código e manda para o computador executar.

E vai fazendo isso linha por linha, trecho por trecho. Assim, temos o tradutor rodando no momento de execução de forma contínua. Logo, precisamos desse tradutor específico para executar o código, porque ao mesmo tempo que ele traduz, ele já manda para executar, comando por comando.

Essa segunda abordagem é semelhante a um outro tipo de tradução, a dos intérpretes em tempo real.

Por exemplo, se uma pessoa se comunica em inglês e outra em português, o intérprete em tempo real realiza o seguinte processo: quando a primeira pessoa diz "good morning", o tradutor interpreta imediatamente o significado e responde à segunda pessoa em português, dizendo "bom dia".

Portanto, nesse processo, a pessoa expressa o conteúdo na primeira língua, o tradutor interpreta e, simultaneamente, comunica o significado desse trecho de conteúdo à outra pessoa. Assim, é necessário que o tradutor esteja presente continuamente para facilitar a compreensão mútua.

Tipo de tradutor Interpretador
Da mesma forma que no contexto do computador, dependemos do tradutor para a execução. Com essa abordagem semelhante ao intérprete em tempo real, esse tipo de tradutor é conhecido como um interpretador. Ele interpreta um comando por vez e envia instruções para a execução.

Conclusão
Portanto, temos essas duas formas de tradutores: os compiladores e os interpretadores. Mas qual é a diferença prática entre eles? Por que escolhemos um em vez do outro no dia a dia?

Vamos analisar as diferenças entre esses dois tipos de tradutores mais para frente!

### Aula 1 - Executando diferentes linguagens - Vídeo 4

Transcrição
Para entendermos a diferença entre programas que são compilados e programas que são interpretados, faremos um pequeno exemplo. Utilizaremos o mesmo programa escrito em duas linguagens diferentes: uma que iremos compilar e outra que vamos interpretar.

Executando diferentes linguagens
Para realizar essa tarefa, utilizaremos um editor de texto, como o Visual Studio Code. Na primeira aba temos um arquivo chamado programa.c, encontramos um programa em linguagem C, muito semelhante aos exemplos que estamos analisando.

programa.c

// COMPILANDO
#include <stdio.h>

int main() {
int a = 7;
int b = 2;
int c = a + b;

if (c != 0) { 
    c++; 
}
// for (int i = 0; i < 10000000; i++) {
// c++;}

printf("Olá, c = %d\n", c);
return 0;
}
Copiar código
Neste programa em C, faremos a compilação.

Na outra aba, temos essencialmente o mesmo programa, porém escrito em Python, chamado programa.py. Faremos a interpretação deste.

programa.py

# INTERPRETADO

a = 7
b = 2
c = a + b

if c != 0:
c += 1
# for i in range(10000000)
# c +=1
print('Olá, c = ', c)
Copiar código
Se você não conhece essas linguagens, não precisa se preocupar com a sintaxe. É apenas para captar a ideia geral.

Para fazermos a execução, compilação e interpretação desses programas, do lado direito, temos o terminal onde faremos a execução.

Primeiro, vamos começar e analisar se conseguimos executar esse programa em C. Para isso, usamos o compilador de C:

gcc programa.c -o programa
Copiar código
Executamos enviando o programa. A compilação foi bem rápida, porque o código desse programa é bem curto. Em seguida, vamos executar esse programa com o comando ./programa.

./programa
Copiar código
Obtemos a resposta:

Olá, c = 10.

Faremos a mesma coisa para o programa interpretado. Para isso, esse programa em Python, precisamos apenas de um comando, que é o interpretador de Python, enviando o código programa.py como argumento.

python3 programa.py
Copiar código
Temos a resposta:

Olá, c = 10

Que é o resultado de C dado a execução de todo esse programa.

É possível identificar uma grande distinção entre programas interpretados e compilados, que consiste no fato de que os compilados incluem um estágio adicional, que é o da compilação do programa.

Para realizar edições, é necessário sempre compilar e, em seguida, executar. Esse processo afeta o desenvolvimento do programa, especialmente quando há a necessidade de efetuar múltiplas modificações em um programa interpretado.

Vamos somar 10 na linha 5 do arquivo programa.py,c = a + b + 10, editamos e já podemos executar usando o comando python3 programa.py no terminal. Obtemos a seguinte resposta:

Olá, c = 20

Agora desejamos multiplicar por 2 o valor de c no print():

programa.py

# INTERPRETADO

a = 7
b = 2
c = a + b + 10

if c != 0:
c += 1
# for i in range(10000000)
# c +=1
print('Olá, c = ', c*2)
Copiar código
já podemos executar novamente. O btemos como retorno:

Olá, c = 40

Vamos somar 1, editamos e executamos.

print('Olá, c = ', c*2 + 1)
Copiar código
Obtemos:

Olá, c = 41

Isso resulta em um processamento bastante rápido e dinâmico, uma vez que o programa interpretado é executado imediatamente, sem a necessidade de esperar por uma compilação prévia.

Por outro lado, no caso do programa compilado (programa.c), quando desejamos fazer edições semelhantes, como adicionar 10, multiplicar por 2 ou somar 1, é necessário seguir um processo em que primeiro compilamos o programa e, em seguida, executamos.

Vamos adicionar o 10:

programa.c

// COMPILANDO
#include <stdio.h>

int main() {
int a = 7;
int b = 2;
int c = a + b + 10;

if (c != 0) { 
    c++; 
}
// for (int i = 0; i < 10000000; i++) {
// c++;}

printf("Olá, c = %d\n", c);
return 0;
}
Copiar código
Compilamos o programa com o comando gcc programa.c -o programa e na sequência executamos com ./programa.

gcc programa.c -o programa
./programa
Copiar código
Obtemos como retorno:

Olá, c = 20

Adicionamos a multiplicação por 2:

programa.c

// COMPILANDO
#include <stdio.h>

int main() {
int a = 7;
int b = 2;
int c = a + b + 10;

if (c != 0) { 
    c++; 
}
// for (int i = 0; i < 10000000; i++) {
// c++;}

printf("Olá, c = %d\n", c*2);
return 0;
}
Copiar código
Compilamos e posteriormente executamos no terminal e obtemos:

Olá, c = 40

Podemos somar um agora:

printf("Olá, c = %d\n", c*2 + 1);
Copiar código
NovamentecCompilamos, posteriormente executamos no terminal e obtemos:

Olá, c = 41

Esse ciclo de compilação e execução adiciona um tempo adicional antes de podermos efetivamente executar as alterações.

Agora, essa distinção talvez não pareça tão relevante, uma vez que a compilação do programa ocorre quase instantaneamente devido ao tamanho reduzido do arquivo.

No entanto, quando lidamos com um arquivo mais extenso, possivelmente com vários componentes no projeto e dependências significativas, o tempo de compilação pode variar de vários segundos a alguns minutos.

Assim, é importante considerar que o tempo de compilação é um fator que deve ser levado em consideração, pois impacta o desenvolvimento do projeto.

Nesse sentido, os programas interpretados oferecem uma vantagem significativa, pois permitem a identificação e correção mais ágil dos erros de execução, uma vez que a execução começa imediatamente após a ativação do interpretador.

Assim, é por essa razão que os programas interpretados têm a reputação de serem benéficos para o desenvolvimento de software. No entanto, os programas compilados possuem uma grande vantagem que os interpretados não oferecem, que é a rapidez na execução.

Se verificarmos no arquivo programa.c, vamos descomentar esse código da linha 14, onde temos uma interação, um for, que é executado mais ou menos umas 10 milhões de vezes o incremento desse C++.

programa.c

// COMPILANDO
#include <stdio.h>

int main() {
int a = 7;
int b = 2;
int c = a + b + 10;

if (c != 0) { 
    c++; 
}
 for (int i = 0; i < 10000000; i++) {
 c++;
 }

printf("Olá, c = %d\n", c*2 + 1);
return 0;
}
Copiar código
Agora vamos verificar o tempo de execução deste programa que está configurado para uma alta quantidade de processos. Primeiramente, precisamos compilá-lo, e em seguida o executaremos.

gcc programa.c -o programa
./programa
Copiar código
Obtemos:

Olá, c = 20000041

Como podemos observar, o tempo de execução foi praticamente instantâneo. Porém, para confirmar, utilizaremos o comando time no terminal do Linux e observamos que a execução do programa levou aproximadamente 28 a 29 milissegundos.

./programa
Copiar código
Executed in 28.75 millis

Vamos agora executar o mesmo processo, mas com um programa em Python. A estrutura do programa é semelhante, com um loop que incrementará uma variável c cerca de 10 milhões de vezes.

programa.py

#INTERPRETADO

a = 7
b = 2
c = a + b + 10

if c != 0:
c += 1
for i in range(10000000):
        c +=1
print('Olá, c = ', c*2)
Copiar código
Ao executá-lo, notamos que o tempo de execução não foi tão instantâneo quanto o do programa em C.

python3 programa.py
Copiar código
Olá, c = 20000041

Utilizando o comando time python3 programa.py novamente, observamos que a execução desse programa demorou aproximadamente 2,6 segundos. Isso quer dizer que o programa em Python é basicamente noventa vezes mais lento do que o programa em C.

Entendo que pode parecer que isso acontece principalmente devido ao fato de o Python ser uma linguagem interpretada, mas não é essa a única razão. A demora também é influenciada por diversas decisões específicas da linguagem, incluindo a forma como a memória é alocada e como as informações são representadas.

Entretanto, o fato de ser interpretada tem grande influência no tempo de execução.

Portanto, se a pessoa desenvolvedora está pensando em criar programas que necessitam de alta performance e serem extremamente rápidos, normalmente opta-se pelas linguagens compiladas. Isso porque elas geram diretamente o código de máquina para o computador executar, o que facilita e agiliza o processo de execução.

Conclusão
Conseguimos perceber algumas diferenças, mesmo que superficialmente, entre esses dois tipos de linguagem e esses dois tipos de execução.

Agora vamos aprofundar um pouco mais na comparação desses dois tipos de tradutores.

### Aula 1 - Compiladores vs Interpretadores - Vídeo 5

Transcrição
Agora que analisamos na prática a diferença entre um programa compilado e um programa interpretado, podemos começar a analisar melhor as características de cada um.

Compiladores e Interpretadores
A primeira coisa que notamos no exemplo prático é que um programa compilado tem uma execução muito mais rápida do que um programa interpretado.

Isso ocorre porque o compilador possui todo o contexto do programa, o que permite realizar otimizações mais complexas e gerar um código de máquina que está pronto para a execução pelo computador. Por outro lado, o interpretador deve interpretar o programa e enviá-lo para execução durante o processo, o que pode afetar bastante a performance de programas interpretados.

O processo de compilação permite a detecção de erros sem necessariamente ter que executá-los. Assim, se houver um erro de sintaxe no programa, como uso de variáveis antes de declará-las ou mistura de tipos de variáveis, é possível verificar esses problemas durante a compilação e corrigir o programa antes da execução.

Já com programas interpretados, se houver um erro, a única maneira de identificá-lo é durante a execução.

A ausência de um processo de compilação em programas interpretados acaba facilitando o desenvolvimento do software, pois permite que modificações sejam feitas no programa e seu resultado seja visualizado instantaneamente. Isso agiliza o desenvolvimento do software, pois elimina o tempo extra de compilação antes de poder executar o programa.

Quando o desenvolvimento é concluído e desejamos distribuir o software para outras pessoas, os interpretadores têm uma grande vantagem, pois conseguem executar em diferentes máquinas. Um programa compilado gera um código de máquina que funciona apenas em uma máquina específica, ou pelo menos em uma classe de computadores semelhantes ao seu.

Portanto, se você tiver dois computadores com componentes diferentes e compilar o programa em um deles, o código da máquina gerado não será executado no outro computador. Para distribuir o programa, seria necessário compilar para vários tipos específicos de computadores.

No entanto, se o computador no qual você deseja rodar o código tem um interpretador instalado, ele consegue rodá-lo. Isso facilita a distribuição do código para computadores.

Compiladores	Interpretadores
Execução rápida	Execução lenta
Verificar erros antes de executar	Só verifica erros executando
Tempo extra para executar	Começa a executar na hora
Executa em uma máquina	Executa em diferentes máquinas
Aplicações de compiladores e Interpretadores
Agora, vamos analisar algumas aplicações de cada linguagem.

Compiladores
Linguagem C
Linguagem Rust
Linguagem Go
No caso dos compiladores, frequentemente encontramos linguagens como C, Rust e Go, que são utilizadas em programas que demandam alta performance, como motores para jogos ou servidores responsáveis pelo processamento de grandes volumes de dados ou requisições.

Além disso, a linguagem C serve como base para a maioria dos sistemas operacionais que utilizamos atualmente. São linguagens que enfatizam a performance.

Interpretadores
JavaScript
Python
PHP
Ruby
Por outro lado, para interpretadores, encontramos linguagens como JavaScript, Python, PHP ou Ruby. Essas linguagens valorizam bastante o processo de desenvolvimento do software, tornando a facilidade de desenvolver tais linguagens potencialmente maior do que nos programas compilados.

Elas são geralmente usadas em aplicações web, servidores e até em projetos de ciência de dados, nos quais as modificações são constantemente feitas e é desejado visualizar o resultado instantaneamente.

No entanto, estruturando as coisas dessa maneira, dá a impressão de que C é uma linguagem compilada e JavaScript é uma linguagem interpretada. Na verdade, uma linguagem é apenas um formalismo para escrever uma sequência de operações ou um algoritmo.

Um compilador ou interpretador é apenas a implementação dessa linguagem. Sendo assim, é possível ter a linguagem C com um compilador e um interpretador. Portanto, na prática, uma única linguagem pode ter ambos.

Frequentemente, acabamos nos confundindo porque normalmente usamos uma implementação específica apenas para uma linguagem que é a mais famosa e acabamos atribuindo que essa linguagem específica é compilada ou interpretada. No entanto, na realidade isso não é verdade.

Podemos ter mais de uma implementação de um mesmo compilador e um mesmo interpretador. Além disso, podemos encontrar linguagens e implementações que não se encaixam em nenhum desses dois.

Conclusão
Na realidade, existem implementações que buscam combinar as vantagens de ambos os enfoques, criando implementações híbridas para solucionar problemas específicos. Essas linguagens também possuem uma grande notoriedade, e é possível que você já tenha se deparado com algumas delas.

Vamos agora examinar essas implementações!

### Aula 1 - Implementações modernas - Vídeo 6

Transcrição
Com o intuito de mitigar as desvantagens, existem abordagens mais modernas que se situam em uma posição intermediária entre compilação e interpretação. Uma delas é conhecida como Just-In-Time Compilation (compilação no momento certo), também chamada de JIT Compilation.

Implementações modernas
JIT Compilation
Vamos examinar como esse processo funciona. Suponhamos que temos um código-fonte extenso, repleto de funções, que pretendemos executar.

function pitagoras(a, b) {
let soma = a*a + b*b;
return raizQuadrada (soma);
}
Copiar código
Entretanto, não necessariamente iremos executar todo o código, incluindo todas as funções, no momento da execução.

Se formos forçados a realizar a compilação, o compilador analisará o código por completo, realizará a compilação completa e gerará o código de máquina para a totalidade do nosso código-fonte. Isso pode prolongar desnecessariamente o processo de compilação para o nosso código.

Para um interpretador, esse cenário não gera muitos problemas, pois ele se concentra apenas na porção do código que está efetivamente em execução. No entanto, o interpretador tende a ser mais lento, e, portanto, ao executarmos operações que exigem alto desempenho, isso se transforma em uma desvantagem.

Com isso, conseguimos analisar um método de obter um meio-termo entre os dois. Em vez de compilarmos todo o nosso código, se percebermos que estamos utilizando uma função específica, podemos interpretar o nosso código e compilar a função inteira no momento de execução, enviando para o computador o código binário da função inteira para ser executado.

Com isso, conseguimos aumentar consideravelmente a performance do nosso código. Conseguimos trazer a velocidade dos códigos compilados, e ainda não precisamos passar por um processo de compilação no meio. Assim, modificamos o código e conseguimos executar imediatamente, mantendo a facilidade de desenvolvimento dos códigos interpretados.

Esse meio-termo é tão famoso que você pode estar usando - por exemplo, na implementação da Google para JavaScript, chamada de V8. É ela que está rodando em navegadores Google, como o Chrome, e também é implementada no Node.js, que é a implementação para você criar códigos de back-end em JavaScript.

Então, esse método de compilação no momento adequado é um método bastante comum para otimizar códigos interpretados visando obter uma maior performance.

Java
Além da compilação no momento adequado, nós encontramos outro caso peculiar de meio-termo entre interpretação e compilação, que é o do Java. A implementação do Java visava resolver um problema específico, que era a capacidade de compilar nosso código e executá-lo em várias máquinas diferentes.

Para resolver isso, o que eles fizeram foi o seguinte: temos o nosso código-fonte a ser executado e a primeira coisa que fazemos é compilá-lo.

Neste caso, em vez de gerar um código binário para enviar diretamente ao computador, geramos um código intermediário chamado bytecode (podemos conhecer isso como o .class do Java). Este bytecode é específico do Java, mas não é específico da máquina em que estamos rodando.

E para executá-lo de fato, precisamos passar por um segundo interpretador, chamado de JVM ou Java Virtual Machine (Máquina Virtual Java). É este interpretador que vai pegar o nosso bytecode, interpretar linha por linha e executá-lo.

Assim, com o compilador, conseguimos ter todo o contexto para fazer otimizações e verificar erros antes de executar, e devido ao fato de termos um bytecode que não é específico do computador, podemos enviá-lo para várias máquinas que, tendo o JVM instalado, conseguem executar o nosso programa.

Esta é a implementação intermediária usada pelo Java.

Conclusão
Dessa forma, podemos entender agora como o código que escrevemos é transformado em um código de máquina que o computador entende.

Mas como esse código é executado? Como o computador executa o código que escrevemos? Vamos aprender isso na sequência!

### Aula 1 - Compiladores e interpretadores
 Próxima Atividade

William terminou de programar o código fonte de um jogo e, para executá-lo, precisou passar esse código por um tradutor. Ele observou que após esse processo foi gerado um novo arquivo que pode ser executado diretamente pelo computador.

Sobre esse processo de tradução, marque as alternativas corretas:

Resposta:

O novo arquivo gerado é o jogo em código de máquina.

> Alternativa correta! Para o programa ser executado diretamente pelo computador, ele precisa ser escrito como código de máquina.

### Aula 1 - Faça como eu fiz
 Próxima Atividade

Chegou a hora de repassarmos o que vimos até aqui nas aulas. Procure relembrar explicando para si o que aprendeu. É importante que tenha entendido o conteúdo. Caso algo não tenha ficado claro, não hesite em nos procurar no fórum.

Ver opinião do instrutor
Opinião do instrutor

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

### Aula 1 - O que aprendemos?
 Próxima Atividade

Nesta aula, aprendemos:

Como funciona a linguagem que o computador entende: a linguagem de máquina;
O computador precisa de um programa tradutor para transformar um código em uma linguagem de programação de alto nível para linguagem de máquina;
Existem, em geral, dois tipos de tradutores: compiladores e interpretadores;
Quais as diferenças entre compiladores e interpretadores, e suas implementações modernas.

## Aula 2 - Como o computador executa um programa?

### Aula 2 - Armazenando código - Vídeo 1

### Aula 2 -  - Vídeo 2
### Aula 2 -  - Vídeo 3
### Aula 2 -  - Vídeo 4
### Aula 2 -  - Vídeo 5
### Aula 2 -  - Vídeo 6
### Aula 2 -  - Vídeo 7
### Aula 2 -  - Vídeo 8
