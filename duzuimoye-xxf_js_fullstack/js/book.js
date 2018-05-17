//图书馆
function Book(isbn,title,author){
    this._setIsbn(isbn);
    this.title(title) ||'未给标题';
    this.author(author) ||'未给作者';
    
    // this.isbn = isbn;
    // this.title = title;
    // this.author = author;

}
Book.prototype._setIsbn=function (isbn){
    // 正则表达式{10}为长度
    if(/[0-9]{10}/.test(isbn)){
        this._isbn = isbn;
        
    }else{
        throw new error('isbn有误');
        
    }
}
Book.prototype.borrow = function(){

}
Book.prototype._checkIsbn=function (isbn){
    //   _表示私有的
    return /[0-9]{10}/.test(isbn);
}
Book.prototype.getTitle=function(){
    return this.title;
}
Book.prototype.getAuthor=function(){
    return this.author;
}
var book = new Book('sjs1212','三国演义','罗贯中');
