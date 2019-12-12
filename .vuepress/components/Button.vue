<template>
  <p>
    <NavLink
      :class="[classProp, { 'action-button': true }]"
      :item="actionLink"
    />
  </p>
</template>
<script>
import NavLink from "@theme/components/NavLink.vue"

export default {
  components: { NavLink },
  props: ['link', 'text', 'classProp'],
  computed: {
    actionLink () {
      return {
        link: this.link,
        text: this.text
      }
    }
  }
}
</script>
<style lang="stylus">
  .action-button
    display inline-block
    font-size 1rem
    color #fff
    background-color $accentColor
    padding .5rem 1rem
    border-radius 4px
    transition background-color .1s ease
    box-sizing border-box
    border-bottom 1px solid darken($accentColor, 10%)
    &.big
      font-size 1.2rem
      padding 0.8rem 1.6rem
    &:hover
      background-color lighten($accentColor, 10%)
</style>
