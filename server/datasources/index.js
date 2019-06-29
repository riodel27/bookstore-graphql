const BookService= require('./book-service')

module.exports = {
	dataSources : {
		bookService: new BookService()
	}
}