const {DataSource } = require('apollo-datasource')

const Author = require('../models/Author')
const Book = require('../models/Book')
const BookAuthor = require('../models/BookAuthor')


const findAuthor = (id) => {
	return Author.findOne({_id:id})
}


module.exports = class BookService extends DataSource {
	constructor(){
		super()
	}

	initialize(){}

	async getAuthors ()  {
		return await Author.find()
	}

	async getAuthor(id) {
		return await findAuthor(id)
	}
	async getAuthorBooks(authorId) {
		const bookByAuthorId = await BookAuthor.find({
			authorId
		})
		// populate instead of mapping
		// end goal is to populate books by author id
		// on hold for now the populate
		// what we want is the result
		const booksResponse = bookByAuthorId.map(async bookAuthor => {
			const book = await Book.findOne({id: bookAuthor.bookId})
			// console.log('book: ', book)
			return book
		})

		const booksResponseResult = await Promise.all(booksResponse)
		// console.log('books response: ',  booksResponseResult)

		return booksResponseResult


		// create model for bookAuthors
		// create model for book

		// const filteredBooks = bookAuthors
		// 		.filter(bookAuthor => bookAuthor.authorId === authorId)
		// 		.map(bookAuthor => findBook(bookAuthor.bookId));
		// return Promise.resolve(filteredBooks);
	}
}

