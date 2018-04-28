<template>

  <el-main class="module-wrapper">
    <oa-breadcrumb :levelConfig="levelConfig" class="oa-breadcrumb"></oa-breadcrumb>
    <div class="module-content">
      <div class="seacher-content">
          <el-button type="primary" size="small" @click="addFun">添加</el-button>
          <el-button type="primary" size="small">搜索</el-button>
      </div>
      <el-table :data="tableData3" style="width: 100%" height="90%">
        <el-table-column fixed prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别" :formatter="(row, column, cellValue, index)=>row.sex==1?'男':'女'"></el-table-column>
        <el-table-column prop="province" label="省份"></el-table-column>
        <el-table-column prop="city" label="市区"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="zip" label="邮编"></el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData3)" type="danger" icon="el-icon-delete" circle size="small"></el-button>
                <el-button  @click.native.prevent="editorFun(tableData3[scope.$index])" type="primary" icon="el-icon-edit" circle  size="small"></el-button>
            </template>
        </el-table-column>
      </el-table>


    </div>


<!-- 弹框 -->
    <el-dialog
    title="编辑"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名：">
                <el-input v-model="form.name" placeholder="请输入姓名" ></el-input>
            </el-form-item>
            <el-form-item label="日期：">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="城市：">
                <el-select v-model="form.city" placeholder="请选择城市">
                    <el-option label="北京" value="beijing"></el-option>
                    <el-option label="西安" value="xian"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="邮编">
               <el-input v-model="form.zip" placeholder="邮编" ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button @click="handleClose">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>


  </el-main>
</template>
<script>
import oaBreadcrumb from "@/components/oaBreadcrumb";
export default {
  components:{oaBreadcrumb},
  data(){
    return {
        form: {
          date: '',
          name: '',
          province: '',
          city: '',
          address: '',
          zip: '',
          sex:''
        },
      levelConfig:[
        {name:'表格',path:''},
        {name:'表格1',path:''}
      ],
      tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          sex:'1'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          sex:'0'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          sex:'1'
        }],
        editorData:null,
        dialogVisible: false
    }
  },
  beforeMount(){
    
  },
  methods:{
      deleteRow(index, rows) {
        this.$confirm('确认删除吗, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          rows.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      editorFun(data){
          this.form.name = data.name;
          this.form.date = data.date;
          this.form.province = data.province;
          this.form.city = data.city;
          this.form.address = data.address;
          this.form.zip = data.zip;
          this.form.sex = data.sex;
          this.dialogVisible = !this.dialogVisible
      },
      addFun(){
          this.form.name = "";
          this.form.date = "";
          this.form.province = "";
          this.form.city = "";
          this.form.address = "";
          this.form.zip ="";
          this.form.sex = "";
          this.dialogVisible = !this.dialogVisible
      },
      handleClose(done) {
          this.dialogVisible = !this.dialogVisible
       
      },
      onSubmit(){
           this.$confirm('确认提交吗？')
          .then(_ => {
            console.log(this.form);
            this.dialogVisible = !this.dialogVisible
          })
          .catch(_ => {});
      }
  }
}
</script>
<style lang="scss" scoped>
    .seacher-content{
        background: #ffffff;
        margin-bottom: 10px;
        box-sizing: border-box;
        padding: 15px;
    }
</style>
