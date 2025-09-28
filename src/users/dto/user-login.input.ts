import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserLoginInput {
    @Field()
    username: string;

    @Field()
    pwd: string;
}