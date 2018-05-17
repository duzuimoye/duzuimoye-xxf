console.log('工厂模式');
// 函数属于js基本类型的对象 函数是一等对象
// 类，简单的只有一回构造函数
// 类跟函数没有区别
// js本身么有类，只是用的人多了，给了这个实现。
// js 里面只有对象 object原型对象的始祖
// 原型 prototype
// js里面不需要传统的继承，只要有个参照物就可以实现原型显示继承。
var Bicycle=function(brand){
    //function Bicycle(brand){}这样写也行 
    // 构造函数 constructor 在new 之前执行
    this.brand=brand ||'凤凰'
    
}
// 原型就是凤凰
// 二维码 手机支付
// js 继承关系，不是
// 共享单车完全颠覆了自行车

Bicycle.prototype={
    sellBicycle:function(model){
        var bicycle=null;
        switch(model){
            case 'Giant':
            bicycle=new Giant()
            break;

        
            case'the speed Ster':
            bicycle=new Speedster()
            break;
            
            case 'U2':
            bicycle=new U2()
            break;
        }
        bicycle.assemble();
        bicycle.wash();
        bicycle.providerRepair();

        // 把车卖出去

        return bicycle;
        //  console.log('买车了...')
        //  return null;
        // 面向对象们
        // 卖车，商店，车，维修人员 产库人员
    }
}
// js 基本类型
// 字符串 数字 布尔值 undefined null
// 复杂类型 object<-prototype Array function json

function Giant() {
}
Giant.prototype = {
  assemble: function() {
    console.log('组装完成');
  },
  wash: function() {
    console.log('清洗完成');
  },
  providerRepair: function() {
    console.log('保修二年');
  }
}

function U2() {
}
U2.prototype = {
  assemble: function() {
    console.log('组装完成');
  },
  wash: function() {
    console.log('清洗完成');
  },
  providerRepair: function() {
    console.log('保修三年');
  }
}


var bicycle=new Bicycle('永久');
console.log(bicycle.sellBicycle('Giant'));


