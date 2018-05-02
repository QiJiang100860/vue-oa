<template>
  <el-main class="module-wrapper">
    <oa-breadcrumb :levelConfig="levelConfig" class="oa-breadcrumb"></oa-breadcrumb>
    <div class="module-content">
      <div id="container"></div>
    </div>
  </el-main>
</template>
<script>
import oaBreadcrumb from "@/components/oaBreadcrumb";
import {importMap} from "@/until/importMapApi";
export default {
  components:{oaBreadcrumb},
  data(){
    return {
      levelConfig:[
        {name:'地图',path:''},
        {name:'高德地图',path:''}
      ]
    }
  },
  beforeMount(){
    
  },
  mounted(){
    importMap('gaode',()=>{
        let map = new AMap.Map('container', {
            resizeEnable: true,
            zoom:11,
            center: [116.397428, 39.90923]
        });
        map.plugin(["AMap.ToolBar"], function() {
          map.addControl(new AMap.ToolBar());
        });
        if(location.href.indexOf('&guide=1')!==-1){
          map.setStatus({scrollWheel:false})
        }
      });
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
    #container{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
