const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')


// const {createStore} = require('./utilss')
// ideally I will have two mongoose connection expose under createStore


const server = new ApolloServer({
	typeDefs,
	resolvers
});

mongoose
  .connect('mongodb://localhost:27017/playground', { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });


// const conn = mongoose.createConnection('mongodb://localhost:27017/playground',{useNewUrlParser:true})