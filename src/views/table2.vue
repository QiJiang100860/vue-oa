<template>
  <el-main class="module-wrapper">
    <oa-breadcrumb :levelConfig="levelConfig" class="oa-breadcrumb"></oa-breadcrumb>
    <div class="module-content">
      <div>22</div>
    </div>
  </el-main>
</template>
<script>
import oaBreadcrumb from "@/components/oaBreadcrumb";
export default {
  components:{oaBreadcrumb},
  data(){
    return {
      levelConfig:[
        {name:'表格',path:''},
        {name:'表格2',path:''}
      ]
    }
  },
  beforeMount(){
    
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
