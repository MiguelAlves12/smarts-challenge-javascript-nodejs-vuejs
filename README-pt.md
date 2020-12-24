# smarts-challenge-javascript-nodejs-vuejs
  - Desafio da Smartstaff - construir uma API que consome uma lista de clientes em formato json e a disponibiliza fazendo paginação. 
  E uma aplicação frontend que consome essa API.

## Tecnologias usadas no projeto

  > Node.js
    - foi usado Node.js v12.18.2, no qual pode ser instalado através do site: https://nodejs.org/en/blog/release/v12.18.2/;
    
  > Vue.js    
    - foi usado Vue.js na versão vue/cli que pode ser instalado conforme as instruções do site oficial https://cli.vuejs.org/guide/installation.html;
    
  > Plugins  
    - vue/cli-service-global para rodar um servidor local para fazer o desenvolvimento do projeto;
    - Axios.js para fazer as requições http para consumir tanto o json de clientes no back-end 
      quanto a própria API contruida nesse projeto no front-end. Pode ser instalado seguindo as instruções no site https://www.npmjs.com/package/axios;
    - Express.js para construir a API através do protocolo GET HTTP na rota /Custumers com o filtro ?page=numero-da-pagina.
      Pode ser instalado seguindo as instruções do site oficial https://expressjs.com/pt-br/starter/installing.html;
      
  > Motivo de ter usado essas tecnologias
    - As tecnologias em questão foram escolhidas por já ter tido um contato anterior com elas. Além disso, essas ferramentas facilitam a construção 
      rapida de API's para o back-end e uma interface no front-end, pois disponibilizam bibliotecas, plugins e uma sintaxe que encapsula e encurta o 
      desenvolvimento, ajudando principalmente na elaboração e construção de projetos com curto de prazo, como o projeto em questão.
      
## Experiência com o desenvolvimento do projeto
   O projeto foi um tanto quanto desafiador, pois incluia uma serie de conceitos, ferramentas e experiências que eu nunca tive a oportunidade de ter
   contato até o momento principalmente no momento de fazer o deploy do projeto. A parte que tive mais facilidade foi com a construção da API com o 
   Node.js e Express.js. Além disso, tive facilidade com a construção do front-end com o Vue.js, mas tive problemas na hora de implementar o mapa, pois não 
   conhecia nenhuma API gratuita que pudesse facilitar o desenvolvimento dessa funcionalidade.
   
   As maiores dificuldades foram com o deploy, pois nunca tinha feito um deploy antes e muito menos colocado um serviço 100% construido por mim em produção 
   com ferramentas como Heroku.
   Apesar da experiência ter sido bem desafiadora, agregou muito conhecimento, confiança e entusiasmo para criar mais projetos próprios e coloca-los em produção.
   Pontos que melhoria na aplicação seria a interface deixando interativa e com um visual melhor, além de novas funcionalidades, no back-end poderia ser melhorado
   e implementado filtros que só trouxesse o que fosse necessário para a interface, além de mostrar logs de erros.


## Rodando o Projeto localmente

  > Primeiro passo
    - baixar o repositorio smarts-javascript-nodejs-vuejs na sua máquina local;
    
  > Segundo passo
    - entrar pelo pelo terminal na pasta "/server" do projeto e rodar o comando: "npm start" ou "node start". 
      E assim, a API já está rodando localmente pela porta 3000;
    OBS.: É necessário ter o Node.js e NPM instalado no seu computador para que os comandos possam ser reconhecidos pelo sistema.
    Se instalar o Node.js por esse site: "https://nodejs.org/en/blog/release/v12.18.2/". Ele já instala o NPM em conjunto;
    
  > Terceiro passo
    - Após o passo anterior basta entrar no seu navegador e colocar na barra de url: "http://localhost:3000/Custumers", 
      no qual irá retornar um json com os 10 primeiros clientes. Caso deseje filtrar ou ir para a próxima pagina
      basta colocar "http://localhost:3000/Custumers?page=numero-da-pagina";
      
  > Quarto passo
    - Agora iremos rodar o front-end para isso abra um novo terminal no caminha da pasta "/smart-challenge" e 
      rode o comando "yarn serve", no qual irá contruir um servidor local na porta 8080.
      
  > Quinto passo
    - Após o passo anterior basta entrar no navegador e colocar na barra de url o endereço "http://localhost:8080"
    
