# PokeApi-Totvs

Este projeto foi gerado utilizando a versão 18.0.6 do [Angular CLI](https://github.com/angular/angular-cli). Tem como objetivo consumir a API da [PokéAPI](https://pokeapi.co/) para a visualização de pokémons em cards que podemo collapsar e ao clicar no botão "Ver mais detalhes" seja possível visualizar mais detalhes.

## Bibliotecas presentes no projeto
1. Bibliotecas padrão do angular como Rjxs, Forms, Commom e etc.
2. @ng-bootstrap/ng-bootstrap para os modais, paginação e cards.
3. Bootstrap via CDN para os estilos css.
4. Font Awesome para os ícones.
5. Jest para os testes.

## Como rodar o projeto
Primeiro certifique-se que sua máquina possua as seguintes dependências:
- [NodeJS e NPM](https://nodejs.org/en/download/package-manager/current);
- [Angular CLI](https://angular.dev/tools/cli/setup-local);
- [Git](https://git-scm.com/downloads)

Após certificar-se que sua máquina possui essas dependências vamos ao passo a passo:
1. Faça uma clonagem do projeto utilizando o código abaixo:
 ```
 git clone https://github.com/YuryCSilva/desafioTotvs.git
 ```
 

2. Após realizar a clonagem, entre dentro da pasta que foi criada e utilize o comando:
```
npm install
```

Pronto ao realizar esse passo a passo, você está pronto para rodar o projeto em sua máquina.

## Inicializar servidor

Após passar pelo tópico anterior, você já pode iniciar o servidor em sua máquina e aproveitar o projeto de forma local. Para iniciar o servidor basta abrir um terminal dentro da pasta do projeto e utilizar o seguinte comando ```npm run start```, o projeto está apontando de forma default para a porta 4200, caso deseje que o projeto aponte para outra porta, utilize o comando ```ng serve --port 4202```.

## Build

Caso queira realizar o build desse projeto basta utilizar o comando ```npm run build```. Se por acaso a pasta de destino para hospedar o projeto esteja dentro de outras rotas no servidor, utilize o comando ```npm run build:href /rota_ate_pasta_destino/```. 

## Visualização do Projeto

Para visualizar o projeto, por favor [clique aqui](https://yurycsilva.github.io/desafioTotvs/). Espero que gostem do projeto!!