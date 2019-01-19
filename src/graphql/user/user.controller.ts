import { User } from './../../entities/user';
import { validate } from 'class-validator';
import * as bcrypt from 'bcryptjs';
import * as config from '../../config/config';

export class UserController {

  constructor() {}

  async selectAllUsers(): Promise<User[]> {
    const user = await User.find();
    return user;
  }

  async selectUser(id: number): Promise<User> {
    const user: User = await User.findOne({ id });
    return user;
  }

  async findUserByEmail(email: string): Promise<User> {
    const user: User = await User.findOne({ email });
    return user;
  }

  async createUser(user: User): Promise<User> {

    user.senha = bcrypt.hashSync(user.senha);

    const isValid = await this.onValidate(user);
    
    if (isValid.length) {
      throw new Error(isValid.toString());
    }

    const searchUser = await this.findUserByEmail(user.email);

    if (searchUser) {
      throw new Error('Email já cadastrado');
    }

    return User.save(user);

  }

  async updateUser(id: number, user: User): Promise<User> {

    user.senha = bcrypt.hashSync(user.senha);

    const isValid = await this.onValidate(user);

    if (isValid.length) {
      throw new Error(isValid.toString());
    }

    const searchUser = await this.findUserByEmail(user.email);

    if (searchUser) {
      throw new Error('Email já cadastrado');
    }

    // return User
    //   .createQueryBuilder('user')
    //   .update(user);

    return;

  }

  async onValidate(user) {
    const userValidator = new User();
    userValidator.usuario = user.usuario;
    userValidator.senha = user.senha;
    userValidator.email = user.email;
    userValidator.cargo = user.cargo;
    userValidator.ativo = user.ativo;

    const errors = await validate(userValidator);

    return errors;
  }

}