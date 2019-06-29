const {model,Schema} = require('mongoose')


const bookAuthorSchema = new Schema({
	id:String,
	bookId:String,
	authorId:String
})

module.exports = model('bookAuthors', bookAuthorSchema,'bookAuthors')