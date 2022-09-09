<template>
  <div>
    <div class="py-12">
      <Container>
        <index-app-header />
      </Container>
    </div>
    <div class="py-12">
      <Container>
        <index-knowledge />
      </Container>
    </div>
    <div
      class="py-20 bg-gradient-to-br from-teal-500 to-emerald-700 dark:from-zinc-600 dark:to-zinc-800">
      <Container>
        <div class="text-white font-medium">
          <index-status />
        </div>
      </Container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title: 'توسعه دهنده فرانت اند و خدمات طراحی سایت',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'سامان صفائی برنامه نویس جونیور فرانت اند، توسعه دهنده فرانت اند با ویو و تیلویند، توانمند در ساخت و انجام خدمات طراحی سایت های شرکتی و ...',
      },
    ],
  },
};
</script>
