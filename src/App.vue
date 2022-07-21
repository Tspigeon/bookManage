<template>
  <div id="app">
    <div id="navigate">
      <!-- 现在我们使用router-link 和 to 实现路由的切换-->
      <el-button>
        <router-link active-class="active" to="userManage"
          >用户管理页面</router-link
        >
      </el-button>

      <el-button id="u1">
        <!-- 由路由实现高亮active效果 active-class -->
        <router-link active-class="active" to="storeManage"
          >仓库管理页面</router-link
        >
      </el-button>

      <el-button style="margin-left: 100px">
        <router-link active-class="active" to="subscribeManage"
          >订阅系统页面</router-link>
      </el-button>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#navigate {
  height: 80px;
  margin: 0px;
}
#u1 {
  margin-left: 100px;
}

/* 清空按钮样式 */
.el-input__clear {
  font-size: 18px;
}
.el-icon-circle-close:before {
  content: "\e79d" !important;
  font-size: 18px;
}
</style>
