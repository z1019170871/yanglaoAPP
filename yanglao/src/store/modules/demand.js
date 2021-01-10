import {get,post_json,post} from '@/http/axios'
import {Toast} from 'vant'

export default {
  namespaced:true,
  state: {
    demandList:[],
    demandTotalPages:0,
  },
  mutations: {
    refreshDemandList(state,demandList){
      state.demandList = demandList;
    },
    refreshDemandTotalPages(state,demandTotalPages){
      state.demandTotalPages = demandTotalPages;
    }
  },
  actions: {
    // 按省份城市查询所有未接单的需求
    async findDemandByProvinceAndCity(context,param){
      let response = await post("/findDemandByProvinceAndCity",param);
      context.commit("refreshDemandList",response.data.content);
      context.commit("refreshDemandTotalPages",response.data.totalPages);
    },
    // 按省份城市，具体地址模糊查询未接单的需求
    async findDemandByProvinceAndCityAndAddressLike(context,param){
      let response = await post("/findDemandByProvinceAndCityAndAddressLike",param);
      context.commit("refreshDemandList",response.data.content);
      context.commit("refreshDemandTotalPages",response.data.totalPages);
    },
    // 按省份城市，简介模糊查询未接单的需求
    async findDemandByProvinceAndCityAndIntroductionLike(context,param){
      let response = await post("/findDemandByProvinceAndCityAndIntroductionLike",param);
      context.commit("refreshDemandList",response.data.content);
      context.commit("refreshDemandTotalPages",response.data.totalPages);
    }
  }
}