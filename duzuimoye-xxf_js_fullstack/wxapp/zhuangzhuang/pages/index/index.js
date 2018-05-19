//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    circleList: [],
    colorCircleFirst: '#FFDF2F',
    colorCircleSecond: '#FE4D32',
    // 奖品默认颜色
    colorAwardDefault: '#F5F0FC',
    colorAwardSelect: '#ffe400',
    indexSelect: 0,
    isRunning: false,
    imageAward: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg',
      '../../images/4.jpg',
      '../../images/5.jpg',
      '../../images/6.jpg',
      '../../images/7.jpg',
      '../../images/8.jpg',
    ]
    // 奖品选中的颜色
  },
  onLoad: function() {
    // 起始位置
    let leftCircle = 7.5;
    let topCircle = 7.5;
    var circleList = [];
    for (var i = 0; i < 24; i++) {
      // 设置了每个点的坐标值， 页面就会相应的显示
      if (i == 0) {
        topCircle = 15;
        leftCircle = 15;
      } else if (i < 6) {
        topCircle = 7.5;
        leftCircle = leftCircle + 102.5;
      } else if (i == 6) {
        topCircle = 15;
        leftCircle = 620;
      } else if (i < 12) {
        topCircle = topCircle + 94;
        leftCircle = 620;
      } else if (i == 12) {
        topCircle = 565;
        leftCircle = 620;
      } else if (i < 18) {
        topCircle = 570;
        leftCircle = leftCircle - 102.5;
      } else if (i == 18) {
        topCircle = 565;
        leftCircle = 15;
      } else if (i < 24) {
        topCircle = topCircle - 94;
        leftCircle = 7.5;
      }

      circleList[i] = {
        leftCircle,
        topCircle
      }
    }
    this.setData({
      circleList
    })
    setInterval(() => {
      if (this.data.colorCircleFirst == '#FFDF2F'){
        this.setData({
          colorCircleFirst: '#F44D32',
          colorCircleSecond: '#FFDF2F'
        })
      } else {
        this.setData({
          colorCircleFirst: '#FFDF2F',
          colorCircleSecond: '#F44D32'
        })
      }
      
    }, 500)

    var awardList = [];
    var topAward = 25;
    var leftAward = 25;
    for (var j = 0; j < 8; j++) {
      if (j == 0) {
        topAward = 50;
        leftAward = 50;
      } else if (j < 3) {
        topAward = topAward;
        leftAward = leftAward + 166.6666 + 35;
      } else  if ( j < 5) {
        leftAward = leftAward;
        topAward = topAward + 150 + 35;
      } else if (j < 7) {
        leftAward = leftAward - 166.66666 - 35;
        topAward = topAward;
      } else if (j < 8) {
        leftAward = leftAward;
        topAward = topAward - 150 - 35;
      }
      var imageAward = this.data.imageAward[j];
      awardList.push({
        topAward,
        leftAward,
        imageAward
      })
    }
    this.setData({
      awardList
    })
  },
  startGame: function () {
    if (this.data.isRunning) return
    this.setData({
     isRunning: true
    })
    var _this = this;
    var indexSelect = 0
    var i = 0;
    var timer = setInterval(function () {
     indexSelect++;
     //这里我只是用y=30*x+200函数做的处理.可根据自己的需求改变转盘速度
     i += 110;
     if (i > 1000) {
      //去除循环
      clearInterval(timer)
      //获奖提示
   
      wx.showModal({
       title: '恭喜您',
       content: '获得了第' + (_this.data.indexSelect + 1) + "个奖品",
       showCancel: false,//去掉取消按钮
       success: function (res) {
        if (res.confirm) {
         _this.setData({
          isRunning: false
         })
        }
       }
      })
     }
     indexSelect = indexSelect % 8;
     _this.setData({
      indexSelect: indexSelect
     })
    }, (200 + i))
   }
  })
