const categoryApi = require('../../api/categoryApi')
const {config} = getApp()
Page({
  data:{
    categorys:[],
    selIndex:0,
    selid:"",
    imgServer:config.imgServer
  },
  onLoad(){
    this.getCategoryList()
  },
  // 获取商品类别列表
  async getCategoryList(){
    let {code,msg,list} = await categoryApi.getGoryList()
    let result = list.map((item,index)=>{
      item.list=[]
      return item
    })
    this.setData({categorys:result})
    console.log(result)
    // 第一天数据应该是默认显示
    let first = result[0]._id
    this.handleListData(first)
  },
  //侧边栏的点击事件
  async selectNav(e){
    let {id,index} = e.currentTarget.dataset
    this.setData({selIndex:index,selid:id})
    let result = await categoryApi.getProductList(id)
    console.log(result)
    this.handleListData(id)
  },
  async handleListData(id){
    let categorys = this.data.categorys
    let exitIndex = -1
    for(let index = 0; index < categorys.length;index++){
      if(categorys[index]._id==id){
        exitIndex = index
      }
    }
    if(categorys[exitIndex].list.length == 0){
      let {list} = await categoryApi.getProductList(id)
      categorys[exitIndex].list=list
    }
    this.setData({categorys})
  },
  goDetail(e){
    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.currentTarget.dataset.id,
    })
  }

})