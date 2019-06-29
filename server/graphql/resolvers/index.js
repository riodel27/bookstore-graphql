const authorResolvers = require('./authors')

module.exports = {
	Query: {
		...authorResolvers.Query
	},
	Author : {
		...authorResolvers.Author
	}
}
