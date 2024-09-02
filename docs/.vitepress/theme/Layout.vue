<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import {clickEffect } from './clickEffect'
import {onMounted} from 'vue'
onMounted(()=>{
  clickEffect()
})

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #sidebar-nav-before>
      <!-- <h1>zuishauicc的学习历程</h1> -->
    </template>
  </Layout>
</template>

<style scoped lang='less'>

</style>