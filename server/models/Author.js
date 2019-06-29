const {model,Schema} = require('mongoose')


const authorSchema = new Schema({
	id:String,
	name: String,
})

module.exports = model('author', authorSchema,'author')