//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    latitude: 39.914769,
    longitude: 116.404556,
    scale:15,
    controls:[]
  },
  onReady:function(){
    console.log('ready');
    // 小程序提供了获取经纬的方法
    wx.getLocation({
      type:'gcj02',
      success:(res) => {
        console.log(res.latitude,res.longitude)
        // 重新设置data里的数据
        this.setData({
          latitude:res.latitude,
          longitude:res.longitude,
          scale:18
        })
      }

    })
    // data 数据初始化 数据会随着生命周期
    // 用户的请求发生改变 ，数据是会变得
    // 绑定的数据界面也发生着改变
    // 自动刷新页面 setData 就是这样 的api
    // page先显示地图，晚一点显示control
    this.setData({
      controls:[{
        id:1,
        iconPath:'/images/location.png',
        position:{
          left:20,
          top:20,
          width:50,
          height:50,
        }
      }]
    })
},
// 生命周期函数
  onLoadd:function(){
  console.log('load'); 
  }
  
})
    