## Como fazer o deploy do projeto
  
  > Primeiro passo
    - construir dois repósitorios no github, onde será armazenado a pasta do back-end("/server") em um repositório 
      e o front-end("/smart-challenge") no outro repositório;
      
  > Segundo passo
    - fazer o commit e o push da pasta "/server" para o repositório do back-end no seu github, 
      após isso vamos criar uma conta no Heroku, através do site "https://www.heroku.com/";
      
  > Terceiro passo
    - com a conta criada no heroku, após fazer o login, crie um novo projeto clicando no botão "New" em "create new app" 
      no lado direito do site no canto superior;
      
  > Quarto passo
    - dentro da basta "/server" é necessário criar um arquivo (que nesse caso já está criado) com o nome "Procfile" com 
      o conteúdo: "web: npm start" para que o Heroku inicie a nossa API quando for feito o deploy do serviço;
      
  > Quinto passo
    - Dentro do projeto do Heroku em Deploy vamos integrar o nosso repositório github com o heroku em "Deployment Method",
      após isso em "App connected em Github" escolhermos o repositório onde se encontra o back-end. E então, habilitar 
      "Automatic deploys" para que toda vez que fazer um novo commit no repositório o heroku irá atualizar o serviço em produção.
      Na aba "Overview" podemos ver os logs e se o heroku conseguiu fazer o deploy. E para ver o serviço em produção basta clicar
      no "Open app" no canto direito superior do site;
      OBS.: É necessário colocar a rota após o dominio criado pelo Heroku: "/Custumers" ou "/Custumers?page=numero-da-pagina".
      
  > Sexto passo
    - Agora vamos fazer o deploy do front-end no Heroku, primeiro precisamos preparar a pasta "/smart-challenge" rodando os comandos
      "npm run build" e "npm build --report" que irá preparar o projeto para colocar em produção, e também é necessario criar uma pasta
      chamada "static.json" e preencher com esse objeto: 
      
                                                       {
                                                          "root": "dist",
                                                          "clean_urls": true,
                                                          "routes": {
                                                            "/**": "index.html"
                                                          }
                                                        }
                                                        
      
    - Após isso repetir o "Segundo passo" e "Terceiro passo", porém colocando o projeto no repositório do front-end e construindo um novo
      projeto no Heroku para o front-end também;
      OBS.: A basta "statis.json" e os comandos de build já foram inseridos na pasta, caso contratário basta inseri-lós.
      
  > Sétimo passo
    - Precisamos preparar o Heroku com um buildpack, para isso vamos usar o Heroku CLI que pode ser baixado com o comando "npm install -g heroku".
      No terminal e logado no Heroku vamos rodar os comandos: "heroku buildpacks:add -a nome-do-projeto-frontend heroku/nodejs" e "heroku buildpacks:add -a nome-do-projeto-           frontend https://github.com/heroku/heroku-buildpack-static".
    - Após isso, vamos entrar no projeto dentro do site do Heroku em "Settings" e configurar duas variaveis "BUILDPACK_URL" com o conteúdo "https://github.com/kr/heroku-               buildpack-go.git" e outra variavel com o nome "VUE_APP_API_URL" no qual irá receber a URL do backend criada pelo Heroku anteriormente;
    - Por fim repetir o "Quinto passo" para o projeto front-end no Heroku;
    
## Teste
  A aplicação pode ser testada tanto localmente quanto através do site: "https://smarts-challenge-javascript.herokuapp.com/" (front-end) e 
  "https://smart-challenge-backend.herokuapp.com/Custumers" (API)
    
