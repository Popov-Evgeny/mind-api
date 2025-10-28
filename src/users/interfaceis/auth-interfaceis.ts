import type { User } from '../entities/user.entity';
import type { Request as ExpressRequest } from 'express';

export interface JwtPayload {
  sub: number;
  email: string;
  name: string;
}

export interface AuthResponse {
  access_token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export interface RequestWithUser extends ExpressRequest {
  user: User;
}
