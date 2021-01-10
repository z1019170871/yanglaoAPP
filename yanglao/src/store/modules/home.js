import {get,post_json,post} from '@/http/axios'
import {Toast} from 'vant'

export default {
  namespaced:true,
  state: {
    noticeList:[],
    totalPages:0,
  },
  mutations: {
    refreshNoticeList(state,noticeList){
      state.noticeList = noticeList;
    },
    refreshTotalPages(state,totalPages){
      state.totalPages = totalPages;
    }
  },
  actions: {
    // 查询所有公告
    async findAllNotice(context,pageIndex){
      let obj = {}
      obj.pageIndex = pageIndex - 1
      let response = await post("/findAllNotice",obj);
      context.commit("refreshNoticeList",response.data.content);
      context.commit("refreshTotalPages",response.data.totalPages);
    },
  }
}