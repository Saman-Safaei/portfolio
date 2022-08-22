<template>
  <div>
    <h3 class="text-center text-3xl font-bold mb-12">مهارت های من</h3>
    <div
      class="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
      dir="rtl">
      <index-knowledge-item
        img-url="/logo/html.svg"
        img-alt="html logo"
        img-class="p-2"
        :hover-classes="['group-hover:text-orange-600']">
        <template v-slot:title>HTML</template>
        <template v-slot:text>
          تسلط به ساخت اسکلت صفحات وب با HTML و همینطور آشنا به تگ های سمانتیک.
        </template>
      </index-knowledge-item>

      <index-knowledge-item
        img-url="/logo/css.svg"
        img-alt="css logo"
        img-class="p-2"
        :hover-classes="['group-hover:text-cyan-600']">
        <template v-slot:title>CSS</template>
        <template v-slot:text>
          تسلط به اصول MobileFirst و همینطور ساخت صفحات رسپانسیو. تسلط کامل به
          FlexBox و همینطور تسلط نسبی به Grid.
        </template>
      </index-knowledge-item>

      <index-knowledge-item
        img-url="/logo/javascript.svg"
        img-alt="js logo"
        img-class="p-2"
        :hover-classes="['group-hover:text-amber-500']">
        <template v-slot:title>Javascript</template>
        <template v-slot:text>
          تسلط به JS ES6 و همینطور مباحث OOP. مسلط به ساخت و استفاده از Promise
          ها و همینطور async و await. استفاده از Operator های به روز جاوا
          اسکریپت مثل Nullish Operator و Spread and Rest Operator.
        </template>
      </index-knowledge-item>

      <index-knowledge-item
        img-url="/logo/vue.svg"
        img-alt="vue logo"
        img-class="p-2"
        :hover-classes="['group-hover:text-teal-500']">
        <template v-slot:title>Vue</template>
        <template v-slot:text>
          استفاده از SFC و Props برای ساخت کامپوننت های Reusable. استفاده از
          Directive های Vue و همینطور ساخت Directive های کاستوم. موارد استفاده
          از LifecycleHooks. تسلط به OptionsApi و CompositionAPI. اعتبار سنجی
          فرم ها با استفاده از VeeValidate. ساخت Guard در VueRouter.
        </template>
      </index-knowledge-item>

      <index-knowledge-item
        img-url="/logo/archlinux.svg"
        img-alt="linux logo"
        img-class="p-2"
        :hover-classes="['group-hover:text-cyan-500']">
        <template v-slot:title>Linux</template>
        <template v-slot:text>
          آشنایی با دستورات اولیه کار با لینوکس و همینطور آشنایی با ترمینال
          لینوکس و مدیریت پکیج ها.
        </template>
      </index-knowledge-item>

      <index-knowledge-item
        img-url="/logo/vitejs.svg"
        img-alt="vite logo"
        img-class="p-2"
        :hover-classes="['group-hover:text-fuchsia-600']">
        <template v-slot:title>Vite</template>
        <template v-slot:text>
          ایجاد پروژه های خام و همینطور پروژه های Vue با استفاده از این
          AssetBundler. کانفیگ کردن و استفاده از Environment Variables در Vite.
          نصب پلاگین های Vite و همینطور نصب پلاگین LegacySupport برای پشتیبانی
          مرورگر های قدیمی.
        </template>
      </index-knowledge-item>

      <index-knowledge-item
        img-url="/logo/tailwind.svg"
        img-alt="tailwind logo"
        img-class="p-5"
        :hover-classes="['group-hover:text-cyan-500']">
        <template v-slot:title>Tailwindcss</template>
        <template v-slot:text>
          استفاده از tailwindcss برای ساخت کامپوننت های کاستوم و همینطور ساخت تم
          دارک و لایت برای سایت ها. تسلط به استفاده از Arbitrary values در
          tailwindcss.
        </template>
      </index-knowledge-item>

      <index-knowledge-item
        img-url="/logo/nuxt.svg"
        img-alt="nuxt logo"
        :hover-classes="['group-hover:text-green-400']">
        <template v-slot:title>Nuxt</template>
        <template v-slot:text>
          آشنا به مباحث SSR و SSG. کانفیگ ناکست و همینطور axios. آشنا به مبحث
          prefetch لینک ها در Nuxt. آشنا به نحوه کار کرد FileBased Router و ساخت
          Layout ها در ناکست.
        </template>
      </index-knowledge-item>

      <index-knowledge-item
        img-url="/logo/git.svg"
        img-alt="git logo"
        img-class="p-4"
        :hover-classes="['group-hover:text-red-500']">
        <template v-slot:title>Git</template>
        <template v-slot:text>
          ساخت و کلون کردن یک رپوزیتوری. استیج کردن تغییرات و کامیت کردن آنها با
          پیام مناسب. آشنا با استراتژی merge و rebase.
        </template>
      </index-knowledge-item>

      <index-knowledge-item
        img-url="/logo/vuetify.svg"
        img-alt="vuetify logo"
        img-class="p-2"
        :hover-classes="['group-hover:text-blue-500']">
        <template v-slot:title>Vuetify</template>
        <template v-slot:text>
          نصب و استفاده Vuetify در پروژه های Nuxt. کانفیگ کردن Vuetify برای تم
          دارک و لایت و همینطور RTL در Vuetify. ساخت Layout های ساده. کاستوم
          کردن تم دیفالت Vuetify.
        </template>
      </index-knowledge-item>
    </div>
  </div>
</template>
