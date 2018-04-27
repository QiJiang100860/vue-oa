<template>
  <el-main class="module-wrapper">
    <oa-breadcrumb :levelConfig="levelConfig" class="oa-breadcrumb"></oa-breadcrumb>
    <div class="module-content">
      <div>
          <div id="bie" :style="{width: '800px', height: '400px'}"></div>
      </div>
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
        {name:'图表',path:''},
        {name:'饼状图',path:''}
      ]
    }
  },
  beforeMount(){
    
  },
  mounted(){
    this.drawLine();
  },
  methods:{
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('bie'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
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
