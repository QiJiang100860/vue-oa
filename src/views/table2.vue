<template>
  <el-main class="module-wrapper">
    <oa-breadcrumb :levelConfig="levelConfig" class="oa-breadcrumb"></oa-breadcrumb>
    <div class="module-content">
      <div class="seacher-content">
        <el-button type="primary" size="small">搜索</el-button>
      </div>
      <oa-page-table
      :table="tableCfg"
      :pagination='paginationCfg'
      @emitPageSize="pageSize"
      @emitPageIndex="pageIndex"
      ></oa-page-table>
    </div>
  </el-main>
</template>
<script>
import oaBreadcrumb from "@/components/oaBreadcrumb";
import oaPageTable from "@/components/oaPageTable";
export default {
  components:{oaBreadcrumb,oaPageTable},
  data(){
    return {
      levelConfig:[
        {name:'表格',path:''},
        {name:'表格2',path:''}
      ],
      //表格配置项
      tableCfg:{
        data:""
      },
      //分页配置项
      paginationCfg:{}
    }
  },
  beforeMount(){
    
  },
  methods:{
    pageSize(num){
      alert(`一页显示${num}条`)
    },
    pageIndex(index){
      alert(`显示第${index}页的数据`)
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
    .seacher-content{
      background: #ffffff;
      margin-bottom: 10px;
      box-sizing: border-box;
      padding: 15px;
    }
  }
}
</style>
