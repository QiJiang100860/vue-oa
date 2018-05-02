<template>
  <el-container class="main-content-wrapper">
    <!-- <el-header>Header</el-header> -->
    <oa-header @emitLoginOut="loginOut"></oa-header>
    <el-container class="main-wrapper">
      <oa-left :routerConfig="leftNavRouter"></oa-left>
      <!-- <el-aside width="200px">Aside</el-aside> -->
      <!-- <el-main>Main</el-main> -->
      <router-view></router-view>
    </el-container>
    <oa-footer></oa-footer>
  </el-container>
</template>

<script>
import oaHeader from "@/components/oaHeader";
import oaLeft from "@/components/oaLeft";
import oaFooter from "@/components/oaFooter"
export default {
  components:{oaHeader,oaLeft,oaFooter},
  data () {
    return {
      //左部菜单根据路由表动态渲染
      leftNavRouter:null
    }
  },
  beforeMount(){
    let routerArr = this.$router.options.routes;
    let renderNavData = []
    for(let item of routerArr){
      if(item.meta){
        if(item.meta.isnav){
          renderNavData.push(item);
        }
      }
    }
    debugger
    this.leftNavRouter = renderNavData;
  },
  methods:{
    loginOut(){
      this.$router.push("/")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-content-wrapper{
  height: 100%;
  .main-wrapper{
    box-sizing: border-box;
    padding-top: 50px;
    padding-bottom:40px;
  }
}

</style>