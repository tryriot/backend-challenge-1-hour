import { Module } from '@nestjs/common';
import { MetricsController } from './controllers/metrics.controllers';
import { MetricsResolver } from './resolvers/metrics.resolver';
import { MetricsService } from './services/metrics.service';

@Module({
  providers: [MetricsService, MetricsResolver],
  controllers: [MetricsController],
})
export class MetricsModule {}
