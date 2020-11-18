<template>
  <div class="wrapper">
    <div class="header">
      <div>
        <i class="el-icon-info icon"></i>
        <span class="word">已选择：</span>
        <span>{{ selected.length }}</span>
      </div>
      <div class="addButton">
        <el-button type="primary" size="mini" @click="addUser">新增</el-button>
      </div>
    </div>
    <div class="checkboxes">
      <div>
        <el-checkbox @change="changeAllStatus" v-model="checked">
          <div class="listHeader">
            <span class="jobId">工号</span>
            <span class="name">姓名</span>
            <span class="direction">研究方向</span>
            <span class="comment">是否参与评审</span>
            <span class="opration">操作</span>
          </div>
        </el-checkbox>
      </div>
      <div class="itemWrapper" v-for="(item, index) in items" :key="item.id">
        <el-checkbox v-model="item.checked">
          <div class="item">
            <span class="jobId">{{ item.id }}</span>
            <span class="name">{{ item.name }}</span>
            <span class="direction">{{ item.direction }}</span>
            <span class="comment" v-if="item.comment">是</span>
            <span class="comment" v-else>否</span>
            <span class="opration" @click.stop="editUser(item)">编辑</span>
            <div class="line"></div>
            <span class="opration" @click.stop="deleteItem(index)">删除</span>
          </div>
        </el-checkbox>
      </div>
    </div>
    <Dialog
      :dialogVisible="dialogVisible"
      :changeDialogVisible="changeDialogVisible"
      :title="title"
      :formItem="formItem"
    ></Dialog>
  </div>
</template>

<script>
import Dialog from '../components/Dialog'

export default {
  components: {
    Dialog,
  },
  data() {
    return {
      checked: false,
      dialogVisible: false,
      title: '',
      formItem: {
        id: '',
        name: '',
        direction: '',
        comment: '',
      },
    }
  },
  computed: {
    items() {
      return this.$store.state.list
    },
    selected() {
      return this.items.filter((item) => {
        return item.checked === true
      })
    },
  },
  methods: {
    changeAllStatus() {
      this.items.forEach((item) => {
        item.checked = this.checked
      })
    },
    changeDialogVisible() {
      this.dialogVisible = !this.dialogVisible
    },
    addUser() {
      this.title = '新增用户'
      this.formItem = {}
      this.changeDialogVisible()
    },
    editUser(item) {
      this.title = '编辑用户'
      this.formItem = item
      this.changeDialogVisible()
    },
    deleteItem(index) {
      this.$confirm('确认删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.items.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
  },
}
</script>

<style scoped lang="less">
.wrapper {
  .header {
    color: #46a0fc;
    border: 1px solid #46a0fc;
    border-radius: 4px;
    padding: 0.3em 0.5em;
    margin-bottom: 10px;
    background: #f1f8ff;
    position: relative;
    .icon {
      margin-right: 0.3em;
    }
    .word {
      color: #333;
    }
    .addButton {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      margin-left: auto;
    }
  }
  .checkboxes {
    > div:first-child {
      background: #f5f5f5;
    }
    > div:last-child {
      border-bottom: none;
    }
    > div {
      padding: 0.5em 1em;
      border-bottom: 1px solid #ddd;
    }
    .listHeader {
      color: #444;
      > span {
        display: inline-block;
      }
      > .jobId {
        margin-left: 16px;
        width: 100px;
      }
      > .name {
        width: 100px;
      }
      > .direction {
        width: 360px;
      }
      > .comment {
        width: 160px;
      }
    }
    .itemWrapper {
      .item {
        font-size: 14px;
        flex-wrap: nowrap;
        > span {
          display: inline-block;
        }
        .jobId {
          margin-left: 16px;
          width: 100px;
        }
        .name {
          width: 100px;
        }
        .direction {
          width: 360px;
        }
        .comment {
          width: 160px;
        }
        .opration {
          color: #3e94fc;
        }
        .line {
          display: inline-block;
          margin-left: 0.8em;
          margin-right: 0.8em;
          height: 1em;
          vertical-align: middle;
          border-left: 1px solid #aaa;
        }
      }
    }
    > .itemWrapper:hover {
      background: #f1f8ff;
    }
  }
}
</style>
