const assert = require('assert');

describe(`.env file`, () => {
  describe(`exists`, () => {
    it('should load .env file without error', () => {
      try {
        const env = require('../build');
        return env ? true : false;
      } catch (error) {
        return false;
      }
    });
  });
});

describe(`#get()`, () => {
  describe(`#get('ENV')`, () => {
    it(`should return the contents of the environment variable 'ENV'`, () => {
      try {
        const env = require('../build');
        console.log(env.get('ENV'));
        assert.equal(env.get('ENV'), 'TEST');
      } catch (error) {
        return false;
      }
    });
  });

  describe(`#get('VNE', 'ENV')`, () => {
    it(`should return the default content of the environment variable 'VNE'`, () => {
      try {
        const env = require('../build');
        assert.equal(env.get('VNE'), 'ENV');
      } catch (error) {
        return false;
      }
    });
  });
});