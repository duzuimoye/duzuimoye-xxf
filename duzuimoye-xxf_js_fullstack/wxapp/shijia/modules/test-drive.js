// ES6 模块化语法 module
// js里面变量或常量 它的类型由值决定
var a =1;
a='str'
// ES6放弃了var
// const b= 123;
const testDrive = () =>{
    // 微信的API wx
    // 原生的api 大部分的小程序是html5 
    // webview nativeview
    // webview性能上比原生慢一些, 但效率高。
    wx.showToast({
        title:'暂不支持'
    })
}
export default testDrive