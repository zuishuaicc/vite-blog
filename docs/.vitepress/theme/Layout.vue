<script lang="ts" setup>
import DefaultTheme from "vitepress/theme"
import { useClickEffect } from "./hooks/useClickEffect"
import { onMounted } from "vue"
onMounted(() => {
  useClickEffect()
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

<style scoped lang="less"></style>
