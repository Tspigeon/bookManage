<template>
  <div>
    <!-- top方框--预留位置做导航 -->
    <!-- <div
      id="u36"
      class="ax_default"
      data-label="灰色背景"
      style="left: 0px; width: 1520px"
    >
      <div
        id="u36_state0"
        class="panel_state"
        data-label="State1"
        style="width: 1520px"
      >
        <div
          id="u36_state0_content"
          class="panel_state_content"
          style="margin-left: 0px"
        ></div>
      </div>
    </div>
    <div id="u37" class="ax_default box_1" data-label="页面标题">
      <div id="u37_div" class=""></div> -->
    <!-- Unnamed () -->
    <!-- <div id="u38" class="text" style="visibility: inherit">
        <p id="cache4"><span id="cache5">用户列表</span></p>
      </div>
    </div> -->

    <!-- 筛选的top -->
    <SelectTop></SelectTop>

    <!-- 筛选框 -->
    <div id="u39">
      <div id="u39_div">
        <span id="u41">姓&nbsp; 名：</span>
        <el-input
          placeholder="姓名"
          v-model="$store.state.name"
          clearable
          id="u43"
          style="top: -5px; width: 200px; left: 85px"
        ></el-input>

        <span id="u102">学工号：</span>
        <el-input
          v-model="$store.state.sid"
          placeholder="学 工 号"
          id="u44"
          clearable
          style="top: -5px; width: 200px; left: 675px"
        ></el-input>

        <!-- 添加点击事件 -->
        <el-button type="primary" round id="u45" @click="search"
          >查找</el-button
        >
        <el-button type="primary" round id="u45exit" @click="exitSearch"
          >退出查找</el-button
        >
      </div>
    </div>

    <!-- 结果表单，操作页面插入span -->
    <el-table
      :data="$store.state.userList"
      height="500"
      style="width: 100%"
      id="u46"
    >
      <!-- 序号列 -->
      <el-table-column prop="num" label="序号" width="167"></el-table-column>
      <!-- 学院列 -->
      <el-table-column prop="academe" label="学院" width="167">
        <!-- 插槽实现编辑 学院，姓名，学号，联系电话 可以更改 -->
        <template slot-scope="scope">
          <input
            type="text"
            v-model="scope.row.academe"
            v-show="scope.row.iseditor"
            class="inBtn"
          />
          <span v-show="!scope.row.iseditor">{{ scope.row.academe }}</span>
        </template>
      </el-table-column>
      <!-- 账号列 -->
      <el-table-column prop="account" label="账号名" width="167">
      </el-table-column>
      <!-- 密码列 -->
      <el-table-column prop="pwd" label="密码" width="167"> </el-table-column>
      <!-- 姓名列 -->
      <el-table-column prop="name" label="注册人" width="190">
        <template slot-scope="scope">
          <input
            type="text"
            v-model="scope.row.name"
            v-show="scope.row.iseditor"
            class="inBtn"
          />
          <span v-show="!scope.row.iseditor">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <!-- 学号列 -->
      <el-table-column prop="sid" label="学工号" width="190">
        <template slot-scope="scope">
          <input
            type="text"
            v-model="scope.row.sid"
            v-show="scope.row.iseditor"
            class="inBtn"
          />
          <span v-show="!scope.row.iseditor">{{ scope.row.sid }}</span>
        </template>
      </el-table-column>
      <!-- 电话列 -->
      <el-table-column prop="phone" label="联系电话" width="218">
        <template slot-scope="scope">
          <input
            type="text"
            v-model="scope.row.phone"
            v-show="scope.row.iseditor"
            class="inBtn"
          />
          <span v-show="!scope.row.iseditor">{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="oprate" label="操作" width="240">
        <!-- scope类似一个当前行的定位 -->
        <template slot-scope="scope">
          <!-- 点击事件 -->
          <button class="opbtn" @click="edit(scope.row, scope)">
            {{ scope.row.iseditor ? "保存" : "编辑" }}
          </button>
          <!-- 点击事件 -->
          <button class="opbtn" @click="del(scope.row)">
            &nbsp;&nbsp;&nbsp;删除
          </button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import SelectTop from "../components/selectTop.vue";
export default {
  name: "UserManage",
  components: { SelectTop },
  data() {
    return {
      subarr: [],
    };
  },
  created() {
    //请求数据
  },
  mounted() {
    this.subarr = this.$store.state.userList;
  },
  methods: {
    search() {
      // console.log(this.name + " " + this.sid);
      //过滤器
      this.$store.state.userList = this.subarr.filter((item) => {
        // 每次搜索重置数组
        // console.log(this.sid);
        if (this.$store.state.name == "") {
          // console.log("逻辑1");
          return item.sid == this.$store.state.sid;
        } else if (this.$store.state.sid == "") {
          // console.log("逻辑2");
          return item.name == this.$store.state.name;
        } else {
          return (
            item.sid == this.$store.state.sid &&
            item.name == this.$store.state.name
          );
        }
      });
    },
    exitSearch() {
      this.$store.state.userList = this.subarr;
      this.$store.state.name = "";
      this.$store.state.sid = "";
    },
    edit(row) {
      // 编辑属性取反，切换编辑和保存模式
      row.iseditor = !row.iseditor;
    },
    del(row) {
      let isdel = confirm("是否确认删除该用户？");
      //确认页面
      if (isdel) {
        console.log(row);
        this.$store.state.userList = this.$store.state.userList.filter((item) => {
          return item.sid != row.sid;
        });
      }
    },
  },
};
</script>

<style scoped>
/* 引入样式 */
@import "../../public/static/userManage.css";
</style>
