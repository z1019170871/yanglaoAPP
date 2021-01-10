<template>
  <div class="login">
    <!-- 头部 -->
    <div class="header">
      <div class="logo"></div>
      <div class="title">
        互助养老APP
      </div>
    </div>

    <!-- 登录输入框 -->
    <div class="form">
      <van-form @submit="loginHandler">
        <van-field
          v-model="form.phonenumber"
          required
          clearable
          label="手机号"
          icon="question-o"
          placeholder="请输入手机号"
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="form.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
          :rules="[{ required: true }]"
        />
      
        <!-- 登录按钮 -->
        <div style="text-align:center;padding:1em">
        <van-button 
          plain round 
          style="width:100%"
          native-type="submit">登录</van-button>
        </div>
      </van-form>
      <!-- 注册按钮 -->
      <div style="text-align:center;padding:1em">
       <van-button 
        plain round 
        @click="registerHandler" 
        style="width:100%">注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      form:{
        
      }
    }
  },
  methods:{
    ...mapActions("login",["login"]),
    // 注册
    registerHandler(){
      // 跳转到注册页面
      this.$router.push({
        path:'/register'
      });
    },
    // 登录
    loginHandler(){
      this.login(this.form)
      .then(()=>{
        //跳转到首页
        this.$router.push({path:'/home'});
      });
    }
  }
}
</script>

<style scoped>
.header {
  height: 140px;
  padding: 50px;
  color: #ffffff;
  background-color: pink;
  text-align: center;
}
.header .logo {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  border: 1px solid #efefef;
  margin: 0 auto;
  color:#efefef;
  font-weight: bold;
  margin-bottom: 1em;
  font-size: 1.5em;
}
.header .title {
  font-size: 24px;
}
</style>