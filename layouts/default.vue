<template>
  <div>
    <navbar />
    <div class="h-[4.5rem]"></div>
    <nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        class: this.$store.getters.theme === 'dark' ? 'dark' : '',
      },
    };
  },
};
</script>
