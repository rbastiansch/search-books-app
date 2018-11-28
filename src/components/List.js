import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class List extends Component{
	constructor(props){
		super(props);
		this.state = {
			favorites: [],
			viewItem: false,
			book: [],
			total: 0,
			page: 0,
			itensPerPage: 10,
			search: '',
		}

		this.handleFavorite = this.handleFavorite.bind(this);
		this.updateFavorite = this.updateFavorite.bind(this);
		this.handleView = this.handleView.bind(this);
	}

	// armazena ou remove o livro favorito do localStorage
	handleFavorite(book){
		const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

		if(favorites.indexOf(book.id) === -1 || favorites === ''){
			favorites.push(book.id);
			localStorage.setItem('favorites', JSON.stringify(favorites));
		}else if(favorites.indexOf(book.id) !== -1){
			const indexFav = favorites.indexOf(book.id);
			favorites.splice(indexFav,1);
			localStorage.setItem('favorites', JSON.stringify(favorites));
		}
		this.setState({ favorites: favorites });
	}

	// atualiza o icone nos livros
	updateFavorite(book){
		let favoriteIcon = 'fa fa-star-o ml-5';
		const verifyFavorites = localStorage.getItem('favorites');
		if(verifyFavorites !== null){
			if(verifyFavorites.indexOf(book.id) !== -1){
				return favoriteIcon = 'fa fa-star ml-5';
			}else{
				return favoriteIcon = 'fa fa-star-o ml-5';
			}
		}else{
			return favoriteIcon;
		}
	}

	// esconde ou mostra o component List e Pagination quando chamado
	handleView(book){
		this.setState({ 
			viewItem: !this.state.viewItem,
			book: book,
			search: this.props.search,
		})
		this.props.handlePagView(this.state.viewItem);
	}

	render(){
		const {books} = this.props;
		const list = (!this.state.viewItem && books !== '' ? books.items.map((book, key) => {

			// esse código serve pra não dar erro quando o livro não tiver thumbnail
			let thumbnail = '';
			if(book.volumeInfo.imageLinks){
				thumbnail = book.volumeInfo.imageLinks.thumbnail;
			}

			const favoriteIcon = this.updateFavorite(book);
			
			return (
				<div className="card" style={{width: 15 + 'rem'}} key={key}>
					<img className="card-img-top img-fluid" src={`${thumbnail}`} alt="book thumbnail"/>
					<div className="card-block">
						<h4 className="card-title" id="title-book">{book.volumeInfo.title}</h4>
						<p className="card-text">{book.volumeInfo.subtitle}</p>
					</div>
				  	<div className="card-footer">
				     	<a className="btn btn-primary" onClick={() => this.handleView(book)}>Details</a>
				     	<a onClick={() => this.handleFavorite(book)}>
				     		<i className={`${favoriteIcon}`} aria-hidden="true"></i>
				     	</a>
				    </div>
				</div>
			);

		}) : null);


		const item = this.state.viewItem ? 
			<Item handleView={this.handleView} updateFavorite={this.updateFavorite}
			 handleFavorite={this.handleFavorite} book={this.state.book} 
			/> : null;

		return(
			<div>
				<div className="row mt-2">
					<div className="col d-flex flex-wrap justify-content-center">
					{list}
					{item}
					</div>				
				</div>
			</div>
		);
	}
}

List.proptypes = {
	handlePagView: PropTypes.func,
}

export default List;