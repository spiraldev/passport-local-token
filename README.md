# passport-token

[![Build](https://travis-ci.org/pferretti/passport-local.png)](https://travis-ci.org/pferretti/passport-token)
[![Coverage Status](https://coveralls.io/repos/pferretti/passport-token/badge.png)](https://coveralls.io/r/pferretti/passport-token)
[![Quality](https://codeclimate.com/github/pferretti/passport-token.png)](https://codeclimate.com/github/pferretti/passport-token)
[![Dependencies](https://david-dm.org/pferretti/passport-token.png)](https://david-dm.org/pferretti/passport-token)
[![Tips](http://img.shields.io/gittip/pferretti.png)](https://www.gittip.com/pferretti/)


[Passport](http://passportjs.org/) strategy for authenticating with a username
and password.

This module lets you authenticate using a token in your Node.js
applications.  By plugging into Passport, token authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-token

## Usage

#### Configure Strategy

The token authentication strategy authenticates users using a token.
The strategy requires a `verify` callback, which accepts these
credentials and calls `done` providing a user.

    passport.use(new LocalStrategy(
      function(token, done) {
        AccessToken.findById(token, function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          return done(null, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'local'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.post('/login',
      passport.authenticate('local-token', { failureRedirect: '/login' }),
      function(req, res) {
        res.redirect('/');
      });

## Examples

For complete, working examples, refer to the multiple [examples](https://github.com/jaredhanson/passport-token/tree/master/examples) included.

## Tests

    $ npm install
    $ npm test

## Credits

  - [Jared Hanson](http://github.com/pferretti)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2014 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)> Paolo Ferretti <[http://paoloferretti.net/](http://paoloferretti.net/)>
