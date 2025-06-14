const request = require('supertest');
const app = require('../app');

describe('Routes', () => {
  it('should respond pong to /api/ping', (done) => {
    request(app)
      .get('/api/ping')
      .end((err, res) => {
        expect(err).toBeNull();
        expect(res.status).toBe(200);
        expect(res.text).toBe('pong');
        done();
      });
  });
});
