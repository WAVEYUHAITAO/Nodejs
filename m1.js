var username ='wu kong'

console.log(module);

var val = 'this is a commonjs'
var foo = 'foo'
//JavaScript 模块化开发规范，CommonJS规范
// CommonJS module exports
// module.exports = val
// module.exports = foo

// module.exports.val = val
// module.exports.foo = foo

exports.val = val
exports.foo = foo

console.log(module);