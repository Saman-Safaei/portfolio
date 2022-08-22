<template>
  <div>
    <div class="py-12">
      <div class="max-w-6xl mx-auto px-8">
        <index-app-header />
      </div>
    </div>
    <div class="py-12">
      <div class="max-w-6xl mx-auto px-8">
        <index-knowledge />
      </div>
    </div>
    <div
      class="py-12 bg-gradient-to-br from-teal-400 to-emerald-600 dark:from-teal-700 dark:to-emerald-900">
      <div class="max-w-6xl mx-auto px-8 text-white font-medium">
        تست متن فارسی وزیر
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title: 'Home',
  },
};
</script>
