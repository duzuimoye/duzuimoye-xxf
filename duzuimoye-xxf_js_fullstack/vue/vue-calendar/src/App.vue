<template>
  <div class="data-picker">日历
    <input type="text" class="data" v-model="dateValue" @click="openPanel"/>
    <transition name="fadeDownBig">
      <div class="data-panel" v-show="panelState">
        <div class="topbar">
          <span @click="leftBig">&lt;&lt;</span>
          <span @click="left">&lt;</span>
          <span class="year" @click="panelType='year'">{year}</span>
          <span class="month" @click="panelType='month'">{month}</span>
          <span @click="right">&gt;</span>
          <span @click="rightBig">&gt;&gt;</span>
        </div>
        <!-- 年面板 -->
        <div class="type-year" v-show="panelType === 'year'">
          <ul class="year-list">
            <li v-for="(item, index) in yearList" :key="index" @click="selectYear(item)">
              <span :class="{selected: item === year}">{item}</span>
            </li>
          </ul>
        </div>
        <!-- 月面板 -->
        <div class="type-month" v-show="panelType ==='month'">
          <ul class="month-list">
            <li v-for="(item, index) in monthList" :key="index" @click="selectMonth(item)">
              <span :class="{selected: item.value === month}">{item.label}</span>
            </li>
          </ul>
        </div>
        <!-- 日期面板 -->
        <div class="date-group" v-show="panelType=== 'date' "></div>
          <span v-for="(item ,index) in weekList" :key="index" class="weekday">{item.label}</span>
            <ul class="date-list">
              <li v-for="(item, index) in dateList" :key="index" v-text="item.value"
              :class="{preMonth:item.previousMonth,nextMonth:item.nextMonth,
              selected: date ===item.value && month === month && item.currentMonth, invalid:validateDate(item)}"
               @click="selectDate(item)">
              </li>
            </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
data(){
  return{
    dateValue:"", //输入框显示时期
    date:new Date() .getDate(), //当前日期
    panelState: true,
    month:new Date().getMonth(),
    year:new Date().getFullYear(),
    panelType: "data",
    monthList:[
      {label:"Jan" ,value:0},
      {label:"Feb" ,value:1},
      {label:"Mar" ,value:2},
      {label:"Apr" ,value:3},
      {label:"May" ,value:4},
      {label:"jun" ,value:5},
      {label:"Jul" ,value:6},
      {label:"Aug" ,value:7},
      {label:"Sep" ,value:8},
      {label:"Oct" ,value:9},
      {label:"Nov" ,value:10},
      {label:"Dec" ,value:11},
    ],
    weekList:[
      {label:"Sun", value:0},
      {label:"Mon", value:1},
      {label:"Tue", value:2},
      {label:"Wen", value:3},
      {label:"Thu", value:4},
      {label:"Fri", value:5},
      {label:"Sat", value:6},
    ]
  }
},
props: {
  value: {
    type:[Date,String],
    default: ""
  },
  format: {
    type:String,
    default: "yyyy-mm-dd"
  }
},
computed: {
  yearList(){
    return Array.from ({length:12},(value,index) => this.year+ index);
  },
  dateList() {
    // 怎么获取当月的天数
    let CurrentMonth = new Date(
      this.year,
      this.month + 1,
      0
    ).getDate();
    // 将当月的日期塞入dateList
    let dateList = Array.from({length:CurrentMonth.length}, (value, index) => {
      return {
        CurrentMonth: true,
        value : index +1
      };
    });
    // 获取当月1号的星期是为了确定在1号前插入多少天
    let startDay = new Date(this.year, this.month, 1).getDay();
    // 确认上个月多少天
    let previousMonthLength = new Date(
      this.year,
      this.month,
      0
    ).getDate();
    // 在一号前插入上个月的日期
    for(let i=0; i<startDay;i++){
      dateList = [
        { previousMonth: true, value: previousMonthLength - i }].concat(dateList);
    }
    // 补全剩余的位置
    for(let i=1, item=1;i<15;i++, item++){
      dateList[dateList.length] = {nextMonth: true,value: i};
    }
    return dateList;
  }
},
methods:{
  openPanel() {
    this.panelState != this.panelState;
    this.panelType = "date"; 
  },
  leftBig() {

  },
  left() {

  },
  right() {

  },
  rightBig() {

  },
  selectYear(item) {
    this.year = item;
    this.panelType = "month"
  },
  selectMonth(item) {
    this.month = item;
    this.panelType = "date"
  },
  selectDate(item){
    this.nowValue = item.value;
    if(item.previousMonth) month--;
    if(item.nextMonth) month++;
    let selectDay = new Date(this.year,this.month,this.nowValue);
    console.log(selectDay.getTime());
  },
  validateDate(item){
    if(this.nowValue === item.value && item.currentMonth) return true;
  }
}
}
</script>

<style scoped>
  .topbar{
    padding-top: 10px;
  }
  .topbar span{
    display: inline-block;
    width: 20px;
    height: 30px;
    line-height: 30px;
    color:#515a6e;
    cursor: pointer;
  }
  .topbar span:hover{
    color:#2d8cf0;
  }
  .topbar .year, .topbar .month{
    width: 60px;
  }
</style>
