<template>
  <div>
    <div class="py-12">
      <Container>
        <ContactGlassCard>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <contact-info-input text="09196043787" title="شماره تماس" />
            <contact-info-input text="xsamansafaeix@gmail.com" title="ایمیل" />
            <contact-info-input text="Saman-Safaei" title="گیت هاب" />
            <contact-info-input text="samansafaei_ir" title="تلگرام" />
            <contact-info-input text="hallowed_programmer" title="اینستاگرام" />
            <contact-info-input text="09196043787" title="واتساپ" />
          </div>
        </ContactGlassCard>
      </Container>
    </div>
    <contact-parallax-card />
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  head: {
    title: 'تماس با من',
  },
};
</script>
