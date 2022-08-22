<template>
  <div class="flex flex-col md:flex-row items-center gap-y-12 gap-x-16 pt-14">
    <transition-group
      name="fade"
      class="relative w-7/12 md:w-1/3 h-[15rem] md:h-[25rem] shrink-0">
      <img
        v-for="(icon, index) in icons"
        v-show="index === currentIcon"
        :key="icon"
        class="w-full h-full object-contain drop-shadow-xl dark:drop-shadow-none shrink-0 origin-center"
        :src="'/logo/' + icon + '.svg'"
        alt="header-logo" />
    </transition-group>
    <div
      class="flex flex-col gap-4 md:gap-6 text-center md:text-start grow items-stretch md:items-start"
      dir="rtl">
      <div class="flex flex-col gap-3">
        <h1 class="text-4xl md:text-5xl font-bold">سامان صفائی</h1>
        <h2
          class="text-2xl md:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-fuchsia-500 to-emerald-500 text-transparent bg-clip-text bg-fill animated">
          <span class="hidden md:inline">- </span>طراح و برنامه نویس وب
        </h2>
      </div>
      <p class="text-justify leading-7">
        من سامان صفائی ساکن <strong>تهران</strong> هستم و دیپلمم رو از دبیرستان
        غیر دولتی دکتر حسابی گرفتم. برنامه نویس و توسعه دهنده
        <strong>فرانت اند</strong> با استفاده از فریمورک
        <strong>Vue.js</strong> هستم و به این فریمورک به خاطر سرعت بالا و
        همینطور حجم باندل کمش علاقه دارم. علاقه زیادی به کار گروهی و همینطور
        <strong>یادگیری</strong> بیشتر این فریمورک دارم و روز به روز خودم رو
        <strong>آپدیت</strong> میکنم.
      </p>
      <btn-raised type-of="link" to="/contact">تماس با من</btn-raised>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'nuxt',
      'vue',
      'vitejs',
      'css',
      'html',
      'javascript',
      'tailwind',
      'git',
      'vuetify',
      'archlinux',
    ],
    currentIcon: 0,
    interval: null,
  }),
  computed: {
    currentLogo() {
      return this.icons[this.currentIcon] + '.svg';
    },
  },
  methods: {
    loopIcons() {
      if (this.currentIcon + 1 > this.icons.length - 1) this.currentIcon = 0;
      else ++this.currentIcon;
    },
  },
  mounted() {
    this.interval = setInterval(this.loopIcons, 6000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
  transform: translateX(100%) scale(0.4);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%) scale(0.4);
}
.fade-enter-active,
.fade-leave-active {
  transition: 1000ms ease;
}

.fade-leave-active {
  position: absolute;
  top: 0;
}

.bg-fill {
  background-size: 800% 100%;
  animation: floating ease-in-out infinite 10s;
}

@keyframes floating {
  0% {
    background-position-x: 0%;
  }

  50% {
    background-position-x: 100%;
  }

  100% {
    background-position-x: 0%;
  }
}
</style>
