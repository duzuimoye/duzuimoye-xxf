//app.js
// 应用启动 onLaunch
import db from './assets/db.js';
App({
  onLaunch:function(){
    Object.assign(this.globalData,db);
    // //ajax 请求
    // wx.request({
    //   url:'https://resources.ninghao.net/wxapp-case/db.json',
    //   success:(response) => {
    //     // console.log(response);
    //     Object.assign(this.globalData,response.data);
    //     console.log(this.globalData);
    //   },
    //   fail: (error) =>{
    //     console.log(error);
    //   }

    // })
  },
  globalData: {
   
  }
})