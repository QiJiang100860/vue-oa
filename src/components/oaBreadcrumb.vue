<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>module1</el-breadcrumb-item> -->
        <el-breadcrumb-item v-for="(item,index) in levelConfig" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
    //二级导航、三级导航
  props:['levelConfig'],
  beforeMount(){
      
  }
}
</script>
<style>

</style>


