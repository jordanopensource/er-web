<template>
    <div id="get-help" class="container text-center py-24">
        <h5 class="blue-line">{{ mainTitle }}</h5>

        <div id="josa-platforms" class="mb-32 mt-2">
            <h2>{{ josaPlatform.title }}</h2>
            <p class="mb-16 mx-auto sm:px-32 md:px-40 lg:px-56 xl:px-64">{{ josaPlatform.description }}</p>
            <PhoneCard :name="phoneCard.name" :arabicName="phoneCard.arabicName"
                :iconName="phoneCard.iconName" :phone="phoneCard.phone" v-once />
            <FormCard :name="formCard.name" :arabicName="formCard.arabicName"
                :iconName="formCard.iconName" v-once />
            <EmailCard :name="emailCard.name" :arabicName="emailCard.arabicName"
                :iconName="emailCard.iconName" :email="emailCard.email" v-once />
            <ChatCard :name="chatCard.name" :arabicName="chatCard.arabicName"
                :iconName="chatCard.iconName" v-once />
        </div>

        <div id="josa-socialmedia">
            <h2>{{ socialMedia.title }}</h2>
            <p class="mb-16 mx-auto sm:px-32 md:px-40 lg:px-56 xl:px-64">{{ socialMedia.description }}</p>
            <SocialMediaCard v-for="card in socialMediaCards" :key="card.name" :name="card.name"
                :arabicName="card.arabicName" :link="card.link" :anonymous="card.anonymous"
                :encryption="card.encryption" :iconName="card.iconName" :color="card.color" />
        </div>

    </div>
</template>

<script>
    import SocialMediaCard from '~/components/contact-cards/SocialMediaCard';
    import ChatCard from '~/components/contact-cards/ChatCard';
    import FormCard from '~/components/contact-cards/FormCard';
    import EmailCard from '~/components/contact-cards/EmailCard';
    import PhoneCard from '~/components/contact-cards/PhoneCard';

    export default {
        components: {
            SocialMediaCard,
            ChatCard,
            FormCard,
            EmailCard,
            PhoneCard
        },
        data() {
            return {
                mainTitle: 'احصل على مساعدة الآن',
                josaPlatform: {
                    title: 'عبر منصات خاصة',
                    description: 'عندما تتواصل معنا عبر منصاتنا الخاصة سيبقى اسمك مجهولًا إلا إذا تم تزويدنا به. ولكن يمكن معرفة هوية المرسل عبر البريد الإلكتروني عن طريق البريد نفسه. بالإضافة إلى ذلك، يوفّر بريدنا الخاص خاصية التشفير'
                },
                socialMedia: {
                    title: 'عبر التواصل الإجتماعي',
                    description: 'عند التواصل معنا عبر منصات التواصل الاجتماعي، يمكن معرفة هوية المرسل عن طريق اسم الصفحة المرسل منها، ولا نضمن وجود خاصية تشفير المحتوى من كلا الطرفين'
                },
                chatCard: {
                    name: "chat",
                    arabicName: "المحادثة الفورية",
                    iconName: "comment-dots"
                },
                formCard: {
                    name: "helpdesk",
                    arabicName: "مكتب المساعدة",
                    iconName: "laptop",
                },
                emailCard: {
                    name: "email",
                    arabicName: "البريد الالكتروني",
                    iconName: "envelope",
                    email: "er@jordanopensource.org"
                },
                phoneCard: {
                    name: "phone",
                    arabicName: "الهاتف الخلوي",
                    iconName: "phone-alt",
                    phone: "07 7070 0099"
                },
                socialMediaCards: [{
                        name: "twitter",
                        arabicName: "تويتر",
                        link: "https://twitter.com/jo_osa",
                        anonymous: false,
                        encryption: true,
                        iconName: "twitter",
                        color: '#08a0e9'
                    },
                    {
                        name: "messenger",
                        arabicName: "مسنجر",
                        link: "https://www.messenger.com/t/jordanopensource",
                        anonymous: false,
                        encryption: true,
                        iconName: "facebook-messenger",
                        color: '#0078ff'
                    },
                    {
                        name: "instagram",
                        arabicName: "انستجرام",
                        link: "https://www.instagram.com/jordanopensource/",
                        anonymous: false,
                        encryption: false,
                        iconName: "instagram",
                        color: '#3f729b'
                    }
                ],
            }
        }
    }
</script>

<style scoped>
    .blue-line::after {
        width: 150px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
