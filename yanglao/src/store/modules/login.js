import {get,post_json,post} from '@/http/axios'
import {Toast} from 'vant'

export default {
  namespaced:true,
  state: {
    user:localStorage.getItem('user'),
    info:{} //用户信息
  },
  mutations: {
    refreshInfo(state,info){
      state.info = info;
    },
    refreshUser(state,user){
      state.info = user;
    }
  },
  actions: {
    // 登录
    async login(context,params){
      // 1.登录
      let response = await post("/loginByPhonenumber",params);
      let user = response.data;
      // 2.将token缓存到浏览器
      localStorage.setItem('user',user);
      // setToken(token);
      // 3. 将token维护到状态机中
      context.commit("refreshUser",user);
      context.commit("refreshInfo",user);
      Toast.success('登陆成功')
    },
    // 退出
    async logout(context){
      // 1. 请求后台退出
      // await post('/user/logout');
      // 2. 清理本地缓存
      localStorage.removeItem("user")
      // 3. 清理store
      context.commit('refreshUser','');
      context.commit('refreshInfo',{});
    }
  }
}