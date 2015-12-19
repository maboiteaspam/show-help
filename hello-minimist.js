
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
require('./index.js').tpl('%name %version\n\t%description\n\n%usage')(usage, argv.h||argv.help, pkg)
//require('./index.js')(usage, argv.h||argv.help, pkg)

console.log('program execution')

