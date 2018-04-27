<template>
  <el-main class="module-wrapper">
    <oa-breadcrumb :levelConfig="levelConfig" class="oa-breadcrumb"></oa-breadcrumb>
    <div class="module-content">
      <div>
        <div id="line" :style="{width: '800px', height: '400px'}"></div>
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
        {name:'折线图',path:''}
      ]
    }
  },
  beforeMount(){
    
  },
  mounted(){
    this.drawLine()
  },
  methods:{
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('line'))
        // 绘制图表
        myChart.setOption({
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
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
