//index.js
//获取应用实例
import goods from '../../api/goods.js'

const app = getApp()

Page({
  data: {
    num: 1,
    show: false,
    totalNum: 0,
    scaleCart: false,
    goods: null,
    category:[
      {name:'商品详情',id:'shang'},
      {name:'产品参数',id:'chan'},
      {name:'售后保障',id:'shou'},
    ],
    curIndex: 0,

    detail:[],
    toView:'shang'

  },
  onLoad (options) {
    const id = options.id || 2;
    let curGoods;
    for(let i = 0; i< goods.length; i++) {
      if (goods[i].id === id) {
        curGoods = goods[i];
        break;
      }
    }
    setTimeout(() => {
      this.setData({
        goods: curGoods
      });
    }, 1000)
  },
  switchTab () {

  },
  addCount() {
    let num = ++this.data.num;
    // num++
    this.setData({
      num
    })
  },
  addToCart() {
    const num = this.data.num;
    const total = this.data.totalNum;
    this.setData({
      show: true
    });
    setTimeout(() => {
      this.setData({
        show: false,
        scaleCart: true
      });
      setTimeout(() => {
        this.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      },200)
    }, 300)
  },
  switchCategory(e){
    this.setData({
      toView:e.currentTarget.dataset.id,
      curIndex:e.currentTarget.dataset.index?e.currentTarget.dataset.index: 0
      
    })

  },
})
