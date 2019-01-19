import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    getAllUsers: [User]
    getUser(id: ID): User
  }

  type Mutation {
    createUser(
      usuario: String
      senha: String
      email: String
      cargo: String
      ativo: Boolean
    ): User
    updateUser(id: ID, user: UserInput): User
    deleteUser(id: ID): Boolean
  }

  type User {
    id: ID
    usuario: String
    senha: String
    email: String
    cargo: String
    ativo: Boolean
  }

  input UserInput {
    usuario: String
    senha: String
    email: String
    cargo: String
    ativo: Boolean
  }

`;