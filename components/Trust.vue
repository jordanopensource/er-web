<template>
  <div class="bg-white p-10">
  <div class="container my-10">
    <h1>{{ title }}</h1>

    <div class="w-auto inline-block mt-0">

    <div class="grid grid-cols-3 gap-4 justify-items-stretch h-auto mt-0">
    <card1 :name="card1.name" :arabicName="card1.arabicName"
      v-once class=" text-center bg-white  inline-block flex justify-center items-center m-0"/>
    <card2 :name="card2.name" :arabicName="card2.arabicName"
      v-once class=" text-center bg-white  inline-block flex justify-center items-center m-0"/>
    <card3 :name="card3.name" :arabicName="card3.arabicName"
      v-once class=" text-center bg-white  inline-block flex justify-center items-center m-0"/>
    <card4 :name="card4.name" :arabicName="card4.arabicName"
      v-once class=" text-center bg-white  inline-block flex justify-center items-center m-0"/>
    <card5 :name="card5.name" :arabicName="card5.arabicName"
      v-once class=" text-center bg-white  inline-block flex justify-center items-center m-0"/>
    <card6 :name="card6.name" :arabicName="card6.arabicName"
      v-once class=" text-center bg-white  inline-block flex justify-center items-center m-0"/>
     </div>
  </div>

</div>
    </div>
</template>

<script>
    import card1 from '~/components/trust-cards/card1';
    import card2 from '~/components/trust-cards/card2';
    import card3 from '~/components/trust-cards/card3';
    import card4 from '~/components/trust-cards/card4';
    import card5 from '~/components/trust-cards/card5';
    import card6 from '~/components/trust-cards/card6';

    export default {
        components: {
            card1,
            card2,
            card3,
            card4,
            card5,
            card6,

        },
        data() {
            return {
                title: 'لماذا نحن أهلٌ للثقة؟ ',
                card1: {
                    name: "1",
                    arabicName: "جهة رسمية مسجلة",
                },

                card2: {
                    name: "2",
                    arabicName: "شركاءٌ معتمدون",
                },

                card3: {
                    name: "3",
                    arabicName: "فريق تقني مختص",
                },

                card4: {
                    name: "4",
                    arabicName: "استجابة سريعة",
                },

                card5: {
                    name: "5",
                    arabicName: "خدمة سرية",
                },

                card6: {
                    name: "6",
                    arabicName: "خدمة مجانية",
                },
            }
        }
    }
</script>
