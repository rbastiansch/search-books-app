import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Books from '../services/Books';

class Search extends Component{
	constructor(props){
		super(props);
		this.state = {
			books: [],
			search: '',
		};
		this.handleSearch = this.handleSearch.bind(this);
		this.updateInput = this.updateInput.bind(this);
		this.updateBooks = this.updateBooks.bind(this);
	}	

	// é chamada com o botão de busca e controla se a busca vai ser realizada
	handleSearch(e){
		e.preventDefault();
		const { booksInfo } = this.props;
		if(this.state.search){
			this.updateBooks(booksInfo.startBooks)
		}
	}
	
	// atualiza no estado o que é digitado no input
	updateInput(e){
		this.setState({
			search: e.target.value,
		})
		return true;
	}

	// busca os livros na API de acordo com a pagina atual
	updateBooks(start){
		const {booksInfo} = this.props;
		Books.getBooks(start, booksInfo.booksPerPage, this.state.search).then((response) => {
			this.setState({ books: response.data});
			this.props.updateBooks(response.data);
		});
	}

	render(){
		return(
			<nav className="navbar navbar-light bg-faded">
			  	<a className="navbar-brand">Books APP</a>
			    <form className="form-inline my-2 my-lg-0">
			      <input className="form-control mr-sm-2" type="text" placeholder="Search" name="searchResult" onChange={this.updateInput}/>
			      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleSearch}>Search</button>
				</form>
			</nav>
		)
	}
}

Search.propTypes = {
	updateBooks: PropTypes.func,
}

export default Search;