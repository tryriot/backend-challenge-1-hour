import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class IncrementCounterInput {
  @Field(() => String)
  key: string;

  @Field(() => Int)
  value: number;
}
