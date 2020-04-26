const axios = require('../utils/axios')
const {apiServer} = require('../config/index')
module.exports={
  // 获取首页banner 
  getGoryList(){
    let url =apiServer+'/kind'
    // console.log(apiServer)
    return axios.get(url) 
  },
  // 获取产品列表
  getProductList(id){
    let url =apiServer+`/goods/${id}/kind`
    return axios.get(url,{page:1,pageSize:100})
  }
}