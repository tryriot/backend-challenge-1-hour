import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolvers';
import { AppService } from './app.service';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: `${process.cwd()}/graphql/schema.gql`,
      sortSchema: true,
    }),
    MetricsModule,
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
