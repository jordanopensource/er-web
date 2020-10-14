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
                title: 'خدمة مجانية',
                description:'نحن منظمة غير ربحية ولن نطلب أي مبلغ مادي لقاء الخدمة المقدمة',

            }
        },
    }
</script>

<style scoped>
    p {
        @apply font-theMixArab self-center;
    }

</style>
