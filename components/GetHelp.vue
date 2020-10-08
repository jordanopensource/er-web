<template>
    <div id="get-help" class=" text-center py-24 bg-josa-blue-veryDark w-full mt-0">

        <div id="josa-platforms" class=" container mt-0">
<!--        <h2>{{ josaPlatform.title }}</h2>
            <p class="mb-6 mx-auto sm:px-32 md:px-40 lg:px-56 xl:px-64 text-gray-600 text-xs">{{ josaPlatform.description }}</p>
-->
            <div class="w-auto inline-block mt-0">
            <div class="grid grid-cols-3 gap-4 justify-items-stretch h-auto mt-0">
            <ChatCard :name="chatCard.name" :arabicName="chatCard.arabicName"
                :iconName="chatCard.iconName" v-once class=" text-center bg-white  inline-block flex justify-center items-center m-0"/>
            <PhoneCard :name="phoneCard.name" :arabicName="phoneCard.arabicName"
                :iconName="phoneCard.iconName" :phone="phoneCard.phone" v-once class=" text-center bg-white flex justify-center items-center m-0" />
            <EmailCard :name="emailCard.name" :arabicName="emailCard.arabicName"
                :iconName="emailCard.iconName" :email="emailCard.email" v-once class=" text-center bg-white inline-block flex justify-center items-center m-0" />
                  </div>
            </div>


        </div>


        <p class="font-light text-gray-500 text-xs leading-7 md:leading-9 mx-auto sm:px-32 md:px-40 lg:px-56 xl:px-64 ">{{ note1 }}</p>
        <p class="font-light text-gray-500 text-xs leading-7 md:leading-9 mx-auto sm:px-32 md:px-40 lg:px-56 xl:px-64">{{ note2 }}</p>

    </div>
</template>

<script>
    import ChatCard from '~/components/contact-cards/ChatCard';
    import EmailCard from '~/components/contact-cards/EmailCard';
    import PhoneCard from '~/components/contact-cards/PhoneCard';

    export default {
        components: {
            ChatCard,
            EmailCard,
            PhoneCard
        },
        data() {
            return {
                note1: 'اذا كنت مترددا يرجي مكالمتنا*',
                note2: 'اذا كنت مترددا يرجي مكالمتنا**',
                mainTitle: 'احصل على مساعدة الآن',
                josaPlatform: {
                    title: 'عبر منصات خاصة',
                    description: 'عندما تتواصل معنا عبر منصاتنا الخاصة سيبقى اسمك مجهولًا إلا إذا تم تزويدنا به. ولكن يمكن معرفة هوية المرسل عبر البريد الإلكتروني عن طريق البريد نفسه. بالإضافة إلى ذلك، يوفّر بريدنا الخاص خاصية التشفير'
                },

                chatCard: {
                    name: "chat",
                    arabicName: "المحادثة الفورية",
                    iconName: "comment-dots"
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
