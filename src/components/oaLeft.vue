<template>
  <el-aside class="oa-left" width="210px">
     <el-menu class="oa-el-maue" :default-openeds="['0']">
      <!-- <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          <el-menu-item index="1-4-2">选项4-1</el-menu-item>
          <el-menu-item index="1-4-3">选项4-1</el-menu-item>
          <el-menu-item index="1-4-4">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu> -->


      <el-submenu v-for="(item,index) in routerConfig" :key="index" :index="''+index">
        <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
        <!-- <el-menu-item index="1-1">选项1</el-menu-item> -->
        <el-menu-item v-for="(citem,cindex) in item.children" :key="cindex" :index="''+index+'-'+cindex" @click="toViews(item.path,citem.path)">{{citem.name}}</el-menu-item>
      </el-submenu>



    </el-menu>
  </el-aside>
</template>
<script>
export default {
  props:['routerConfig'],
  methods:{
    toViews(path1,path2){
      let path = `${path1}/${path2}`;
      this.$router.push(path);
    }
  }
}
</script>

<style lang="scss" scoped>
.oa-left{
    // background: #f0f0f0;
    box-sizing: border-box;
    border-right: solid 1px #e6e6e6;
    .oa-el-maue{
      border: none;
    }
}
</style>

