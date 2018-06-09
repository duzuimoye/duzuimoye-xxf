// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:[
      {
        id:1,
        image:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=23885218,3140348325&fm=27&gp=0.jpg",
        price:3600,
        description:'欧式时尚风格沙发'
      },
      {
        id:2,
        image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=49584771,771734647&fm=27&gp=0.jpg"
      },
      {
       id:3,
      image:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1662631054,533986851&fm=27&gp=0.jpg"
      },
      

    ],
    person:
      {
      "personImg":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=234560653,800062660&fm=27&gp=0.jpg",
      "nickname":"赣州信丰大佬",
      "content":"这款沙发用着真舒服，布料也好。性价比也很高，物流速度也快，安装师傅也很耐心的为我们安装。还教我们如何清洗。"
     }
   
  
  
  },
  buyCount:function(){
    wx.showToast({
      title: '已成功加入购物车',
      icon: 'success',
      duration: 3000
    })
  },
  buyNow:function(){
    wx.showLoading({
      title: '购买中',
    })
    
    setTimeout(function(){
      wx.hideLoading()
    },2000)
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