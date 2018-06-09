//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slides: [
      {
        id: 1,
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528392231221&di=274b888d83e1c05da213aef096b76471&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4d086e061d950a7bbec821ff01d162d9f2d3c908.jpg",
      },
      {
        id: 2,
        image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528392231219&di=d317ca5df8f8c5dc9bf555f0382b59e1&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff603918fa0ec08fa1a6bfc9e52ee3d6d55fbdaa4.jpg",
      },
      {
        id: 3,
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528392231215&di=34792bb615002cc6f890b79fee778bee&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F77c6a7efce1b9d16548c7558f8deb48f8c546444.jpg",
      }
    ]
   
  },
  chuang:function(){
    wx.navigateTo({
      url:'../bed/bed'
    })
  },
  shafa:function(){
    wx.navigateTo({
      url:'../sofa/sofa'
    })
  },
  bangongzhuo:function(){
    wx.navigateTo({
      url:'../desk/desk'
    })
  },
  canzhuo:function(){
    wx.navigateTo({
      url:'../table/table'
    })
  },
  onLoad(){
    // this.setData({
    //   slides: app.globalData.slides
    // })
  }
})
