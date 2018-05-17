//index.js
//获取应用实例
import testDrive from '../../modules/test-drive'
// console.log(testDrive)
// 在page里得到APP
const app = getApp()

Page({
  data: {
    slides: []
  },
  onLoad(){
    this.setData({
      slides:app.globalData.slides
    })
  },
  //事件处理函数
  testDrive,
  readMore(event){
    const id = event.target.dataset.id;
    wx.navigateTo({
      url:`/pages/vehicies/show?id=${id}`
    })
  }
 
 

    
  
})
