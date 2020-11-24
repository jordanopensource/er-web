<template>
  <div class="bg-white">
    <div class="container mt-20">
      <h1>{{ title }}</h1>
      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-48">
        <trustCard class="mb-16" v-for="(card,index) in cards" :title="card.title" :description="card.description"
          :image="card.image" :key="index" />
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
            title: 'خدمة سرية',
            description: 'لن يُفْصَحَ عن أي معلومة تُقدّمها عبر المنصة لإيماننا أن أهم مبادئ الأمن الرقمي هي السرية والخصوصية',
            image: "/group-12.svg"
          },
          {
            title: 'خدمة مجانية',
            description: 'نحن منظمة غير ربحية ولن نطلب أي مبلغ مادي مقابل هذه الخدمة المقدمة',
            image: "/group-10.svg"
          },
          {
            title: 'استجابة سريعة',
            description: 'ساعات العمل لدينا من ٩ صباحًا إلى ٦ مساءً بتوقيت الأردن',
            image: "/group-11.svg"
          },
          {
            title: 'فريق تقني مختص',
            description: 'فريق متعدد الاختصاصات ومؤهل في أمهر طرق للمساعدة الرقمية يُقدّم توصيات مختصة',
            image: "/group-8.svg"
          }
        ]
      }
    }
  }

</script>
