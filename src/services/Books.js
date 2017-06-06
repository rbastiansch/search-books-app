import axios from 'axios';

const Books = {
	getBooks(start, itens, search){
		return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${start}&maxResults=${itens}`);
	}
}

export default Books;