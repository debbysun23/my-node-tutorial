// GLOBALS   -NO WINDOWS !!!!

// __dirname   -path to current directory
// __filename  -file name
// __require   -function to use module(commonJS)
// __module    -info about current module(file)
// __process   -info about env where the program is being executed

console.log(__dirname)
setInterval(() =>{
    console.log('hello world')
}, 1000)