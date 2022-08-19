<template>
  <nuxt-link class="text-emerald-600 dark:text-emerald-200" :to="to"
    >go to info</nuxt-link
  >
</template>

<script>
export default {
  props: {
    to: {
      required: true,
      type: [String, Object],
    },
  },
};
</script>
