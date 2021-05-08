'use strcit'

process.on('uncaughtException', function(message,url,line,col,error) {
    console.log(`Error: ${message} at ${url}`)
})


let окно = 10
let консоль = console
консоль.log('214')
