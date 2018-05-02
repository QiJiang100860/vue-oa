<template>
  <div>
      <div class="table-content" :style="{height:tableHeight+'px'}">
        {{tableHeight}}
      </div>
      <div class="table-pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="1000">
        </el-pagination>
      </div>
  </div>
</template>
<script>
export default {
  props:['currentPage'],
  data(){
      return {
          tableHeight:0
      }
  },
  mounted(){
    this.initTable();
  },
  methods:{
    //初始化表格，计算表格可视化高度
    initTable(){
        let winHeight = document.body.clientHeight;
        let sHeight = document.querySelector('.seacher-content').clientHeight;
        let otherHeight = 50+40+55+sHeight+10+16+52;
        let tableHeight = winHeight-otherHeight;
        
        this.tableHeight = tableHeight;
    },
    handleSizeChange(val) {
      //每一页显示多少条  
      this.$emit('emitPageSize',val)
    },
    handleCurrentChange(val) {
      //显示第几页的数据  
      this.$emit('emitPageIndex',val)
    }
  }
}
</script>
<style lang="scss" scoped>
.table-content{
    // height: 660px;
    background: #fff;
    border-bottom: solid 1px #dedede;
    overflow: auto;
}
.table-pagination{
    background: #ffffff;
    box-sizing: border-box;
    padding: 10px 0;
    .el-pagination{
    width: 680px;
    margin: 0 auto;
    }
}
</style>
