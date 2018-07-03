// Promise 控制异步
 class Promise{
    constructor(executor){
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResolveCallbacks = [];
        // value？ 是executor 调用时传过来的结果
        let resolve = (value) =>{
            if(this.status=='pending'){
                this.status = 'resolve';
                this.value = value;
                this.onResolveCallbacks.forEach(fn =>fn())
            }
        }
        let reject = (reason) =>{
            if(this.status=='pending'){
                this.status = 'reject';
                this.reason = reason;
            }
        }
        // resolve,reject
        executor(resolve,reject);
        // ajax setTimeout node 数据库处理，fs file
    }
    then (onFullFilled,onRejected){
        console.log(this.status);
        if(this.status=='resolve'){
            onFullFilled(this.value);  
        }
        if(this.status=='reject'){
            onRejected(this.reason);
        }
        if(this.status =='pending'){
            this.onResolveCallbacks.push(()=>{
                onFullFilled(this.value);
            })
            this.onResolveCallbacks.push(()=>{
                onFullFilled(this.reason);
            })
        }
 }
 }

//  new Promise((resolve,reject) =>{

//  })
const p =new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve('hello world')
    },2000)
    // console.log('hello world');
    // reject('我的天啊')
})
p.then((data) =>{
    console.log(data);
},(err) =>{
    console.log(err)
})
 module.exports = Promise