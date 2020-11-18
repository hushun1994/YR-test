<template>
  <div class="home">
    <div class="item">
      <Header></Header>
    </div>
    <div class="item">
      <Buttons></Buttons>
    </div>
    <div class="item">
      <Main></Main>
    </div>
  </div>
</template>

<script>
import Main from '../components/Main'
import Header from '../components/Header'
import Buttons from '../components/Buttons'

export default {
  name: 'Home',
  components: {
    Main,
    Header,
    Buttons,
  },
}
</script>

<style lang="less" scoped>
.home {
  .item {
    margin-bottom: 16px;
  }
}
</style>
