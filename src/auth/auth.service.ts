import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Users } from 'src/users/users.interfaces';
import { Repository } from 'typeorm';

type UserData = {
  userId: string;
  email: string;
  name: string;
  photo: string;
};

@Injectable()
export class AuthService {
    constructor( @Inject('USERS_MODEL') private usersModel: Model<Users>,) {}
    async validateUser(userData: UserData): Promise<any> {
      console.time('AuthService');
      const user = await this.usersModel.findOne({ email: userData.email });
      console.timeEnd('AuthService');
      
      if (user) {
        return user; 
      }
    
      console.log('User not found. Creating...');
      const newUser = new this.usersModel({
        userId: userData.userId,
        email: userData.email,
        name: userData.name,
        photo: userData.photo,
      });
      
      await newUser.save();
      console.log('User created successfully:', newUser);
      return newUser;
    }
}