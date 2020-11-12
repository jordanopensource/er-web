<template>
  <div class="bg-white p-10">
    <div class="container my-10">
      <h1 class="text-center">{{ title }}</h1>
      <div class="w-auto inline-block mt-0">
        <div class="my-10 grid grid-cols-2 lg:grid-cols-3 gap-8">
          <trustCard v-for="(card,index) in cards" :title="card.title" :description="card.description" :image="card.image" :key="index"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import trustCard from '~/components/TrustCard';
  export default {
    components: {
      trustCard
    },
    data() {
      return {
        title: 'لماذا نحن أهلٌ للثقة؟ ',
        cards: [{
            title: 'جهة رسمية مسجلة',
            description: 'مسجلون كمنظمة غير ربحية لدى وزارة الاقتصاد الرقمي والريادة',
            image: '/group-10.svg'
          },
          {
            title: 'شركاءٌ معتمدون',
            description: 'منها منظمة RARENET الدولية للاستجابة الرقمية ومنظمة AccessNow',
            image: "/group-9.svg"
          },
          {
            title: 'فريق تقني مختص',
            description: 'فريق متعدد الاختصاصات ومؤهل في أمهر طرق للمساعدة الرقمية يُقدّم توصيات مختصة',
            image: "/group-8.svg"
          },
          {
            title: 'استجابة سريعة',
            description: 'رد سريع للمشاكل الرقمية خلال 24 ساعة من 9 صباحاً وحتى 9 مساءً',
            image: "/group-11.svg"
          },
          {
            title: 'خدمة سرية',
            description: 'لن يُفْصَحَ عن أي معلومة تُقدّمها عبر المنصة لإيماننا أن أهم مبادئ الأمن الرقمي هي السرية والخصوصية',
            image: "/group-12.svg"
          },
          {
            title: 'خدمة مجانية',
            description: 'نحن منظمة غير ربحية ولن نطلب أي مبلغ مادي لقاء الخدمة المقدمة',
            image: "/group-10.svg"
          }
        ]
      }
    }
  }

</script>
