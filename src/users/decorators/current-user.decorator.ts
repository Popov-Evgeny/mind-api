import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { RequestWithUser } from '../interfaceis/auth-interfaceis';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>(); // На будущее если нужен будет пользователь
    return request.user;
  },
);
