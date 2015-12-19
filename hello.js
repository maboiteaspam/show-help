
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
require('./index.js')(usage, process.argv, pkg)
//require('./index.js').tpl('%name %version\n\t%description\n\n%usage')(usage, process.argv, pkg)

console.log('program execution')
