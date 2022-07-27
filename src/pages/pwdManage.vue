<template>
  <div>
    <!-- 筛选框 -->
    <selectTop></selectTop>

    <!-- 筛选框 -->
    <div id="u39-s" class="ax_default box_1">
      <div id="u39_div-s">
        <span id="u41-s">学&nbsp; 院：</span>
        <el-input
          v-model="$store.state.academe"
          placeholder="学院"
          id="u43-s"
          style="top: -8px; width: 114px; left: 85px"
          clearable
        ></el-input>

        <span id="u102-s">姓名：</span>
        <el-input
          v-model="$store.state.pwd_Name"
          placeholder="姓名"
          id="u44-s"
          style="top: -8px; width: 200px; left: 241px"
          clearable
        ></el-input>

        <span id="u41-2">账号：</span>
        <el-input
          v-model="$store.state.account"
          placeholder="账号"
          id="u43-2"
          style="top: -8px; width: 140px; left: 368px"
          clearable
        ></el-input>

        <span id="u102-2">审核状态：</span>
        <el-select
          v-model="$store.state.pwd_Statement"
          id="u44-2"
          style="top: 12px; width: 200px; left: 536px"
          placeholder="审核状态"
        >
          <el-option value="待处理"></el-option>
          <el-option value="已通过"></el-option>
          <el-option value="未通过"></el-option>
        </el-select>

        <!-- 添加点击事件 -->
        <el-button type="primary" round id="u45-s" @click="search"
          >查找</el-button
        >
        <el-button type="primary" round id="u45-sexit" @click="exitSearch"
          >退出查找</el-button
        >
      </div>
    </div>

    <!-- 表单 -->
    <el-table
      :data="$store.state.pwdList"
      height="470"
      style="width: 100%"
      id="u46"
    >
      <!-- 8列数据 -->
      <el-table-column prop="num" label="序号" width="90"></el-table-column>
      <el-table-column
        prop="pwd_Name"
        label="姓名"
        width="90"
      ></el-table-column>
      <el-table-column prop="academe" label="学院" width="90"></el-table-column>
      <el-table-column
        prop="account"
        label="学号"
        width="140"
      ></el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        width="140"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="申诉时间"
        width="140"
      ></el-table-column>
      <el-table-column prop="img" label="凭证" width="450">
        <template slot-scope="scope">
          <el-image
            style="width: 50%; height: 150px"
            :src="scope.row.img"
            :preview-src-list="[scope.row.img]"
            :key="scope.row.num"
          >
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
      </el-table-column>

      <!-- 审核状态加select -->
      <el-table-column
        prop="pwd_Statement"
        label="审核状态"
        width="150"
      ></el-table-column>

      <el-table-column prop="" label="操作">
        <template slot-scope="scope">
          <el-button
            @click="agree(scope.row)"
            v-show="scope.row.pwd_Statement == '待处理' && !scope.row.checked"
            >同意</el-button
          >
          <el-button
            @click="del(scope.row)"
            v-show="scope.row.pwd_Statement == '待处理' && !scope.row.checked"
            >拒绝</el-button
          >
          <!-- 用于全选时的选择项显示 -->
          <el-checkbox
            v-model="scope.row.checked"
            class="checkOne"
            v-show="scope.row.checked && scope.row.pwd_Statement == '待处理'"
          ></el-checkbox>
        </template>
      </el-table-column>
    </el-table>

    <!-- 全选框 -->
    <div class="selectAll">
      <el-checkbox v-model="checked" class="select" @change="sleAll"
        >全选</el-checkbox
      >
      <el-button style="margin-left: 160px" @click="agreeAll"
        >全部同意</el-button
      >
      <el-button style="top: 21px" @click="delAll">全部拒绝</el-button>
    </div>
  </div>
</template>

<script>
import selectTop from "@/components/selectTop.vue";

export default {
  name: "pwdManage",
  components: {
    selectTop,
  },
  data() {
    return {
      //其他数据放入vuex
      subarr: [],
      checked: false,
    };
  },

  mounted() {
    this.subarr = this.$store.state.pwdList;
  },

  methods: {
    search() {
      console.log(this.$store.state.pwd_Statement);
      this.$store.dispatch("pwd_Srh", this.subarr);
    },
    exitSearch() {
      this.$store.dispatch("pwd_Exsrh", this.subarr);
    },
    agree(row) {
      row.pwd_Statement = "已通过";
    },
    del(row) {
      row.pwd_Statement = "未通过";
    },
    sleAll() {
      if (this.checked == true) {
        //点击开启全选
        this.$store.state.pwdList.forEach((item) => {
          item.checked = true;
        });
      } else {
        //点击关闭全选
        this.$store.state.pwdList.forEach((item) => {
          item.checked = false;
        });
      }
    },
    agreeAll() {
      this.$store.state.pwdList.forEach((item) => {
        if(item.checked == true && item.pwd_Statement == '待处理'){
          item.pwd_Statement = '已通过'
          this.checked = false
          //并发送请求
        }
      })
    },
    delAll() {
      this.$store.state.pwdList.forEach((item) => {
        if(item.checked == true && item.pwd_Statement == '待处理'){
          item.pwd_Statement = '未通过'
          this.checked = false
          //并发送请求
        }
      })
    },
  },
};
</script>

<style scope>
@import "../../public/static/filterMid.css";
</style>