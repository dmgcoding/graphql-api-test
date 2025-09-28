import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CreateTaskInput {
    @Field()
    name: string;

    @Field({ nullable: true, defaultValue: '' })
    description?: string;
}