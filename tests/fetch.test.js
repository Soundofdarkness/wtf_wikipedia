'use strict';
var test = require('tape');
var wtf = require('./lib');

test('fetch-as-promise', t => {
  t.plan(1);
  var p = wtf.fetch('Tony Hawk', 'en', {
    'Api-User-Agent': 'wtf_wikipedia test script - <spencermountain@gmail.com>'
  });
  p.then(function(doc) {
    t.ok(doc.sections().length > 0, 'promise returned document');
  });
  p.catch(function(e) {
    t.throw(e);
  });
});

test('fetch-as-callback', t => {
  t.plan(1);
  wtf.fetch('Tony Danza', 'en', {
    'Api-User-Agent': 'wtf_wikipedia test script - <spencermountain@gmail.com>'
  }, function(err, doc) {
    if (err) {
      t.throw(err);
    }
    t.ok(doc.categories().length > 0, 'callback returned document');
  });
});
