## wookie

Basic HTTP cookie handling for node or browsers.

![](http://cl.ly/VhaO/cookie.png)

### Usage

```js
var cookie = require('wookie');

cookie.set('name', 'foo').get('name'); // 'foo'
```

### API

#### wookie.set(name, value, expires, path, domain)

Sets a cookie to `document.cookie`.


#### wookie.get(name)

Returns the name of a set cookie.

#### wookie.setObject(object, expires, path, domain)

Set multiple cookies using an object, property name corresponds to the
cookie name.

#### wookie.getObject()

Returns all cookies for a domain as an object.

#### wookie.unset(name)

Remove a cookie of a given name.

#### wookie.clear()

Removes all cookies for a domain.


### Tests

``` sh
npm install -g browserify
npm install -g testling
npm test
```

### Licence

BSD
