Rogue Reborn
============

Stack:

* es2015 (Babel)
* DOM (React)
* Unit testing (Mocha + Chai)
* Code coverage (Istanbul)
* Tree shaking (Rollup)
* Code linting (Eslint)
* Type checking (Flow)
* Uglifier (Uglify)
* Build system (npm)

Usage:

* `npm install`: To get your dependencies
* `npm run-script lint`: Eslint + Flow
* `npm run-script eslint`: Eslint only
* `npm run-script flow`: Flow only
* `npm run-script build`: Pretty much a thin wrapper to `rollup -c`
* `npm run-script build-dev`: Includes flow checks in the build
* `npm test`: Pretty much a wrapper to `mocha` and `istanbul`

Some notes:

* `.babelrc` uses environments to exploit rollup plugins
