import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component{

	render(){
		const { page } = this.props.booksInfo;
		const totalPages = Math.ceil(this.props.booksInfo.total / this.props.booksInfo.booksPerPage);

		//cada função envia a pagina desejada para atualizar na lista
		const firstLink = page > 1 ? 
			<li onClick={() => this.props.goPage(1)} className="page-item"><a className="page-link">First</a></li>				
			: null;
		const previousLink = page > 1 ? 
			<li onClick={() => this.props.goPage(page - 1)} className="page-item"><a className="page-link">{page - 1}</a></li>				
			: null;
		const nextPage = page < totalPages ?
			<li onClick={() => this.props.goPage(page + 1)} className="page-item"><a className="page-link">{page + 1}</a></li>
			: null;
		const lastPage = page < totalPages ?
			<li onClick={() => this.props.goPage(totalPages)} className="page-item"><a className="page-link">Last</a></li>	
			: null;
		return(
			<div className="col d-flex justify-content-center mt-2">
				<nav aria-label="Page navigation example">
				  <ul className="pagination">
				  	{firstLink}
				  	{previousLink}			    
				    <li className="page-item active"><a className="page-link">{page}</a></li>
				    {nextPage}
				    {lastPage}
				  </ul>
				</nav>
			</div>
		);
	}
}

Pagination.propTypes = {
	goPage: PropTypes.func,
}

export default Pagination;