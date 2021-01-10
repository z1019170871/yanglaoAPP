import {get,post_json,post} from '@/http/axios';
import {Toast} from 'vant'
export default {
  namespaced:true,
  state: {
    
  },
  mutations: {
    
  },
  actions: {
    async register(context,params){
      // 1.登录
      let response = await post("/addUser",params);
      Toast.success("注册成功");
    },
  },
  
}