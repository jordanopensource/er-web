<template>
    <div class="bg-josa-grey">
      
        <!--JOSA team-->
        <div id="service" class="container py-24 flex justify-between flex-wrap flex-col md:flex-no-wrap md:flex-row-reverse">
            <div class="px-8 md:pl-0 md:pr-12 md:w-1/2 flex">
                <img class="bot" src="~/assets/images/group-5.svg" alt="bot" />
            </div>
            <div class="mt-12 md:mt-0 md:w-1/2">
                <h2>{{ team.title }}</h2>
                <p>{{ team.description}}</p>
                <a href="#get-help" class="button button-light mt-8">{{team.button }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            team:{
            title:'فريق جوسا للأمن الرقمي',
            description:'فريق تقني غير ربحي وغير حكومي يتخصّص بالتدخل السريع في مشكلات السلامة الرقمية وتقديم المساعدة التقنية والتصدي للهجمات الإلكترونية، هدفنا هو التوعية حول أهم الممارسات الآمنة للمعلومات ومساعدتك في بناء محيط رقمي آمن، وإذا كنت بصدد التعرض لأي مشكلة فنحن هنا للتدخل الفوري والمساعدة السريعة.',
            button:'انقر الى موقنا الرئيسي',

            },
            }
        }
    }
</script>

<style scoped>
    .check {
        display: inline !important;
        margin: 0 -29px 0 8px;
    }
</style>
