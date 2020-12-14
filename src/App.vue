<template>
  <div id="app">
    <top v-if="$store.state.isLogin"/>
    <index />
  </div>
</template>

<script>
import top from '@/components/top';
import index from '@/components/index';
export default {
  name: 'app',
  components: {
    top,
    index
  }
};
</script>

<style lang="scss">

</style>
