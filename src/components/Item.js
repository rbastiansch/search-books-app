import React, { Component } from 'react';

class Item extends Component{
	render(){
		const { book } = this.props;
		
		//chama a função para atualizar o favorito no localStorage
		const favoriteIcon = this.props.updateFavorite(book);
		return(
			<div className="col-10">
				<img className="img-thumbnail" src={`${book.volumeInfo.imageLinks.thumbnail}`} alt='book thumbinail'/>					
				<button type="button" className="close" aria-label="Close" onClick={this.props.handleView}>
		          <span aria-hidden="true">&times;</span>
		        </button>
				<h4>{book.volumeInfo.title}</h4>
				<p>{book.volumeInfo.description}</p>
				<div className="col d-flex justify-content-end">
					<a onClick={() => this.props.handleFavorite(book)}><i className={`${favoriteIcon}`}></i></a>						
				</div>
			</div>			
		);
	}
}

export default Item;