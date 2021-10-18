<template lang="pug">
    .theHeader
        .container
          .row
            .col-12
              ul.theHeader-menu
                li: AppLink(to="/" title="Home") #[svg-icon(name="map")]
                li: AppLink(to="/login" title="Login") #[svg-icon(name="login")]
</template>
<script>
export default {};
</script>
<style lang="scss">
.theHeader {
  position: fixed;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: auto;
  padding: 2rem 0rem;
  z-index: 9999;
  transition: all 0.2s ease-in-out;
  background-color: $white;
  &-menu {
    list-style: none;
    padding: 0rem;
    margin: 0rem;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      display: inline-block;
      a {
        padding: 0.5rem;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
  &--fixed {
    transition: transform 0.25s ease-in-out, background 0.25s ease-in-out,
      top 0.25s ease-in-out;
    will-change: transform;
  }
  &--unpinned {
    transform: translateY(-100%);
  }
  &--pinned {
    transform: translateY(0);
  }
  &--not-top {
    box-shadow: $box-shadow;
    background-color: $white;
  }
}
</style>
