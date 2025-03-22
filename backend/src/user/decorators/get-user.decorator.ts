import { createParamDecorator, ExecutionContext } from "@nestjs/common";

/**
 * Get the user from the request.
 */
export const GetUser = createParamDecorator( (_, ctx: ExecutionContext ) => {
    return ctx.switchToHttp().getRequest().user;
});