const {model,Schema} = require('mongoose')


const bookSchema = new Schema({
	id:String,
	name: String,
	publisherId:String
})

module.exports = model('books', bookSchema,'books')