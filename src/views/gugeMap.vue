<template>
  <el-main class="module-wrapper">
    <oa-breadcrumb :levelConfig="levelConfig" class="oa-breadcrumb"></oa-breadcrumb>
    <div class="module-content">
      <div>谷歌地图:{{data || '无数据'}}</div>
      <el-button @click="saveFun">存储</el-button>
      <el-button @click="clearFun">清除</el-button>
    </div>
  </el-main>
</template>
<script>
import oaBreadcrumb from "@/components/oaBreadcrumb";
import * as storage from "@/until/storage"
export default {
  components:{oaBreadcrumb},
  data(){
    return {
      levelConfig:[
        {name:'地图',path:''},
        {name:'谷歌地图',path:''}
      ],
      data:null
    }
  },
  beforeMount(){
    this.data = !!storage.getLocal('map')?storage.getLocal('map')[1].name:this.$store.getters.userName

  },
  methods:{
    saveFun(){
      storage.setLocal('map',this.levelConfig)
      this.data = !!storage.getLocal('map')?storage.getLocal('map')[1].name:this.$store.getters.userName
      this.$message({
        type: 'info',
        message: '存储成功'
      });      
    },
    clearFun(){
      storage.clearLocal('map')
      this.data = !!storage.getLocal('map')?storage.getLocal('map')[1].name:this.$store.getters.userName
      this.$message({
        type: 'info',
        message: '清除成功'
      });    
    }
  }
}
</script>
<style lang="scss" scoped>
.module-wrapper{
  box-sizing: border-box;
  position: relative;
  .oa-breadcrumb{
    position: absolute;
    background: #fff;
    width: 100%;
    top: 0;
    left: 0;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    padding-left:15px;
    border-bottom:solid 1px #eee;
    z-index: 4;
  }
  .module-content{
    position: absolute;
    top: 0px;
    left: 0;
    background: #f0f0f0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-top:55px;
    padding-left: 15px;
    overflow-y: auto;
  }
}
</style>
