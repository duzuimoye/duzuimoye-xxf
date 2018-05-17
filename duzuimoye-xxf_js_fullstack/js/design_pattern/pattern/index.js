// // // 泡一杯咖啡 talk in js 
// // // 流程
// // // 把水煮沸 
// // // 用水冲泡咖啡
// // // 把咖啡倒进杯子
// // // 加糖和牛奶
// // // 语义转化为代码
// // // 方法 methods
// // // boilWater()
// // // brewCoffeeGriends()
// // // pourInCup()
// // // addSuguarAndMilk()
// // var Coffee = function(){

// // }
// // Coffee.prototype.boilwater = function(){
// //     console.log('把水煮沸')
// // }
// // coffee.prototype.brewCoffeeGriends = function(){
// //     console.log('用水冲泡咖啡')
// // }
// // coffee.prototype.pourInCup = function(){
// //     console.log('把咖啡倒进杯子')
// // }
// // coffee.prototype.addSuguarAndMilk = function(){
// //     console.log('加糖和牛奶')
// // }
// // coffee.prototype.init = function(){
// //     this.boilwater();
// //     this.brewCoffeeGriends();
// //     this.pourInCup();
// //     this.addSuguarAndMilk();
// // }

// // var coffee=new Coffee();
// // coffee.init();

// // // 泡杯茶
// // // 把水烧开
// // // 用沸水浸泡茶叶
// // // 把茶水倒进杯子
// // // 加柠檬
// // // 方法 methods
// // // boilWater()
// // // steepTeaBag()
// // // pourInCup()
// // // addningmeng()封装不怎么完美 继承
// // // 代码如果能复用 就最好了
// // // 第一步把水烧开 公用这个方法 少写
// // // coffee tea
// // // 共用 这二个类 不是父子，是什么关系 可以让复用方法？
// // // 构建一个父类 让coffee 和tea成为兄弟类
// // // 饮料类 drink 抽象类
// // // abstract class 一切皆有象
// // // boilWater 共同点
// // // steepTeaBag brewCoffeeGriends
// // // 抽象出来方法
// // // 用水泡饮料 brew(泡)（） 点到为止
// // // 共同点 不同点
// // // 把咖啡倒进杯子 把茶水到进杯子
// // // 到进杯子 pourInCup（）
// // // 加糖和牛奶 加柠檬
// // // 加  addcondiments()

// // var Tea=function(){

// // }
// // Tea.prototype.boilwater = function(){
// //     console.log('把水煮沸')
// // }
// // Tea.prototype.steepTeaBag = function(){
// //     console.log('用水冲泡茶叶')
// // }
// // Tea.prototype.pourInCup = function(){
// //     console.log('把茶水倒进杯子')
// // }
// // Tea.prototype.addNingmeng = function(){
// //     console.log('加柠檬')
// // }
// // Tea.prototype.init = function(){
// //     this.boilwater();
// //     this.steepTeaBag();
// //     this.pourInCup();
// //     this.addNingmeng();
// // }

// // var tea=new Tea();
// // tea.init();
// // 抽象类 模板模式
// // 优化方法 给抽象类
// function Beverage(){

// }
// Beverage.prototype.boilWater = function(){
//     console.log ('把水煮沸');

// }
// // 原料不一样 方法不去具体实现 提供这个接口 
// // 子类一定要去实现这个方法
// Beverage.prototype.brew = function(){}
// Beverage.prototype.pourInCup = function(){}
// Beverage.prototype.addCondiments = function(){}
// Beverage.prototype.init = function(){
//     this.boilWater();
//     this.brew();
//     this.pourInCup();
//     this.addCondiments();

// }

// var Coffee = function(){};
// Coffee.prototype = new Beverage();
// Coffee.prototype.brew = function(){
//     console.log ('用沸水浸泡咖啡');
// }
// Coffee.prototype.pourInCup = function(){
//     console.log('把咖啡到进杯子');
// }
// Coffee.prototype.addCondiments = function(){
//     console.log('加牛奶和糖');
// }


// var Tea = function(){}
// Tea.prototype = new Beverage();
// // 覆盖父类方法 brew 接口 interface
// Tea.prototype.brew = function(){
//     console.log ('用沸水浸泡茶叶');
// }
// Tea.prototype.pourInCup = function(){
//     console.log('把茶水到进杯子');
// }
// Tea.prototype.addCondiments = function(){
//     console.log('加柠檬');
// }

// var coffee = new Coffee;
// coffee.init();
// var tea = new Tea;
// tea.init ();
// js way 模板模式
// 何为模板？大体的结构已经确定 4步 动作概念都有 
// 差异点 继承 抽象类来实现
// js 可以更优雅 差异点，不就是个参数吗
var  Beverage = function(param){
    var boilwater = function(){
        console.log('把水煮沸');

    }
    var brew = param.brew || function(){
        throw new Error('必须传brew方法');
    }
    var pourInCup = param.pourInCup || function(){
        throw new Error('必须传pourInCup方法');
    }
    var addCondiments = param.addCondiments || function(){
        throw new Error('必须传addCondiMents方法');
    }

    var F = function(){};
    F.prototype.init = function(){
        boilwater();
        brew();
        pourInCup();
        addCondiments();
    }
    return F;
}
// 模板可配置部分，作为参数传给对象
    var Coffee = Beverage({
        brew:function(){
            console.log('用沸水泡咖啡')
        },
        pourInCup:function(){
            console.log('把咖啡到进杯子')
        },
        addCondiments:function(){
            console.log('加糖和牛奶');
        }

    });
    var coffee = new Coffee();
    coffee.init();
