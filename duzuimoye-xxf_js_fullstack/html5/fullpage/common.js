 class purefullpage{
     constructor(options){
        //  属性定义
        //  1 手动计算page的高度
        //  #purefullpage的高度？
        const defaultOptions = {
            isShowNav:true,
            delay:1000,
            // 每次turnpage callback
            definePages:() =>{}
        }
        this.options = Object.assign(defaultOptions,options);
        console.log(options);
        this.container = document.getElementById('purefullpage');
        // this.pages = 
        this.viewHeight = document.documentElement.clientHeight;
        this.DELAY=this.options.delay ;
        this.currentPosition =0;
        this.init();
     }
     init (){
         this.container.style.height=`${this.viewHeight}px`;
        //  mousewheel 截流
        // this.scrollMouse 方法 负责滚动 执行多次
        // throttle 在规定事件里只执行一次 
        // 重新返回一个函数 handleMousewheel 闭包，
        // 将this，scrollMouse 封到内部
        // this,将函数执行的context
        const handleMousewheel = utils.throttle(this.scrollMouse,this,this.DELAY);
         if(navigator.userAgent.toLowerCase().indexOf('firefox') === -1){
             document.addEventListener('mousewheel',handleMousewheel,false);
         }else {
            document.addEventListener('DOMMouseScroll',function(){
                console.log('scroll');
            },false);
         }
        //  事件监听 浏览器嗅探
        // mousewheel DOMMouseScroll
        //  事件处理函数交由对象的方法来执行
        window.addEventListener('resize',this.handleWindowResize.bind(this),false);
     }
     handleWindowResize(event){
        //  作为对象的方法，肯定有需要找到对象
        // this指向对象
        //防抖
        utils.debounce(this.getNewPosition,this,event,this.DELAY);
        console.log(this);
     }
     getNewPosition(){
         console.log('debounce');
         this.viewHeight = document.documentElement.clientHeight;
         this.container.style.height = `${this.viewHeight}px`;
     }
     //滚轮事件处理函数
     scrollMouse(){
        // console.log('this.container');
        const delta = utils.getWheelDelta(event);
        // console.log(delta);
        if (delta>0){
        // 向上滚
        this.goUp();
        }else{
        //向下滚
        this.goDown();
        }
     }
     goUp(){
        if(this.currentPosition>=0){
            return
        }
        this.currentPosition +=this.viewHeight;
        console.log(this.currentPosition);
        this.container.style.top = `${this.currentPosition}px`
     }
     goDown(){
        if(this.currentPosition<=-2*this.viewHeight){
            return
        }
         this.currentPosition -=this.viewHeight;
         this.container.style.top = `${this.currentPosition}px`
     }
 }