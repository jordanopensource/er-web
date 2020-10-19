<template>
    <div class="bg-josa-blue-veryDark w-full">
        <div class="container text-white w-full text-center pt-8 pb-20">
            <div class="text-center">
                <img class="mx-auto mb-12" src="~/assets/images/hero-illustration.svg" alt="hero-illustration">
            </div>
            <h1>{{ title }}</h1>
            <p class="font-light text-white leading-7 md:leading-9 pb-12 mx-auto sm:px-32 md:px-40 lg:px-56 xl:px-64">{{ subtitle }}</p>
            <a href="#get-help" class="button button-light">{{ buttonText }}</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'نحن هنا لمساعدتك',
                subtitle: 'نحن مجموعة من المختصين نوفّر المساعدات التقنية ونقدّم العديد من الخدمات والموارد لكي تحصل على أعلى مستويات الأمان الرقمي وتتغلّب على أي نوع من مشاكل السلامة الرقمية قد تتعرض إليها',
                buttonText: 'احصل على مساعدة الآن'
            }
        }
    }
</script>

<style scoped>
    .button {
        @apply border-0
    }
</style>
