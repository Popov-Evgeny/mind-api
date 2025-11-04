import admin from 'src/firebase/firebase-admin.config';
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

export interface UserAuthResponse {
  id: number;
  email: string;
  name: string;
}

export interface RequestWithUser extends ExpressRequest {
  user?: admin.auth.DecodedIdToken;
}
