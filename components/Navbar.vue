<template>
  <header
    class="px-8 bg-neutral-50 dark:bg-[rgb(45,45,50)] font-medium fixed z-10 top-0 w-full transition-[box-shadow] duration-300"
    :class="elevated">
    <div
      class="flex flex-row justify-start items-center h-[4.5rem] max-w-6xl mx-auto">
      <div class="h-full flex items-center">
        <div class="py-6 pr-3 h-full hidden md:block">
          <img src="/logo/vue.svg" class="h-full" />
        </div>
        <div class="pr-3 md:hidden">
          <icon-menu class="w-6 h-6" />
        </div>
        <p class="poppins">SamuelSam-dev</p>
      </div>
      <span class="grow"></span>
      <div class="h-full flex flex-row items-center md:pr-6 gap-2">
        <component
          :is="icon"
          class="w-4 h-4 text-slate-600 dark:text-slate-400" />
        <btn-switch @input="themeSwitchInput" :checked="isDark" />
      </div>
      <nav class="hidden md:block">
        <ul
          class="h-full flex flex-row items-center gap-6 uppercase text-[0.8rem]">
          <li>
            <nuxt-link
              class="hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-300"
              exact-active-class="text-emerald-600 dark:text-emerald-400"
              to="/about"
              >درباره من</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-300"
              exact-active-class="text-emerald-600 dark:text-emerald-400"
              to="/services"
              >خدمات</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-300"
              exact-active-class="text-emerald-600 dark:text-emerald-400"
              to="/"
              >صفحه اصلی</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    scrolled: false,
  }),
  methods: {
    themeSwitchInput(ev) {
      ev.currentTarget.checked
        ? this.$store.dispatch('setThemeDark')
        : this.$store.dispatch('setThemeLight');
    },
    elevateOnScroll() {
      const { scrollY } = window;
      if (scrollY > 10) this.scrolled = true;
      else this.scrolled = false;
    },
  },
  computed: {
    icon() {
      return this.$store.getters.theme === 'light' ? 'icon-sun' : 'icon-moon';
    },
    isDark() {
      return this.$store.getters.theme === 'dark';
    },
    elevated() {
      return this.scrolled
        ? [
            'shadow-lg bg-opacity-80 backdrop-blur',
            'dark:shadow-none dark:bg-opacity-80 dark:backdrop-blur',
          ]
        : [];
    },
  },
  mounted() {
    document.addEventListener('scroll', this.elevateOnScroll);
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.elevateOnScroll);
  },
};
</script>
