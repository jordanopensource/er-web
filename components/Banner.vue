<template>
    <div class="bg-josa-blue-veryDark w-full h-64 .m-0">
        <div class="container text-white w-full text-center pt-8 pb-20 .m-0">
            <div class="text-center">
            <font-awesome-icon @click="copy" class="copy-icon mx-auto w-40 " :icon="['fas', 'bullhorn']" />

  <!--              <img class="mx-auto mb-12" src="~/assets/images/hero-illustration.svg" alt="hero-illustration">-->
            </div>
            <h1>{{ title }}</h1>
            <p class="font-light text-gray-500 text-xs leading-7 md:leading-9 pb-12 mx-auto sm:px-32 md:px-40 lg:px-56 xl:px-64 m-0">{{ subtitle }}</p>


        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'اطلب المساعدة الان',
                subtitle: 'نحن مجموعة من المختصين نوفّر المساعدات التقنية ونقدّم العديد من الخدمات والموارد لكي تحصل على أعلى مستويات الأمان الرقمي وتتغلّب على أي نوع من مشاكل السلامة الرقمية قد تتعرض إليها',
                buttonText: 'احصل على مساعدة الآن',

            }
        },

        computed: {
            iconClasses() {
                return ['fas', this.iconName]
            }
        },
    }
</script>
