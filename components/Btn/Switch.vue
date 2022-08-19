<template>
  <label class="inline-block">
    <input
      type="checkbox"
      :checked="$attrs.checked"
      @input="$listeners.input"
      class="peer hidden" />
    <span
      class="block relative cursor-pointer w-8 h-5 rounded-md bg-gray-300 peer-checked:bg-emerald-600 dark:peer-checked:bg-emerald-500 before:content-[''] before:w-3.5 before:h-3.5 before:absolute before:top-[0.1875rem] before:left-[0.1875rem] before:rounded before:bg-white peer-checked:before:left-[0.9375rem] transition-all duration-200 before:transition-all before:duration-200"></span>
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>
