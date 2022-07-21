<template>
  <div>
    <!-- 筛选的top -->
    <SelectTop></SelectTop>
    <!-- 筛选框 -->
    <filterMid></filterMid>

    <!-- 结果表单，操作页面插入span -->
    <el-table
      :data="$store.state.bookData"
      height="500"
      style="width: 100%"
      id="u46-s"
    >
      <!-- 序号列 -->
      <el-table-column prop="num" label="序号" width="90"></el-table-column>
      <!-- 期刊名称列 -->
      <el-table-column
        prop="bookName"
        label="订阅期刊名称"
        width="297"
      ></el-table-column>
      <!-- 期数列 -->
      <el-table-column prop="period" label="期数" width="167">
      </el-table-column>
      <!-- 订阅时间列 -->
      <el-table-column prop="date" label="订购时间" width="167">
      </el-table-column>
      <!-- 订购数量列 -->
      <el-table-column
        prop="mount"
        label="订购数量"
        width="120"
      ></el-table-column>
      <!-- 学院或个人名称列 -->
      <el-table-column prop="name" label="学院或个人名称" width="167">
      </el-table-column>
      
      <!-- 状态列 -->
      <el-table-column prop="statment" label="状态" width="75">
        <!-- 插槽处理状态下拉栏 -->
        <template slot-scope="scope">
          <select
            name="取件状态"
            type="text"
            v-show="scope.row.iseditor"
            v-model="scope.row.statment"
          >
            <option value="已取">已取</option>
            <option value="未取">未取</option>
          </select>
          <span v-show="!scope.row.iseditor">{{ scope.row.statment }}</span>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <button @click="change(scope.row)">
            {{ scope.row.iseditor ? "保存" : "更改" }}
          </button>
        </template>
      </el-table-column>
      
      <!-- 取件时间 -->
      <el-table-column prop="checkDate" label="取件时间" width="167">
      </el-table-column>
      <!-- 取件账号 -->
      <el-table-column prop="account" label="取件账号" width="157">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import filterMid from "@/components/filterMid.vue";
import SelectTop from "@/components/selectTop.vue";
export default {
  name: "StorageManager",
  components: {
    SelectTop,
    filterMid,
  },
  data() {
    return {
      //数据存储放入vuex
    };
  },

  computed: {},

  created() {
    //请求数据
  },

  mounted() {},

  methods: {
    change(row) {
      row.iseditor = !row.iseditor;
    },
  },
};
</script>

<style scoped>
@import "../../public/static/storeManage.css";
</style>