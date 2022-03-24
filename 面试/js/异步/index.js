let fs = require('fs')
// try {
//     fs.readFile('./nme.txt', 'utf-8', (err, data) => {
//         if(err){
//             // console.log(err)
//         }
//         // console.log(data)
//     })
// } catch (e) {
//     console.log(1,e)
// }

try {
    setTimeout(() => {
        console.log(a)
    }, 1000)
} catch (e) {
    console.log('catch',e)
}