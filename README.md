# show-help

node module helpers to display help section given command line arguments

## Install

    npm i maboiteaspam/show-help --save

## Usage

```js
function usage () {/*
...some text...
*/}
var pkg = require('./package.json')
require('show-help')(usage, process.argv, pkg)
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
var pkg = require('./package.json')
require('show-help')(usage, process.argv, pkg)
//require('show-help').tpl('%name %version\n\t%description\n\n%usage')(usage, process.argv, pkg)

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
var pkg  = require('./package.json')
var argv = require('minimist')(process.argv.slice(2));
require('show-help').tpl('%name %version\n\t%description\n\n%usage')(usage, argv.h||argv.help, pkg)
//require('show-help')(usage, argv.h||argv.help, pkg)
```

Which then, can be invoked in such fashion
```sh
module-name -h
module-name --help
```

## Api

#### showHelp

`showHelp` is a `function` to display help and exits when needed,

- __showHelp(callable fn, object arg, object pkg, int code) void__

When `typeof(arg)` is object, detect `(-h|--help)`,
and figures out if `usage` should be displayed and program killed.

`pkg` is object of `package.json` file.

- __showHelp(callable fn, string arg, object pkg, int code) void__

When `typeof(arg)` is string, and not `falsy`,
it displays `usage` and kills the program with `code`.

`pkg` is object of `package.json` file.

- __showHelp(callable fn, bool arg, object pkg, int code) void__

When `typeof(arg)` is bool, and not `falsy`,
it displays `usage` and kills the program with `code`.

`pkg` is object of `package.json` file.

#### showHelp.tpl

`showHelp.tpl` is a function to set a template to render usage,

- __showHelp(string newTpl) showHelp__

set `tpl` to `newTpl`, then returns `showHelp` for chaining.

#### showHelp.raw

`showHelp.raw` is a function to parse a string
as a command line input. It detects `-h|--help` and invoke `showHelp.parsed`.

- __showHelp.raw(callable fn, object pkg, string arg) bool__

When `arg.match(/-h|--help/)` is not `falsy`, it renders and displays `usage`.

#### showHelp.parsed

`showHelp.parsed` is a function to invoke `showHelp.print` when `arg` is not `falsy`.

- __showHelp.parsed(callable fn, object pkg, string arg) bool__

When `arg` is not `falsy`, it renders and displays `usage`.

#### showHelp.print

`showHelp.print` is a function to render `template`
given `multilen(fn)` usage string and `pkg` object,
then print it on `console.error`.

- __showHelp.print(callable fn, object pkg) bool__

Renders `usage` then print it on `console.error`.

## More

- https://github.com/sindresorhus/multiline
- https://nodejs.org/api/process.html#process_process_argv
- https://github.com/maboiteaspam/npi
