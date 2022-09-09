<template>
  <div class="flex flex-col items-stretch gap-2">
    <h3 dir="auto">{{ title }} :</h3>
    <div
      class="group bg-white/50 dark:bg-zinc-700/50 shadow overflow-hidden flex flex-row items-center rounded-md poppins text-sm transition-colors duration-300"
      :class="copyClasses">
      <input
        type="text"
        disabled
        class="py-2 px-4 block min-w-0 w-full bg-transparent grow text-gray-800 dark:text-gray-300"
        :value="text" />
      <button
        @click="onCopy"
        class="w-9 h-7 md:w-0 md:h-0 py-1 px-2 md:py-0 md:px-0 group-hover:w-9 group-hover:h-7 group-hover:py-1 group-hover:px-2 overflow-hidden transition-all duration-300 shrink-0">
        <IconCopy class="h-full w-full text-gray-600 dark:text-gray-400" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoInput',
  data() {
    return {
      copied: false,
    };
  },
  props: ['text', 'title'],
  methods: {
    async onCopy() {
      await navigator.clipboard.writeText(this.text);
      this.copied = true;
      setTimeout(() => (this.copied = false), 2500);
    },
  },
  computed: {
    copyClasses() {
      return this.copied ? ['bg-emerald-500/50', 'dark:bg-emerald-400/40'] : [];
    },
  },
};
</script>
