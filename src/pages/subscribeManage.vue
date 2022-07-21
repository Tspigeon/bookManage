<template>
  <div>
    <!-- 筛选框 -->
    <selectTop></selectTop>

    <!-- 筛选条件 -->
    <filterMid></filterMid>

    
  </div>
</template>

<script>
import selectTop from "@/components/selectTop.vue";
import filterMid from "@/components/filterMid.vue"

export default {
  name: "subscribeManage",
  components: {
    selectTop,
    filterMid
  },
  data() {
    return {
        //其他数据已放入vuex
        subarr: []
    }
  },
  methods: {
    
  },
};
</script>

<style>
</style>