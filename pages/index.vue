<template lang="pug">
  div
    .container.pt-xxl
      .row
          p {{$t('lang')}}
          //- .pt-sm
          //-   nuxt-link.btn.btn-primary(v-for='locale in availableLocales' :key='locale.code' :to='switchLocalePath(locale.code)') {{ $t('lang') }}
          //- p
          //-   svg-icon(name="heart")
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  }
};
</script>
<style lang="scss">
p {
  color: $secondary;
}
</style>
