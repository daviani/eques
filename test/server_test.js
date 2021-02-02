const request = require('supertest');
const expect = require('chai').expect;
const server = require('../server');

describe('route /', function() {
  it('should return a welcome message', async function() {
    //given

    //when
    const res = await request(server).get('/');
    //then
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({
      "message": "Welcome to Equess app"
    })
  });
});

