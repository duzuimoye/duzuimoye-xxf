//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slides: [
      {
        id: 1,
        image: "../../images/jiaju1.jpeg",
      },
      {
        id: 2,
        image:"../../images/jiaju2.jpeg",
      },
      {
        id: 3,
        image: "../../images/jiaju3.jpeg",
      }
    ]
   
  },
  onLoad(){
    // this.setData({
    //   slides: app.globalData.slides
    // })
  }
})
