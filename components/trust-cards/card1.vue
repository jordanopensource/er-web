<template>
<div class="trust-cards container">
    <img class="bot" src="~/assets/images/group-10.svg" alt="bot" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
</div>
</template>

<script>
    export default {

        props: {
            name: {
                type: String,
                required: true
            },
            arabicName: {
                type: String,
                required: true
            },
        },


        data() {
            return {
                title: 'جهة رسمية مسجلة',
                description:'مسجلون كمنظمة غير ربحية لدى وزارة الاقتصاد الرقمي والريادة',

            }
        },

    }
</script>

<style scoped>
    p {
        @apply font-theMixArab self-center;
    }
</style>
