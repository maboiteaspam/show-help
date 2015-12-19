# show-help

node module helpers to display help section given command line arguments

## Install

    npm i maboiteaspam/show-help --save

## Usage

```js
require('show-help')(process.argv)
```
## Usage

#### process.argv

Using the node `process.argv` value

```js
function usage () {/*
module name
        ...

    Usage
        ...

    Options
        ...

    Examples
        ...
*/}
require('show-help')(usage, process.argv)
```

Which then, can be invoked in such fashion
```sh
module-name -h
module-name --help
```

#### minimist

Using `minimist` module to pre parse values

```js
function usage () {/*
module name
        ...

    Usage
        ...

    Options
        ...

    Examples
        ...
*/}
var argv  = require('minimist')(process.argv.slice(2));
require('show-help')(usage, argv.h || argv.help)
```

Which then, can be invoked in such fashion
```sh
module-name -h
module-name --help
```

## Api

#### showHelp

`showHelp` is a `function`,

- __showHelp(callable fn, object arg, int code)__

When `typeof(arg)` is object, detect `(-h|--help)`,
and figures out if `usage` should be displayed and program killed.

- __showHelp(callable fn, string arg, int code)__

When `typeof(arg)` is string,

- __showHelp(callable fn, bool arg, int code)__

When `typeof(arg)` is bool,


## More

- https://github.com/sindresorhus/multiline
- https://nodejs.org/api/process.html#process_process_argv
- https://github.com/maboiteaspam/npi
