import { User } from './../../entities/user';
import { UserController } from "./user.controller";

const userController = new UserController();

export default {

  Query: {
    getAllUsers: () => userController.selectAllUsers(),
    getUser: (object, { id }) => userController.selectUser(id)
  },

  Mutation: {
    createUser: (object: User, args) => {
      return userController.createUser(args);
    }
  }

}