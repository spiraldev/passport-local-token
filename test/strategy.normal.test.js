/* global describe, it, expect, before */
/* jshint expr: true */

var chai = require('chai')
  , Strategy = require('../lib/strategy');


describe('Strategy', function() {

  describe('handling a request with valid credentials in body', function() {
    var strategy = new Strategy(function(token, done) {
      if (token == 'abcdefghijklmnopqrstuvwxyz') {
        return done(null, { id: '1234' }, { scope: 'read' });
      }
      return done(null, false);
    });

    var user
      , info;

    before(function(done) {
      chai.passport(strategy)
        .success(function(u, i) {
          user = u;
          info = i;
          done();
        })
        .req(function(req) {
          req.body = {};
          req.body.authToken = 'abcdefghijklmnopqrstuvwxyz';
        })
        .authenticate();
    });

    it('should supply user', function() {
      expect(user).to.be.an.object;
      expect(user.id).to.equal('1234');
    });

    it('should supply info', function() {
      expect(info).to.be.an.object;
      expect(info.scope).to.equal('read');
    });
  });

  describe('handling a request with valid credentials in query', function() {
    var strategy = new Strategy(function(token, done) {
      if (token == 'abcdefghijklmnopqrstuvwxyz') {
        return done(null, { id: '1234' }, { scope: 'read' });
      }
      return done(null, false);
    });

    var user
      , info;

    before(function(done) {
      chai.passport(strategy)
        .success(function(u, i) {
          user = u;
          info = i;
          done();
        })
        .req(function(req) {
          req.query = {};
          req.query.authToken = 'abcdefghijklmnopqrstuvwxyz';
        })
        .authenticate();
    });

    it('should supply user', function() {
      expect(user).to.be.an.object;
      expect(user.id).to.equal('1234');
    });

    it('should supply info', function() {
      expect(info).to.be.an.object;
      expect(info.scope).to.equal('read');
    });
  });

  describe('handling a request without a body', function() {
    var strategy = new Strategy(function(token, done) {
      throw new Error('should not be called');
    });

    var info, status;

    before(function(done) {
      chai.passport(strategy)
        .fail(function(i, s) {
          info = i;
          status = s;
          done();
        })
        .authenticate();
    });

    it('should fail with info and status', function() {
      expect(info).to.be.an.object;
      expect(info.message).to.equal('Missing auth token');
      expect(status).to.equal(400);
    });
  });

  describe('handling a request without a body, but no token', function() {
    var strategy = new Strategy(function(token, done) {
      throw new Error('should not be called');
    });

    var info, status;

    before(function(done) {
      chai.passport(strategy)
        .fail(function(i, s) {
          info = i;
          status = s;
          done();
        })
        .req(function(req) {
          req.body = {};
        })
        .authenticate();
    });

    it('should fail with info and status', function() {
      expect(info).to.be.an.object;
      expect(info.message).to.equal('Missing auth token');
      expect(status).to.equal(400);
    });
  });

  describe('handling a request without a body, but no token', function() {
    var strategy = new Strategy(function(token, done) {
      throw new Error('should not be called');
    });

    var info, status;

    before(function(done) {
      chai.passport(strategy)
        .fail(function(i, s) {
          info = i;
          status = s;
          done();
        })
        .req(function(req) {
          req.body = {};
        })
        .authenticate();
    });

    it('should fail with info and status', function() {
      expect(info).to.be.an.object;
      expect(info.message).to.equal('Missing auth token');
      expect(status).to.equal(400);
    });
  });

});
