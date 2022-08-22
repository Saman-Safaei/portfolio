<template>
  <nuxt-link
    class="hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-300"
    exact-active-class="text-emerald-600 dark:text-emerald-400"
    :to="to">
    <slot></slot>
  </nuxt-link>
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
