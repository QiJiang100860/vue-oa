<template>
  <div class="login-wrapper">
    <h1>欢迎您，使用后台管理系统</h1>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="80px" class="demo-ruleForm">
      <el-form-item label="账户" prop="userName">
        <input style="display:none"><!-- for disable autocomplete on chrome -->
        <el-input v-model.number="ruleForm2.userName" placeholder="请输入账户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" placeholder="请输入密码" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%" @click="submitForm('ruleForm2')">登陆</el-button>
        <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
    data() {
      var checkUserName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          userName: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          userName: [
            { validator: checkUserName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.$router.push("/index")
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
}
</script>

<style lang="scss" scoped>
.login-wrapper{
  position: fixed;
  left: 50%;
  margin-left: -250px;
  top:50%;
  margin-top: -160px;
  width: 360px;
  border: solid 1px #dedede;
  box-sizing: border-box;
  padding-right: 50px;
  padding-top:30px; 
  border-radius: 4px;
  h1{
    font-size: 18px;
    font-weight: normal;
    text-align: center;
    margin-bottom: 20px;
    padding-left: 50px;
  }
}
</style>


