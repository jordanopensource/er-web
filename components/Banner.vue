<template>
    <div class="bg-josa-blue-veryDark w-full h-64 .m-0">
        <div class="container text-white w-full text-center pt-8 pb-20 .m-0">
            <div class="text-center">

            <img class="mx-auto mb-12" src="~/assets/images/artboard-1-copy.svg" alt="bullhorn">
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
                subtitle:'خدمة التدخل السريع والسري لحل المشكلات الرقمية؛ فإذا واجهتك أي مشكلة متعلقة بالأمن الرقمي لا تتردد بالتواصل معنا. نحلّ المشكلات القائمة ونُقدِّمُ توعية حول أهم الممارسات الآمنة للمعلومات ونساعدك في بناء محيط عمل آمن للمستقبل.',
                buttonText: 'احصل على مساعدة الآن',

            }
        },
      
    }
</script>
