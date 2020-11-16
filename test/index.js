/* eslint-env mocha */

var request = require('supertest');
var assert = require('chai').assert;
var express = require('express');
var php = require('../main');
var path = require("path")

var app = express();
var p = path.join("../www/php");

app.use("/", php.cgi(p, { cgi_path: '/usr/bin/', options: { "-c": "/etc/php.ini" } }))

app.use("*", function (req, res) {
  return res.send("Thank you for using node-cgi-php. Please map your urls")
})
app.listen(9090, '127.0.0.1')

describe('GET /', function () {
  it('should respond with /index.php and valid document', function (done) {
    request(app)
      .get('/')
      .set('Accept', ['application/json', 'text/html', 'text/plain'])
      // .expect('Content-Type', /html/)
      // .expect('Content-Type', /json/)
      // .expect('Content-Type', ['application/json', 'text/html', 'text/plain'])
      .expect(200)
      .end(function (err, res) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe('Get /index.php', function () {
  it('should return a valid document', function (done) {
    request(app)
      .get('/index.php')
      .set('Accept', ['application/json', 'text/html', 'text/html'])
      // .expect('Content-Type', ['application/json', 'text/html', 'text/html'])
      .expect(200)
      .end(function (err, res) {
        if (err) {
          done(err);
        } else {
          // assert.match(res.body.$_SERVER.REMOTE_ADDR, /127.0.0.1|::1/);
          // assert.match(res.body.$_SERVER.SCRIPT_FILENAME, /index.php$/);
          done();
        }
      });
  });
});


describe('Get /test/index.php', function () {
  it('should return a 404 error for /test/index.php', function (done) {
    request(app)
      .get('/test/index.php')
      .set('Accept', ['application/json', 'text/html'])
      // .expect('Content-Type', ['application/json', 'text/html'])
      .expect(404)
      .end(function (err, res) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe('Get /test', function () {
  it('should return a 404 for /test', function (done) {
    request(app)
      .get('/test')
      .set('Accept', ['application/json', 'text/html'])
      // .expect('Content-Type', ['application/json', 'text/html'])
      .expect(404)
      .end(function (err, res) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});


describe('Get /test/', function () {
  it('should return a 404 for /test/', function (done) {
    request(app)
      .get('/test/')
      .set('Accept', ['application/json', 'text/html'])
      // .expect('Content-Type', ['application/json', 'text/html'])
      .expect(404)
      .end(function (err, res) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});


describe('Get /test/php/index.php', function () {
  it('should return a html or json file', function (done) {
    request(app)
      .get('/test/php/index.php')
      .set('Accept', ['application/json', 'text/html'])
      // .expect('Content-Type', ['application/json', 'text/html'])
      .expect(404)
      .end(function (err, res) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

