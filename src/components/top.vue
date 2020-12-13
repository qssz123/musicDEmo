<template>
  <div class="top-container">
    <div class="left-box">
      <div class="history-wrapper">
        <span @click="$router.go(-1)" class="iconfont icon-arrow-lift"></span>
        <span @click="$router.go(1)" class="iconfont icon-arrow-right"></span>
      </div>
    </div>
    <div class="right-box">
      <el-input size="small" @keyup.enter.native="toResult" placeholder="搜索" v-model.trim="query">
        <i slot="prefix" class="el-input__icon el-icon-search" style="width=100%"></i>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  data(){
    return {
      query:''
    }
  },
  methods:{
    toResult(){
      if(!this.query){
        this.$message.warning('请输入查询内容')
      }else{
        this.$router.push(`/result?keywords=${this.query}`)
        // this.$parent.show_pag=true
      }
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
