import { Document } from 'mongoose';

export interface Users extends Document {
  readonly userId: string;
  readonly email: string; 
  readonly name: string; 
  readonly photo: string;
}
