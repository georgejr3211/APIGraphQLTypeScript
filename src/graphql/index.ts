import { mergeResolvers, mergeTypes, fileLoader } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';

const allTypes = fileLoader(__dirname + '/**/*.type.*');
const allResolvers = fileLoader(__dirname + '/**/*.resolver.*', 
{recursive: true });

const typeDefs = mergeTypes(allTypes);
const resolvers = mergeResolvers(allResolvers);

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  allowUndefinedInResolve: true
});