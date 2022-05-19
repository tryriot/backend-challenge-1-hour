import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../app.module';

describe('Metrics resolver', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('records a new metrics', async () => {
    const mutation = () => `
      mutation record {
        recordMetric(input: {key: "a", value: 2}) {
          metric {
            key
            values
          }
        }
      }
    `;

    const { body } = await request(app.getHttpServer()).post('/graphql').send({
      query: mutation(),
    });

    expect(body).toEqual({
      data: {
        recordMetric: {
          metric: {
            key: 'a',
            value: 2,
          },
        },
      },
    });
  });
});
