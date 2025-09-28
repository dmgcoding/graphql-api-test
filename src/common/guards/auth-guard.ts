import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const ctx = GqlExecutionContext.create(context).getContext();
        const req = ctx.req;

        // Check for custom header
        const token = req.headers['authorization'];



        if (!token) {
            throw new UnauthorizedException('UnAuthorised');
        }

        // (Optional) validate value
        if (token !== 'Bearer token') {
            throw new UnauthorizedException('UnAuthorised');
        }

        return true;
    }
}
