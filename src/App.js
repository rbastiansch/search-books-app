import React, { Component } from 'react';
import Search from './components/Search';
import List from './components/List';
import Pagination from './components/Pagination';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showList: false,
      showPagination: false,
      books: [],
      page: 1,
      booksPerPage: 10,
      startBooks: 0,
      total: 0,
      searchStr: '',
    };

    this.handleListView = this.handleListView.bind(this);
    this.handlePagView = this.handlePagView.bind(this);
    this.updateBooks = this.updateBooks.bind(this);
    this.updateSearchString = this.updateSearchString.bind(this);
    this.goPage = this.goPage.bind(this);
    
  } 

  // muda o estado para mostrar o componente List
  handleListView(boolean){ 
    this.setState({
      showList: boolean,
    });
  }

  //muda o estado para mostrar ou esconder o componente Pagination
  handlePagView(boolean){ 
    this.setState({
      showPagination: boolean,
    })
  }

  //recebe os livros da API e seta no estado, chama as funções acima de mudança de estado
  //é chamada no componente Search
  updateBooks(books){ 
    this.setState({
      books: books,
      total: books.totalItems,
    });
    this.handleListView(true);
    this.handlePagView(true);
  }

  updateSearchString(string){
    this.setState({ searchStr: string})
  }

  // é chamada pelo componente Pagination e recebe a pagina destino
  // chama a função para atualizar os livros
  goPage(page){
    const start = (page * this.state.booksPerPage) - this.state.booksPerPage;
    this.setState({
      page: page,
      startBooks: start,
    })
    this.refs.search.updateBooks(start);
  }

  render() {

    const list = this.state.showList ? <List books={this.state.books} searchStr={this.state.searchStr} handlePagView={this.handlePagView} /> : null;
    const pagination = this.state.showPagination ? <Pagination booksInfo={this.state} goPage={this.goPage}/> : null;

    return (
      <div className="container-fluid">
        <Search updateBooks={this.updateBooks} booksInfo={this.state} updateSearchString={this.updateSearchString} ref="search"/>
        {list}
        {pagination}
      </div>
    );
  }
}

export default App;
