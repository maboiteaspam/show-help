var tpl = '%name %version\n%description\n%usage'
var showHelp = function (fn, arg, pkg, code) {
  if (typeof(arg)==='object') showHelp.raw(fn, pkg, arg.join(' ')) && showHelp.die(code)
  else showHelp.parsed(fn, pkg, arg) && showHelp.die(code)
}
showHelp.tpl = function fromRawString (newTpl) {
  tpl = ''+newTpl; return showHelp;
}
showHelp.raw = function fromRawString (fn, pkg, str) {
  var k = str.match(/\s+(-h|--help)/);
  return showHelp.parsed(fn, pkg, k && k[1])
}
showHelp.parsed = function fromParsedString (fn, pkg, str) {
  return str && showHelp.print(fn, pkg)
}
showHelp.print = function printUsage (fn, pkg) {
  var multiline = require('multiline')
  var usage = tpl.replace(/%name/, pkg.name)
    .replace(/%version/, pkg.version)
    .replace(/%description/, pkg.description)
    .replace(/%usage/, multiline(fn))
  console.error(usage)
  return true
}
showHelp.die = function exitProcess (code) {
  process.exit(code===undefined?0:code)
}

module.exports = showHelp;
