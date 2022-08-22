<template>
  <transition name="scale">
    <div
      v-if="showNavMenu"
      class="fixed overflow-y-auto inset-0 z-[9] bg-gray-100 dark:bg-zinc-800">
      <div class="h-full flex flex-col">
        <div class="h-[4.5rem]"></div>
        <ul class="w-full grow flex flex-col items-center justify-center gap-4">
          <li @click="toggleNavMenu">
            <btn-link to="/" class="text-lg"> صفحه اصلی </btn-link>
          </li>
          <li @click="toggleNavMenu">
            <btn-link to="/contact" class="text-lg"> اطلاعات تماس </btn-link>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      showNavMenu: 'showNavMenu',
    }),
  },
  methods: {
    ...mapMutations({
      toggleNavMenu: 'toggleNavMenu',
    }),
  },
};
</script>

<style scoped>
.scale-enter,
.scale-leave-to {
  opacity: 0;
}

.scale-leave-active,
.scale-enter-active {
  transition: all 400ms ease-in-out;
}
</style>
