// pages/detail/detail.js
const goodsApi = require('../../api/goodsApi.js')
const {config} = getApp()
Page({
  data:{
    info:{}
  },
  async onLoad(option){
    console.log(option)
    let id = option.id
    let result = await goodsApi.getGoodsInfo(id)
    console.log(result.result[0])
    this.setData({info:result.result[0]})
  }
})