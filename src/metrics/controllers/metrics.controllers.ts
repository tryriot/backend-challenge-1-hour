import { Controller, Get } from '@nestjs/common';
import { MetricsService } from '../services/metrics.service';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get()
  async metrics() {
    return this.metricsService.getAllMetrics();
  }
}
