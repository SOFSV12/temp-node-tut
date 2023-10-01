const path = require('path')
//Your operating system path seperator
console.log(path.sep)

//to join a path 
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

//get the basename of a certain filepath 
const baseName = path.basename(filePath)
console.log(baseName)

//this returns an abolute path 
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolutePath)

