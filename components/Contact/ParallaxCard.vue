<template>
  <div class="py-12 absolute top-[4.5rem] bottom-0 left-0 right-0 -z-[1]">
    <ui-parallax
      img="/logo/css.svg"
      imgClass="w-14 h-14"
      class="absolute"
      :left="10"
      :top="20"
      :speed="40" />
    <ui-parallax
      img="/logo/javascript.svg"
      imgClass="w-14 h-14"
      class="absolute"
      :left="8"
      :top="120"
      :speed="20"
      :reverse="true" />
    <ui-parallax
      img="/logo/git.svg"
      imgClass="w-12 h-12"
      class="absolute"
      :left="30"
      :top="240"
      :speed="25" />
    <ui-parallax
      img="/logo/nuxt.svg"
      imgClass="w-10 h-10"
      class="absolute"
      :right="10"
      :top="40"
      :speed="20"
      :reverse="true" />
    <ui-parallax
      img="/logo/vitejs.svg"
      imgClass="w-12 h-12"
      class="absolute"
      :right="13"
      :top="170"
      :speed="10" />
    <ui-parallax
      img="/logo/tailwind.svg"
      imgClass="w-10 h-10"
      class="absolute"
      :right="40"
      :top="110"
      :speed="30" />
  </div>
</template>
