function person(name){
    this.name=name

}
person.prototype.getName=function(){
    return this.name
}
function Coder(name,languages){
    // it工程师
    // extend person   
    person.call(this,name)
    // 父类没用的可以加
    // 语言
    this.languages=languages
}
// new person 新的对象就是coder的原型对象
Coder.prototype=new person()
Coder.prototype.constructor=Coder
Coder.prototype.getLanguages=function(){
    // console.log(this.languages)
    return this.languages
}


var cjk=new person('陈建科')
console.log(cjk.name);

var xzf=new Coder('熊志峰',[
    'javascript','python','c/c++']);
    console.log(xzf.name +' '+ xzf.languages.join(','));
    console.log(cjk.getName());
    console.log(xzf.getLanguages());
    


