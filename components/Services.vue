<template>
    <div class="bg-josa-grey">
        <!-- Digital Emergency -->
        <div id="response" class="container pt-24 flex flex-wrap md:flex-no-wrap justify-between">
            <div class="px-8 md:pr-0 md:pl-12 md:w-1/2 flex">
                <img class="bot" src="~/assets/images/Bot1.svg" alt="bot" />
            </div>
            <div class="mt-12 md:mt-0 md:w-1/2">
                <h5 class="blue-line">{{ response.smallTitle }}</h5>
                <h2>{{ response.bigTitle }}</h2>
                <p>{{ response.description }}</p>
                <a href="#get-help" class="button button-light mt-8">{{ button }}</a>
            </div>
        </div>
        <!-- Technical assistance -->
        <div id="service" class="container py-24 flex justify-between flex-wrap flex-col md:flex-no-wrap md:flex-row-reverse">
            <div class="px-8 md:pl-0 md:pr-12 md:w-1/2 flex">
                <img class="bot" src="~/assets/images/Bot2.svg" alt="bot" />
            </div>
            <div class="mt-12 md:mt-0 md:w-1/2">
                <h5 class="blue-line">{{ services.smallTitle }}</h5>
                <h2>{{ services.bigTitle }}</h2>
                <div v-for="(desc,i) in services.description" :key="i" class="mb-5">
                    <img class="check" src="/check.svg" />
                    <p class="inline">{{ desc }}</p>
                </div>

                <a href="#get-help" class="button button-light mt-8">{{ button }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                response: {
                    smallTitle: 'طريقة التعامل',
                    bigTitle: 'طوارئ رقمية',
                    description: 'أرسل لنا رسالة تتضمن استفسارًا أو طلبًا يتعلق بالأمن الرقمي الذي تواجهه، وعند استلامه سيتواصل أحد المختصين بالسلامة الرقمية معك ليقوم بدراسة الطلب من خلال طرح عدة أسئلة لفهم حيثيات المشكلة. سيقوم الفريق بالاستجابة بأسرع وقت ممكن'
                },
                services: {
                    smallTitle: 'خدماتنا',
                    bigTitle: 'مساعدة تقنية',
                    description: [
                        'الاستجابة السريعة لحوادث الأمن الرقمي، مثل تهكير الحسابات',
                        'توصيات مخصصة بهدف إيجاد حلول للمشاكل المتعلقة بالأمن الرقمي، مثل برامج التواصل التي تحترم خصوصية الأفراد',
                        'التعريف بأفضل ممارسات السلامة الرقمية، مثل تفعيل خاصية المصادقة في خطوتين',
                        'المساعدة في تبني تقنيات الوقاية ضد الهجمات الرقمية، مثل استخدام برامج آمنة ومن ومصادر موثوقة'
                    ]
                },
                button: 'أرسل لنا'
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
