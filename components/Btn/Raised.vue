<template>
  <button
    v-if="typeOf === 'button'"
    @click="$actions.click"
    class="bg-emerald-500 text-white dark:bg-emerald-600 shadow dark:shadow-none hover:shadow-md dark:hover:shadow-none hover:bg-emerald-600 dark:hover:bg-emerald-500 py-2 px-4 rounded-md active:translate-y-0.5 transition duration-200"
    :class="$attrs.class">
    <slot></slot>
  </button>
  <nuxt-link
    v-else-if="typeOf === 'link'"
    v-bind="{ to: $attrs.to }"
    class="bg-emerald-500 text-white dark:bg-emerald-600 shadow dark:shadow-none hover:shadow-md dark:hover:shadow-none hover:bg-emerald-600 dark:hover:bg-emerald-500 py-2 px-4 rounded-md active:translate-y-0.5 transition duration-200"
    :class="$attrs.class">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: ['typeOf'],
  inheritAttrs: false,
};
</script>
