require('dotenv').config();
import 'reflect-metadata';
import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import schema from './graphql/index';

const app = express();

const port = 3000 || process.env.PORT;
const playground = process.env.NODE_ENV === 'development';

const server = new ApolloServer({
  playground, 
  schema: schema
});

server.applyMiddleware({ app });

createConnection().then(() => console.log('CONNECTED ON DATABASE'))
app.listen(port, () => console.log(`SERVER ON ${port}`));


