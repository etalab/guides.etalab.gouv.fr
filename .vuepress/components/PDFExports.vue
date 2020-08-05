<template>
  <div>
    <ul>
      <li v-for="item in pdfFiles" :key="item.path">
        <a :href="item.path" target="_blank">📂 {{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'PDFExports',
  computed: {
    pdfFiles () {
      return this.$site.themeConfig.pdfFiles || []
    }
  }
}
</script>
