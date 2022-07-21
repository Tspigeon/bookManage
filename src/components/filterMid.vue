<template>
  <div id="u39-s" class="ax_default box_1">
    <div id="u39_div-s">
      <span id="u41-s">学&nbsp; 院/个人：</span>
      <el-input
        v-model="$store.state.name"
        placeholder="名称"
        id="u43-s"
        style="top: -1px; width: 114px; left: 85px"
        clearable
      ></el-input>

      <span id="u102-s">期刊名称：</span>
      <el-input
        v-model="$store.state.bookName"
        placeholder="期 刊 名 称"
        id="u44-s"
        style="top: -1px; width: 200px; left: 241px"
        clearable
      ></el-input>

      <span id="u41-2">期&nbsp; 数：</span>
      <el-input
        v-model="$store.state.period"
        placeholder="期数"
        id="u43-2"
        style="top: -1px; width: 140px; left: 368px"
        clearable
      ></el-input>

      <span id="u102-2">取件状态：</span>
      <el-input
        v-model="$store.state.statment"
        placeholder="取件状态"
        id="u44-2"
        style="top: -1px; width: 200px; left: 536px"
        clearable
      >
      </el-input>

      <!-- 添加点击事件 -->
      <el-button type="primary" round id="u45-s" @click="search"
        >查找</el-button
      >
      <el-button type="primary" round id="u45-sexit" @click="exitSearch"
        >退出查找</el-button
      >
    </div>
  </div>
</template>

<script>

export default {
  name: "filterMid",

  data() {
    return {
      //其他数据存储已放入vuex
      subarr: [],
    };
  },

  mounted() {
    // bookData的副本数组,从state中拿到
    this.subarr = this.$store.state.bookData;
  },

  methods: {
    //vuex接管数据操作
    search() {
      this.$store.dispatch("srh", this.subarr);
    },
    exitSearch() {
      this.$store.dispatch("ex_Srh", this.subarr);
    },
  },
};
</script>

<style>
@import "../../public/static/filterMid.css";
</style>