var path = require('path')
  , _root = path.resolve( __dirname, '..');

function root( args ){
  args = Array.prototype.slice.call( arguments, 0);
  return path.join.apply( path, [_root].concat(args) );
}

exports.root = root;