// const http=require('http')

// const server=http.createServer((req,res)=>{
//     res.end("hello from other side  ")              // agar apne kuch request ki to apko kuch response dena padega ye server create hone k baad hota hai

// })

//                //(port no)  (local host)
// server.listen('8000',      '127.0.0.1' ,   ()=>{
//     console.log('listning to port no 8')
// })                   // jo response araha hai usse kaha pe listen karna hia


const http=require('http')
const server=http.createServer((req,res)=>{
    res.end('hello from the other side')
})

server.listen('8000','127.0.0.1',()=>{
    console.log("mai sunn raha hu")
})