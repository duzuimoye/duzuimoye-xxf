// 小明表白的事
// 小明 talk in js
// js具有强大的表现力
// js是一个弱类型语言 Java是静态强类型语言
// js 基础类型 字符串 数字，对象{} array,function symbol
// bool 布尔值 null为空 undefined 
// 六大基础类型 一个复杂类型
// 要用逗号隔开，
var xiaoming={
    name:'小明',
    age: '21',
    hasGirlfriend:false,
    job:null ,   
    city: undefined,
    // 方法 行为
    // target  形参
    sendFlower:function(target){ 
    // 1买花
    var flower=new Flower('薰衣草');
    if (typeof target.receiveFlower=='function')
    target.receiveFlower(flower,this.name);
    else
    console.log('拿到名企前是不可能谈恋爱了。');

    }

}
// 空的对象字面量
var xueba={

}
// 具有详述性，最简单的创造的对象
var xiaomei={
    name:'小美',
    room:'4栋309',
    honetown:'赣州',
    receiveFlower:function(flower,name){
        console.log('收到'+ name +'送的'+ flower.type);

    },
    // 监听好心情
    /*
    * 功能：提供心情监听
    * 参数：fn 类型函数
    *在一段时间后，心情好了将fn执行
    */ 
    // fn是function的简写。可以接受任何的函数
    listenGoodMood:function(fn){
        setTimeout(function(){
            fn();
        },10000)
        // typeof fn ==='function'
        // fn();

    }

}
var xiaoxue={
    name:'小雪',
    age:'19',
    receiveFlower:function(flower,name){
        xiaomei.listenGoodMood(function(){
         xiaomei.receiveFlower(flower,name)
        })
        // if (name=='小明'){
        //     console.log('让我们在一起吧')
        // }else{
        //  xiaomei.receiveFlower(flower,name)
        // }
        // 实现了同样的收花方法，接口 interface
        // 小雪和小美都实现了同样的方法，实现了相同的接口
        //实现了相同的接口就可以互换对象

    }

}
// 类大写，对象小写
var Flower=function(type){
    this.type=type ||'玫瑰'
}

     xiaoming.sendFlower(xiaoxue);
  

