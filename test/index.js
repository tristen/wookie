var test = require('tape');
var wookie = require('../');

test('cookie tests', function(t) {
    wookie.set('name', 'foo');
    t.equal(wookie.get('name'), 'foo', 'should return foo');

    var obj = {
        name: 'foo',
        friend: 'bar'
    };

    wookie.setObject(obj);
    t.equal(wookie.getObject(), obj, 'should return an object');

    wookie.unset('name');
    t.equal(wookie.get('name'), '', 'name should return nothing.');

    wookie.clear();
    t.equal(document.cookie, '', 'document.cookie should return nothing.');
});
