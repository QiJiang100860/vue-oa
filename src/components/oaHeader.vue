<template>
  <el-header class="oa-header">
    <el-row :gutter="22">
      <el-col :span="2">后台管理系统</el-col>
      <el-col :span="1" :offset="21">
        <el-dropdown>
          <div class="el-dropdown-link">
            <img src="" alt="">
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="loginOut">退出</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </el-header>
</template>
<script>
export default {
  methods:{
    loginOut(){
      this.$emit('emitLoginOut')
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
    .el-dropdown-link{
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
        margin-top: 7px;
        margin-right: 10px;
      }
      span{
        font-size: 14px;
        color: #fff;
        vertical-align: 13px;
        &.lastspan{
          margin-left: 20px;
        }
      }
    }
}
</style>

