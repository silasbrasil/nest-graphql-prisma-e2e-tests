import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GraphQL query getUserById', async () => {
    const payload = {
      query: `
        query Query($getUserById: Int!) {
          getUserById(id: $getUserById) {
            id
          }
        }      
      `,
      variables: {
        getUserById: 1
      }
    }

    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send(payload);

    expect(response.status).toBe(200);
    expect(response.body.data.getUserById).toBeDefined();
  });
});
