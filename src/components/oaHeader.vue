<template>
  <el-header class="oa-header">
    <el-row :gutter="22">
      <el-col :span="2">后台管理系统</el-col>
      <el-col :span="1" :offset="18">
        <el-dropdown class="el-dropdown-headicon-wrapper">
          <div class="el-dropdown-headicon">
            <img src="" alt="">
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="loginOut">退出</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col  class="el-dropdown-time" :span="3">
        <span>{{timeYear}}</span>
        <span class="lastspan">{{timeDay}}</span>
      </el-col>
    </el-row>
  </el-header>
</template>
<script>
import moment from "moment";
export default {
  data(){
    return {
      timeYear:"",
      timeDay:""
    }
  },
  beforeMount(){

  },
  mounted(){
    this.initTime()
  },
  methods:{
    loginOut(){
      this.$emit('emitLoginOut')
    },
    initTime(){
      setInterval(()=>{
        let nowTime = moment().format();
        this.timeYear = nowTime.split("T")[0];
        this.timeDay = nowTime.split("T")[1].split("+")[0];
      },1000)
      
      
      
    }
  }
}
</script>

<style lang="scss" scoped>
.oa-header{
    width: 100%;
    background: #409EFF;
    position: fixed;
    top: 0;
    height: 50px!important;
    line-height: 50px;
    color: #fff;
    .el-dropdown{
      width: 100%;
      
    }
    .el-dropdown-headicon-wrapper{
      margin-left: 30px;
      .el-dropdown-headicon{
        color: #fff;
        cursor: pointer;
        line-height: 50px;
        height:50px;
        overflow: hidden;
        img{
          display: inline-block;
          width: 36px;
          height: 36px;
          border-radius: 18px;
          box-sizing: border-box;
          border: solid 1px #dedede;
          margin: 0 auto;
          margin-top: 7px;
        }
        
      }
    }
    .el-dropdown-time{
      span{
        font-size: 14px;
        color: #fff;
        vertical-align: 13px;
        &.lastspan{
          margin-left: 10px;
        }
      }
    }
}
</style>

