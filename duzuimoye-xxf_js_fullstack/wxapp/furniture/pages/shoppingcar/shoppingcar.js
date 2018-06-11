// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList:true,
    cart:[],
    totalPrice:0,
    selectAllStatus:true,

  },
  buy:function(){
    wx.navigateTo({
      url:'/pages/buy/buy'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      carts:[
        {id:1,image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=23885218,3140348325&fm=27&gp=0.jpg',num:2,price:2800,selected:true},
        {id:2,image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2774710223,3471297058&fm=27&gp=0.jpg',num:1,price:900,selected:true},
        {id:3,image:'http://img0.imgtn.bdimg.com/it/u=3649116249,2434325527&fm=27&gp=0.jpg',num:3,price:800,selected:true}

      ],
      // hasList:true
    })
    this.getTotalPrice();
  },
  selectList(e){
    let selectAllStatus = this.data.selectAllStatus;
    const index=e.currentTarget.dataset.index;
    let carts=this.data.carts;
    const selected=carts[index].selected;
    carts[index].selected=!selected;
    selectAllStatus = carts[index].selected;
    // if( carts[index].selected=!selected){
    //   selectAllStatus:false;
    // }
    this.setData({
      carts,  
      selectAllStatus,
    });
    this.getTotalPrice();
  },
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index,1);
    this.setData({
      carts: carts
    });
    if(!carts.length){
      this.setData({
        hasList: false
      });
    }else{
      this.getTotalPrice();
    }
  },
  addCount (e){
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num++;
    carts[index].num = num
    this.setData({
      carts
    })
    this.getTotalPrice();
  },
  minuCount(e){
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if(num<=1) return false;
    num--;
    carts[index].num = num
    this.setData({
      carts
    });
    this.getTotalPrice();
  },
  selectAll(e){
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts =this.data.carts;
    for(let i=0;i<carts.length;i++){
      if( carts[i].selected=!selectAllStatus){
        selectAllStatus:false
      }
      carts[i].selected=selectAllStatus;
      
    }
    this.setData({
      carts,
      selectAllStatus
    })
    this.getTotalPrice();
  },
  getTotalPrice(){
    let carts = this.data.carts;
    let total = 0;
    for(let i =0;i<carts.length;i++){
      // total += carts[i].num *carts[i].price;
      if(carts[i].selected){
        total+= carts[i].num * carts[i].price;

      }
    }
    this.setData({
      totalPrice:total.toFixed(2)
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
