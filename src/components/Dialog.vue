<template>
  <div>
    <el-dialog
      style="text-align: center"
      :title="title"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <el-form label-position="right" label-width="100px" :model="formItem">
        <el-form-item label="工号">
          <el-input v-model="formItem.id"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formItem.name"></el-input>
        </el-form-item>
        <el-form-item label="研究方向">
          <el-input v-model="formItem.direction"></el-input>
        </el-form-item>
        <el-form-item label="是否参与评审" style="text-align: center">
          <el-switch v-model="formItem.comment"></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="changeDialogVisible">取 消</el-button>
        <el-button type="primary" @click="comfirmAdd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['dialogVisible', 'changeDialogVisible', 'formItem', 'title'],
  data() {
    return {}
  },
  methods: {
    comfirmAdd() {
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
    },
  },
}
</script>

<style lang="less" scoped>
div {
  text-align: start;
}
</style>
