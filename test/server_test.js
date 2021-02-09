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

describe('route /bands', function() {
  it('should return a list of band formated as json array', async () => {
    //given

    //when
    const res = await request(server).get('/bands');
    //then
    expect(res.status).to.equal(200);
  });
});
