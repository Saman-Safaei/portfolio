<template>
  <div
    class="group w-full max-w-md flex flex-col justify-start items-center gap-4 p-4 cursor-pointer"
    @click.self="showModal = !showModal">
    <img
      @click="showModal = !showModal"
      :src="imgUrl"
      :alt="imgAlt"
      class="h-32 filter dark:grayscale-[95%] group-hover:grayscale-0 transition-[filter] duration-500"
      :class="imgClass" />
    <h4
      @click="showModal = !showModal"
      class="font-medium text-xl poppins transition-colors duration-300"
      :class="hoverClasses">
      <slot name="title"></slot>
    </h4>
    <transition name="modal">
      <div
        class="fixed inset-0 bg-black/40 backdrop-blur z-20 cursor-auto p-4 overflow-y-auto"
        v-if="showModal">
        <div class="min-h-full flex justify-center items-center">
          <div
            class="modal-content flex flex-col items-stretch gap-3 min-h-[10rem] w-full max-w-lg bg-white dark:bg-zinc-700 rounded-xl px-3 pb-3 pt-5">
            <h3 class="text-center text-2xl poppins">
              <slot name="title"></slot>
            </h3>
            <p class="grow leading-8 text-justify"><slot name="text"></slot></p>
            <btn-raised type-of="button" block @click="showModal = !showModal">
              بستن
            </btn-raised>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  name: 'KnowledgeItem',
  props: {
    imgUrl: String,
    imgAlt: String,
    imgClass: String,
    hoverClasses: Array,
  },
};
</script>

<style scoped>
.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.2);
}

.modal-enter-active,
.modal-leave-active,
.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: 400ms ease-in-out;
}
</style>
