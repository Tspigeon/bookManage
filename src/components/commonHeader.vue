<template>
  <!-- 头部菜单 -->
  <div class="header">
    <!-- 带路由的导航栏    -->
    <el-menu
      :default-active="this.$route.path"
      router
      mode="horizontal"
      class="el-menu-vertical-demo header-menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item>
        <img src="../assets/img/header.png" height="40px" />
      </el-menu-item>
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导入订阅信息</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-search"></i>
        <span slot="title">查看当前仓库信息</span>
      </el-menu-item>
      <el-menu-item index="/bookFetch">
        <i class="el-icon-document"></i>
        <span slot="title">取书</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">录入信息</span>
      </el-menu-item>
      <el-submenu index="6">
        <template slot="title">用户设置</template>
        <el-menu-item>查看用户</el-menu-item>
        <el-menu-item>添加用户</el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- 退出按钮设置 -->
    <div class="el-icon-user lock-out-button">退出登录</div>
  </div>
</template>
    


<script>
export default {
  name: "CommonHeader",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.header {
  height: 80px;
}
.header-menu {
}
.lock-out-button {
  position: absolute;
  right: 60px;
  top: 20px;
  color: rgb(240, 255, 255);
}
.lock-out-button::after {
  clear: both;
}
* {
  margin: 0px;
}
</style>