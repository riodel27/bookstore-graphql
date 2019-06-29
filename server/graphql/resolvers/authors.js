const {dataSources } = require('../../datasources')

module.exports = {
	Query: {
		 authors() {
			 console.log('authors!!!')
			return  dataSources.bookService.getAuthors()
		},
		author(_,{id}){
			return  dataSources.bookService.getAuthor(id)
		}
	},
	Author: {
		/**this is for schema relation pattern */
		books(parent) {
			console.log('parent!!')
				return dataSources.bookService.getAuthorBooks(parent.id);
		}
	}
}