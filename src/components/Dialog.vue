<template>
  <div>
    <el-dialog
      style="text-align: center"
      :title="title"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <el-form
        :model="formItem"
        :rules="rules"
        ref="ruleForm"
        label-position="right"
        label-width="100px"
      >
        <el-form-item label="工号" prop="jobId">
          <el-input v-model="formItem.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="formItem.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="研究方向">
          <el-input v-model="formItem.direction"></el-input>
        </el-form-item>
        <el-form-item label="是否参与评审" style="text-align: start">
          <el-switch v-model="formItem.comment"></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="changeDialogVisible">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['dialogVisible', 'changeDialogVisible', 'formItem', 'title'],
  data() {
    let checkJobId = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入工号'))
      } else {
        callback()
      }
    }
    let checkName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入姓名'))
      } else {
        callback()
      }
    }
    return {
      rules: {
        jobId: [{ validator: checkJobId, trigger: 'blur' }],
        name: [{ validator: checkName, trigger: 'blur' }],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.title === '新增用户') {
            this.$store.commit('add', this.formItem)
            this.changeDialogVisible()
            this.$message({
              type: 'success',
              message: '新增成功!',
            })
          } else {
            this.$store.commit('edit', this.formItem)
            this.changeDialogVisible()
            this.$message({
              type: 'success',
              message: '修改成功',
            })
          }
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style lang="less" scoped></style>
