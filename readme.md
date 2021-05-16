# ctgs.js

## Creating an short url

```js
const { CtgsClient } = require("ctgs.js");

const shortener = new CtgsClient();

//whatever ur doing

await shortener.new("tovade", "https://github.com/tovade");
//returns https://ctgs.ga/tovade if it was success
```

## Getting the url of an slug

```js
const { CtgsClient } = require("ctgs.js");

const shortener = new CtgsClient();

//whatever ur doing

await shortener.get("tovade");
//returns https://github.com/tovade if it exist's
```

❤ Shorturl made by [casper](https://github.com/Dev-CasperTheGhost) and wrapper made by [tovade](https://github.com/tovade) ❤
