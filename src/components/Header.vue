<template>
  <div class="wrapper">
    <div class="item">
      <span>专家评审：</span>
      <el-input
        placeholder="输入专家姓名或工号检索"
        v-model="input1"
        size="small"
      >
      </el-input>
    </div>
    <div class="item">
      <span>研究方向：</span>
      <el-input
        placeholder="不限研究方向"
        suffix-icon="el-icon-arrow-down"
        v-model="input1"
        size="small"
      >
      </el-input>
    </div>
    <div class="item">
      <span>是否参与评审：</span>
      <el-input
        placeholder="不限状态"
        suffix-icon="el-icon-arrow-down"
        v-model="input1"
        size="small"
      >
      </el-input>
    </div>
    <div class="item">
      <el-button type="primary" size="small">查询</el-button>
      <el-button size="small">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
    }
  },
}
</script>

<style scoped lang="less">
.wrapper {
  display: flex;
  background: #eee;
  padding: 0.5em 0.5em;
  .item {
    display: flex;
    align-items: center;
    margin-right: 1em;
    span {
      white-space: nowrap;
    }
  }
}
</style>
