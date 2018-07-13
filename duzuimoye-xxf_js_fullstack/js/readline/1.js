const readline = require('readline');

// process 进程 stdin 输入
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('please input a word:', function(answer) {
    console.log('You has entered [%s]',answer.toUpperCase());//%s 占位符
    rl.close()
});
// rl.question('你最喜欢的明星是谁？',(answer) =>{
//     console.log(`最喜欢的是 ${answer}`);
//     rl.close()
// });
// const questionArr =['name','version','description']