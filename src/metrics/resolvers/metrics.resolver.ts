import { Query, Resolver } from '@nestjs/graphql';
import { Metric } from '../models/metrics';
import { MetricsService } from '../services/metrics.service';

@Resolver(() => Metric)
export class MetricsResolver {
  constructor(private readonly metricsService: MetricsService) {}

  @Query(() => [Metric])
  async metrics() {
    return this.metricsService.getAllMetrics();
  }
}
