/*
 * author ysw
 * date 4-28
 * 功能：就地编辑
 * 参数：@id @parent 挂载的元素
 * @ value 初始值 
 */
// 不再是面向业务的流程编程
// 一上来， 就封装一个类，
// 美好的愿望，可以以后多复用。 
function EditInPlace(id, parent, value) {
    this.id = id;
    this.parentElement = parent; //父元素 root
    this.value = value || 'default value'
    // 显示name元素
    this.createElement();
    // 挂载到DOM上去了， 就可以为它加事件监听不
    this.attachEvent();
  }
  EditInPlace.prototype = {
    // 构建html
    createElement: function() {
      this.containerElement = 
        document.createElement('div');
      
  
      //显示静态文字
      // js 动态性
      this.staticElement = document.createElement('span');
      this.staticElement.innerHTML = this.value;
      this.containerElement.appendChild(
        this.staticElement);
      
      // 按钮
      // 对象的内部this 指向对象 在的原型链上 方法和属性,
      this.fieldElement = document.createElement('input');
      this.fieldElement.type = 'text';
      this.fieldElement.value = this.value;
      this.containerElement.appendChild(this.fieldElement);
  
      this.parentElement.appendChild(
        this.containerElement
      );
      // 文字和输入框，只能显示一个
      this.convertToText();
    },
    convertToText: function() {
      this.staticElement.style.display = 'inline';
      this.fieldElement.style.display = 'none';
    },
    convertToEdit: function() {
      this.fieldElement.style.display = 'inline';
      this.staticElement.style.display = 'none';
      this.fieldElement.focus();
    },
    attachEvent: function() {
      // 作用域 attachEvent函数
      console.log(this);
      var that = this;
      this.staticElement.addEventListener('click', function() {
        // this的指向
        // 作用域 事件的回调函数
        // console.log(this);
        // alert(that,this);
        // alert(this.value);
        that.convertToEdit();
      }, false);
      this.fieldElement.addEventListener('keydown',
      function(evt){
          console.log(evt);
          if(evt.keyCode ==13){
              that.staticElement.innerHTML=this.value;
              that.convertToText()
          }
      })
    }
  }
  