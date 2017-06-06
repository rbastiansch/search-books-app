# search-books-app
> A React aplication to search books consuming Google Books API.

## Build Setup

``` bash
# install dependencies
npm install

# run at localhost:3000
npm start

# build for production 
npm run build

```

Essa Aplicação está usando React e Bootstrap, foi criado usando o create-react-app. Aplicação está usando componentes que se comunicão quase que totalmente através do arquivo root(App.js) usando props, funções com callback e refs.
Inicialmente seria feito com rotas, mas chegou ao ponto que iria precisar de usar Redux, ou outro, para gerenciar o estado da aplicação, então resolvi voltar e escrever da maneira que está agora.

Pontos sem implementação: testes, palavra-chave destacada.
Bugs: Paginação depois de algumas paginas ou clicada para ir para a ultima pagina retorna erro.
