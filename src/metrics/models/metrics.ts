import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Metric {
  @Field(() => String)
  private key: string;
}
