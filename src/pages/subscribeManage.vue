<template>
  <div>
    <!-- 筛选框 -->
    <selectTop></selectTop>

    <!-- 筛选条件 -->
    <filterMid :flag="flag"></filterMid>

    <!-- 书籍信息列表 -->
    <el-table
      :data="$store.state.bookList"
      height="500"
      style="width: 100%"
      id="u46"
    >
      <!-- 序号列 -->
      <el-table-column prop="num" label="序号" width="120"></el-table-column>

      <!-- 期刊名称列 -->
      <el-table-column
        prop="bookName"
        label="订阅期刊名称"
        width="397"
      ></el-table-column>

      <!-- 期数列 -->
      <el-table-column prop="period" label="期数" width="197">
      </el-table-column>

      <!-- 订阅时间列 -->
      <el-table-column prop="date" label="订购时间" width="197">
      </el-table-column>

      <!-- 订购数量列 -->
      <el-table-column
        prop="mount"
        label="订购数量"
        width="150"
      ></el-table-column>

      <!-- 学院或个人名称列 -->
      <el-table-column prop="name" label="学院或个人名称" width="207">
      </el-table-column>

      <!-- 取件账号 -->
      <el-table-column prop="account" label="取件账号">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import selectTop from "@/components/selectTop.vue";
import filterMid from "@/components/filterMid.vue";

export default {
  name: "subscribeManage",
  components: {
    selectTop,
    filterMid,
  },
  data() {
    return {
      //其他数据已放入vuex
      subarr: [],
      flag: 0,
    };
  },
  methods: {},
  mounted() {
    //页面切换数据置空
    this.$store.state.name = "";
    this.$store.state.bookName = "";
    this.$store.state.period = "";
  },
};
</script>

<style>
</style>