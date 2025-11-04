import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import admin from '../../firebase/firebase-admin.config';
import { RequestWithUser } from '../interfaceis/auth-interfaceis';

export const FirebaseUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): admin.auth.DecodedIdToken => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();
    return request.user!;
  },
);
