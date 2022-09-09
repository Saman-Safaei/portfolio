<template>
  <div :style="styles" class="w-fit transition ease-out">
    <img :src="img" :class="imgClass" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      mounted: false,
      screenW: 0,
      screenH: 0,
      responsive: false,
    };
  },
  methods: {
    onMouseMove(ev) {
      if (this.responsive) {
        this.mouseX = ev.screenX;
        this.mouseY = ev.screenY;
      }
    },
  },
  computed: {
    styles() {
      if (!this.mounted || !this.responsive)
        return {
          ...(this.left && { left: `${this.left}%` }),
          ...(this.right && { right: `${this.right}%` }),
          ...(this.top && { top: `${this.top}px` }),
        };

      // prettier-ignore
      return {
        ...(!this.reverse && {transform: `translateX(${(this.mouseX - this.screenW) / this.speed}px) translateY(${(this.mouseY - this.screenH) / this.speed}px)`}),
        ...(this.reverse && {transform: `translateX(${(-1 * (this.mouseX - this.screenW)) / this.speed}px) translateY(${(this.mouseY - this.screenH) / this.speed}px)`}),
        ...(this.left && { left: `${this.left}%` }),
        ...(this.right && { right: `${this.right}%` }),
        ...(this.top && { top: `${this.top}px` }),
      };
    },
  },
  props: ['img', 'left', 'top', 'right', 'speed', 'reverse', 'imgClass'],
  mounted() {
    document.addEventListener('mousemove', this.onMouseMove);
    this.mounted = true;
    this.screenW = window.innerWidth / 2;
    this.screenH = window.innerHeight / 3;
    this.responsive = window.innerWidth > 500;
  },
  beforeDestroy() {
    document.removeEventListener('mousemove', this.onMouseMove);
  },
};
</script>
