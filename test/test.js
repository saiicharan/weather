var expect  = require('chai').expect;
var request = require('request');
var iJS = require('../index.js');

describe('Test running: ', ()=> {
    it('Test call: Should return - Hello NodeJS Test with Gitlab and testing Gitlab CICD', (done) => {
        request('http://localhost:8081' , (error, response, body)=> {
            expect(body).to.equal('Hello NodeJS Test with Gitlab and testing Gitlab CICD');
            iJS.close(done);
        });
    });
})