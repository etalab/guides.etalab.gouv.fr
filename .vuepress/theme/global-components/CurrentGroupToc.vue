<template>
  <ul class="table-of-contents">
    <li v-for="item in localSidebarItems">
      <a :href="item.path">{{ item.title || item.path }}</a>
    </li>
  </ul>
</template>

<script>
import { resolveSidebarItems } from '@vuepress/theme-default/util'
export default {
  mounted() {
  },
  computed: {
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
    localSidebarItems () {
      return this.sidebarItems.filter(item =>  {
        if (!item.relativePath) return
        if (item.relativePath.endsWith('README.md')) return
        if (item.relativePath.endsWith('index.md')) return
        return item
       })
    }
  }
}
</script>
